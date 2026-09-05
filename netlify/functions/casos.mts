import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const store = getStore('casos-property-advisers', {
    consistency: 'strong',
  })

  if (req.method === 'POST') {
    const body = await req.json()
    const casos = body.casos

    if (!Array.isArray(casos)) {
      return Response.json(
        { error: 'La lista de casos no es válida.' },
        { status: 400 },
      )
    }

    await store.setJSON('lista-casos', casos)

    return Response.json({
      guardado: true,
      total: casos.length,
    })
  }

  const casos = await store.get('lista-casos', {
    type: 'json',
  })

  return Response.json({
    casos: casos ?? [],
  })
}

export const config: Config = {
  path: '/api/casos',
}
