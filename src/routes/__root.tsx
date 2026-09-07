import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {
  acceptInvite,
  handleAuthCallback,
  updateUser,
} from '@netlify/identity'

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
  const [recuperandoPassword, setRecuperandoPassword] = useState(false)
  const [nuevaPassword, setNuevaPassword] = useState('')
  const [esInvitacion, setEsInvitacion] = useState(false)
  
useEffect(() => {
  const iniciarIdentity = async () => {
    try {

      const resultado = await handleAuthCallback()
      
      if (resultado?.type === 'invite') {
  localStorage.setItem('invite_token', resultado.token)
  setEsInvitacion(true)
  setRecuperandoPassword(true)
}

alert(
  resultado
    ? `Identity detectó: ${resultado.type}`
    : 'Identity no detectó ningún callback',
)

if (resultado?.type === 'recovery') {
  setRecuperandoPassword(true)
}
      const modulo = await import('netlify-identity-widget')
      const netlifyIdentity = modulo.default

      netlifyIdentity.init({
        APIUrl: 'https://propertyadvisers-pr.com/.netlify/identity',
      })
    } catch (error) {
      console.error('Error procesando Identity:', error)
      alert(`Error de Identity: ${String(error)}`)
    }
  }

  iniciarIdentity()
}, [])

  const guardarNuevaPassword = async () => {
  try {
    const inviteToken = localStorage.getItem('invite_token')

if (inviteToken) {
  await acceptInvite(inviteToken, nuevaPassword)
  localStorage.removeItem('invite_token')
} else {
  await updateUser({
    password: nuevaPassword,
  })
}

    alert('Contraseña actualizada correctamente.')
    setRecuperandoPassword(false)
    setNuevaPassword('')
    window.location.href = '/admin'
  } catch (error) {
    console.error('Error actualizando contraseña:', error)
    alert('No se pudo actualizar la contraseña.')
  }
}
  
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {recuperandoPassword && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c9a646]">
        Property Advisers Real Estate
      </p>

  <h2 className="mt-2 text-2xl font-black text-[#071a32]">
  {esInvitacion
    ? 'Crear contraseña de acceso'
    : 'Crear nueva contraseña'}
</h2>

      <input
        type="password"
        value={nuevaPassword}
        onChange={(event) => setNuevaPassword(event.target.value)}
        placeholder="Nueva contraseña"
        className="mt-5 w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <button
        type="button"
        onClick={guardarNuevaPassword}
        className="mt-4 w-full rounded-xl bg-[#071a32] px-5 py-3 font-black text-white"
      >
        GUARDAR CONTRASEÑA
      </button>
    </div>
  </div>
)}
        {children}
        <Scripts />
      </body>
    </html>
  )
}
