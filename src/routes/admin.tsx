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
        </div>
      </main>
    </div>
  )
}
