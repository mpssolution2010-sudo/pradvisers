
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/herencias')({
  component: HerenciasPage,
})

function HerenciasPage() {
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
              ¿Heredaste una propiedad y no sabes por dónde comenzar?
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Te orientamos durante el proceso inmobiliario de una propiedad heredada
              en Puerto Rico, ayudándote a identificar los pasos necesarios para
              prepararla y llevarla a una posible venta.
            </p>

            <a
              href="https://wa.me/17873935871?text=Hola%2C%20deseo%20orientaci%C3%B3n%20sobre%20una%20propiedad%20heredada%20y%20los%20servicios%20de%20Property%20Advisers%20Real%20Estate."
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#1da851]"
            >
              QUIERO ORIENTACIÓN SOBRE MI HERENCIA
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
        ¿Cómo te ayudamos con una propiedad heredada?
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Ofrecemos orientación y representación inmobiliaria
        durante las diferentes etapas del proceso de venta.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
        titulo: "Orientación inicial del caso",
        descripcion:
           "Evaluamos la situación de la propiedad heredada y te orientamos sobre los próximos pasos para prepararla para una posible venta.",
        },
        {
          
          icono: "📸",
          titulo: "Identificación de la situación sucesoral",
          descripcion:
             "Identificamos contigo la información disponible sobre la sucesión, los herederos y la propiedad para determinar qué pasos deben atenderse antes de la venta.",
        },
        {
          icono: "📢",
         titulo: "Evaluación de la propiedad",
        descripcion:
        "Analizamos la propiedad, su ubicación y las condiciones del mercado para establecer una estrategia adecuada de comercialización y venta.",
        },
        {
          icono: "🏡",
          titulo: "Presentación de la propiedad",
          titulo: "Coordinación del proceso",
          descripcion:
             "Te acompañamos en la coordinación de los pasos necesarios y, cuando corresponda, con los profesionales que intervienen en el proceso sucesoral e inmobiliario.",
        },
        {
          icono: "🤝",
          titulo: "Preparación para la venta",
          descripcion:
              "Una vez la propiedad esté en condiciones para venderse, desarrollamos la estrategia de precio, mercadeo y presentación para atraer compradores.",
        },
        {
          icono: "🔑",
          titulo: "Venta y acompañamiento hasta el cierre",
          descripcion:
              "Mercadeamos la propiedad, atendemos compradores, presentamos ofertas y te acompañamos durante la transacción hasta el cierre de la compraventa.",
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
        Tu propiedad heredada, paso a paso
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Te acompañamos desde la orientación inicial de la propiedad heredada
        hasta su preparación, comercialización y cierre de la compraventa.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          numero: "01",
          titulo: "Evaluación inicial",
          descripcion:
            "Conocemos la situación de la propiedad heredada, los herederos involucrados y el objetivo que desean alcanzar con el inmueble.",
        },
        {
          numero: "02",
          titulo: "Preparación del caso",
          descripcion:
             "Identificamos los pasos que deben completarse para que la propiedad pueda estar preparada para su comercialización y venta.",
        },
        {
          numero: "03",
          titulo: "Comercialización de la propiedad",
          descripcion:
              "Una vez la propiedad esté preparada para venderse, la promocionamos, coordinamos visitas y presentamos las ofertas recibidas.",
        },
        {
          numero: "04",
          titulo: "Negociación y cierre",
          descripcion:
                "Te acompañamos en la evaluación de ofertas, las negociaciones y la coordinación de la transacción hasta el cierre de la compraventa.",
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
      ¿Necesitas orientación con una propiedad heredada?
    </h2>

    <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90">
      Permítenos conocer tu situación y la propiedad heredada
      para orientarte sobre los próximos pasos y ayudarte a preparar
      una estrategia para su posible venta.
    </p>

    <a
      href="https://wa.me/17873935871?text=Hola%2C%20deseo%20orientaci%C3%B3n%20sobre%20una%20propiedad%20heredada%20y%20los%20servicios%20de%20Property%20Advisers%20Real%20Estate."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-[#1da851] sm:w-auto"
    >
      SOLICITAR ORIENTACIÓN POR WHATSAPP
    </a>

    <div className="mt-6 grid gap-4 text-left">
  <input
    type="text"
    id="nombreHerencia"
    placeholder="Nombre completo"
    className="w-full rounded-xl border border-white/40 bg-white px-4 py-3 text-gray-900"
  />

  <input
    type="tel"
    id="telefonoHerencia"
    placeholder="Número de teléfono"
    className="w-full rounded-xl border border-white/40 bg-white px-4 py-3 text-gray-900"
  />

  <input
    type="email"
    id="correoHerencia"
    placeholder="Correo electrónico"
    className="w-full rounded-xl border border-white/40 bg-white px-4 py-3 text-gray-900"
  />
</div>

    <textarea
      id="situacionHerencia
  placeholder="Cuéntanos brevemente sobre la propiedad heredada o tu situación"
  rows={4}
  className="w-full rounded-xl border border-white/40 bg-white px-4 py-3 text-gray-900"
/>
    <button
  type="button"
  onClick={() => {
    const nombre = (document.getElementById("nombreHerencia") as HTMLInputElement)?.value || "";
    const telefono = (document.getElementById("telefonoHerencia") as HTMLInputElement)?.value || "";
    const correo = (document.getElementById("correoHerencia") as HTMLInputElement)?.value || "";
    const situacion = (document.getElementById("situacionHerencia") as HTMLTextAreaElement)?.value || "";

    const asunto = "Orientación sobre propiedad heredada";
    const mensaje =
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n` +
      `Correo electrónico: ${correo}\n\n` +
      `Situación:\n${situacion}`;

    window.location.href =
      `mailto:jmlpropertyadviserspr@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
  }}
  className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-center text-base font-bold text-white"
>
  ENVIAR SOLICITUD POR EMAIL
</button>
    
    <p className="mt-6 text-sm text-white/80">
      Tu hogar, tu vida, nuestra misión.
    </p>

  </div>
</section>     
      
      </main>

    </div>
  )
}
