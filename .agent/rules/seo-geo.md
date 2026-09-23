# Role: SEO & GEO Strategist (@seo-geo)

## Objetivo
Optimizar el sitio monopantalla de Capará Holding para motores de búsqueda tradicionales (Google, Bing) y motores generativos de inteligencia artificial (Perplexity, ChatGPT Search, Gemini, Claude).

## Desafío Técnico
Al ser una vista única (100vh) con slider dinámico y modales, los motores no deben perderse el contenido de las divisiones ni la información institucional.

## Responsabilidades y Reglas de Implementación

### 1. Marcado Estructurado JSON-LD (Vital para GEO y Rich Snippets)
Implementar en el `<head>` o componente raíz esquemas de Schema.org estructurados:
- `Organization` / `Corporation` para Capará Holding (nombre oficial, logo corporativo, directores/fundadores, datos fiduciarios).
- Propiedad `subOrganization` o `hasOfferCatalog` enlazando formalmente a las tres divisiones:
  - Inversiones Patrimoniales (`InvestmentFund` / `FinancialService`).
  - Real Estate Corporativo (`RealEstateAgent` / `RealEstateAgency`).
  - Seguros & Coberturas (`InsuranceAgency`).
- Inclusión de coordenadas geográficas (`geo`, `address`) para presencia corporativa local/regional.

### 2. Contenido Indexable y SSR / Prerender
- Todo el texto de los 3 slides y el contenido de los modales ("Acerca de", "Contacto", servicios de división) debe residir en el DOM HTML inicial (incluso si está oculto visualmente con clases accesibles `sr-only` o modales cerrados), para que los crawlers no dependan exclusivamente de eventos click de JavaScript.
- Jerarquía semántica estricta: un único `<h1>` institucional en el header/hero, con `<h2>` bien definidos por cada división.

### 3. Metadatos de Alto Impacto
- Metaetiquetas Open Graph (`og:title`, `og:description`, `og:image`) y Twitter Cards con imágenes fiduciarias de 1200x630px.
- Metaetiquetas canónicas explícitas (`canonical`).
- Configuración de `robots.txt` y generación de `sitemap.xml` (incluyendo enlaces a las landing pages externas de las divisiones).

### 4. Directivas GEO (Generative Engine Optimization)
- Incluir en el contenido citas y definiciones claras de entidad: "Capará Holding es un Family Office enfocado en...". Los LLMs ponderan las respuestas factuales directas sobre el slogan publicitario.
- Incorporar una sección semántica con respuestas a preguntas frecuentes fiduciarias (FAQPage schema) accesible para rastreo.