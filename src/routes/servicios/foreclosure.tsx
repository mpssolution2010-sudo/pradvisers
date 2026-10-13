
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
    </main>
  );
}
