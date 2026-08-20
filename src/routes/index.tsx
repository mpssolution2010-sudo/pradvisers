import { createFileRoute } from '@tanstack/react-router'
import SurveyForm from '../components/SurveyForm'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    title: 'Venta de propiedades',
    description: 'Asesoría completa para vender tu propiedad al mejor precio.',
  },
  {
    title: 'Compra y alquiler',
    description: 'Encuentra la propiedad ideal para invertir o habitar.',
  },
  {
    title: 'Herederos y sucesiones',
    description: 'Gestión profesional de propiedades en proceso sucesoral.',
  },
  {
    title: 'Short Sale',
    description:
      'Acompañamiento experto en ventas cortas y negociación con bancos.',
  },
]

const whatsappLink =
  'https://wa.me/17873935871?text=Saludos%2C%20deseo%20orientaci%C3%B3n%20inmobiliaria'

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">

      {/* HERO 2026 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071a32] via-[#0b294d] to-[#103d68] text-white px-6 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.22em] text-[#d4af57] text-xs sm:text-sm font-bold mb-5">
              Property Advisers Real Estate • Puerto Rico
            </p>

            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              Más que una propiedad.
              <span className="block text-[#d4af57] mt-2">
                Tu próximo hogar en Puerto Rico.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-5">
              Compra, vende o invierte con confianza en Puerto Rico. Te guiamos
              con estrategia, experiencia local y un enfoque claro en tus
              objetivos.
            </p>

            <p className="text-xl sm:text-2xl font-bold text-[#d4af57] mb-8">
              Tu hogar, tu vida, nuestra misión.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#formulario"
                className="px-6 py-3 rounded-full bg-white text-[#071a32] font-bold hover:bg-gray-100 transition"
              >
                QUIERO COMPRAR
              </a>

              <a
                href="#formulario"
                className="px-6 py-3 rounded-full bg-[#c9a646] text-[#071a32] font-bold hover:brightness-110 transition"
              >
                QUIERO VENDER
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#071a32] transition"
              >
                Hablar por WhatsApp
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section
        id="formulario"
        className="px-6 py-16 -mt-10 sm:-mt-14 relative z-10"
      >
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10">

          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f3d2e]">
            Solicita orientación gratuita
          </h2>

          <p className="text-gray-600 mb-6">
            Completa el formulario y un asesor te contactará a la brevedad.
          </p>

          <SurveyForm />

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0f3d2e]">
            Servicios
          </h2>

          <p className="text-gray-600 mb-10">
            Soluciones inmobiliarias adaptadas a cada etapa del proceso.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#f5f5f5] rounded-xl p-6 text-left border-t-4 border-[#c9a646]"
              >
                <h3 className="font-bold text-lg text-[#0f3d2e] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white px-6 py-10 text-center">

        <p className="font-bold text-lg mb-1">
          Property Advisers Real Estate
        </p>

        <p className="text-white/70 text-sm">
          Tel: 787-393-5871
        </p>

        <p className="text-white/50 text-xs mt-4">
          © {new Date().getFullYear()} Property Advisers Real Estate. Todos los
          derechos reservados.
        </p>

      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatea por WhatsApp al 787-393-5871"
        className="fixed bottom-6 right-6 flex items-center gap-2"
      >

        <span
          aria-hidden="true"
          className="hidden sm:inline-block bg-white text-[#0f3d2e] text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-bounce-x"
        >
          ¡Escríbenos! 787-393-5871
        </span>

        <span
          aria-hidden="true"
          className="text-3xl animate-point select-none drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))',
          }}
        >
          👉
        </span>

        <span className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">

          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative w-7 h-7"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.4 0 .03 5.37.03 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.96 11.96 0 0 0 5.81 1.48h.01c6.6 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.2-3.47-8.4ZM12.02 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.68.96.98-3.59-.23-.37a9.79 9.79 0 0 1-1.5-5.24c0-5.42 4.41-9.83 9.83-9.83 2.62 0 5.09 1.02 6.94 2.88a9.74 9.74 0 0 1 2.88 6.95c0 5.42-4.41 9.82-9.84 9.82Zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
          </svg>

        </span>
      </a>

    </div>
  )
}
