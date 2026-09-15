import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

type FotoGaleria = {
  id: string
  claveFoto: string
  contentType: string
  principal: boolean
}

export default async (req: Request, _context: Context) => {
  const esProduccion =
    Netlify.context?.deploy.context === 'production'

  const store = getStore(
    esProduccion
      ? 'fotos-propiedades-property-advisers'
      : 'fotos-propiedades-property-advisers-pruebas',
    { consistency: 'strong' },
  )

  const obtenerGaleria = async (numeroCaso: string) => {
    let galeria =
      (await store.get(`${numeroCaso}/galeria-info`, {
        type: 'json',
      })) as FotoGaleria[] | null

    if (!Array.isArray(galeria)) {
      galeria = []
    }

    // Compatibilidad con la foto principal que ya existía.
    if (galeria.length === 0) {
      const infoAnterior = await store.get(
        `${numeroCaso}/principal-info`,
        { type: 'json' },
      )

      if (infoAnterior?.claveFoto) {
        galeria.push({
          id: 'principal-original',
          claveFoto: infoAnterior.claveFoto,
          contentType: infoAnterior.contentType || 'image/jpeg',
          principal: true,
        })

        await store.setJSON(
          `${numeroCaso}/galeria-info`,
          galeria,
        )
      }
    }

    return galeria
  }

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

    const galeria = await obtenerGaleria(numeroCaso)

    if (galeria.length >= 30) {
      return Response.json(
        {
          error:
            'Este expediente ya tiene el máximo de 30 fotos.',
        },
        { status: 400 },
      )
    }

    const extension =
      foto.type === 'image/png'
        ? 'png'
        : foto.type === 'image/webp'
          ? 'webp'
          : 'jpg'

    const id =
      `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`

    const claveFoto =
      `${numeroCaso}/galeria/${id}.${extension}`

    const contenido = await foto.arrayBuffer()

    await store.set(claveFoto, contenido)

    const esPrimeraFoto = galeria.length === 0

    const nuevaFoto: FotoGaleria = {
      id,
      claveFoto,
      contentType: foto.type,
      principal: esPrimeraFoto,
    }

    galeria.push(nuevaFoto)

    await store.setJSON(
      `${numeroCaso}/galeria-info`,
      galeria,
    )

    if (esPrimeraFoto) {
      await store.setJSON(
        `${numeroCaso}/principal-info`,
        {
          claveFoto,
          contentType: foto.type,
        },
      )
    }

    return Response.json({
      guardado: true,
      numeroCaso,
      foto: {
        ...nuevaFoto,
        url:
          `/api/foto-propiedad?numero-caso=${encodeURIComponent(
            numeroCaso,
          )}&id=${encodeURIComponent(id)}`,
      },
      total: galeria.length,
      url:
        `/api/foto-propiedad?numero-caso=${encodeURIComponent(
          numeroCaso,
        )}`,
    })
  }

  if (req.method === 'PATCH') {
    const body = await req.json()

    const numeroCaso = body.numeroCaso
    const id = body.id

    if (!numeroCaso || !id) {
      return Response.json(
        { error: 'Falta el número de caso o la foto.' },
        { status: 400 },
      )
    }

    const galeria = await obtenerGaleria(numeroCaso)

    const fotoSeleccionada = galeria.find(
      (foto) => foto.id === id,
    )

    if (!fotoSeleccionada) {
      return Response.json(
        { error: 'No se encontró la foto seleccionada.' },
        { status: 404 },
      )
    }

    const galeriaActualizada = galeria.map((foto) => ({
      ...foto,
      principal: foto.id === id,
    }))

    await store.setJSON(
      `${numeroCaso}/galeria-info`,
      galeriaActualizada,
    )

    await store.setJSON(
      `${numeroCaso}/principal-info`,
      {
        claveFoto: fotoSeleccionada.claveFoto,
        contentType: fotoSeleccionada.contentType,
      },
    )

    return Response.json({
      actualizado: true,
      principal: id,
    })
  }

  if (req.method === 'DELETE') {
    const url = new URL(req.url)

    const numeroCaso =
      url.searchParams.get('numero-caso')

    const id = url.searchParams.get('id')

    if (!numeroCaso || !id) {
      return Response.json(
        { error: 'Falta el número de caso o la foto.' },
        { status: 400 },
      )
    }

    const galeria = await obtenerGaleria(numeroCaso)

    const fotoEliminar = galeria.find(
      (foto) => foto.id === id,
    )

    if (!fotoEliminar) {
      return Response.json(
        { error: 'No se encontró la foto.' },
        { status: 404 },
      )
    }

    await store.delete(fotoEliminar.claveFoto)

    const restantes = galeria.filter(
      (foto) => foto.id !== id,
    )

    if (
      fotoEliminar.principal &&
      restantes.length > 0
    ) {
      restantes[0].principal = true

      await store.setJSON(
        `${numeroCaso}/principal-info`,
        {
          claveFoto: restantes[0].claveFoto,
          contentType: restantes[0].contentType,
        },
      )
    }

    if (restantes.length === 0) {
      await store.delete(
        `${numeroCaso}/principal-info`,
      )
    }

    await store.setJSON(
      `${numeroCaso}/galeria-info`,
      restantes,
    )

    return Response.json({
      eliminado: true,
      total: restantes.length,
    })
  }

  if (req.method === 'GET') {
    const url = new URL(req.url)

    const numeroCaso =
      url.searchParams.get('numero-caso')

    const id = url.searchParams.get('id')
    const accion = url.searchParams.get('accion')

    if (!numeroCaso) {
      return Response.json(
        { error: 'Falta el número de caso.' },
        { status: 400 },
      )
    }

    const galeria = await obtenerGaleria(numeroCaso)

    if (accion === 'galeria') {
      return Response.json({
        numeroCaso,
        total: galeria.length,
        maximo: 30,
        fotos: galeria.map((foto) => ({
          id: foto.id,
          principal: foto.principal,
          url:
            `/api/foto-propiedad?numero-caso=${encodeURIComponent(
              numeroCaso,
            )}&id=${encodeURIComponent(foto.id)}`,
        })),
      })
    }

    let infoFoto:
      | {
          claveFoto: string
          contentType: string
        }
      | null = null

    if (id) {
      const fotoEncontrada = galeria.find(
        (foto) => foto.id === id,
      )

      if (!fotoEncontrada) {
        return Response.json(
          { error: 'No se encontró la foto.' },
          { status: 404 },
        )
      }

      infoFoto = {
        claveFoto: fotoEncontrada.claveFoto,
        contentType: fotoEncontrada.contentType,
      }
    } else {
      infoFoto = await store.get(
        `${numeroCaso}/principal-info`,
        { type: 'json' },
      )
    }

    if (!infoFoto) {
      return Response.json(
        { error: 'Este expediente no tiene foto.' },
        { status: 404 },
      )
    }

    const foto = await store.get(
      infoFoto.claveFoto,
      { type: 'arrayBuffer' },
    )

    if (!foto) {
      return Response.json(
        { error: 'No se encontró la foto.' },
        { status: 404 },
      )
    }

    return new Response(foto, {
      headers: {
        'Content-Type':
          infoFoto.contentType || 'image/jpeg',
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
