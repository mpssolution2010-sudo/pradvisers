
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/propiedades-abandonadas')({
  component: PropiedadesAbandonadas,
})

function PropiedadesAbandonadas() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-end px-6 py-4">
        <a
          href="/"
          className="rounded-lg border border-[#246b8e] px-5 py-2 text-sm font-bold text-[#246b8e] hover:bg-[#246b8e] hover:text-white"
        >
          INICIO
        </a>
      </header>

      <section className="bg-[#f5f5f5] px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 font-bold uppercase tracking-widest text-[#b59b51]">
            PROPERTY ADVISERS REAL ESTATE
          </p>
          <h1 className="mb-8 text-4xl font-bold text-[#376b8b] md:text-6xl">
            ¿Tienes una propiedad abandonada o deteriorada?
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Una propiedad desocupada, deteriorada o que necesita reparaciones
            puede representar una oportunidad de venta. Te ayudamos a evaluar
            alternativas de comercialización en el mercado de Puerto Rico.
          </p>
          <a
            href="#orientacion"
            className="mt-10 inline-block rounded-xl bg-[#376b8b] px-8 py-4 font-bold text-white hover:bg-[#28536d]"
          >
            QUIERO VENDER MI PROPIEDAD
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#376b8b]">
            ¿Qué tipo de propiedades podemos ayudarte a comercializar?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: 'Propiedades desocupadas',
                descripcion:
                  'Casas y apartamentos que llevan tiempo sin utilizarse y cuyos propietarios desean explorar una venta.',
              },
              {
                titulo: 'Propiedades deterioradas',
                descripcion:
                  'Inmuebles que requieren reparaciones, mantenimiento o remodelaciones antes de volver a utilizarse.',
              },
              {
                titulo: 'Propiedades heredadas',
                descripcion:
                  'Propiedades que forman parte de una herencia o sucesión y cuyos herederos consideran vender.',
              },
              {
                titulo: 'Casas con mantenimiento acumulado',
                descripcion:
                  'Propiedades con vegetación crecida, filtraciones u otras condiciones que pueden afectar su comercialización.',
              },
              {
                titulo: 'Propiedades con situaciones pendientes',
                descripcion:
                  'Inmuebles con asuntos documentales, registrales o municipales que requieren evaluación por los profesionales correspondientes.',
              },
              {
                titulo: 'Terrenos sin uso',
                descripcion:
                  'Solares y terrenos que llevan tiempo sin aprovecharse y cuyos dueños desean considerar alternativas de venta.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border-t-4 border-[#b59b51] bg-[#f5f5f5] p-8 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-bold text-[#376b8b]">
                  {item.titulo}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#376b8b]">
            Nuestro proceso de comercialización
          </h2>
          <div className="space-y-6">
            {[
              'Escuchamos tu situación y conocemos las características de la propiedad.',
              'Evaluamos las condiciones del inmueble y analizamos propiedades comparables.',
              'Recomendamos un precio competitivo para mercadear la propiedad, sin sustituir una tasación.',
              'Diseñamos una estrategia de promoción para atraer posibles compradores.',
              'Te acompañamos durante la negociación y coordinación del proceso de compraventa.',
            ].map((paso, index) => (
              <div
                key={paso}
                className="flex gap-5 rounded-xl bg-white p-6 shadow-sm"
              >
                <span className="font-bold text-[#b59b51]">
                  {index + 1}.
                </span>
                <p className="text-gray-700">{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#376b8b]">
            No todas las propiedades necesitan remodelarse para venderse
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Dependiendo de su ubicación, condición, documentación y demanda,
            una propiedad puede comercializarse en su estado actual. Analizamos
            las alternativas disponibles para recomendar una estrategia de
            venta apropiada.
          </p>
          <p className="mt-5 text-sm text-gray-500">
            Las situaciones de titularidad, sucesiones, gravámenes o posibles
            declaraciones de estorbo público pueden requerir evaluación legal
            o municipal independiente. No ofrecemos asesoría legal.
          </p>
        </div>
      </section>

      <section id="orientacion" className="bg-[#f5f5f5] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-[#376b8b]">
            Solicita orientación para vender tu propiedad
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Cuéntanos sobre la propiedad y nos comunicaremos contigo
            para conocer tu situación y explicarte cómo podemos ayudarte.
          </p>

          <form
            name="solicitudes-propiedades-abandonadas"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={async (e) => {
              e.preventDefault()

              const formData = new FormData(e.currentTarget)
              formData.set(
                'form-name',
                'solicitudes-propiedades-abandonadas',
              )

              try {
                const response = await fetch(
                  '/form-propiedades-abandonadas.html',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(formData as any).toString(),
                  },
                )

                if (!response.ok) {
                  throw new Error('No se pudo enviar el formulario')
                }

                window.location.href = '/gracias'
              } catch {
                alert(
                  'No se pudo enviar la solicitud. Inténtalo nuevamente.',
                )
              }
            }}
            className="mt-8 space-y-5 rounded-2xl bg-white p-8 shadow-lg"
          >
            <input
              type="hidden"
              name="form-name"
              value="solicitudes-propiedades-abandonadas"
            />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre completo *"
              className="w-full rounded-xl border border-gray-300 p-4"
            />
            <input
              type="tel"
              name="telefono"
              required
              placeholder="Número de teléfono *"
              className="w-full rounded-xl border border-gray-300 p-4"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico *"
              className="w-full rounded-xl border border-gray-300 p-4"
            />
            <input
              type="text"
              name="municipio"
              required
              placeholder="Municipio donde está la propiedad *"
              className="w-full rounded-xl border border-gray-300 p-4"
            />
            <select
              name="condicion_propiedad"
              required
              defaultValue=""
              className="w-full rounded-xl border border-gray-300 bg-white p-4"
            >
              <option value="" disabled>
                Selecciona la condición de la propiedad *
              </option>
              <option value="Desocupada">Desocupada</option>
              <option value="Abandonada">Abandonada</option>
              <option value="Deteriorada">Deteriorada</option>
              <option value="Heredada">Heredada</option>
              <option value="Terreno sin uso">Terreno sin uso</option>
              <option value="Otra">Otra situación</option>
            </select>
            <textarea
              name="mensaje"
              rows={5}
              placeholder="Cuéntanos sobre la propiedad y tu situación"
              className="w-full rounded-xl border border-gray-300 p-4"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#376b8b] px-6 py-4 font-bold text-white hover:bg-[#28536d]"
            >
              SOLICITAR ORIENTACIÓN
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#376b8b] px-6 py-10 text-center text-white">
        <p className="font-bold">PROPERTY ADVISERS REAL ESTATE</p>
        <p className="mt-2">Tu hogar, tu vida, nuestra misión.</p>
      </footer>
    </main>
  )
}
