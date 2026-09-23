import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import FloatingCard from './components/FloatingCard'
import Footer from './components/Footer'
import ModalContainer from './components/ModalContainer'
import DivisionModal from './components/DivisionModal'
import AboutModal from './components/AboutModal'
import ContactModal from './components/ContactModal'
import { DIVISIONS } from './data/content'

// ─── Types ────────────────────────────────────────────────────────────────────
export type ModalType =
  | 'division-0'
  | 'division-1'
  | 'division-2'
  | 'about'
  | 'contact'
  | null

// ─── Hash <-> ModalType mapping ───────────────────────────────────────────────
const HASH_TO_MODAL: Record<string, ModalType> = {
  '#real-estate': 'division-0',
  '#inversiones':  'division-1',
  '#seguros':      'division-2',
  '#acerca-de':    'about',
  '#contacto':     'contact',
}
const MODAL_TO_HASH: Record<string, string> = {
  'division-0': '#real-estate',
  'division-1': '#inversiones',
  'division-2': '#seguros',
  'about':      '#acerca-de',
  'contact':    '#contacto',
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // ── Estado inicial del modal leído desde el hash de la URL ──
  const getModalFromHash = (): ModalType =>
    HASH_TO_MODAL[window.location.hash] ?? null

  const [modal, setModal] = useState<ModalType>(getModalFromHash)

  // ── Sincronizar hash → estado cuando el usuario usa Atrás/Adelante ──
  useEffect(() => {
    const handlePopState = () => {
      setModal(getModalFromHash())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // ── Abrir modal: actualiza estado + agrega entrada al historial ──
  const openModal = useCallback((type: ModalType) => {
    if (!type) return
    const hash = MODAL_TO_HASH[type] ?? ''
    // pushState agrega una entrada: el botón "Atrás" cierra el modal
    window.history.pushState({ modal: type }, '', hash)
    setModal(type)
  }, [])

  // ── Cerrar modal: regresa en el historial (activa popstate) ──
  const closeModal = useCallback(() => {
    if (modal) {
      window.history.back()
    }
  }, [modal])

  // ── Bloqueo de scroll body mientras hay modal abierto ──
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  const openDivisionModal = (index: number) =>
    openModal(`division-${index}` as ModalType)

  // Extract division index from modal key
  const divisionIndex: number | null = modal?.startsWith('division-')
    ? parseInt(modal.split('-')[1])
    : null

  return (
    /*
     * Layout: 3 vertical layers
     *   1. Header  (fixed-height, flex-shrink-0)
     *   2. Main    (flex-1, overflow-hidden) — hero + floating card
     *   3. Footer  (fixed-height, flex-shrink-0)
     *
     * Desktop (md+): h-screen overflow-hidden → locked single-page viewport.
     * Mobile (<md) : min-h-screen, body scrolls naturally.
     */
    <div className="flex flex-col min-h-screen md:h-screen md:overflow-hidden bg-white">
      {/* ── 1. Header ─────────────────────────────────────────── */}
      <Header onOpenModal={(type) => openModal(type)} />

      {/* ── 2. Main content area ──────────────────────────────── */}
      <main className="relative w-full h-[50vh] md:h-auto md:flex-1 overflow-hidden">
        {/* Background hero slider (fills entire main area) */}
        <HeroSlider currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

        {/* Desktop: floating card overlaid on left third of hero */}
        <FloatingCard
          division={DIVISIONS[currentSlide]}
          onOpenModal={() => openDivisionModal(currentSlide)}
          className="hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2 z-10 w-[420px]"
        />
      </main>

      {/* Mobile: card rendered below the hero, full-width */}
      <div className="md:hidden flex-shrink-0">
        <FloatingCard
          division={DIVISIONS[currentSlide]}
          onOpenModal={() => openDivisionModal(currentSlide)}
          className="mx-4 my-5"
        />
      </div>

      {/* ── 3. Footer ─────────────────────────────────────────── */}
      <Footer />

      {/* ── Modals ────────────────────────────────────────────── */}
      {modal && (
        <ModalContainer onClose={closeModal} modalId={modal}>
          {modal === 'about' && (
            <AboutModal onClose={closeModal} onContact={() => openModal('contact')} />
          )}
          {modal === 'contact' && <ContactModal onClose={closeModal} />}
          {divisionIndex !== null && divisionIndex >= 0 && (
            <DivisionModal
              division={DIVISIONS[divisionIndex]}
              onClose={closeModal}
              onContact={() => openModal('contact')}
            />
          )}
        </ModalContainer>
      )}
    </div>
  )
}
