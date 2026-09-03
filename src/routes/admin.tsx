import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a646]">
            Property Advisers Real Estate
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#071a32]">
            Panel Administrativo
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Administración interna de casos y documentos
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
    Expedientes
  </p>

  <h2 className="mt-2 text-2xl font-black text-[#071a32]">
    Todos los casos
  </h2>

  <p className="mt-2 text-sm text-gray-600">
    Desde aquí podrás administrar los expedientes de tus clientes.
  </p>

  <div className="mt-6 rounded-2xl border border-gray-200 p-5">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.15em] text-[#c9a646]">
          PA-2026-0001
        </p>

        <h3 className="mt-1 text-xl font-black text-[#071a32]">
          María Rodríguez
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          Compra de propiedad · Urb. Jardines del Caribe
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Carolina, Puerto Rico
        </p>
      </div>

      <button
        type="button"
        className="rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white"
      >
        ABRIR EXPEDIENTE
      </button>
    </div>
  </div>
</div>
  )
}
