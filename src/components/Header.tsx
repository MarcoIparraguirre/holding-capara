// ─── Header ───────────────────────────────────────────────────────────────────
// Doble línea centrada:
//   Línea 1: Logo principal (logo.png) + divisor + wordmark "CAPARÁ HOLDING"
//   Línea 2: "ACERCA DE · CONTACTO" (disparan modales)

interface HeaderProps {
  onOpenModal: (type: 'about' | 'contact') => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="relative z-30 flex-shrink-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light/40">
      <div className="flex flex-col items-center justify-center py-2.5 px-4">

        {/* ── Línea 1: Imagotipo dual ─────────────────────────── */}
        <div className="flex items-center gap-4">
          {/* Logo principal (logo5) */}
          <img
            src="/logo.png"
            alt="Marcela Capará — Innovación Inmobiliaria"
            className="h-9 w-auto"
            loading="eager"
          />

          {/* Divisor vertical */}
          <div className="w-px h-7 bg-gray-light" aria-hidden="true" />

          {/* Wordmark del Holding */}
          <span className="font-condensed text-base font-bold tracking-[0.12em] text-on-surface uppercase select-none">
            CAPARÁ&nbsp;HOLDING
          </span>
        </div>

        {/* ── Línea 2: Navegación minimalista ─────────────────── */}
        <nav className="flex items-center gap-1 mt-3" aria-label="Navegación principal">
          <button
            onClick={() => onOpenModal('about')}
            className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark hover:text-wine transition-colors duration-200 px-2 py-0.5 rounded-sm"
          >
            ACERCA DE
          </button>
          <span className="text-gray-light text-xs leading-none" aria-hidden="true">·</span>
          <button
            onClick={() => onOpenModal('contact')}
            className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark hover:text-wine transition-colors duration-200 px-2 py-0.5 rounded-sm"
          >
            CONTACTO
          </button>
        </nav>

      </div>
    </header>
  )
}
