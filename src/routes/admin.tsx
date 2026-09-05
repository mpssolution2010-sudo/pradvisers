import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/admin')({
  component: AdminPage,
})

function AdminPage() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('todos')
  
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
  </select>
</div>       

  {[
  {
    numero: 'PA-2026-0001',
    cliente: 'María Rodríguez',
    tipo: 'Compra de propiedad',
    propiedad: 'Urb. Jardines del Caribe',
    ubicacion: 'Carolina, Puerto Rico',
    estado: 'Caso activo',
    progreso: 65,
    pendientes: 4,
  },
      {
  numero: 'PA-2026-0002',
  cliente: 'Carlos Rivera',
  tipo: 'Venta de propiedad',
  propiedad: 'Urb. Los Ángeles',
  ubicacion: 'Carolina, Puerto Rico',
  estado: 'Caso activo',
  progreso: 30,
  pendientes: 6,
},
]
.filter((caso) => {
  const texto = busqueda.toLowerCase()

  const coincideBusqueda =
    caso.numero.toLowerCase().includes(texto) ||
    caso.cliente.toLowerCase().includes(texto)

  const coincideEstado =
    filtroEstado === 'todos' || caso.estado === filtroEstado

  return coincideBusqueda && coincideEstado
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
