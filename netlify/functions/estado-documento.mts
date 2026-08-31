import type { Config, Context } from '@netlify/functions'
import { getDeployStore, getStore } from '@netlify/blobs'

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

  const store = isProduction
    ? getStore('documentos-clientes', { consistency: 'strong' })
    : getDeployStore('documentos-clientes')

  const documento = await store.get(
    `${numeroCaso}/${tipoDocumento}`,
    { type: 'json' },
  )

  return Response.json({
    recibido: Boolean(documento),
    documento: documento ?? null,
  })
}

export const config: Config = {
  path: '/api/estado-documento',
}
