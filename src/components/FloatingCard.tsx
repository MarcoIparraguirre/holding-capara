import type { Division } from '../data/content'

// ─── FloatingCard ─────────────────────────────────────────────────────────────
// Tarjeta flotante institucional.
// En desktop: posicionada por el padre (absolute, tercio izquierdo).
// En mobile: posicionada como bloque debajo del hero.
//
// Props:
//   division  — datos de la división activa
//   onOpenModal — abre el modal de detalle de la división
//   className — permite al padre controlar el posicionamiento

interface FloatingCardProps {
  division: Division
  onOpenModal: () => void
  className?: string
}

export default function FloatingCard({
  division,
  onOpenModal,
  className = '',
}: FloatingCardProps) {
  return (
    <article
      key={division.id}          // key provoca re-mount y dispara animate-fade-in al cambiar
      className={`
        bg-white rounded-sm shadow-card
        p-7 md:p-10
        animate-fade-in
        ${className}
      `}
    >
      {/* ── Eyebrow: bullet rojo + tag ──────────────────────── */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="w-1.5 h-1.5 rounded-full bg-red-primary flex-shrink-0"
          aria-hidden="true"
        />
        <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-dark">
          {division.eyebrow}
        </span>
      </div>

      {/* ── Título dos líneas ────────────────────────────────── */}
      <div className="mb-4">
        {/* Línea 1: bold carbón — Roboto Condensed */}
        <h2 className="font-condensed text-[38px] md:text-[40px] font-bold leading-none text-[#1A1A1A]">
          {division.titleLine1}
        </h2>
        {/* Línea 2: italic tinto — Barlow Condensed */}
        <h2 className="font-barlow text-[34px] md:text-[36px] font-semibold italic leading-none text-wine">
          {division.titleLine2}
        </h2>
      </div>

      {/* ── Descripción ─────────────────────────────────────── */}
      <p className="font-sans text-sm text-gray-dark leading-relaxed mb-8 line-clamp-3">
        {division.description}
      </p>

      {/* ── Botón CTA ────────────────────────────────────────── */}
      <button
        onClick={onOpenModal}
        className="
          group flex items-center gap-2
          bg-wine text-white
          font-sans text-[11px] font-semibold uppercase tracking-widest
          py-3 px-6 rounded-sm
          hover:bg-[#6B0513]
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2
        "
      >
        <span>VER INFORMACIÓN Y SERVICIOS</span>
        <span
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </article>
  )
}
