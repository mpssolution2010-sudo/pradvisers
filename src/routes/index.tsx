// Homepage 2026 - Property Advisers
import { createFileRoute } from '@tanstack/react-router'
import SurveyForm from '../components/SurveyForm'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    title: 'Venta de propiedades',
    description:
      'Estrategia, orientación y representación para vender tu propiedad con confianza.',
  },
  {
    title: 'Compra de propiedades',
    description:
      'Te ayudamos a identificar oportunidades y tomar decisiones informadas.',
  },
  {
    title: 'Alquileres',
    description:
      'Encuentra una propiedad adecuada o recibe apoyo para colocar tu propiedad en el mercado.',
  },
  {
    title: 'Herencias y sucesiones',
    description:
      'Orientación inmobiliaria para propiedades relacionadas con procesos sucesorales.',
  },
  {
    title: 'Short Sale',
    description:
      'Acompañamiento en ventas cortas y procesos de negociación con instituciones financieras.',
  },
  {
    title: 'Estudios de mercado',
    description:
      'Análisis comparativo de mercado para ayudarte a conocer el posicionamiento de una propiedad.',
  },
]

const whatsappLink =
  'https://wa.me/17873935871?text=Saludos%2C%20deseo%20orientaci%C3%B3n%20inmobiliaria'

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">

      {/* HEADER PROPERTY ADVISERS 2026 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          {/* LOGO */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="w-40 sm:w-48 lg:w-56 h-auto"
            />
          </a>

          {/* MENÚ */}
          <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-bold text-[#246b8e]">

            <a href="#inicio" className="hover:text-[#f5b51b] transition">
              INICIO
            </a>

            <a href="#propiedades" className="hover:text-[#f5b51b] transition">
              PROPIEDADES
            </a>

            <a href="#comprar" className="hover:text-[#f5b51b] transition">
              COMPRAR
            </a>

            <a href="#vender" className="hover:text-[#f5b51b] transition">
              VENDER
            </a>

            <a href="#servicios" className="hover:text-[#f5b51b] transition">
              SERVICIOS
            </a>

            <a href="#herencias" className="hover:text-[#f5b51b] transition">
              HERENCIAS
            </a>

            <a href="#nosotros" className="hover:text-[#f5b51b] transition">
              NOSOTROS
            </a>

            <a href="#contacto" className="hover:text-[#f5b51b] transition">
              CONTACTO
            </a>

          </nav>

          {/* WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 transition"
          >
            <span className="text-lg">●</span>

            <span className="hidden xl:inline">
              WHATSAPP 787-393-5871
            </span>

            <span className="xl:hidden">
              WHATSAPP
            </span>
          </a>

        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-[#071a32] via-[#0b294d] to-[#103d68] text-white px-6 py-20 sm:py-28"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.22em] text-[#d4af57] text-xs sm:text-sm font-bold mb-5">
              Property Advisers Real Estate • Puerto Rico
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Tu hogar.
              <span className="block text-[#d4af57]">
                Tu vida. Nuestra misión.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-6 leading-relaxed">
              Más que una propiedad, te ayudamos a tomar decisiones
              inmobiliarias con estrategia, orientación y conocimiento del
              mercado de Puerto Rico.
            </p>

            <p className="text-base sm:text-lg text-white/75 max-w-2xl mb-8">
              Compra, vende, alquila o evalúa tus opciones inmobiliarias con
              el respaldo de Property Advisers Real Estate.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#contacto"
                className="px-6 py-3 rounded-full bg-white text-[#071a32] font-bold hover:bg-gray-100 transition"
              >
                QUIERO COMPRAR
              </a>

              <a
                href="#contacto"
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
                HABLAR POR WHATSAPP
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* NECESIDADES */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#c9a646] font-bold uppercase tracking-widest text-sm mb-2">
              ¿Qué necesitas?
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-[#071a32] mb-4">
              Estamos aquí para ayudarte
            </h2>

            <p className="text-gray-600">
              Selecciona el camino que mejor representa tu necesidad
              inmobiliaria.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <a
              href="#contacto"
              className="group rounded-2xl bg-[#f5f5f5] border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-black text-[#071a32] mb-2">
                Quiero comprar
              </h3>
              <p className="text-gray-600 text-sm">
                Encuentra una propiedad que responda a tus necesidades.
              </p>
            </a>

            <a
              href="#contacto"
              className="group rounded-2xl bg-[#f5f5f5] border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-black text-[#071a32] mb-2">
                Quiero vender
              </h3>
              <p className="text-gray-600 text-sm">
                Conoce las opciones para posicionar tu propiedad en el mercado.
              </p>
            </a>

            <a
              href="#contacto"
              className="group rounded-2xl bg-[#f5f5f5] border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-black text-[#071a32] mb-2">
                Quiero alquilar
              </h3>
              <p className="text-gray-600 text-sm">
                Orientación para propietarios e interesados en alquiler.
              </p>
            </a>

            <a
              href="#contacto"
              className="group rounded-2xl bg-[#f5f5f5] border border-gray-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-xl font-black text-[#071a32] mb-2">
                Tengo una sucesión
              </h3>
              <p className="text-gray-600 text-sm">
                Orientación inmobiliaria para propiedades en procesos
                sucesorales.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="px-6 py-20 bg-[#071a32] text-white">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

          <div>
            <p className="text-[#d4af57] font-bold uppercase tracking-widest text-sm mb-3">
              Property Advisers Real Estate
            </p>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
              No se trata solamente de una propiedad.
              <span className="block text-[#d4af57]">
                Se trata de tomar buenas decisiones.
              </span>
            </h2>

            <p className="text-white/80 leading-relaxed mb-5">
              En Property Advisers Real Estate entendemos que una decisión
              inmobiliaria puede representar una de las decisiones más
              importantes para una familia, un propietario o un inversionista.
            </p>

            <p className="text-white/80 leading-relaxed">
              Nuestro enfoque combina orientación, estrategia, conocimiento
              del mercado y atención personalizada para ayudarte a avanzar
              con mayor claridad y confianza.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
              <p className="text-[#d4af57] text-3xl font-black mb-2">
                +14
              </p>
              <p className="font-bold">
                Años de experiencia
              </p>
              <p className="text-white/60 text-sm mt-2">
                Experiencia en el sector inmobiliario.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
              <p className="text-[#d4af57] text-3xl font-black mb-2">
                PR
              </p>
              <p className="font-bold">
                Conocimiento local
              </p>
              <p className="text-white/60 text-sm mt-2">
                Enfoque en el mercado de Puerto Rico.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
              <p className="text-[#d4af57] text-3xl font-black mb-2">
                01
              </p>
              <p className="font-bold">
                Atención personalizada
              </p>
              <p className="text-white/60 text-sm mt-2">
                Cada cliente tiene necesidades diferentes.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
              <p className="text-[#d4af57] text-3xl font-black mb-2">
                360°
              </p>
              <p className="font-bold">
                Orientación integral
              </p>
              <p className="text-white/60 text-sm mt-2">
                Desde la orientación hasta el cierre.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#c9a646] font-bold uppercase tracking-widest text-sm mb-2">
              Nuestros servicios
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-[#071a32] mb-4">
              Soluciones inmobiliarias
            </h2>

            <p className="text-gray-600">
              Servicios diseñados para acompañarte en diferentes etapas de tu
              proceso inmobiliario.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-[#f5f5f5] p-7 border-t-4 border-[#c9a646] hover:shadow-xl transition"
              >
                <h3 className="font-black text-xl text-[#071a32] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* POR QUÉ PROPERTY ADVISERS */}
      <section className="px-6 py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#c9a646] font-bold uppercase tracking-widest text-sm mb-2">
            Nuestra diferencia
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#071a32] mb-10">
            ¿Por qué Property Advisers?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-black text-[#071a32] mb-2">
                Estrategia
              </h3>
              <p className="text-gray-600 text-sm">
                Analizamos tu situación antes de recomendar un camino.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-black text-[#071a32] mb-2">
                Cercanía
              </h3>
              <p className="text-gray-600 text-sm">
                Comunicación clara y atención personalizada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-black text-[#071a32] mb-2">
                Información
              </h3>
              <p className="text-gray-600 text-sm">
                Utilizamos información del mercado para orientar decisiones.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-black text-[#071a32] mb-2">
                Confianza
              </h3>
              <p className="text-gray-600 text-sm">
                Nuestro objetivo es proteger los intereses de nuestros clientes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#c9a646] font-bold uppercase tracking-widest text-sm mb-2">
              Nuestro proceso
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-[#071a32] mb-4">
              Así comenzamos
            </h2>

            <p className="text-gray-600">
              Un proceso sencillo para entender tu necesidad y definir el
              próximo paso.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#071a32] text-white flex items-center justify-center font-black text-xl mb-4">
                1
              </div>
              <h3 className="font-black text-[#071a32] mb-2">
                Orientación
              </h3>
              <p className="text-gray-600 text-sm">
                Conocemos tu situación y tus objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#071a32] text-white flex items-center justify-center font-black text-xl mb-4">
                2
              </div>
              <h3 className="font-black text-[#071a32] mb-2">
                Estrategia
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluamos opciones y definimos un plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#071a32] text-white flex items-center justify-center font-black text-xl mb-4">
                3
              </div>
              <h3 className="font-black text-[#071a32] mb-2">
                Gestión
              </h3>
              <p className="text-gray-600 text-sm">
                Te acompañamos durante el proceso.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#071a32] text-white flex items-center justify-center font-black text-xl mb-4">
                4
              </div>
              <h3 className="font-black text-[#071a32] mb-2">
                Resultado
              </h3>
              <p className="text-gray-600 text-sm">
                Avanzamos hacia el cierre o próximo paso.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section
        id="contacto"
        className="px-6 py-20 bg-[#071a32] relative"
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

          <div className="text-white">

            <p className="text-[#d4af57] font-bold uppercase tracking-widest text-sm mb-3">
              Hablemos
            </p>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-6">
              ¿Cuál es tu próximo paso inmobiliario?
            </h2>

            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Déjanos tus datos y cuéntanos qué necesitas. Comenzaremos con
              una orientación para entender mejor tu situación.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:brightness-110 transition"
            >
              ESCRIBIR POR WHATSAPP
            </a>

          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">

            <h3 className="text-2xl sm:text-3xl font-black text-[#071a32] mb-2">
              Solicita orientación
            </h3>

            <p className="text-gray-600 mb-6">
              Completa el formulario y un asesor se comunicará contigo.
            </p>

            <SurveyForm />

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white px-6 py-12">

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

          <div>
            <p className="font-black text-xl mb-2">
              PROPERTY ADVISERS
            </p>

            <p className="text-[#d4af57] text-sm tracking-widest mb-4">
              REAL ESTATE
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Tu hogar, tu vida, nuestra misión.
            </p>
          </div>

          <div>
            <p className="font-bold mb-3">
              Contacto
            </p>

            <p className="text-white/70 text-sm mb-2">
              Puerto Rico
            </p>

            <p className="text-white/70 text-sm mb-2">
              Tel: 787-393-5871
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#d4af57] text-sm hover:underline"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <p className="font-bold mb-3">
              Enlaces
            </p>

            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="#inicio" className="hover:text-white">
                Inicio
              </a>

              <a href="#servicios" className="hover:text-white">
                Servicios
              </a>

              <a href="#nosotros" className="hover:text-white">
                Nosotros
              </a>

              <a href="#contacto" className="hover:text-white">
                Contacto
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 text-center">

          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Property Advisers Real Estate.
            Todos los derechos reservados.
          </p>

        </div>

      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatea por WhatsApp al 787-393-5871"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      >

        <span
          aria-hidden="true"
          className="hidden sm:inline-block bg-white text-[#071a32] text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
        >
          ¡Escríbenos! 787-393-5871
        </span>

        <span className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">

          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" />

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative w-7 h-7"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.4 0 .03 5.37.03 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.96 11.96 0 0 0 5.81 1.48h.01c6.6 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.2-3.47-8.4A11.77 11.77 0 0 0 12.02 0Zm0 21.8h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.68.96.98-3.59-.23-.37a9.79 9.79 0 0 1-1.5-5.24c0-5.42 4.41-9.83 9.83-9.83 2.62 0 5.09 1.02 6.94 2.88a9.74 9.74 0 0 1 2.88 6.95c0 5.42-4.41 9.82-9.84 9.82Zm5.39-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
          </svg>

        </span>

      </a>

    </div>
  )
}

