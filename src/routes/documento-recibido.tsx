import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documento-recibido')({
  component: DocumentoRecibidoPage,
})

function DocumentoRecibidoPage() {
  return (
    <div className="min-h-screen bg-[#0f3d2e] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a646]/20">
          <span className="text-3xl text-[#c9a646]">✓</span>
        </div>

        <h1 className="mb-3 text-3xl font-black text-[#071a32]">
          ¡Documento recibido!
        </h1>

        <p className="mb-2 text-gray-600">
          Tu documento fue enviado correctamente y asociado a tu expediente.
        </p>

        <p className="mb-8 text-sm text-gray-500">
          Nuestro equipo de Property Advisers ha sido notificado.
        </p>

        <Link
          to="/mi-caso/dashboard"
          hash="documentos"
          className="block w-full rounded-xl bg-[#c9a646] px-6 py-4 font-black text-[#071a32]"
        >
          VOLVER A MI CASO
        </Link>

      </div>
    </div>
  )
}
