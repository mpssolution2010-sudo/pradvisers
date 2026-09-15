import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const esProduccion =
    Netlify.context?.deploy.context === 'production'

  const store = getStore(
    esProduccion
      ? 'fotos-propiedades-property-advisers'
      : 'fotos-propiedades-property-advisers-pruebas',
    { consistency: 'strong' },
  )

  if (req.method === 'POST') {
    const formData = await req.formData()

    const numeroCaso = formData.get('numero-caso')
    const foto = formData.get('foto')

    if (typeof numeroCaso !== 'string' || !numeroCaso) {
      return Response.json(
        { error: 'Falta el número de caso.' },
        { status: 400 },
      )
    }

    if (!(foto instanceof File)) {
      return Response.json(
        { error: 'Falta la foto de la propiedad.' },
        { status: 400 },
      )
    }

    if (!foto.type.startsWith('image/')) {
      return Response.json(
        { error: 'El archivo debe ser una imagen.' },
        { status: 400 },
      )
    }

    const extension =
      foto.type === 'image/png'
        ? 'png'
        : foto.type === 'image/webp'
          ? 'webp'
          : 'jpg'

    const claveFoto = `${numeroCaso}/principal.${extension}`
    const claveInfo = `${numeroCaso}/principal-info`

    const contenido = await foto.arrayBuffer()

    await store.set(claveFoto, contenido)

    await store.setJSON(claveInfo, {
      claveFoto,
      contentType: foto.type,
    })

    return Response.json({
      guardado: true,
      numeroCaso,
      url: `/api/foto-propiedad?numero-caso=${encodeURIComponent(numeroCaso)}`,
    })
  }

  if (req.method === 'GET') {
    const url = new URL(req.url)
    const numeroCaso = url.searchParams.get('numero-caso')

    if (!numeroCaso) {
      return Response.json(
        { error: 'Falta el número de caso.' },
        { status: 400 },
      )
    }

    const info = await store.get(
      `${numeroCaso}/principal-info`,
      { type: 'json' },
    )

    if (!info) {
      return Response.json(
        { error: 'Este expediente no tiene foto.' },
        { status: 404 },
      )
    }

    const foto = await store.get(info.claveFoto, {
      type: 'arrayBuffer',
    })

    if (!foto) {
      return Response.json(
        { error: 'No se encontró la foto.' },
        { status: 404 },
      )
    }

    return new Response(foto, {
      headers: {
        'Content-Type': info.contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }

  return new Response('Método no permitido', {
    status: 405,
  })
}

export const config: Config = {
  path: '/api/foto-propiedad',
}
