import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gracias')({
  component: GraciasPage,
})

function GraciasPage() {
  return (
    <div className="min-h-screen bg-[#0f3d2e] text-white flex items-center justify-center px-6">
      <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c9a646]/20 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9a646"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="text-3xl font-black mb-2 text-[#0f3d2e]">¡Gracias!</h1>
        <p className="text-gray-600 mb-6">
          Recibimos tu solicitud y te estaremos contactando pronto.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/17873935871"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-[#c9a646] text-black font-bold hover:brightness-110 transition"
          >
            Ir a WhatsApp
          </a>
          <Link
            to="/"
            className="px-6 py-3 rounded-full border-2 border-[#0f3d2e] text-[#0f3d2e] font-bold hover:bg-[#0f3d2e] hover:text-white transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
