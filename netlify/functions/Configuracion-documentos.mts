import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

function obtenerStore() {
  const esProduccion = process.env.CONTEXT === 'production'

  return getStore(
    esProduccion
      ? 'configuracion-documentos-produccion'
      : 'configuracion-documentos-homepage-2026',
    { consistency: 'strong' },
  )
}

export default async (req: Request, _context: Context) => {
  const store = obtenerStore()
  const url = new URL(req.url)

  if (req.method === 'GET') {
    const numeroCaso = url.searchParams.get('numero-caso')

    if (!numeroCaso) {
      return Response.json(
        { error: 'Falta el número de caso' },
        { status: 400 },
      )
    }

    const configuracion = await store.get(numeroCaso, {
      type: 'json',
    })

    return Response.json({
      numeroCaso,
      documentosRequeridos: configuracion ?? null,
    })
  }

  if (req.method === 'POST') {
    const body = await req.json()

    const numeroCaso = body?.numeroCaso
    const documentosRequeridos = body?.documentosRequeridos

    if (!numeroCaso || !documentosRequeridos) {
      return Response.json(
        { error: 'Faltan datos del expediente' },
        { status: 400 },
      )
    }

    await store.setJSON(numeroCaso, documentosRequeridos)

    return Response.json({
      guardado: true,
      numeroCaso,
      documentosRequeridos,
    })
  }

  return Response.json(
    { error: 'Método no permitido' },
    { status: 405 },
  )
}

export const config: Config = {
  path: '/api/configuracion-documentos',
}
