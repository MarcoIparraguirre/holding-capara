import { ABOUT_CONTENT } from '../data/content'

// ─── AboutModal ───────────────────────────────────────────────────────────────
// Modal institucional "Acerca de Capará Holding".
// Secciones: manifiesto, gobierno corporativo (3 columnas), sello fiduciario.

interface AboutModalProps {
  onClose: () => void
  onContact: () => void
}

export default function AboutModal({ onContact }: AboutModalProps) {
  return (
    <div className="p-6 md:p-8">

      {/* ── Encabezado ────────────────────────────────────────── */}
      <header className="mb-4 pb-3 border-b border-gray-light/60">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark">
            ACERCA DEL GRUPO
          </span>
        </div>
        <h2 className="font-condensed text-2xl md:text-3xl font-bold leading-tight text-[#1A1A1A]">
          CAPARÁ{' '}
          <span className="font-barlow font-semibold italic text-wine">HOLDING</span>
        </h2>
      </header>

      {/* ── Manifiesto institucional ──────────────────────────── */}
      <section className="mb-4" aria-label="Manifiesto institucional">
        <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-mid mb-2">
          MANIFIESTO
        </h3>
        <div className="space-y-2">
          {ABOUT_CONTENT.manifesto.map((paragraph, i) => (
            <p key={i} className="font-sans text-xs md:text-sm text-gray-dark leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Gobierno Corporativo (3 columnas) ────────────────── */}
      <section className="mb-4" aria-label="Gobierno corporativo">
        <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-mid mb-2">
          GOBIERNO CORPORATIVO
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {ABOUT_CONTENT.governance.map((item) => (
            <div
              key={item.label}
              className="p-3 bg-surface rounded-sm border border-outline-variant flex items-start gap-2.5"
            >
              {/* Accent bar aligned with text */}
              <div className="w-1 h-3.5 bg-wine rounded-sm flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <h4 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#1A1A1A] mb-1">
                  {item.label}
                </h4>
                <p className="font-sans text-[11px] text-gray-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sello fiduciario ──────────────────────────────────── */}
      <div className="mb-4 p-3 bg-soft-blush/25 border border-soft-blush rounded-sm text-center">
        <p className="font-sans text-[10px] text-[#1A1A1A] font-semibold uppercase tracking-widest mb-0.5">
          ENTIDAD REGULADA — CUSTODIA FIDUCIARIA
        </p>
        <p className="font-sans text-[11px] text-gray-dark leading-relaxed">
          {ABOUT_CONTENT.fiduciaryNote}
        </p>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <footer className="pt-3 border-t border-gray-light/60">
        <button
          onClick={onContact}
          className="
            flex items-center gap-2
            bg-wine text-white
            font-sans text-[11px] font-semibold uppercase tracking-widest
            py-2.5 px-6 rounded-sm
            hover:bg-[#6B0513]
            transition-colors duration-200
          "
        >
          CONTACTAR AL GRUPO
          <span aria-hidden="true">→</span>
        </button>
      </footer>
    </div>
  )
}
