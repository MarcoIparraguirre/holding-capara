import { useState, useEffect } from 'react'
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

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [modal, setModal] = useState<ModalType>(null)

  // Lock body scroll while any modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modal])

  const openDivisionModal = (index: number) =>
    setModal(`division-${index}` as ModalType)
  const openModal = (type: 'about' | 'contact') => setModal(type)
  const closeModal = () => setModal(null)

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
      <Header onOpenModal={openModal} />

      {/* ── 2. Main content area ──────────────────────────────── */}
      <main className="relative flex-1 overflow-hidden" style={{ minHeight: '55vmin' }}>
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
        <ModalContainer onClose={closeModal}>
          {modal === 'about' && (
            <AboutModal onClose={closeModal} onContact={() => setModal('contact')} />
          )}
          {modal === 'contact' && <ContactModal onClose={closeModal} />}
          {divisionIndex !== null && divisionIndex >= 0 && (
            <DivisionModal
              division={DIVISIONS[divisionIndex]}
              onClose={closeModal}
              onContact={() => setModal('contact')}
            />
          )}
        </ModalContainer>
      )}
    </div>
  )
}
