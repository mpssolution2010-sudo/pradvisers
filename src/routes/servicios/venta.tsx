
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/venta')({
  component: VentaPage,
})

function VentaPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">

      {/* ENCABEZADO */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

          {/* LOGO ORIGINAL */}
          <a href="/" className="flex shrink-0 items-center">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-auto w-40 sm:w-48 lg:w-56"
            />
          </a>

          {/* REGRESAR A INICIO */}
          <a
            href="/"
            className="rounded-lg border border-[#246b8e] px-4 py-2 text-sm font-bold text-[#246b8e] transition hover:bg-[#246b8e] hover:text-white"
          >
            INICIO
          </a>

        </div>
      </header>

      {/* INTRODUCCIÓN */}
      <main>
        <section className="bg-white px-4 py-16 text-center sm:px-6 sm:py-24">

          <div className="mx-auto max-w-5xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#b99a45]">
              PROPERTY ADVISERS REAL ESTATE
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight text-[#246b8e] sm:text-5xl lg:text-6xl">
              Vende tu propiedad con estrategia y confianza
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Te acompañamos durante el proceso de venta de tu propiedad
              en Puerto Rico, desde la orientación inicial hasta el cierre
              de la transacción.
            </p>

            <a
              href="https://wa.me/17873935871?text=Hola%2C%20deseo%20informaci%C3%B3n%20para%20vender%20mi%20propiedad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#1da851]"
            >
              QUIERO VENDER MI PROPIEDAD
            </a>

          </div>
        </section>

        
{/* SERVICIOS DE VENTA */}
<section className="bg-[#f4f7f9] px-4 py-16 sm:px-6 lg:py-24">
  <div className="mx-auto max-w-7xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#b99a45]">
        NUESTROS SERVICIOS
      </p>

      <h2 className="mb-5 text-3xl font-black text-[#246b8e] sm:text-4xl">
        ¿Cómo te ayudamos a vender tu propiedad?
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Ofrecemos orientación y representación inmobiliaria
        durante las diferentes etapas del proceso de venta.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icono: "📊",
          titulo: "Estudio de mercado",
          descripcion:
            "Analizamos propiedades comparables y las condiciones del mercado para ayudarte a establecer un precio de venta competitivo.",
        },
        {
          icono: "📸",
          titulo: "Fotografía profesional",
          descripcion:
            "Preparamos fotografías profesionales para presentar tu propiedad de manera atractiva ante posibles compradores.",
        },
        {
          icono: "📢",
          titulo: "Mercadeo inmobiliario",
          descripcion:
            "Promocionamos tu propiedad mediante estrategias digitales y diferentes canales de publicidad inmobiliaria.",
        },
        {
          icono: "🏡",
          titulo: "Presentación de la propiedad",
          descripcion:
            "Coordinamos visitas y presentamos las características de tu propiedad a compradores interesados.",
        },
        {
          icono: "🤝",
          titulo: "Negociación de ofertas",
          descripcion:
            "Te orientamos durante la evaluación de ofertas y las negociaciones con posibles compradores.",
        },
        {
          icono: "🔑",
          titulo: "Acompañamiento hasta el cierre",
          descripcion:
            "Coordinamos las etapas de la transacción con los profesionales correspondientes hasta completar el proceso de compraventa.",
        },
      ].map((servicio) => (
        <div
          key={servicio.titulo}
          className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg"
        >
          <div className="mb-5 text-4xl">
            {servicio.icono}
          </div>

          <h3 className="mb-3 text-xl font-bold text-[#246b8e]">
            {servicio.titulo}
          </h3>

          <p className="leading-relaxed text-gray-600">
            {servicio.descripcion}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
        
{/* PROCESO DE VENTA */}
<section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
  <div className="mx-auto max-w-7xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#b99a45]">
        NUESTRO PROCESO
      </p>

      <h2 className="mb-5 text-3xl font-black text-[#246b8e] sm:text-4xl">
        Tu propiedad, nuestra misión
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Te acompañamos en cada etapa del proceso de venta
        de tu propiedad en Puerto Rico.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          numero: "01",
          titulo: "Evaluación inicial",
          descripcion:
            "Conocemos tu propiedad, tus necesidades y tus objetivos de venta.",
        },
        {
          numero: "02",
          titulo: "Precio y estrategia",
          descripcion:
            "Analizamos el mercado y desarrollamos una estrategia de comercialización.",
        },
        {
          numero: "03",
          titulo: "Promoción y ofertas",
          descripcion:
            "Promocionamos tu propiedad, coordinamos visitas y te presentamos las ofertas recibidas.",
        },
        {
          numero: "04",
          titulo: "Negociación y cierre",
          descripcion:
            "Te acompañamos durante las negociaciones y coordinamos el proceso hasta el cierre de la compraventa.",
        },
      ].map((paso) => (
        <div
          key={paso.numero}
          className="rounded-2xl border border-gray-200 bg-[#f4f7f9] p-7 shadow-sm"
        >
          <span className="mb-5 block text-4xl font-black text-[#b99a45]">
            {paso.numero}
          </span>

          <h3 className="mb-3 text-xl font-bold text-[#246b8e]">
            {paso.titulo}
          </h3>

          <p className="leading-relaxed text-gray-600">
            {paso.descripcion}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
        
{/* LLAMADO A LA ACCIÓN */}
<section className="bg-[#246b8e] px-4 py-16 text-center text-white sm:px-6 lg:py-24">
  <div className="mx-auto max-w-4xl">

    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#e0c477]">
      PROPERTY ADVISERS REAL ESTATE
    </p>

    <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
      ¿Estás listo para vender tu propiedad?
    </h2>

    <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
      Permítenos conocer tu propiedad y ayudarte a desarrollar
      una estrategia de venta de acuerdo con tus necesidades
      y las condiciones del mercado inmobiliario.
    </p>
<form
  name="solicitudes-vendedores"
  method="POST"
  action="gracias"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  className="mx-auto mb-8 max-w-2xl rounded-2xl bg-white p-6 text-left shadow-xl"
>
  <input type="hidden" name="form-name" value="solicitudes-vendedores" />

  <p className="hidden">
  <label>
    No llenar este campo:
    <input name="bot-field" />
  </label>
</p>

  <h3 className="mb-2 text-2xl font-bold text-[#246b8e]">
    Cuéntanos sobre tu propiedad
  </h3>

  <p className="mb-6 text-sm text-gray-600">
    Completa la información y nos comunicaremos contigo para orientarte
    sobre los próximos pasos.
  </p>

 <div className="grid gap-4 sm:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-bold text-gray-700">
      Nombre y apellido *
    </label>
    <input
      type="text"
      name="nombre"
      placeholder="Ej. Juan Pérez"
      required
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-gray-700">
      Teléfono *
    </label>
    <input
      type="tel"
      name="telefono"
      placeholder="787-000-0000"
      required
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-gray-700">
      Correo electrónico *
    </label>
    <input
      type="email"
      name="email"
      placeholder="nombre@email.com"
      required
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-bold text-gray-700">
      Municipio de la propiedad *
    </label>
    <input
      type="text"
      name="municipio"
      placeholder="Ej. San Juan"
      required
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
    />
  </div>

</div>
  
 <div className="mt-4">
  <label className="mb-2 block text-sm font-bold text-gray-700">
    Tipo de propiedad *
  </label>
  <select
    name="tipoPropiedad"
    required
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
  >
    <option value="">Selecciona una opción</option>
    <option value="Casa">Casa</option>
    <option value="Apartamento">Apartamento</option>
    <option value="Terreno">Terreno</option>
    <option value="Comercial">Comercial</option>
    <option value="Multifamiliar">Multifamiliar</option>
    <option value="Otro">Otro</option>
  </select>
</div>

<div className="mt-4">
  <label className="mb-2 block text-sm font-bold text-gray-700">
    Motivo de venta
  </label>
  <select
    name="motivoVenta"
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
  >
    <option value="">Selecciona una opción</option>
    <option value="Venta regular">Venta regular</option>
    <option value="Herencia o sucesión">Herencia o sucesión</option>
    <option value="Mudanza">Mudanza</option>
    <option value="Dificultad con pagos">Dificultad con pagos</option>
    <option value="Inversión">Inversión</option>
    <option value="Otro">Otro</option>
  </select>
</div>

<div className="mt-4">
  <label className="mb-2 block text-sm font-bold text-gray-700">
    Precio esperado de venta
  </label>
  <input
    type="text"
    name="precio"
    placeholder="Opcional"
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
  />
</div>

<div className="mt-4">
  <label className="mb-2 block text-sm font-bold text-gray-700">
    Información adicional
  </label>
  <textarea
    name="mensaje"
    placeholder="Cuéntanos cualquier detalle adicional sobre la propiedad"
    rows={4}
    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
  />
</div>
  <button
    type="submit"
    className="mt-5 w-full rounded-xl bg-[#e0c477] px-8 py-4 font-bold text-[#246b8e] shadow-md transition hover:opacity-90"
  >
    ENVIAR INFORMACIÓN
  </button>
</form>
    
    <a
      href="https://wa.me/17873935871?text=Hola%2C%20deseo%20vender%20mi%20propiedad%20y%20recibir%20orientaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-[#1da851] sm:w-auto"
    >
      SOLICITAR ORIENTACIÓN POR WHATSAPP
    </a>

    <p className="mt-6 text-sm text-white/80">
      Tu hogar, tu vida, nuestra misión.
    </p>

  </div>
</section>     
      
      </main>

    </div>
  )
}
