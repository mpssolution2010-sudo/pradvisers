import type { Config, Context } from '@netlify/functions'
import { getStore, listStores } from '@netlify/blobs'

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
  'documentos-clientes-homepage-2026',
  { consistency: 'strong' },
)

const storesDisponibles = await listStores()

const claveBuscada = `${numeroCaso}/${tipoDocumento}`

const resultado = await store.list({
  prefix: `${numeroCaso}/`,
})

return Response.json({
  claveBuscada,
  storesDisponibles: storesDisponibles.stores,
  clavesEncontradas: resultado.blobs.map((blob) => blob.key),
})
}

export const config: Config = {
  path: '/api/estado-documento',
}
