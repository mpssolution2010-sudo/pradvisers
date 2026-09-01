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

const store = getStore(
  'documentos-clientes-homegage-2026',
  { consistency: 'strong' },
)

const claveBuscada = `${numeroCaso}/${tipoDocumento}`

const documento = await store.get(claveBuscada, {
  type: 'json',
})

return Response.json({
  recibido: Boolean(documento),
  documento: documento ?? null,
})

export const config: Config = {
  path: '/api/estado-documento',
}
