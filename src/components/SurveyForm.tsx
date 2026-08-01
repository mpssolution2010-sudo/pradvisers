import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'

const interesOptions = [
  'Vender propiedad',
  'Comprar propiedad',
  'Alquilar propiedad',
  'Herederos / sucesión',
  'Short Sale',
  'Estudio de mercado',
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export default function SurveyForm() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [fields, setFields] = useState({
    nombre: '',
    telefono: '',
    email: '',
    interes: '',
    mensaje: '',
    subject: 'Nueva solicitud desde Property Advisers Real Estate',
    'bot-field': '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/form-survey.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contacto', ...fields }),
      })
      navigate({ to: '/gracias' })
    } catch {
      setSubmitting(false)
    }
  }

  return (
    <form
      name="contacto"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contacto" />
      <input
        type="hidden"
        name="subject"
        value="Nueva solicitud desde Property Advisers Real Estate"
      />
      <p className="hidden">
        <label>
          No completar:{' '}
          <input
            name="bot-field"
            value={fields['bot-field']}
            onChange={handleChange}
          />
        </label>
      </p>

      <input
        type="text"
        name="nombre"
        value={fields.nombre}
        onChange={handleChange}
        required
        placeholder="Nombre completo"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]"
      />

      <input
        type="tel"
        name="telefono"
        value={fields.telefono}
        onChange={handleChange}
        required
        placeholder="Teléfono"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]"
      />

      <input
        type="email"
        name="email"
        value={fields.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]"
      />

      <select
        name="interes"
        value={fields.interes}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]"
      >
        <option value="">Tipo de gestión</option>
        {interesOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <textarea
        name="mensaje"
        value={fields.mensaje}
        onChange={handleChange}
        rows={4}
        placeholder="Mensaje"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] resize-none"
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 bg-[#0f3d2e] text-white font-bold rounded-lg hover:bg-[#0a2c20] transition-colors disabled:opacity-60"
      >
        {submitting ? 'Enviando…' : 'Enviar solicitud'}
      </button>
    </form>
  )
}
