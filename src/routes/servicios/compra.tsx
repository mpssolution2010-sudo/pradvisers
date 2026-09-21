
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
              Encuentra la propiedad que quieres llamar hogar.
            </h1>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-gray-200">
              Te acompañamos durante el proceso de compra, desde la búsqueda
              de propiedades hasta el cierre de la transacción.
            </p>

            <a
              href="#contacto"
              className="inline-block rounded-full bg-[#c9a646] px-8 py-4 font-bold text-[#071a32]"
            >
              QUIERO COMPRAR
            </a>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-black">
              ¿Cómo te ayudamos a comprar?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  titulo: 'Conocemos tus necesidades',
                  descripcion:
                    'Conversamos sobre tu presupuesto, ubicación y el tipo de propiedad que buscas.',
                },
                {
                  titulo: 'Exploramos tus opciones',
                  descripcion:
                    'Te orientamos en la búsqueda y coordinamos visitas a las propiedades de tu interés.',
                },
                {
                  titulo: 'Te acompañamos al cierre',
                  descripcion:
                    'Te ayudamos a coordinar las etapas de la compraventa con los profesionales correspondientes.',
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

        <section id="contacto" className="bg-white px-6 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-black">
              Comencemos la búsqueda de tu propiedad.
            </h2>
            <p className="mb-8 text-gray-600">
              Cuéntanos qué estás buscando y conversemos sobre tus opciones.
            </p>

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
