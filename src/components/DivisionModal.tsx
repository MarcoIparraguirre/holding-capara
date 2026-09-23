import { ExternalLink, MessageSquare } from 'lucide-react'
import { Division } from '../data/content'

// ─── DivisionModal ────────────────────────────────────────────────────────────
// Modal de detalle de una división.
// Muestra: eyebrow + títulos, resumen, lista de pilares y dos botones al pie:
//   1. Botón saliente externo (target="_blank")
//   2. Botón "CONTACTAR" que conmuta al modal de Contacto

interface DivisionModalProps {
  division: Division
  onClose: () => void
  onContact: () => void
}

export default function DivisionModal({ division, onContact }: DivisionModalProps) {
  return (
    <div className="p-7 md:p-10">

      {/* ── Encabezado ────────────────────────────────────────── */}
      <header className="mb-7 pb-6 border-b border-gray-light/60">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-red-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark">
            {division.eyebrow}
          </span>
        </div>
        <h2 className="font-condensed text-3xl font-bold leading-tight text-[#1A1A1A]">
          {division.titleLine1}
        </h2>
        <h2 className="font-barlow text-3xl font-semibold italic leading-tight text-wine">
          {division.titleLine2}
        </h2>
        <p className="mt-3 font-sans text-sm text-gray-dark leading-relaxed">
          {division.modal.summary}
        </p>
      </header>

      {/* ── Pilares / Servicios ───────────────────────────────── */}
      <section className="mb-7" aria-label="Servicios y portafolio">
        <h3 className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-mid mb-4">
          SERVICIOS Y PORTAFOLIO
        </h3>
        <ul className="space-y-4">
          {division.modal.pillars.map((pillar, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-primary flex-shrink-0" aria-hidden="true" />
              <div>
                <span className="font-sans text-sm font-semibold text-[#1A1A1A]">
                  {pillar.title}
                </span>
                {pillar.description && (
                  <p className="font-sans text-xs text-gray-dark leading-relaxed mt-0.5">
                    {pillar.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Pie: botones de acción ────────────────────────────── */}
      <footer className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-light/60">
        {/* Primario: CTA saliente externo */}
        <a
          href={division.modal.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2
            bg-wine text-white
            font-sans text-[11px] font-semibold uppercase tracking-widest
            py-3 px-6 rounded-sm
            hover:bg-[#6B0513]
            transition-colors duration-200
          "
        >
          <span>{division.modal.ctaText}</span>
          <ExternalLink size={13} strokeWidth={2} aria-hidden="true" />
        </a>

        {/* Secundario: conmuta al modal de Contacto */}
        <button
          onClick={onContact}
          className="
            flex items-center justify-center gap-2
            border border-wine text-wine
            font-sans text-[11px] font-semibold uppercase tracking-widest
            py-3 px-6 rounded-sm
            hover:bg-soft-blush
            transition-colors duration-200
          "
        >
          <span>CONTACTAR AL GRUPO</span>
          <MessageSquare size={13} strokeWidth={2} aria-hidden="true" />
        </button>
      </footer>
    </div>
  )
}
