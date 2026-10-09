
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/servicios/short-sale')({
  component: ShortSalePage,
});

function ShortSalePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#09243e]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-semibold text-[#d9aa49]">
          PROPERTY ADVISERS REAL ESTATE
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Short Sale en Puerto Rico
        </h1>

        <p className="mt-6 max-w-2xl text-lg">
          ¿Tu hipoteca se ha convertido en una carga?
          Un Short Sale podría ser una alternativa
          antes de una ejecución hipotecaria.
        </p>
      </section>
    </main>
  );
}
