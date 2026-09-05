import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [soloPendientes, setSoloPendientes] = useState(false)
  
const [casosCargados, setCasosCargados] = useState<any[]>([])
  useEffect(() => {
  const cargarCasos = async () => {
    try {
      const response = await fetch('/api/casos')

      if (!response.ok) return

      const data = await response.json()

      if (Array.isArray(data.casos)) {
        setCasosCargados(data.casos)
      }
    } catch (error) {
      console.error('Error cargando expedientes:', error)
    }
  }

  cargarCasos()
}, [])


const totalCasos = casosCargados.length

const casosActivos = casosCargados.filter(
  (caso) => caso.estado === 'Caso activo',
).length

const casosConPendientes = casosCargados.filter(
  (caso) => caso.pendientes > 0,
).length

const casosCompletados = casosCargados.filter(
  (caso) => caso.estado === 'Completado',
).length
  
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

<div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-gray-500">
      Total de casos
    </p>
    <p className="mt-1 text-2xl font-black text-[#071a32]">
      {totalCasos}
    </p>
  </div>

  <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-green-700">
      Casos activos
    </p>
    <p className="mt-1 text-2xl font-black text-green-700">
      {casosActivos}
    </p>
  </div>

  <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-red-600">
      Con pendientes
    </p>
    <p className="mt-1 text-2xl font-black text-red-600">
      {casosConPendientes}
    </p>
  </div>

  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-blue-700">
      Completados
    </p>
    <p className="mt-1 text-2xl font-black text-blue-700">
      {casosCompletados}
    </p>
  </div>
</div>
          
    <div className="mt-5">
  <input
    type="text"
    value={busqueda}
    onChange={(event) => setBusqueda(event.target.value)}
    placeholder="Buscar por cliente o número de caso"
    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
  />
</div> 
  
          <div className="mt-3">
  <select
    value={filtroEstado}
   
    onChange={(event) => setFiltroEstado(event.target.value)}
    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none"
  >
    <option value="todos">Todos los estados</option>
    <option value="Caso activo">Caso activo</option>
    <option value="Completado">Completado</option>
  </select>
</div>   
   <label className="mt-3 flex items-center gap-2 text-sm font-bold text-gray-700">
  <input
    type="checkbox"
    checked={soloPendientes}
    onChange={(event) => setSoloPendientes(event.target.checked)}
  />
  Solo casos con documentos pendientes
</label>

  {casosCargados
.filter((caso) => {
  const texto = busqueda.toLowerCase()

  const coincideBusqueda =
    caso.numero.toLowerCase().includes(texto) ||
    caso.cliente.toLowerCase().includes(texto)

  const coincideEstado =
    filtroEstado === 'todos' || caso.estado === filtroEstado

  const coincidePendientes =
    !soloPendientes || caso.pendientes > 0

  return coincideBusqueda && coincideEstado && coincidePendientes
})
  .map((caso) => (
  <div
    key={caso.numero}
    className="mt-6 rounded-2xl border border-gray-200 p-5"
  >
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.15em] text-[#c9a646]">
          {caso.numero}
        </p>

        <h3 className="mt-1 text-xl font-black text-[#071a32]">
          {caso.cliente}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          {caso.tipo} · {caso.propiedad}
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {caso.ubicacion}
        </p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-green-50 px-3 py-1 text-green-700">
            {caso.estado}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
            Progreso {caso.progreso}%
          </span>

          <span className="rounded-full bg-red-50 px-3 py-1 text-red-600">
            {caso.pendientes} pendientes
          </span>
        </div>
      </div>

      <a
        href={`/admin/caso/${caso.numero}`}
        className="rounded-xl bg-[#071a32] px-5 py-3 text-center text-sm font-black text-white"
      >
        ABRIR EXPEDIENTE
      </a>
    </div>
  </div>
))}
</div>
      </main>  
    </div>
  )
}
