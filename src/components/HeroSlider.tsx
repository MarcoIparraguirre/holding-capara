import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DIVISIONS } from '../data/content'

// ─── HeroSlider ───────────────────────────────────────────────────────────────
// Slider a pantalla completa con:
//   • Crossfade de imágenes (700ms opacity transition)
//   • Autoplay cada 5s, pausado en hover
//   • Controles circulares prev / next
//   • Paginador píldora inferior con barra activa en #8C0719

interface HeroSliderProps {
  currentSlide: number
  onSlideChange: (index: number) => void
}

export default function HeroSlider({ currentSlide, onSlideChange }: HeroSliderProps) {
  const count = DIVISIONS.length

  const goNext = useCallback(() => {
    onSlideChange((currentSlide + 1) % count)
  }, [currentSlide, count, onSlideChange])

  const goPrev = useCallback(() => {
    onSlideChange((currentSlide - 1 + count) % count)
  }, [currentSlide, count, onSlideChange])

  // Autoplay continuo de 5s: se ejecuta siempre y se reinicia cada vez que cambia el slide
  useEffect(() => {
    const timer = setInterval(() => {
      onSlideChange((currentSlide + 1) % count)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide, count, onSlideChange])

  return (
    <div className="relative w-full h-full select-none">
      {/* ── Background images (crossfade) ─────────────────────── */}
      {DIVISIONS.map((division, index) => (
        <div
          key={division.id}
          className="hero-slide"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={division.bgImage}
            alt={`${division.titleLine1} ${division.titleLine2}`}
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}

      {/* ── Overlay cinematográfico ───────────────────────────── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* ── Control: Anterior ─────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Diapositiva anterior"
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full
          bg-white/15 hover:bg-white/30
          border border-white/20
          flex items-center justify-center
          text-white
          transition-all duration-200 hover:scale-105
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
      >
        <ChevronLeft size={20} strokeWidth={1.8} />
      </button>

      {/* ── Control: Siguiente ────────────────────────────────── */}
      <button
        onClick={goNext}
        aria-label="Diapositiva siguiente"
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 rounded-full
          bg-white/15 hover:bg-white/30
          border border-white/20
          flex items-center justify-center
          text-white
          transition-all duration-200 hover:scale-105
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
      >
        <ChevronRight size={20} strokeWidth={1.8} />
      </button>

      {/* ── Paginador píldora ─────────────────────────────────── */}
      <div
        className="
          absolute bottom-5 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-2 px-3 py-2 rounded-full
          bg-black/25 backdrop-blur-sm border border-white/10
        "
        role="tablist"
        aria-label="Diapositivas"
      >
        {DIVISIONS.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Ir a diapositiva ${index + 1}`}
            className={`
              rounded-full transition-all duration-400 ease-out
              ${index === currentSlide
                ? 'w-7 h-1.5 bg-wine'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/65'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}
