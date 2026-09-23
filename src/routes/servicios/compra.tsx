
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/compra')({
  component: CompraPage,
})

function CompraPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#071a32]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" aria-label="Regresar al inicio">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          <a
            href="/"
            className="rounded-full border border-[#c9a646] px-4 py-2 text-sm font-bold"
          >
            INICIO
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#071a32] px-6 py-20 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#c9a646]">
              PROPERTY ADVISERS REAL ESTATE
            </p>

            <h1 className="mb-6 text-4xl font-black sm:text-5xl">
            Compra tu propiedad con un corredor que represente tus intereses.
            </h1>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-gray-200">
             En Property Advisers Real Estate te ofrecemos representación exclusiva como comprador, protegiendo tus intereses y acompañándote desde la búsqueda de tu propiedad hasta el cierre de la transacción. 
            </p>

            <a
              href="#contacto"
              className="inline-block rounded-full bg-[#c9a646] px-8 py-4 font-bold text-[#071a32]"
            >
              SOLICITAR CONSULTA DE REPRESENTACIÓN
            </a>
            
            <div className="mt-4">
  <a
    href="#contratacion"
    className="inline-block rounded-full border-2 border-[#c9a646] px-6 py-4 text-sm font-bold text-white hover:bg-[#c9a646] hover:text-[#071a32]"
  >
    QUIERO CONTRATAR UN AGENTE EXCLUSIVO
  </a>
</div>
            
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-black">
              ¿Por qué necesitas un agente representante del comprador?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  titulo: 'Representamos tus intereses como comprador',
                  descripcion:
                    'Al contratarnos como tu corredor representante excusivo,contarás con orientación profesional enfocada en tus necesidades y objetivos de compra, conforme a los términos de nuestro acuerdo de representación.',
                },
                {
                  titulo: 'Búsqueda estratégica y asesoramiento personalizado',
                  descripcion:
                    'Identificamos propiedades que respondan a tus necesidades y presupuesto. Te orientamos sobre las alternativas disponibles, coordinamos visitas y te ayudamos a evaluar tus opciones para tomar decisiones informadas.',
                },
                {
                  titulo: 'Representación durante la negociación y el cierre',
                  descripcion:
                    'Te orientamos en la preparación y presentación de ofertas, evaluamos contigo las condiciones de compra y coordinamos las estapas de la transacción con los profesionales correspondientes, acompañandote hasta el cierre de tu propiedad.',
                },
              ].map((paso) => (
                <div
                  key={paso.titulo}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-bold">{paso.titulo}</h3>
                  <p className="leading-relaxed text-gray-600">
                    {paso.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] px-6 py-16">
  <div className="mx-auto max-w-5xl">
    <h2 className="mb-6 text-center text-3xl font-black">
      ¿Por qué escoger Property Advisers Real Estate?
    </h2>

    <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-gray-600">
      Tu compra merece atención personalizada. En Property Advisers
      Real Estate te ofrecemos representación profesional enfocada
      en tus intereses, necesidades y objetivos como comprador.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          titulo: 'Representación exclusiva',
          descripcion:
            'Contarás con un corredor dedicado a representar tus intereses como comprador, conforme a los términos de nuestro acuerdo de representación.',
        },
        {
          titulo: 'Conocimiento del mercado inmobiliario',
          descripcion:
            'Te orientamos sobre las propiedades disponibles, sus precios y las condiciones del mercado inmobiliario en Puerto Rico.',
        },
        {
          titulo: 'Atención personalizada',
          descripcion:
            'Conocemos tus necesidades y te acompañamos durante cada etapa del proceso de compra.',
        },
        {
          titulo: 'Orientación y acompañamiento',
          descripcion:
            'Te ayudamos a evaluar alternativas, preparar ofertas y coordinar las etapas de la transacción hasta el cierre.',
        },
      ].map((beneficio) => (
        <div
          key={beneficio.titulo}
          className="rounded-2xl bg-white p-6 shadow-md"
        >
          <h3 className="mb-3 text-xl font-bold">
            {beneficio.titulo}
          </h3>
          <p className="leading-relaxed text-gray-600">
            {beneficio.descripcion}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        <section
  id="contratacion"
  className="bg-[#071a32] px-6 py-16 text-center text-white"
>
  <div className="mx-auto max-w-4xl">
    <h2 className="mb-6 text-3xl font-black sm:text-4xl">
      Contrata tu agente representante exclusivo
    </h2>

    <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-200">
      Al contratar a Property Advisers Real Estate como tu
      corredor representante exclusivo, contarás con un
      profesional dedicado a representar tus intereses
      durante el proceso de compra de tu propiedad.
    </p>

    <div className="mb-8 rounded-2xl bg-white p-6 text-left text-[#071a32]">
      <h3 className="mb-4 text-2xl font-bold">
        ¿Qué incluye nuestra representación?
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>✓ Orientación personalizada durante la compra.</li>
        <li>✓ Búsqueda de propiedades según tus necesidades.</li>
        <li>✓ Coordinación de visitas y evaluación de opciones.</li>
        <li>✓ Asistencia en la preparación y presentación de ofertas.</li>
        <li>✓ Acompañamiento durante la negociación y el cierre.</li>
      </ul>
    </div>

    <p className="mb-8 text-gray-200">
      Antes de formalizar tu representación, te explicaremos
      los términos del acuerdo, su duración, los servicios
      incluidos y las condiciones de compensación aplicables.
    </p>

    <a
      href="#contacto"
      className="inline-block rounded-full bg-[#c9a646] px-8 py-4 font-bold text-[#071a32]"
    >
      INICIAR MI PROCESO DE CONTRATACIÓN
    </a>
  </div>
</section>    
        
        <section id="contacto" className="bg-white px-6 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-black">
             Tu próxima propiedad comienza con una representación profesional.
            </h2>
            <p className="mb-8 text-gray-600">
              Permítenos conocer tus necesidades y explicarte cómo Property Advisers Real Estate puede representarte exclusivamente durante el proceso de compra. Solicita una consulta personalizada o inicia tu proceso de contratación con nosotros. 
            </p>

              <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-[#f5f5f5] p-6 text-left shadow-md">
  <h3 className="mb-4 text-center text-2xl font-bold">
    Solicita tu consulta de representación
  </h3>

  <p className="mb-6 text-center text-gray-600">
    Completa el formulario para conocer tus necesidades
    e iniciar tu proceso de representación como comprador.
  </p>

  <form
    name="solicitudes-compradores"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={(e) => {
      e.preventDefault();

      const datos = new FormData(e.currentTarget);

      const mensaje = [
        "Hola, deseo solicitar los servicios de Property Advisers Real Estate.",
        "",
        "Nombre: " + datos.get("nombre"),
        "Teléfono: " + datos.get("telefono"),
        "Correo: " + datos.get("correo"),
        "Municipio: " + datos.get("municipio"),
        "Presupuesto: " + datos.get("presupuesto"),
        "Financiamiento: " + datos.get("financiamiento"),
        "Servicio solicitado: " + datos.get("servicio"),
      ].join("\n");

      
fetch("/form-survey.html", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
 
body: new URLSearchParams(
  Array.from(datos.entries()).map(([clave, valor]) => [
    clave,
    String(valor),
  ])
).toString(),
  
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al enviar el formulario");
    }
    alert("¡Solicitud enviada correctamente!");
  })
  .catch(() => {
    alert("No se pudo enviar la solicitud. Inténtalo nuevamente.");
  });
      
    }}
    className="space-y-4"
  >
    <input
      type="hidden"
      name="form-name"
      value="solicitudes-compradores"
      />

    
<p className="hidden">
  <label>
    No completar este campo:
    <input name="bot-field" />
  </label>
</p>
      
    <input
      type="text"
      name="nombre"
      placeholder="Nombre completo"
      required
      className="w-full rounded-lg border p-3"
    />

    <input
      type="tel"
      name="telefono"
      placeholder="Número de teléfono"
      required
      className="w-full rounded-lg border p-3"
    />

    <input
      type="email"
      name="correo"
      placeholder="Correo electrónico"
      required
      className="w-full rounded-lg border p-3"
    />

    <input
      type="text"
      name="municipio"
      placeholder="Municipio donde deseas comprar"
      required
      className="w-full rounded-lg border p-3"
    />

    <select
      name="presupuesto"
      required
      defaultValue=""
      className="w-full rounded-lg border bg-white p-3"
    >
      <option value="" disabled>
        Presupuesto aproximado
      </option>
      <option>Menos de $150,000</option>
      <option>$150,000 a $250,000</option>
      <option>$250,001 a $400,000</option>
      <option>Más de $400,000</option>
      <option>Por definir</option>
    </select>

    <select
      name="financiamiento"
      required
      defaultValue=""
      className="w-full rounded-lg border bg-white p-3"
    >
      <option value="" disabled>
        ¿Cómo financiarás tu compra?
      </option>
      <option>Tengo preaprobación hipotecaria</option>
      <option>Necesito orientación hipotecaria</option>
      <option>Compra en efectivo</option>
      <option>Por definir</option>
    </select>

    <select
      name="servicio"
      required
      defaultValue=""
      className="w-full rounded-lg border bg-white p-3"
    >
      <option value="" disabled>
        ¿Qué servicio deseas solicitar?
      </option>
      <option>Consulta de representación</option>
      <option>Iniciar contratación exclusiva</option>
    </select>

    <button
      type="submit"
      className="w-full rounded-full bg-[#c9a646] px-6 py-4 font-bold text-[#071a32]"
    >
      ENVIAR SOLICITUD POR EMAIL
    </button>
  </form>
</div>             
            
          <a
            href="https://wa.me/17873935871?text=Hola%2C%20me%20interesa%20comprar%20una%20propiedad."
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[#c9a646] px-8 py-4 font-bold text-[#071a32]"
            >
              HABLAR POR WHATSAPP
            </a>
            
          </div>
        </section>
      </main>
    </div>
  )
}
