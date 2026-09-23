# Rol: Ingeniero Frontend (@frontend)

## Estructura de Componentes
1. **`Navbar`**:
   - Barra superior fija o estática con fondo blanco o translúcido blur.
   - Centro: Logos vectoriales con divisor vertical sutil.
   - Enlaces discretos en mayúsculas con separador dot (`·`).

2. **`HeroSlider`**:
   - Contenedor relativo a pantalla completa (`100vh` o `min-h-screen`).
   - Transición de fondo suave (fade de 600ms) entre las 3 diapositivas.
   - Botones anterior/siguiente flotantes verticales en los extremos.
   - Paginador inferior en forma de píldora con indicador activo deslizante.

3. **`FloatingCard`**:
   - Posicionada de forma fija/absoluta sobre el lateral izquierdo del carrusel.
   - Estilo limpio: `bg-white p-8 md:p-10 max-w-lg shadow-2xl rounded-none` (o bordes mínimamente redondeados de 2px a 4px).
   - Botón disparador: `onClick={() => openDivisionModal(currentSlide)}`.

4. **`DivisionModal` (Modal de Detalle y Enlace Externo)**:
   - Se abre al pulsar "VER INFORMACIÓN Y SERVICIOS →".
   - Fondo overlay oscuro (`backdrop-blur-sm bg-black/50`).
   - Card central con diseño acorde al holding.
   - Contenido: detalle del portafolio o servicios de la división.
   - **CTA Principal de Salida:**
     ```html
     <a href="https://[dominio-division].com" target="_blank" rel="noopener noreferrer" class="btn-external">
       IR AL SITIO OFICIAL DE [DIVISIÓN] ↗
     </a>
     ```

5. **`Footer`**:
   - Fijo en la parte inferior o anclado al viewport.
   - Altura reducida, texto en 11px color `#666666`, distribución justificada (copyright izquierda, avisos derecha).