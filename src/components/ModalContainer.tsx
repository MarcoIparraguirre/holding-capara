import { useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

// ─── ModalContainer ───────────────────────────────────────────────────────────
// Portal React sobre document.body.
// Cierra con: tecla Escape | clic en backdrop | botón ✕

interface ModalContainerProps {
  children: ReactNode
  onClose: () => void
}

export default function ModalContainer({ children, onClose }: ModalContainerProps) {

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return createPortal(
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50 backdrop-blur-sm animate-backdrop-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal card — stopPropagation so clicks inside don't close */}
      <div
        className="
          relative w-full max-w-2xl max-h-[90vh]
          bg-white rounded-sm shadow-modal
          overflow-y-auto modal-scroll
          animate-modal-in
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
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

        {children}
      </div>
    </div>,
    document.body,
  )
}
