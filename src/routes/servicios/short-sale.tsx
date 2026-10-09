
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/servicios/short-sale')({
  component: ShortSalePage,
});

function ShortSalePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#09243e]">
      {/* ENCABEZADO */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" aria-label="Property Advisers - Inicio">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="h-auto w-40 sm:w-48"
            />
          </a>

          <a
            href="/"
            className="rounded-lg border border-[#246b8e] px-4 py-2 text-sm font-bold text-[#246b8e] transition hover:bg-[#246b8e] hover:text-white"
          >
            INICIO
          </a>
        </div>
      </header>

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-semibold text-[#d9aa49]">
          PROPERTY ADVISERS REAL ESTATE
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          ¿Tu hipoteca se ha convertido en una carga?
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          Un Short Sale podría ser una alternativa antes de una
          ejecución hipotecaria. En Property Advisers Real Estate
          te orientamos y acompañamos durante el proceso para
          evaluar tus opciones.
        </p>

        <a
          href="#evaluacion"
          className="mt-8 inline-block rounded-lg bg-[#d9aa49] px-6 py-3 font-bold text-[#09243e] transition hover:bg-[#c99a39]"
        >
          EVALUAR MI CASO
        </a>
      </section>
    </main>
  );
}
