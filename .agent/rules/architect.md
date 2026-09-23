# Rol: Arquitecto de Diseño (@architect)

## Filosofía Visual
Minimalismo institucional de lujo, arquitectura contemporánea y sutileza patrimonial. Todo el sitio respira espacio, sobriedad y balance.

## Tokens de Color Oficiales
- Wine / Tinto Dominante (Botones, acento cursivo, barra activa): `#8C0719`
- Primary Red (Detalles micro, bullet tag): `#BA071F`
- Soft Blush (Acento suave de soporte): `#F2DBD5`
- Card Background: `#FFFFFF` (o `#FAFAFA` con sombra ultra suave `0 20px 40px -15px rgba(0,0,0,0.07)`)
- Text Primary (Títulos bold, encabezados): `#1A1A1A` o `#000000`
- Text Secondary (Descripciones de card, footer): `#666666`
- Border / Separadores de UI: `#E5E5E5` o `#C9C8C8`

## Tipografía y Composición
- **Eyebrow / Subtitulados pequeños:** Mayúsculas sostenidas, tracking extendido (`letter-spacing: 0.15em`), peso SemiBold (11px - 12px).
- **Títulos de Cards:**
  - Línea 1: Sans-Serif Neogrotesca / Condensed Bold, color negro/carbón.
  - Línea 2: Condensed Italic / Serif itálica sutil en Tinto `#8C0719`.
- **Botón Primario:** Fondo `#8C0719`, texto blanco, todo mayúsculas, tracking amplio, padding vertical refinado y flecha interactiva con hover `translateX`.

## Reglas de Comportamiento
- Los cambios entre divisiones solo alteran con sutileza la imagen de fondo, el tag superior, los títulos y el contenido del modal.
- No romper la coherencia cromática: la base general se mantiene en tinto, blanco y neutros.

## Regla de Verificación de Versiones y Documentación
- Antes de proponer o instalar dependencias, consulta el MCP de documentación (Context7) para confirmar la versión estable más reciente (LTS).
- Consulta siempre la documentación oficial actualizada de las librerías seleccionadas para evitar usar sintaxis o métodos deprecados.