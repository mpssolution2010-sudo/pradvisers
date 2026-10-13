
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/terrenos')({
  component: TerrenosPage,
})

function TerrenosPage() {
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
            Compra y venta de terrenos en Puerto Rico
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            ¿Deseas vender un terreno o estás buscando el lugar
            ideal para tu próximo proyecto? Te acompañamos
            durante el proceso de compraventa con orientación
            inmobiliaria profesional.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#vender-terreno"
              className="rounded-xl bg-[#376b8b] px-8 py-4 font-bold text-white hover:bg-[#28536d]"
            >
              QUIERO VENDER UN TERRENO
            </a>
            <a
              href="#comprar-terreno"
              className="rounded-xl border-2 border-[#376b8b] px-8 py-4 font-bold text-[#376b8b] hover:bg-white"
            >
              QUIERO COMPRAR UN TERRENO
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#376b8b]">
            ¿Qué tipo de terreno necesitas vender o comprar?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                titulo: 'Terrenos residenciales',
                descripcion:
                  'Solares destinados a posibles proyectos de vivienda, sujetos a la reglamentación aplicable.',
              },
              {
                titulo: 'Terrenos agrícolas',
                descripcion:
                  'Fincas y terrenos con potencial para actividades agrícolas, según su clasificación y usos permitidos.',
              },
              {
                titulo: 'Terrenos comerciales',
                descripcion:
                  'Propiedades con potencial comercial, sujeto a permisos, zonificación y viabilidad del proyecto.',
              },
              {
                titulo: 'Terrenos para inversión',
                descripcion:
                  'Oportunidades para compradores que buscan adquirir terrenos con una estrategia de inversión a largo plazo.',
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

      <section id="vender-terreno" className="bg-[#f5f5f5] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#376b8b]">
            ¿Tienes un terreno que deseas vender?
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600">
            Analizamos terrenos comparables, ubicación, cabida,
            acceso y características para recomendar un precio
            competitivo de mercadeo. No sustituimos una tasación.
          </p>
          <FormularioTerrenos tipo="vender" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#376b8b]">
            Aspectos importantes antes de comprar un terreno
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              'Clasificación y calificación del suelo',
              'Acceso legal y físico a la propiedad',
              'Cabida, mensura y colindancias',
              'Disponibilidad de agua y electricidad',
              'Condiciones topográficas e inundabilidad',
              'Titularidad, gravámenes y documentación',
            ].map((aspecto) => (
              <div
                key={aspecto}
                className="rounded-xl border border-gray-200 p-5 font-semibold"
              >
                <span className="mr-3 text-[#b59b51]">✓</span>
                {aspecto}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            La viabilidad de un proyecto y los usos permitidos
            deben verificarse con las agencias y profesionales
            correspondientes. No ofrecemos servicios de
            agrimensura, tasación ni asesoría legal.
          </p>
        </div>
      </section>

      <section id="comprar-terreno" className="bg-[#f5f5f5] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#376b8b]">
            ¿Estás buscando un terreno en Puerto Rico?
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600">
            Podemos ayudarte a identificar alternativas de
            terrenos y representarte durante el proceso de compra,
            de acuerdo con tus necesidades y presupuesto.
          </p>
          <FormularioTerrenos tipo="comprar" />
        </div>
      </section>

      <footer className="bg-[#376b8b] px-6 py-10 text-center text-white">
        <p className="font-bold">PROPERTY ADVISERS REAL ESTATE</p>
        <p className="mt-2">Tu hogar, tu vida, nuestra misión.</p>
      </footer>
    </main>
  )
}

function FormularioTerrenos({
  tipo,
}: {
  tipo: 'vender' | 'comprar'
}) {
  const esVendedor = tipo === 'vender'
  const nombreFormulario = esVendedor
    ? 'solicitudes-terrenos-vender'
    : 'solicitudes-terrenos-comprar'

  return (
    <form
      name={nombreFormulario}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        formData.set('form-name', nombreFormulario)

        const destino = esVendedor
          ? '/form-terrenos-vender.html'
          : '/form-terrenos-comprar.html'

        try {
          const response = await fetch(destino, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData as any).toString(),
          })

          if (!response.ok) {
            throw new Error('No se pudo enviar la solicitud')
          }

          window.location.href = '/gracias'
        } catch {
          alert('No se pudo enviar la solicitud. Inténtalo nuevamente.')
        }
      }}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-lg"
    >
      <input type="hidden" name="form-name" value={nombreFormulario} />
      <input type="hidden" name="bot-field" />

      <h3 className="text-center text-2xl font-bold text-[#376b8b]">
        {esVendedor
          ? 'Solicita orientación para vender tu terreno'
          : 'Solicita orientación para comprar un terreno'}
      </h3>

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
        placeholder={
          esVendedor
            ? 'Municipio donde está el terreno *'
            : 'Municipio donde deseas comprar *'
        }
        className="w-full rounded-xl border border-gray-300 p-4"
      />
      <textarea
        name="mensaje"
        rows={5}
        placeholder={
          esVendedor
            ? 'Describe tu terreno, cabida aproximada y situación actual'
            : 'Indica tu presupuesto, cabida deseada y uso del terreno'
        }
        className="w-full rounded-xl border border-gray-300 p-4"
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-[#376b8b] px-6 py-4 font-bold text-white hover:bg-[#28536d]"
      >
        {esVendedor
          ? 'SOLICITAR SERVICIO DE VENTA'
          : 'SOLICITAR SERVICIO DE COMPRA'}
      </button>
    </form>
  )
}
