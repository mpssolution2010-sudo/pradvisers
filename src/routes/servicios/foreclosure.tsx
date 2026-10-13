
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/servicios/foreclosure')({
  component: ForeclosurePage,
});

function ForeclosurePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#09243e]">
      <header className="border-b border-gray-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" aria-label="Property Advisers - Inicio">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-auto w-40 sm:w-48"
            />
          </a>
          <a href="/" className="rounded-lg border border-[#246b8e] px-4 py-2 font-bold">
            INICIO
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-semibold uppercase tracking-widest text-[#246b8e]">
          Property Advisers Real Estate
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          Foreclosure | Ejecuciones hipotecarias
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          ¿Enfrentas atrasos en tu hipoteca o un posible proceso de
          ejecución hipotecaria? Conocer tus alternativas a tiempo
          puede ayudarte a tomar decisiones informadas.
        </p>
        <p className="mt-5 text-lg leading-relaxed">
          En Property Advisers Real Estate te orientamos sobre
          opciones inmobiliarias para la venta de tu propiedad,
          incluyendo una posible venta tradicional o Short Sale,
          según las circunstancias y los requisitos del acreedor.
        </p>
        <p className="mt-5 text-sm text-gray-600">
          No ofrecemos asesoramiento legal ni garantizamos detener
          una ejecución hipotecaria. Para asuntos legales, consulta
          con un abogado autorizado en Puerto Rico.
        </p>
      </section>

      
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <h2 className="text-3xl font-bold">
          ¿Tienes atrasos en tu hipoteca?
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          Enfrentar dificultades con los pagos hipotecarios
          puede generar incertidumbre. Lo importante es
          conocer tu situación y explorar las alternativas
          disponibles antes de tomar una decisión.
        </p>

        <h2 className="mt-12 text-3xl font-bold">
          Alternativas que puedes explorar
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Venta tradicional
            </h3>
            <p className="mt-3">
              Evaluamos la posibilidad de comercializar
              tu propiedad a un precio competitivo,
              considerando las condiciones del mercado
              y las obligaciones existentes.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Short Sale
            </h3>
            <p className="mt-3">
              Si el balance hipotecario supera el posible
              precio de venta, podemos explorar una venta
              corta, sujeta a la aprobación del acreedor.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-3xl font-bold">
          ¿Cómo podemos ayudarte?
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          En Property Advisers Real Estate ofrecemos
          orientación inmobiliaria, análisis del mercado,
          estrategias de comercialización y coordinación
          del proceso de venta cuando corresponda.
          Las opciones de modificación del préstamo
          u otras alternativas hipotecarias deben
          consultarse directamente con el acreedor
          o un asesor de vivienda autorizado.
        </p>

        <p className="mt-8 rounded-lg bg-white p-5 text-sm text-gray-600">
          Importante: Nuestros servicios son inmobiliarios.
          No ofrecemos representación legal, asesoramiento
          hipotecario ni garantías de detener procedimientos
          de ejecución hipotecaria.
        </p>
      </section>

      
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">
            Solicita orientación inmobiliaria
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Si tienes atrasos hipotecarios o enfrentas una
            posible ejecución hipotecaria, completa este
            formulario para que podamos comunicarnos contigo.
          </p>

         
<form
  name="solicitudes-foreclosure"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.set("form-name", "solicitudes-foreclosure");

    try {
      const response = await fetch("/form-foreclosure.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      window.location.href = "/gracias";
    } catch (error) {
      alert("No se pudo enviar la solicitud. Inténtalo nuevamente.");
    }
  }}
  className="mt-8 space-y-5"
>

            <input
              type="hidden"
              name="form-name"
              value="solicitudes-foreclosure"
            />
  <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              aria-label="Nombre completo"
              required
              className="w-full rounded-lg border p-4"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              aria-label="Teléfono"
              required
              className="w-full rounded-lg border p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              required
              className="w-full rounded-lg border p-4"
            />

            <input
              type="text"
              name="municipio"
              placeholder="Municipio de la propiedad"
              aria-label="Municipio de la propiedad"
              required
              className="w-full rounded-lg border p-4"
            />

            <select
              name="situacion_hipotecaria"
              aria-label="Situación hipotecaria"
              required
              defaultValue=""
              className="w-full rounded-lg border bg-white p-4"
            >
              <option value="" disabled>
                Selecciona tu situación
              </option>
              <option value="atrasos">
                Atrasos hipotecarios
              </option>
              <option value="demanda">
                Demanda de ejecución
              </option>
              <option value="subasta">
                Fecha de subasta
              </option>
              <option value="orientacion">
                Deseo orientación inmobiliaria
              </option>
            </select>

            <textarea
              name="mensaje"
              placeholder="Cuéntanos brevemente tu situación (opcional)"
              aria-label="Mensaje"
              rows={4}
              className="w-full rounded-lg border p-4"
            />

            <p className="text-sm text-gray-600">
              No incluyas números de Seguro Social,
              cuentas bancarias ni documentos confidenciales.
            </p>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#09243e] px-6 py-4 font-bold text-white hover:bg-[#246b8e]"
            >
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
