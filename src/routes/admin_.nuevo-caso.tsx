import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/admin/nuevo-caso')({
  component: NuevoCasoPage,
})

function NuevoCasoPage() {
  const [numero, setNumero] = useState('')
  const [cliente, setCliente] = useState('')
  const [tipo, setTipo] = useState('')
  const [propiedad, setPropiedad] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [estado, setEstado] = useState('Caso activo')
  const [progreso, setProgreso] = useState(0)
  const crearExpediente = async () => {
  try {
    if (!numero || !cliente || !tipo || !propiedad || !ubicacion) {
      alert('Completa todos los campos requeridos.')
      return
    }

    const responseActual = await fetch('/api/casos')

    if (!responseActual.ok) {
      alert('No se pudieron cargar los expedientes actuales.')
      return
    }

    const dataActual = await responseActual.json()
    const casosActuales = Array.isArray(dataActual.casos)
      ? dataActual.casos
      : []

    const yaExiste = casosActuales.some(
      (caso: any) => caso.numero === numero,
    )

    if (yaExiste) {
      alert('Ya existe un expediente con ese número de caso.')
      return
    }

    const nuevoCaso = {
      numero,
      cliente,
      tipo,
      propiedad,
      ubicacion,
      estado,
      progreso,
      pendientes: 0,
    }

    const responseGuardar = await fetch('/api/casos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        casos: [...casosActuales, nuevoCaso],
      }),
    })

    if (!responseGuardar.ok) {
      alert('No se pudo crear el expediente.')
      return
    }

    window.location.href = '/admin'
  } catch (error) {
    console.error('Error creando expediente:', error)
    alert('No se pudo crear el expediente.')
  }
}

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c9a646]">
            Property Advisers
          </p>

          <h1 className="mt-2 text-3xl font-black text-[#071a32]">
            Nuevo expediente
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Crea un nuevo expediente para un cliente.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-black text-[#071a32]">
                Número de caso
              </label>

              <input
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
                placeholder="PA-2026-0004"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Cliente
              </label>

              <input
                value={cliente}
                onChange={(event) => setCliente(event.target.value)}
                placeholder="Nombre completo"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Tipo de caso
              </label>

              <input
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
                placeholder="Compra de propiedad"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Propiedad
              </label>

              <input
                value={propiedad}
                onChange={(event) => setPropiedad(event.target.value)}
                placeholder="Urb. / Condominio / Dirección"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Ubicación
              </label>

              <input
                value={ubicacion}
                onChange={(event) => setUbicacion(event.target.value)}
                placeholder="Carolina, Puerto Rico"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Estado
              </label>

              <select
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
              >
                <option value="Caso activo">Caso activo</option>
                <option value="Completado">Completado</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-black text-[#071a32]">
                Progreso
              </label>

              <input
                type="number"
                min="0"
                max="100"
                value={progreso}
                onChange={(event) => setProgreso(Number(event.target.value))}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="/admin"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-black text-gray-700"
            >
              CANCELAR
            </a>

            <button
              type="button"
              onClick={crearExpediente}
              className="rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white"
            >
              CREAR EXPEDIENTE
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
