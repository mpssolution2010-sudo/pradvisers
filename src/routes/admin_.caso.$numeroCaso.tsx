
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/admin/caso/$numeroCaso')({
  component: AdminCasoPage,
})

function AdminCasoPage() {
  const { numeroCaso } = Route.useParams()

  const [documentosRequeridos, setDocumentosRequeridos] = useState<
  Record<string, boolean>
>({
  'Contrato de opción': true,
  Identificación: true,
  'Estados bancarios': true,
  'Carta de preaprobación': true,
  'Carta de capitulaciones': false,
  'Estudio de título': false,
  'Evidencia de ingresos': false,
  'Declaratoria de herederos': false,
  'Caudal relicto': false,
})

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
          <div className="mt-6 space-y-3">
  {[
    'Contrato de opción',
    'Identificación',
    'Estados bancarios',
    'Carta de preaprobación',
    'Carta de capitulaciones',
    'Estudio de título',
    'Evidencia de ingresos',
    'Declaratoria de herederos',
    'Caudal relicto',
  ].map((documento) => (
    <div
      key={documento}
      className="flex items-center justify-between rounded-2xl border border-gray-200 p-4"
    >
      <span className="font-bold text-[#071a32]">
        {documento}
      </span>

     <div className="flex items-center gap-2">
  <button
    type="button"
    onClick={() =>
      setDocumentosRequeridos((actual) => ({
        ...actual,
        [documento]: true,
      }))
    }
    className={
      documentosRequeridos[documento]
        ? 'rounded-lg bg-green-600 px-3 py-2 text-xs font-black text-white'
        : 'rounded-lg border border-gray-300 px-3 py-2 text-xs font-black text-gray-500'
    }
  >
    SÍ
  </button>

  <button
    type="button"
    onClick={() =>
      setDocumentosRequeridos((actual) => ({
        ...actual,
        [documento]: false,
      }))
    }
    className={
      !documentosRequeridos[documento]
        ? 'rounded-lg bg-gray-700 px-3 py-2 text-xs font-black text-white'
        : 'rounded-lg border border-gray-300 px-3 py-2 text-xs font-black text-gray-500'
    }
  >
    NO
  </button>
</div>
    </div>
  ))}
</div>        </section>
      </main>
    </div>
  )
}
