# Marcela Capará Holding — Portal Institucional

## Visión del Producto
Portal web institucional de una sola vista inmersiva (Single Page / Hero Slider Showcase) para "Capará Holding".
El sitio funciona como distribuidor de marca paraguas hacia sus tres divisiones de negocio independientes (Real Estate, Seguros, Inversiones), cada una alojada en su propio dominio externo.

## Anatomía de la Interfaz
1. **Header:** 
   - Imagotipo dual: "Marcela Capará - Innovación Inmobiliaria" + "CAPARÁ HOLDING".
   - Navegación minimalista: "ACERCA DE  ·  CONTACTO" (abren modales o drawers sobrios).
2. **Hero Showcase (Carrusel Principal):**
   - Fondo fotográfico inmersivo de alta arquitectura/patrimonio en full-screen con overlay oscuro cinematográfico.
   - Controles laterales circulares con flechas sutiles (anterior / siguiente).
   - Card flotante blanca sobre el tercio izquierdo:
     - Tag superior: bullet rojo + `DIVISIÓN 0X — [CONCEPTO]`
     - Título: Primera línea bold carbón, segunda línea condensada e itálica en tinto (#8C0719).
     - Bajada descriptiva ejecutiva (2 a 3 líneas máx).
     - Botón principal sólido color tinto (#8C0719): "VER INFORMACIÓN Y SERVICIOS →".
   - Paginador inferior tipo píldora translúcida con barra activa en tinto.
3. **Modal de División (Overlay):**
   - Muestra detalle extendido de la división seleccionada.
   - Botón de salida externa (CTA saliente) con target="_blank" hacia el dominio propio de la división.
4. **Footer:**
   - Copyright, Aviso de Privacidad y nota regulatoria fiduciaria en tipografía micro con tracking abierto.

## Archivos de Reglas Disponibles
- `architect.md`: Sistema de diseño, tokens, grilla y tipografía exacta.
- `frontend.md`: Componentes (Slider, Card Flotante, Modales de División con links salientes).
- `copywriter.md`: Textos exactos para las 3 divisiones (Real Estate, Inversiones, Seguros).
- `seo-geo.md`: Optimización para buscadores (SEO) y motores generativos de IA (GEO), marcado Schema.org (JSON-LD) y accesibilidad para crawlers.