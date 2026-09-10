import type { Config, Context } from '@netlify/functions'

const escaparHtml = (texto: string) =>
  texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 })
  }

  try {
    const {
      emailCliente,
      nombreCliente,
      numeroCaso,
      mensajeCliente,
      documentos,
    } = await req.json()

    if (!emailCliente || !numeroCaso) {
      return Response.json(
        { error: 'Falta el email del cliente o el número de caso.' },
        { status: 400 },
      )
    }

    if (!Array.isArray(documentos) || documentos.length === 0) {
      return Response.json(
        { error: 'Debes seleccionar al menos un documento.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return Response.json(
        { error: 'RESEND_API_KEY no está configurada.' },
        { status: 500 },
      )
    }

    const listaDocumentos = documentos
      .map((documento: string) => `<li>${escaparHtml(documento)}</li>`)
      .join('')

    const mensaje = mensajeCliente
      ? escaparHtml(mensajeCliente).replace(/\n/g, '<br />')
      : 'Para continuar trabajando su expediente, necesitamos recibir los siguientes documentos:'

    const respuesta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Property Advisers Real Estate <onboarding@resend.dev>',
        to: [emailCliente],
        subject: `Documentos requeridos – ${numeroCaso}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Property Advisers Real Estate</h2>

            <p>
              Saludos ${escaparHtml(nombreCliente || 'cliente')},
            </p>

            <p>${mensaje}</p>

            <p><strong>Documentos requeridos:</strong></p>

            <ul>
              ${listaDocumentos}
            </ul>

            <p>
              Número de expediente:
              <strong>${escaparHtml(numeroCaso)}</strong>
            </p>

            <p>
              Gracias,<br />
              Property Advisers Real Estate<br />
              Tu hogar, tu vida, nuestra misión.
            </p>
          </div>
        `,
      }),
    })

    const resultado = await respuesta.json()

    if (!respuesta.ok) {
      console.error('Error de Resend:', resultado)

      return Response.json(
        {
          error: 'No se pudo enviar la solicitud.',
          detalle: resultado,
        },
        { status: respuesta.status },
      )
    }

    return Response.json({
      enviado: true,
      resultado,
    })
  } catch (error) {
    console.error('Error enviando solicitud de documentos:', error)

    return Response.json(
      { error: 'Ocurrió un error enviando la solicitud.' },
      { status: 500 },
    )
  }
}

export const config: Config = {
  path: '/api/solicitud-documentos',
}
