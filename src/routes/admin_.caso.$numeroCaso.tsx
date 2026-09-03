
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/caso/$numeroCaso')({
  component: AdminCasoPage,
})

function AdminCasoPage() {
  const { numeroCaso } = Route.useParams()

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a646]">
            Property Advisers Real Estate
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#071a32]">
            Expediente {numeroCaso}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Administración interna del caso
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
              Cliente
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#071a32]">
              María Rodríguez
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Compra de propiedad · Urb. Jardines del Caribe
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Carolina, Puerto Rico
            </p>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
              Estado
            </p>

            <h2 className="mt-2 text-xl font-black text-[#071a32]">
              Caso activo
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Progreso actual: 65%
            </p>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
            Documentos
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#071a32]">
            Configuración del expediente
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Aquí podrás definir qué documentos necesita este cliente.
          </p>
        </section>
      </main>
    </div>
  )
}
