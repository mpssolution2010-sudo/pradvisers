import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const url = new URL(req.url)

  const numeroCaso = url.searchParams.get('numero-caso')
  const tipoDocumento = url.searchParams.get('tipo-documentos')

  if (!numeroCaso || !tipoDocumento) {
    return Response.json(
      { error: 'Falta número de caso o tipo de documento' },
      { status: 400 },
    )
  }

  const isProduction = Netlify.context?.deploy.context === 'production'

  const store = getStore(
  isProduction
    ? 'documentos-clientes'
    : 'documentos-clientes-homepage-2026' ,
{ consistency: 'strong' },
)

  const documento = await store.get(
    `${numeroCaso}/${tipoDocumento}`,  
  )

  return Response.json({
    recibido: Boolean(documento),
    documento: documento ?? null,
  })
}

export const config: Config = {
  path: '/api/estado-documento',
}
