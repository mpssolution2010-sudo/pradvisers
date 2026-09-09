import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

type Attachment = {
  id: string
  filename: string
  content_type?: string
}

type EmailReceivedEvent = {
  type: string
  created_at?: string
  data?: {
    email_id?: string
    from?: string
    to?: string[]
    subject?: string
    attachments?: Attachment[]
  }
}

const obtenerNumeroCaso = (texto: string) => {
  const coincidencia = texto.match(/PA-\d{4}-\d{4}/i)
  return coincidencia?.[0]?.toUpperCase() ?? null
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return Response.json(
      { error: 'Método no permitido' },
      { status: 405 },
    )
  }

  const evento = (await req.json()) as EmailReceivedEvent

  if (evento.type !== 'email.received') {
    return Response.json({
      recibido: true,
      ignorado: true,
    })
  }

  const subject = evento.data?.subject ?? ''
  const numeroCaso = obtenerNumeroCaso(subject)

  if (!numeroCaso) {
    return Response.json(
      {
        recibido: true,
        registrado: false,
        motivo: 'No se encontró número de caso en el asunto',
      },
      { status: 200 },
    )
  }

  const attachments = evento.data?.attachments ?? []

  const store = getStore('emails-documentos-property-advisers', {
    consistency: 'strong',
  })

  await store.setJSON(`${numeroCaso}/${evento.data?.email_id}`, {
    numeroCaso,
    emailId: evento.data?.email_id ?? null,
    remitente: evento.data?.from ?? null,
    asunto: subject,
    recibidoEn: evento.created_at ?? new Date().toISOString(),
    adjuntos: attachments.map((archivo) => ({
      id: archivo.id,
      nombre: archivo.filename,
      tipo: archivo.content_type ?? null,
    })),
  })

  return Response.json({
    recibido: true,
    registrado: true,
    numeroCaso,
    cantidadAdjuntos: attachments.length,
  })
}

export const config: Config = {
  path: '/api/email-documentos',
}
