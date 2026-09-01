import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/mi-caso/dashboard')({
  component: MiCasoDashboard,
})
const casoCliente = {
  cliente: {
    nombre: 'María Rodríguez',
    iniciales: 'MR',
    tipo: 'Cliente',
  },
  caso: {
    numero: 'PA-2026-0001',
    tipo: 'Compra de propiedad',
    propiedad: 'Urb. Jardines del Caribe',
    ubicacion: 'Carolina, Puerto Rico',
    progreso: 65,
    estado: 'Caso activo',
  },
  actualizacion: {
    esperando: 'Informe final de tasación',
    detalle:
      'La inspección fue realizada. Actualmente estamos esperando que el tasador entregue el informe final.',
    fecha: '28 de agosto de 2026',
  },
  accionRequerida: {
    titulo: 'Necesitamos un documento de tu parte',
    detalle:
      'Favor subir los estados bancarios solicitados por el originador hipotecario.',
    boton: 'SUBIR DOCUMENTO',
  },
  mensaje: {
    remitente:  'Property Advisers',
    texto:
      'La inspección de tasación fue completada. Te notificaremos tan pronto recibamos el informe.' ,
    fecha: '28 ago 2026', 
    hora: '3:42 PM' ,
      },
  documentos: [
    {
      nombre: 'Contrato de opción',
      id: 'contrato-opcion', 
      requerido: true,
      estado: 'Recibido • PDF',
      icono: '📄',
    },
    {
      nombre: 'Identificación',
      id: 'identificacion', 
      requerido: true,
      estado: 'Recibido • Verificado',
      icono: '🪪',
    },
    {
      nombre: 'Estados bancarios',
      id: 'estados-bancarios',
      requerido: true,
      estado: 'Pendiente de recibir',
      icono: '＋',
    },
    {
  nombre: 'Carta de preaprobación',
  id: 'carta-preaprobacion',
  requerido: true,
  estado: 'Pendiente de recibir',
  icono: '+',
},
   {
  nombre: 'Carta de capitulaciones',
  id: 'carta-capitulaciones',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
},
{
  nombre: 'Estudio de título',
  id: 'estudio-titulo',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
},
{
  nombre: 'Evidencia de ingresos',
  id: 'evidencia-ingresos',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
},
{
  nombre: 'Declaratoria de herederos',
  id: 'declaratoria-herederos',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
},
{
  nombre: 'Caudal relicto',
  id: 'caudal-relicto',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
},
{
  nombre: 'Relevo de Hacienda',
  id: 'relevo-hacienda',
  requerido: false,
  estado: 'Pendiente de recibir',
  icono: '+',
}, 
  ],
  equipo: [
  {
    icono: '🏡',
    nombre: 'Property Advisers',
    funcion: 'Corredor inmobiliario',
  },
  {
    icono: '🏦',
    nombre: 'Originador',
    funcion: 'Financiamiento',
  },
  {
    icono: '📊',
    nombre: 'Tasador',
    funcion: 'Tasación',
  },
  {
    icono: '📐',
    nombre: 'Agrimensor',
    funcion: 'Mensura',
  },
  {
    icono: '⚖️',
    nombre: 'Notario',
    funcion: 'Cierre',
  },
],
}

const etapas = [
  {
    nombre: 'Contrato de opción',
    detalle: 'Contrato firmado y expediente abierto.',
    estado: 'Completado',
    icono: '✓',
  },
  {
    nombre: 'Originación hipotecaria',
    detalle: 'El banco está procesando el expediente.',
    estado: 'En proceso',
    icono: '🏦',
  },
  {
    nombre: 'Tasación',
    detalle: 'Tasación ordenada. Pendiente de informe final.',
    estado: 'En proceso',
    icono: '🏠',
  },
  {
    nombre: 'Agrimensura',
    detalle: 'Pendiente de coordinación con el agrimensor.',
    estado: 'Pendiente',
    icono: '📐',
  },
  {
    nombre: 'Estudio de título',
    detalle: 'Comenzará al recibirse la documentación requerida.',
    estado: 'Pendiente',
    icono: '📑',
  },
  {
    nombre: 'Notaría',
    detalle: 'Preparación de documentos para cierre.',
    estado: 'Pendiente',
    icono: '⚖️',
  },
  {
    nombre: 'Clear to Close',
    detalle: 'Autorización final para proceder al cierre.',
    estado: 'Pendiente',
    icono: '🔐',
  },
  {
    nombre: 'Cierre',
    detalle: 'Firma final y entrega de la propiedad.',
    estado: 'Pendiente',
    icono: '🔑',
  },
]

function Badge({ estado }: { estado: string }) {
  if (estado === 'Completado') {
    return (
      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
        ✓ COMPLETADO
      </span>
    )
  }

  if (estado === 'En proceso') {
    return (
      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">
        ● EN PROCESO
      </span>
    )
  }

  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-black text-gray-500">
      PENDIENTE
    </span>
  )
}

function MiCasoDashboard() {
const [documentosRecibidos, setDocumentosRecibidos] = useState<
  Record<string, boolean>
>({})

const [progresoSubida, setProgresoSubida] = useState(0)
const [subiendoDocumento, setSubiendoDocumento] = useState(false)
const [nombreArchivo, setNombreArchivo] = useState('')
const [tipoDocumentoSubida, setTipoDocumentoSubida] = useState('estados-bancarios')

useEffect(() => {
  const cargarEstadosDocumentos = async () => {
    const documentosConId = casoCliente.documentos.filter(
      (documento) => documento.id,
    )

    const resultados = await Promise.all(
      documentosConId.map(async (documento) => {
        try {
          const response = await fetch(
            `/api/estado-documento?numero-caso=${casoCliente.caso.numero}&tipo-documentos=${documento.id}`,
          )

          if (!response.ok) {
            return [documento.id, false] as const
          }

          const data = await response.json()

          return [documento.id, Boolean(data.recibido)] as const
        } catch (error) {
          console.error(
            `Error consultando estado de ${documento.id}:`,
            error,
          )

          return [documento.id, false] as const
        }
      }),
    )

    setDocumentosRecibidos(Object.fromEntries(resultados))
  }

  cargarEstadosDocumentos()
}, [])

const documentoRecibido =
  documentosRecibidos['estados-bancarios'] ?? false
  
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

          <a href="/" className="shrink-0">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-auto w-36 sm:w-44 lg:w-52"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-bold text-[#246b8e] lg:flex">
            <a href="#resumen" className="hover:text-[#c9a646]">
              MI CASO
            </a>
            <a href="#documentos" className="hover:text-[#c9a646]">
              DOCUMENTOS
            </a>
            <a href="#equipo" className="hover:text-[#c9a646]">
              EQUIPO
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-[#f4f6f8] p-2.5"
              aria-label="Notificaciones"
            >
              🔔
            </button>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-black text-[#071a32]">
                {casoCliente.nombre}
              </p>
              <p className="text-xs text-gray-500">
                {casoCliente.cliente.tipo}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071a32] font-black text-white">
              {casoCliente.cliente.iniciales}
            </div>
          </div>

        </div>
      </header>

      {/* BIENVENIDA */}
      <section
        id="resumen"
        className="bg-gradient-to-br from-[#071a32] via-[#0b294d] to-[#103d68] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#d4af57]">
                Portal del Cliente
              </p>

              <h1 className="text-3xl font-black sm:text-4xl">
                Hola, {casoCliente.cliente.nombre.split(' ')[0]}.
              </h1>

              <p className="mt-2 max-w-2xl text-white/70">
                Aquí puedes consultar el progreso de tu transacción
                inmobiliaria y conocer cuál es el próximo paso.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-white/60">
                Número de caso
              </p>
              <p className="mt-1 text-xl font-black text-[#d4af57]">
                {casoCliente.caso.numero}
              </p>
            </div>

          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">

        {/* PROPIEDAD + PROGRESO */}
        <section className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#c9a646]">
                  {casoCliente.caso.tipo}
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#071a32]">
                  {casoCliente.caso.propiedad}
                </h2>

                <p className="mt-1 text-gray-500">
                  {casoCliente.caso.ubicacion}
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#246b8e]">
                {casoCliente.caso.estado.toUpperCase()}
              </span>

            </div>

            <div className="mt-8">

              <div className="mb-3 flex items-end justify-between">
                <div>
                  <p className="font-black text-[#071a32]">
                    Progreso general
                  </p>
                  <p className="text-sm text-gray-500">
                    Tu transacción continúa avanzando.
                  </p>
                </div>

                <p className="text-3xl font-black text-[#c9a646]">
                  {casoCliente.caso.progreso}%
                </p>
              </div>

           <div className="h-4 overflow-hidden rounded-full bg-gray-100">
           <div
                className="h-full rounded-full bg-[#c9a646]"
                style={{ width: `${casoCliente.caso.progreso}%` }}
               />
             </div>

            </div>
          </div>

          {/* ESPERANDO AHORA */}
          <div className="rounded-3xl bg-[#fff8e7] p-6 shadow-sm">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a646] text-2xl">
              ⏳
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-[#9b7a24]">
              Estamos esperando
            </p>

            <h3 className="mt-2 text-xl font-black text-[#071a32]">
              {casoCliente.actualizacion.esperando}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {casoCliente.actualizacion.detalle}
            </p>

            <div className="mt-5 border-t border-[#ead9a6] pt-4">
              <p className="text-xs text-gray-500">
                Última actualización
              </p>
              <p className="text-sm font-bold text-[#071a32]">
                {casoCliente.actualizacion.fecha}
              </p>
            </div>

          </div>

        </section>

        {/* ACCIÓN REQUERIDA */}
        <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-2xl">
                !
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-widest text-red-500">
                  Acción requerida
                </p>

                <h3 className="mt-1 text-lg font-black text-[#071a32]">
                  {casoCliente.accionRequerida.titulo}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {casoCliente.accionRequerida.detalle}
                </p>
              </div>

            </div>

            <button
              type="button"
              className="shrink-0 rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white hover:bg-[#0b294d]"
            >
              {casoCliente.accionRequerida.boton}
            </button>

          </div>

        </section>

        {/* CONTENIDO */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* ETAPAS */}
          <section className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">

            <div className="mb-7">
              <p className="text-xs font-black uppercase tracking-widest text-[#c9a646]">
                Seguimiento
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#071a32]">
                Etapas de tu transacción
              </h2>
            </div>

            <div className="space-y-3">

              {etapas.map((etapa) => (
                <div
                  key={etapa.nombre}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-[#d4af57]/40 sm:flex-row sm:items-center"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f6f8] text-xl">
                    {etapa.icono}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-black text-[#071a32]">
                      {etapa.nombre}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {etapa.detalle}
                    </p>
                  </div>

                  <Badge estado={etapa.estado} />

                </div>
              ))}

            </div>
          </section>

          {/* COLUMNA DERECHA */}
          <div className="space-y-6">

            {/* TAREAS */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black text-[#071a32]">
                  Tus tareas
                </h2>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-500">
                  1 PENDIENTE
                </span>
              </div>

              <div className="rounded-2xl bg-[#f8f9fa] p-4">
                <p className="font-bold text-[#071a32]">
                  {casoCliente.accionRequerida.titulo}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {casoCliente.accionRequerida.detalle}
                </p>

                <button
                  type="button"
                  className="mt-4 text-sm font-black text-[#246b8e]"
                >
                  {casoCliente.accionRequerida.boton} {'→'}
                </button> </div>

            </section>

            {/* MENSAJES */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black text-[#071a32]">
                  Mensajes
                </h2>

                <span className="text-xl">💬</span>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4">
                <p className="text-xs font-black uppercase text-[#c9a646]">
                  {casoCliente.mensaje.remitente}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {casoCliente.mensaje.texto}
                </p>

                <p className="mt-3 text-xs text-gray-400">
                  {casoCliente.mensaje.fecha} • {casoCliente.mensaje.hora}
                </p>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-[#071a32] py-3 text-sm font-black text-[#071a32]"
              >
                VER MENSAJES
              </button>

            </section>

          </div>
        </div>

        {/* DOCUMENTOS */}
        <section
          id="documentos"
          className="rounded-3xl bg-white p-6 shadow-sm"
        >

          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#c9a646]">
                Expediente
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#071a32]">
                Documentos
              </h2>
            </div>

  {casoCliente.documentos.some(
  (documento) =>
    documento.estado === 'Pendiente de recibir' &&
    !documentosRecibidos[documento.id],
) && (
     <form
  name="documentos-cliente"
  method="POST"
  action="/"
  data-netlify="true"
  netlify-honeypot="bot-field-documentos"
  encType="multipart/form-data"
  className="flex flex-col gap-3 sm:flex-row sm:items-center"
onSubmit={(event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  setSubiendoDocumento(true)
  setProgresoSubida(0)

  const xhr = new XMLHttpRequest()

  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const porcentaje = Math.round((event.loaded / event.total) * 100)
      setProgresoSubida(porcentaje)
    }
  })

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      setProgresoSubida(100)
      window.location.href = '/documento-recibido'
    } else {
      setSubiendoDocumento(false)
      alert('No se pudo enviar el documento. Intenta nuevamente.')
    }
  })

  xhr.addEventListener('error', () => {
    setSubiendoDocumento(false)
    alert('No se pudo enviar el documento. Intenta nuevamente.')
  })

  xhr.open('POST', '/form-survey.html')
  xhr.send(formData)
}}
>

  <input type="hidden" name="form-name" value="documentos-cliente" />
  <input type="hidden" name="numero-caso" Value={casoCliente.caso.numero} />
  <input type="hidden" name="tipo-documentos" Value={tipoDocumentoSubida} />

  <p className="hidden">
    <label>
      No llenar:
      <input name="bot-field-documentos" />
    </label>
  </p>

  <div className="w-full">
  <label className="mb-2 block text-sm font-bold text-gray-700">
    Tipo de documento
  </label>

  <select
    value={tipoDocumentoSubida}
    onChange={(event) => {
      setTipoDocumentoSubida(event.target.value)
      setNombreArchivo('')
      setProgresoSubida(0)
    }}
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-700"
  >
    <option value="contrato-opcion">Contrato de opción</option>
    <option value="identificacion">Identificación</option>
    <option value="estados-bancarios">Estados bancarios</option>
    <option value="carta-preaprobacion">carta de pre aprobación</option>
  </select>
</div>
  <label className="cursor-pointer rounded-xl bg-[#071a32] px-5 py-3 text-sm font-black text-white">
    + SELECCIONAR DOCUMENTO

    <input
      type="file"
      name="documento"
      className="hidden"
      accept=".pdf,.jpg,.jpeg,.png"
      required
    onChange={(event) => {
  const archivo = event.target.files?.[0]
  setNombreArchivo(archivo?.name ?? '')
  setProgresoSubida(0)
}}
    />
    
  </label>
{nombreArchivo && (
  <div className="w-full">
    <p className="mb-2 text-sm font-bold text-gray-700">
      {nombreArchivo}
    </p>

    {subiendoDocumento && (
      <>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-600 transition-all duration-300"
            style={{ width: `${progresoSubida}%` }}
          />
        </div>

        <p className="mt-2 text-sm font-bold text-green-700">
          Subiendo documento... {progresoSubida}%
        </p>
      </>
    )}
  </div>
)}
  <button
    type="submit"
    className="rounded-xl bg-[#246b8e] px-5 py-3 text-sm font-black text-white"
  >
    ENVIAR DOCUMENTO
  </button>
</form>
          )}
          </div>

          <div className="grid gap-4 md:grid-cols-3">

          {casoCliente.documentos
            .filter((documento) => documento.requerido)
            .map((documento) => (
  <div
    key={documento.nombre}
    className={
      documento.estado === 'Pendiente de recibir' &&
      !documentosRecibidos[documento.id]
        ? 'rounded-2xl border border-dashed border-gray-300 p-5'
        : 'rounded-2xl border border-gray-100 p-5'
    }
  >
<div
  className={
    documentosRecibidos[documento.id]
      ? 'text-3xl text-green-600'
      : 'text-3xl'
  }
>
  {documentosRecibidos[documento.id]
    ? '✓'
    : documento.icono}
</div>

    <p className="mt-3 font-black text-[#071a32]">
      {documento.nombre}
    </p>

   <p
  className={
    documento.estado === 'Pendiente de recibir' &&
    !documentosRecibidos[documento.id]
      ? 'mt-1 text-xs text-red-500'
      : 'mt-1 text-xs text-gray-500'
  }
    >
      {documentosRecibidos[documento.id] 
  ? 'Recibido ✓'
  : documento.estado}
    </p>
  </div>
))}
          </div>
        </section>

        {/* EQUIPO */}
        <section
          id="equipo"
          className="rounded-3xl bg-[#071a32] p-6 text-white shadow-sm"
        >

          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-widest text-[#d4af57]">
              Profesionales
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Equipo de tu transacción
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {casoCliente.equipo.map((miembro) => (
  <div
    key={miembro.nombre}
    className="rounded-2xl border border-white/10 bg-white/10 p-5"
  >
    <div className="text-3xl">{miembro.icono}</div>
    <p className="mt-3 font-black">{miembro.nombre}</p>
    <p className="mt-1 text-sm text-white/60">{miembro.funcion}</p>
  </div>
))}
          

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-7 text-sm sm:flex-row">

          <p className="text-gray-500">
            © 2026 Property Advisers Real Estate
          </p>

          <p className="font-black text-[#071a32]">
            Tu hogar, tu vida, nuestra misión.
          </p>

        </div>
      </footer>

    </div>
  )
}
