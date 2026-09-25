import { useState, type FormEvent, type ChangeEvent } from 'react'

// ─── useContactForm ───────────────────────────────────────────────────────────
// Custom Hook para encapsular el estado, validaciones y ciclo de vida
// del formulario de contacto institucional (Principio de Responsabilidad Única).

export interface ContactFormState {
  name: string
  email: string
  phone: string
  division: string
  message: string
}

export const INITIAL_CONTACT_FORM: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  division: '',
  message: '',
}

export function useContactForm(initialValues: ContactFormState = INITIAL_CONTACT_FORM) {
  const [form, setForm] = useState<ContactFormState>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof ContactFormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío asíncrono (desacoplado para conectar a un backend o servicio fiduciario)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const resetForm = () => {
    setForm(initialValues)
    setSubmitted(false)
    setLoading(false)
  }

  return {
    form,
    loading,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
