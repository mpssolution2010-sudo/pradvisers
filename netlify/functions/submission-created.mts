import type { Context } from '@netlify/functions'

const RECIPIENT = 'jmlpropertyadviserspr@gmail.com'
const FROM = 'Property Advisers <onboarding@resend.dev>'

interface SubmissionPayload {
  form_name: string
  data: Record<string, string>
  created_at?: string
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const fieldLabels: Record<string, string> = {
  nombre: 'Nombre',
  telefono: 'Teléfono',
  email: 'Email',
  interes: 'Tipo de gestión',
  mensaje: 'Mensaje',
}

export default async (req: Request, _context: Context) => {
  const { payload } = (await req.json()) as { payload: SubmissionPayload }

  if (payload?.form_name !== 'contacto') {
    return new Response('Ignored', { status: 200 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY not set — submission received but email not sent. Configure RESEND_API_KEY in Netlify env vars or enable native email notifications in the Netlify UI.',
    )
    return new Response('Email skipped (no API key)', { status: 200 })
  }

  const data = payload.data ?? {}
  const rows = Object.entries(fieldLabels)
    .filter(([key]) => data[key])
    .map(
      ([key, label]) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;background:#f5f5f5;">${label}</td><td style="padding:6px 12px;">${escapeHtml(data[key])}</td></tr>`,
    )
    .join('')

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111;">
      <h2 style="color:#0f3d2e;">Nueva solicitud — Property Advisers Real Estate</h2>
      <table style="border-collapse:collapse;border:1px solid #e5e5e5;">${rows}</table>
      <p style="color:#666;font-size:12px;margin-top:16px;">Recibido: ${payload.created_at ?? new Date().toISOString()}</p>
    </div>
  `

  const subject =
    data.subject || `Nueva solicitud de ${data.nombre || 'contacto'}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [RECIPIENT],
      subject,
      html,
      reply_to: data.email || undefined,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Resend error:', res.status, text)
    return new Response('Email failed', { status: 500 })
  }

  return new Response('Email sent', { status: 200 })
}
