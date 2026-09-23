import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '../data/content'

// ─── ContactModal ─────────────────────────────────────────────────────────────
// Formulario de contacto institucional accesible.
// Campos: Nombre, Correo, Teléfono, Select de División, Mensaje.
// Muestra pantalla de confirmación al enviar.

interface ContactModalProps {
  onClose: () => void
}

interface FormState {
  name: string
  email: string
  phone: string
  division: string
  message: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  division: '',
  message: '',
}

export default function ContactModal({ onClose: _ }: ContactModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simula envío (conectar a servicio real en producción)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  // ── Pantalla de confirmación ─────────────────────────────
  if (submitted) {
    return (
      <div className="p-7 md:p-10 flex flex-col items-center justify-center min-h-[380px] text-center">
        <div className="w-14 h-14 rounded-full bg-soft-blush flex items-center justify-center mb-5">
          <span className="text-wine text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-condensed text-2xl font-bold text-[#1A1A1A] mb-2">
          MENSAJE ENVIADO
        </h3>
        <p className="font-sans text-sm text-gray-dark max-w-xs leading-relaxed">
          Un representante institucional del Grupo se comunicará con usted a la brevedad.
        </p>
      </div>
    )
  }

  // ── Formulario ───────────────────────────────────────────
  return (
    <div className="p-6 md:p-8">

      {/* Encabezado */}
      <header className="mb-5 pb-3.5 border-b border-gray-light/60">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark">
            CONTACTO INSTITUCIONAL
          </span>
        </div>
        <h2 className="font-condensed text-2xl md:text-3xl font-bold leading-tight text-[#1A1A1A]">
          CONTACTAR{' '}
          <span className="font-barlow font-semibold italic text-wine">AL GRUPO</span>
        </h2>
      </header>

      {/* Formulario */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3.5 mb-5">

        {/* Fila 1: Nombre + Correo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor="contact-name"
              className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark mb-1"
            >
              Nombre completo *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={set('name')}
              placeholder="Juan Pérez"
              className="
                w-full border border-gray-light rounded-sm
                px-3 py-2 font-sans text-sm text-on-surface
                placeholder:text-gray-light
                focus:outline-none focus:border-wine
                transition-colors duration-150
              "
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark mb-1"
            >
              Correo electrónico *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={set('email')}
              placeholder="juan@empresa.com"
              className="
                w-full border border-gray-light rounded-sm
                px-3 py-2 font-sans text-sm text-on-surface
                placeholder:text-gray-light
                focus:outline-none focus:border-wine
                transition-colors duration-150
              "
            />
          </div>
        </div>

        {/* Fila 2: Teléfono + División */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label
              htmlFor="contact-phone"
              className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark mb-1"
            >
              Teléfono
            </label>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={set('phone')}
              placeholder="+54 9 11 0000-0000"
              className="
                w-full border border-gray-light rounded-sm
                px-3 py-2 font-sans text-sm text-on-surface
                placeholder:text-gray-light
                focus:outline-none focus:border-wine
                transition-colors duration-150
              "
            />
          </div>
          <div>
            <label
              htmlFor="contact-division"
              className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark mb-1"
            >
              División de interés
            </label>
            <select
              id="contact-division"
              value={form.division}
              onChange={set('division')}
              className="
                w-full border border-gray-light rounded-sm
                px-3 py-2 font-sans text-sm
                bg-white focus:outline-none focus:border-wine
                transition-colors duration-150
              "
            >
              <option value="">Seleccionar...</option>
              <option value="real-estate">Real Estate Corporativo</option>
              <option value="inversiones">Inversiones Patrimoniales</option>
              <option value="seguros">Seguros &amp; Coberturas</option>
              <option value="general">Consulta General</option>
            </select>
          </div>
        </div>

        {/* Fila 3: Mensaje */}
        <div>
          <label
            htmlFor="contact-message"
            className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark mb-1"
          >
            Mensaje *
          </label>
          <textarea
            id="contact-message"
            rows={2}
            required
            value={form.message}
            onChange={set('message')}
            placeholder="Escriba su consulta institucional..."
            className="
              w-full border border-gray-light rounded-sm
              px-3 py-2 font-sans text-sm text-on-surface
              placeholder:text-gray-light
              focus:outline-none focus:border-wine
              transition-colors duration-150 resize-none
            "
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full flex items-center justify-center
            bg-wine text-white
            font-sans text-[11px] font-semibold uppercase tracking-widest
            py-2.5 px-6 rounded-sm
            hover:bg-[#6B0513] disabled:opacity-60
            transition-colors duration-200
          "
        >
          {loading ? 'ENVIANDO...' : 'ENVIAR CONSULTA →'}
        </button>
      </form>

      {/* ── Datos de contacto directo en fila horizontal ──────── */}
      <section className="pt-4 border-t border-gray-light/60" aria-label="Contacto directo">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-start gap-2">
            <MapPin size={13} className="text-wine mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="font-sans text-[11px] text-gray-dark leading-tight">{CONTACT_INFO.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-wine flex-shrink-0" aria-hidden="true" />
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="font-sans text-[11px] text-gray-dark hover:text-wine transition-colors duration-150"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-wine flex-shrink-0" aria-hidden="true" />
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-sans text-[11px] text-gray-dark hover:text-wine transition-colors duration-150 truncate"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
