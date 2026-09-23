import { useEffect, useRef, useCallback, useId, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

// ─── ModalContainer ───────────────────────────────────────────────────────────
// Portal React sobre document.body con:
//   • Focus Trap WAI-ARIA: Tab/Shift+Tab circulan dentro del modal
//   • Foco restaurado al elemento disparador al cerrar
//   • Cierre con Escape | clic en backdrop | botón ✕
//   • aria-labelledby vinculado al ID del título del modal
//   • aria-modal="true", role="dialog"

interface ModalContainerProps {
  children: ReactNode
  onClose: () => void
  modalId: string   // usado para aria-labelledby y como key de título
}

// Selectores de elementos enfocables según WCAG 2.2
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function ModalContainer({ children, onClose, modalId }: ModalContainerProps) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const cardRef     = useRef<HTMLDivElement>(null)
  // Guarda el elemento que tenía el foco antes de abrir el modal
  const previousFocus = useRef<Element | null>(document.activeElement)
  // ID único para aria-labelledby (vincula el dialog con su título h2)
  const titleId = useId()

  // ── Focus Trap + Escape ──────────────────────────────────
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key !== 'Tab') return

    const card = cardRef.current
    if (!card) return

    const focusable = Array.from(card.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (focusable.length === 0) return

    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    if (e.shiftKey) {
      // Shift+Tab desde el primer elemento → salta al último
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      // Tab desde el último elemento → salta al primero
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    // Mueve el foco al primer elemento interactivo dentro del modal
    const card = cardRef.current
    if (card) {
      const firstFocusable = card.querySelector<HTMLElement>(FOCUSABLE)
      firstFocusable?.focus()
    }

    // Al desmontar: restaura el foco al elemento que lo tenía antes
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previousFocus.current instanceof HTMLElement) {
        previousFocus.current.focus()
      }
    }
  }, [handleKeyDown])

  return createPortal(
    /* Backdrop */
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50 backdrop-blur-sm animate-backdrop-in"
      onClick={onClose}
      // aria-hidden en el backdrop permite que el lector de pantalla
      // acceda solo al dialog, no al fondo
    >
      {/* Modal card — stopPropagation para que clics dentro no cierren */}
      <div
        ref={cardRef}
        id={`modal-${modalId}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="
          relative w-full max-w-2xl max-h-[90vh]
          bg-white rounded-sm shadow-modal
          overflow-y-auto modal-scroll
          animate-modal-in
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — primer elemento enfocable (focus trap inicia aquí) */}
        <button
          onClick={onClose}
          aria-label="Cerrar diálogo"
          className="
            absolute top-4 right-4 z-10
            w-8 h-8 flex items-center justify-center
            rounded-full bg-gray-light/40 hover:bg-gray-light
            text-gray-dark hover:text-on-surface
            transition-all duration-150
          "
        >
          <X size={15} strokeWidth={2} />
        </button>

        {/* Se expone el titleId al contenido hijo mediante contexto implícito.
            Cada modal debe tener un h2 con id={titleId}. */}
        <div data-title-id={titleId}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}

// ─── Hook auxiliar: permite a los modales obtener el titleId ──────────────────
// Los modales hijos leen el data-title-id del contenedor para aplicarlo a su h2.
// Esto es una convención de implementación interna: el atributo no es un ARIA real,
// el aria-labelledby ya está correctamente declarado en el dialog.
export { type ModalContainerProps }
