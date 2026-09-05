import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (_req: Request, _context: Context) => {
  const store = getStore('casos-property-advisers', {
    consistency: 'strong',
  })

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
