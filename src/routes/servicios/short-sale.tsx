
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

{/* PORTADA SHORT SALE */}
<section
  className="relative flex min-h-[560px] items-center bg-cover bg-center py-20 sm:min-h-[620px]"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(4,30,51,0.96) 0%, rgba(4,30,51,0.82) 42%, rgba(4,30,51,0.12) 100%), url('/images/short-sale-banner.jpg')",
  }}
>
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
    <div className="max-w-2xl">
      <p className="mb-5 font-semibold tracking-widest text-[#e0ad48]">
        SERVICIOS / SHORT SALE
      </p>

      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
        Short Sale en
        <span className="block text-[#e0ad48]">
          Puerto Rico
        </span>
      </h1>

      <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
        ¿Tu hipoteca se ha convertido en una carga?
      </h2>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
        Un Short Sale podría ser una alternativa antes de una
        ejecución hipotecaria. En Property Advisers Real Estate
        te orientamos, analizamos tu situación y te acompañamos
        durante el proceso de venta.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#evaluacion"
          className="rounded-lg bg-[#e0ad48] px-6 py-4 text-center font-bold text-[#09243e] transition hover:bg-[#f1c66a]"
        >
          EVALUAR MI CASO
        </a>

        <a
          href="#contacto"
          className="rounded-lg border-2 border-white px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#09243e]"
        >
          HABLAR POR WHATSAPP
        </a>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}
