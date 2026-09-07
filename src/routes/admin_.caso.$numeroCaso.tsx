
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/admin/caso/$numeroCaso')({
  component: AdminCasoPage,
})

function AdminCasoPage() {
  const { numeroCaso } = Route.useParams()
  const [caso, setCaso] = useState<any>(null)
  const [clienteEditado, setClienteEditado] = useState('')
  const [tipoEditado, setTipoEditado] = useState('')
  const [propiedadEditada, setPropiedadEditada] = useState('')
  const [ubicacionEditada, setUbicacionEditada] = useState('')
  const [progresoEditado, setProgresoEditado] = useState(0)
  const [estadoEditado, setEstadoEditado] = useState('Caso activo')
  useEffect(() => {
  const cargarCaso = async () => {
    try {
      const response = await fetch('/api/casos')

      if (!response.ok) return

      const data = await response.json()

      const casoEncontrado = data.casos?.find(
        (item: any) => item.numero === numeroCaso,
      )

    if (casoEncontrado) {
  setCaso(casoEncontrado)
  setClienteEditado(casoEncontrado.cliente ?? '')
  setTipoEditado(casoEncontrado.tipo ?? '')
  setPropiedadEditada(casoEncontrado.propiedad ?? '')
  setUbicacionEditada(casoEncontrado.ubicacion ?? '')
  setProgresoEditado(casoEncontrado.progreso ?? 0)
  setEstadoEditado(casoEncontrado.estado ?? 'Caso activo')
}
    } catch (error) {
      console.error('Error cargando expediente:', error)
    }
  }

  cargarCaso()
}, [numeroCaso])

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
const [documentosRecibidos, setDocumentosRecibidos] = useState<
  Record<string, boolean>
>({})
  
  useEffect(() => {
  const cargarDocumentosRecibidos = async () => {
    const documentos = [
      'Contrato de opción',
      'Identificación',
      'Estados bancarios',
      'Carta de preaprobación',
      'Carta de capitulaciones',
      'Estudio de título',
      'Evidencia de ingresos',
      'Declaratoria de herederos',
      'Caudal relicto',
    ]

    const ids: Record<string, string> = {
      'Contrato de opción': 'contrato-opcion',
      Identificación: 'identificacion',
      'Estados bancarios': 'estados-bancarios',
      'Carta de preaprobación': 'carta-preaprobacion',
      'Carta de capitulaciones': 'carta-capitulaciones',
      'Estudio de título': 'estudio-titulo',
      'Evidencia de ingresos': 'evidencia-ingresos',
      'Declaratoria de herederos': 'declaratoria-herederos',
      'Caudal relicto': 'caudal-relicto',
    }

    const resultados = await Promise.all(
      documentos.map(async (documento) => {
        try {
          const response = await fetch(
            `/api/estado-documento?numero-caso=${numeroCaso}&tipo-documentos=${ids[documento]}`,
          )

          if (!response.ok) {
            return [documento, false] as const
          }

          const data = await response.json()
          return [documento, Boolean(data.recibido)] as const
        } catch {
          return [documento, false] as const
        }
      }),
    )

    setDocumentosRecibidos(Object.fromEntries(resultados))
  }

  cargarDocumentosRecibidos()
}, [numeroCaso])
  const guardarDatosExpediente = async () => {
  try {
    const responseActual = await fetch('/api/casos')

    if (!responseActual.ok) {
      alert('No se pudieron cargar los expedientes.')
      return
    }

    const dataActual = await responseActual.json()
    const casosActuales = Array.isArray(dataActual.casos)
      ? dataActual.casos
      : []

    const casosActualizados = casosActuales.map((item: any) =>
      item.numero === numeroCaso
        ? {
            ...item,
            cliente: clienteEditado,
            tipo: tipoEditado,
            propiedad: propiedadEditada,
            ubicacion: ubicacionEditada,
            estado: estadoEditado,
            progreso: progresoEditado,
          }
        : item,
    )

    const responseGuardar = await fetch('/api/casos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        casos: casosActualizados,
      }),
    })

    if (!responseGuardar.ok) {
      alert('No se pudieron guardar los cambios.')
      return
    }

    setCaso((casoActual: any) => ({
      ...casoActual,
      cliente: clienteEditado,
      tipo: tipoEditado,
      propiedad: propiedadEditada,
      ubicacion: ubicacionEditada,
      estado: estadoEditado
      progreso: progresoEditado,
    }))

    alert('Expediente actualizado correctamente.')
  } catch (error) {
    console.error('Error actualizando expediente:', error)
    alert('No se pudieron guardar los cambios.')
  }
}
  useEffect(() => {
  const cargarConfiguracion = async () => {
    try {
      const response = await fetch(
        `/api/configuracion-documentos?numero-caso=${numeroCaso}`,
      )

      if (!response.ok) {
        return
      }

      const data = await response.json()

      if (data.documentosRequeridos) {
        setDocumentosRequeridos(data.documentosRequeridos)
      }
    } catch (error) {
      console.error('Error cargando configuración de documentos:', error)
    }
  }

  cargarConfiguracion()
}, [numeroCaso])
  const guardarConfiguracion = async () => {
  try {
    const response = await fetch('/api/configuracion-documentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCaso,
        documentosRequeridos,
      }),
    })

    if (!response.ok) {
      alert('No se pudo guardar la configuración.')
      return
    }

   setMensajeGuardado('Configuración guardada correctamente.')
setTimeout(() => setMensajeGuardado(''), 3000)
  } catch (error) {
    console.error('Error guardando configuración:', error)
    alert('No se pudo guardar la configuración.')
  }
};
  const [mensajeGuardado, setMensajeGuardado] = useState('')
  const totalRequeridos = Object.values(documentosRequeridos).filter(Boolean).length

const totalRecibidos = Object.entries(documentosRequeridos).filter(
  ([documento, requerido]) => requerido && documentosRecibidos[documento],
).length

const totalPendientes = totalRequeridos - totalRecibidos 
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
              {caso?.cliente ?? 'cargando...'}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {caso ? `${caso.tipo} · ${caso.propiedad}` : 'Cargando...'}
            </p>

            <p className="mt-1 text-sm text-gray-500">
               {caso?.ubicacion ?? 'cargando...'}
            </p>
          </section>

<section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
  <div className="mt-6 grid gap-4 md:grid-cols-2">
  <div>
    <label className="text-xs font-black uppercase tracking-wide text-gray-500">
      Cliente
    </label>
    <input
      value={clienteEditado}
      onChange={(event) => setClienteEditado(event.target.value)}
      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="text-xs font-black uppercase tracking-wide text-gray-500">
      Tipo de caso
    </label>
    <input
      value={tipoEditado}
      onChange={(event) => setTipoEditado(event.target.value)}
      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="text-xs font-black uppercase tracking-wide text-gray-500">
      Propiedad
    </label>
    <input
      value={propiedadEditada}
      onChange={(event) => setPropiedadEditada(event.target.value)}
      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="text-xs font-black uppercase tracking-wide text-gray-500">
      Ubicación
    </label>
    <input
      value={ubicacionEditada}
      onChange={(event) => setUbicacionEditada(event.target.value)}
      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  </div>
<div>
  <label className="text-xs font-black uppercase tracking-wide text-gray-500">
    Estado
  </label>

  <select
    value={estadoEditado}
    onChange={(event) => setEstadoEditado(event.target.value)}
    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
  >
    <option value="Caso activo">Caso activo</option>
    <option value="Completado">Completado</option>
  </select>
</div>
  <div>
    <label className="text-xs font-black uppercase tracking-wide text-gray-500">
      Progreso
    </label>
    <input
      type="number"
      min="0"
      max="100"
      value={progresoEditado}
      onChange={(event) => setProgresoEditado(Number(event.target.value))}
      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  </div>
</div>

<button
  type="button"
  onClick={guardarDatosExpediente}
  className="mt-5 rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white"
>
  GUARDAR DATOS DEL EXPEDIENTE
</button>
</section>

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
              Estado
            </p>

            <h2 className="mt-2 text-xl font-black text-[#071a32]">
            {caso?.estado ?? 'cargando...'}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
            Progreso actual: {caso?.progreso ?? 0}%
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

{mensajeGuardado && (
  <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
    <p className="text-sm font-black text-green-700">
      ✓ {mensajeGuardado}
    </p>
  </div>
)}

<div className="mt-5 grid gap-3 sm:grid-cols-3">
  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-gray-500">
      Requeridos
    </p>
    <p className="mt-1 text-2xl font-black text-[#071a32]">
      {totalRequeridos}
    </p>
  </div>

  <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-green-700">
      Recibidos
    </p>
    <p className="mt-1 text-2xl font-black text-green-700">
      {totalRecibidos}
    </p>
  </div>

  <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
    <p className="text-xs font-black uppercase tracking-wide text-red-600">
      Pendientes
    </p>
    <p className="mt-1 text-2xl font-black text-red-600">
      {totalPendientes}
    </p>
  </div>
</div>
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
     <span
  className={
    documentosRecibidos[documento]
      ? 'ml-3 text-xs font-black text-green-600'
      : documentosRequeridos[documento]
        ? 'ml-3 text-xs font-black text-red-500'
        : 'ml-3 text-xs font-black text-gray-400'
  }
>
  {documentosRecibidos[documento]
    ? 'Recibido ✓'
    : documentosRequeridos[documento]
      ? 'Pendiente'
      : 'No requerido'}
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
</div>

<button
  type="button"
  onClick={guardarConfiguracion}
  className="mt-6 rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white"
>
  GUARDAR CAMBIOS
</button>

</section>
      </main>
    </div>
  )
}
