import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mi-caso')({
  component: MiCaso,
})

const whatsappLink =
  'https://wa.me/17873935871?text=Saludos%2C%20necesito%20ayuda%20con%20el%20Portal%20del%20Cliente'

function MiCaso() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          <a href="/" className="flex items-center">
            <img
              src="/images/LOGO TU HOGAR, TU VIDA, NUESTRA MISION.png"
              alt="Property Advisers Real Estate"
              className="w-40 sm:w-48 lg:w-56 h-auto"
            />
          </a>

          <div className="flex items-center gap-4">

            <a
              href="/"
              className="hidden sm:inline text-sm font-bold text-[#071a32] hover:text-[#c9a646] transition"
            >
              VOLVER AL INICIO
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 transition"
            >
              WHATSAPP
            </a>

          </div>
        </div>
      </header>

      {/* PORTAL */}
      <main className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071a32] via-[#0b294d] to-[#103d68]" />

        <div className="relative max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* INFORMACIÓN */}
            <section className="text-white">

              <p className="text-[#d4af57] uppercase tracking-[0.22em] text-sm font-bold mb-4">
                Portal del Cliente
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Tu caso, siempre
                <span className="block text-[#d4af57]">
                  bajo control.
                </span>
              </h1>

              <p className="text-lg text-white/80 max-w-xl leading-relaxed mb-10">
                Accede al seguimiento de tu proceso inmobiliario, consulta
                documentos, conoce el progreso de cada etapa y mantente
                comunicado con Property Advisers.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 max-w-xl">

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-black mb-1">
                    Estatus de tu caso
                  </h3>
                  <p className="text-sm text-white/70">
                    Sigue cada etapa de tu proceso inmobiliario.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <div className="text-3xl mb-3">📄</div>
                  <h3 className="font-black mb-1">
                    Documentos
                  </h3>
                  <p className="text-sm text-white/70">
                    Consulta y comparte documentos importantes.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-black mb-1">
                    Comunicación
                  </h3>
                  <p className="text-sm text-white/70">
                    Mantente comunicado con tu equipo.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-black mb-1">
                    Acceso privado
                  </h3>
                  <p className="text-sm text-white/70">
                    Cada cliente tendrá acceso exclusivo a su caso.
                  </p>
                </div>

              </div>
            </section>

            {/* LOGIN */}
            <section className="w-full max-w-md mx-auto lg:ml-auto">

              <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-9">

                <div className="text-center mb-8">

                  <div className="w-16 h-16 rounded-full bg-[#f7f2e6] text-[#c9a646] flex items-center justify-center text-3xl mx-auto mb-4">
                    👤
                  </div>

                  <p className="text-[#c9a646] uppercase tracking-widest text-xs font-black mb-2">
                    Property Advisers
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#071a32]">
                    Inicia sesión
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Accede al estatus de tu caso.
                  </p>

                </div>

                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="space-y-5"
                >

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-[#071a32] mb-2"
                    >
                      Correo electrónico
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="nombre@correo.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#c9a646] focus:ring-2 focus:ring-[#c9a646]/20"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between gap-3 mb-2">

                      <label
                        htmlFor="password"
                        className="block text-sm font-bold text-[#071a32]"
                      >
                        Contraseña
                      </label>

                      <button
                        type="button"
                        className="text-xs font-bold text-[#246b8e] hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>

                    </div>

                    <input
                      id="password"
                      type="password"
                      placeholder="Tu contraseña"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#c9a646] focus:ring-2 focus:ring-[#c9a646]/20"
                    />
                  </div>

                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" />
                    Recordarme
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#071a32] text-white py-3.5 font-black hover:bg-[#0b294d] transition"
                  >
                    INICIAR SESIÓN
                  </button>

                </form>

                <div className="mt-7 pt-6 border-t border-gray-200 text-center">

                  <p className="text-sm text-gray-500">
                    ¿Aún no tienes acceso?
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-[#246b8e] font-bold hover:underline"
                  >
                    Comunícate con Property Advisers
                  </a>

                </div>

                <div className="mt-6 rounded-xl bg-[#f7f2e6] p-4 flex gap-3">
                  <span>🔐</span>

                  <div>
                    <p className="text-sm font-black text-[#071a32]">
                      Portal privado
                    </p>

                    <p className="text-xs text-gray-600 mt-1">
                      Tu información será accesible únicamente mediante una
                      cuenta autorizada.
                    </p>
                  </div>
                </div>

              </div>

            </section>

          </div>
        </div>
      </main>

      {/* BARRA DE CONFIANZA */}
      <section className="bg-[#071a32] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-white">

          <div>
            <p className="text-[#d4af57] font-black">
              🔒 PRIVACIDAD
            </p>
            <p className="text-white/60 text-sm mt-1">
              Acceso privado a tu información.
            </p>
          </div>

          <div>
            <p className="text-[#d4af57] font-black">
              📍 PUERTO RICO
            </p>
            <p className="text-white/60 text-sm mt-1">
              Conocimiento del mercado local.
            </p>
          </div>

          <div>
            <p className="text-[#d4af57] font-black">
              🤝 ACOMPAÑAMIENTO
            </p>
            <p className="text-white/60 text-sm mt-1">
              Seguimiento durante tu proceso.
            </p>
          </div>

          <div>
            <p className="text-[#d4af57] font-black">
              💬 SOPORTE
            </p>
            <p className="text-white/60 text-sm mt-1">
              Estamos disponibles para ayudarte.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 justify-between sm:items-center">

          <p className="text-sm text-gray-500">
            © 2026 Property Advisers Real Estate.
          </p>

          <p className="text-sm font-bold text-[#071a32]">
            Tu hogar, tu vida, nuestra misión.
          </p>

        </div>
      </footer>

    </div>
  )
}
