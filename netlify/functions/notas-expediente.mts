import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const store = getStore('notas-expedientes-property-advisers', {
    consistency: 'strong',
  })

  if (req.method === 'POST') {
    const body = await req.json()

    const numeroCaso = body.numeroCaso
    const texto = body.texto

    if (!numeroCaso || !texto?.trim()) {
      return Response.json(
        { error: 'Falta el número de caso o la nota.' },
        { status: 400 },
      )
    }

    const id = crypto.randomUUID()
    const fecha = new Date().toISOString()

    const nota = {
      id,
      numeroCaso,
      texto: texto.trim(),
      fecha,
    }

    await store.setJSON(`${numeroCaso}/${id}`, nota)

    return Response.json({
      guardado: true,
      nota,
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

    const notas = []

    for (const blob of listado.blobs) {
      const nota = await store.get(blob.key, {
        type: 'json',
      })

      if (nota) {
        notas.push(nota)
      }
    }

    notas.sort((a: any, b: any) =>
      String(b.fecha).localeCompare(String(a.fecha)),
    )

    return Response.json({
      notas,
    })
  }

  return new Response('Método no permitido', {
    status: 405,
  })
}

export const config: Config = {
  path: '/api/notas-expediente',
}
