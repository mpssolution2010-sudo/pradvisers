import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const store = getStore('archivos-expedientes-property-advisers', {
    consistency: 'strong',
  })

  if (req.method === 'POST') {
    const formData = await req.formData()

    const numeroCaso = formData.get('numero-caso')
    const archivo = formData.get('archivo')

    if (typeof numeroCaso !== 'string' || !numeroCaso) {
      return Response.json(
        { error: 'Falta el número de caso.' },
        { status: 400 },
      )
    }

    if (!(archivo instanceof File)) {
      return Response.json(
        { error: 'Falta el archivo.' },
        { status: 400 },
      )
    }

    const id = crypto.randomUUID()
    const claveArchivo = `${numeroCaso}/${id}/${archivo.name}`
    const claveInfo = `${numeroCaso}/${id}/info`

    const contenido = await archivo.arrayBuffer()

    await store.set(claveArchivo, contenido)

    await store.setJSON(claveInfo, {
      id,
      numeroCaso,
      nombre: archivo.name,
      tipo: archivo.type || 'application/octet-stream',
      tamano: archivo.size,
      claveArchivo,
      fecha: new Date().toISOString(),
    })

    return Response.json({
      guardado: true,
      id,
      nombre: archivo.name,
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

    const listado = await store.list({
      prefix: `${numeroCaso}/`,
    })

    const clavesInfo = listado.blobs
      .map((blob) => blob.key)
      .filter((key) => key.endsWith('/info'))

    const archivos = []

    for (const clave of clavesInfo) {
      const info = await store.get(clave, { type: 'json' })

      if (info) {
        archivos.push(info)
      }
    }

    archivos.sort((a: any, b: any) =>
      String(b.fecha).localeCompare(String(a.fecha)),
    )

    return Response.json({
      archivos,
    })
  }

  return new Response('Método no permitido', {
    status: 405,
  })
}

export const config: Config = {
  path: '/api/archivo-expediente',
}
