import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Property Advisers Real Estate | Orientación Inmobiliaria',
      },
      {
        name: 'description',
        content:
          'Property Advisers Real Estate — Orientación profesional gratuita para vender, comprar o alquilar propiedades en Puerto Rico. Herederos, sucesiones y short sale.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
  const abrirInvitacion = async () => {
    if (!window.location.hash.includes('invite_token=')) return

    const modulo = await import('netlify-identity-widget')
    const netlifyIdentity = modulo.default

    netlifyIdentity.init()
    netlifyIdentity.open('signup')
  }

  abrirInvitacion()
}, [])
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
