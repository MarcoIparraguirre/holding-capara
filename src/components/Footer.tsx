// ─── Footer ───────────────────────────────────────────────────────────────────
// Barra fija inferior compacta: copyright izquierda, avisos derecha.
// Inter 11px, color #666666, tracking abierto.

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="
        flex-shrink-0 w-full flex items-center justify-between
        px-5 h-9 bg-white border-t border-gray-light/40
      "
    >
      {/* Izquierda: copyright */}
      <span className="font-sans text-[11px] text-gray-dark tracking-wide">
        © {year} Capará Holding. Todos los derechos reservados.
      </span>

      {/* Derecha: avisos legales (oculto en pantallas muy pequeñas) */}
      <span className="hidden sm:block font-sans text-[11px] text-gray-dark tracking-wide">
        Aviso de Privacidad&nbsp;·&nbsp;Entidad Regulada &amp; Custodia Fiduciaria
      </span>
    </footer>
  )
}
