// ─── Types ────────────────────────────────────────────────────────────────────

export interface DivisionPillar {
  title: string
  description: string
}

export interface Division {
  id: string
  number: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  description: string
  bgImage: string
  modal: {
    summary: string
    pillars: DivisionPillar[]
    ctaText: string
    ctaUrl: string
  }
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
}

// ─── Divisiones ───────────────────────────────────────────────────────────────

export const DIVISIONS: Division[] = [
  {
    id: 'real-estate',
    number: '01',
    eyebrow: 'DIVISIÓN 01 — DESARROLLOS & ARQUITECTURA',
    titleLine1: 'INNOVACIÓN',
    titleLine2: 'INMOBILIARIA',
    description:
      'Gestión y comercialización de proyectos residenciales y corporativos premium. Desarrollo de arquitectura con identidad y valor proyectado a largo plazo.',
    bgImage: '/hero-realestate.webp',
    modal: {
      summary:
        'Soluciones de comercialización, desarrollos en pozo, proyectos llave en mano y propiedades exclusivas con el más alto estándar arquitectónico y urbanístico.',
      pillars: [
        {
          title: 'Comercialización Premium',
          description:
            'Venta y alquiler de propiedades residenciales y corporativas de primer orden, con gestión integral y posventa.',
        },
        {
          title: 'Desarrollos en Pozo',
          description:
            'Participación temprana en proyectos de construcción con máxima valorización patrimonial.',
        },
        {
          title: 'Proyectos Llave en Mano',
          description:
            'Gestión integral desde el diseño arquitectónico hasta la entrega final del inmueble.',
        },
        {
          title: 'Consultoría Inmobiliaria',
          description:
            'Asesoramiento estratégico para inversión, revalorización y estructuración de activos inmobiliarios.',
        },
      ],
      ctaText: 'VISITAR REAL ESTATE →',
      ctaUrl: 'https://realestate.caparaholding.com',
    },
  },
  {
    id: 'inversiones',
    number: '02',
    eyebrow: 'DIVISIÓN 02 — RENTABILIDAD & FONDOS',
    titleLine1: 'INVERSIONES',
    titleLine2: 'ESTRATÉGICAS',
    description:
      'Estructuración de vehículos de inversión inmobiliaria y participación patrimonial con rentabilidad optimizada y respaldo en activos reales tangibles.',
    bgImage: '/hero-inversiones.webp',
    modal: {
      summary:
        'Fondos de inversión inmobiliaria, capital privado, pool de rentas y análisis de riesgo patrimonial con rentabilidad optimizada y gestión institucional de excelencia.',
      pillars: [
        {
          title: 'Fondos de Inversión Inmobiliaria',
          description:
            'Vehículos colectivos para el acceso institucional a activos de alta rentabilidad y baja volatilidad.',
        },
        {
          title: 'Capital Privado',
          description:
            'Estructuración de participaciones en proyectos de desarrollo premium con retornos diferenciados.',
        },
        {
          title: 'Pool de Rentas',
          description:
            'Gestión profesional de carteras de inmuebles para generación de renta pasiva optimizada.',
        },
        {
          title: 'Análisis de Riesgo Patrimonial',
          description:
            'Evaluación, diagnóstico y mitigación de riesgos en portfolios de inversión diversificados.',
        },
      ],
      ctaText: 'IR A INVERSIONES & CAPITAL ↗',
      ctaUrl: 'https://inversiones.caparaholding.com',
    },
  },
  {
    id: 'seguros',
    number: '03',
    eyebrow: 'DIVISIÓN 03 — RESGUARDO FAMILIAR',
    titleLine1: 'SEGUROS &',
    titleLine2: 'COBERTURAS',
    description:
      'Protección integral de patrimonio familiar, coberturas de vida, salud internacional de primer orden y estructuración fiduciaria de pólizas para sucesión intergeneracional blindada.',
    bgImage: '/hero-seguros.webp',
    modal: {
      summary:
        'Coberturas patrimoniales, salud y vida internacional, pólizas corporativas y planificación sucesoria fiduciaria para una protección blindada en todas las etapas de la vida.',
      pillars: [
        {
          title: 'Seguros Patrimoniales',
          description:
            'Protección integral de bienes inmuebles, activos financieros y portafolios de inversión.',
        },
        {
          title: 'Salud & Vida Internacional',
          description:
            'Coberturas de salud y vida con alcance global y prestadores de primer orden mundial.',
        },
        {
          title: 'Pólizas Corporativas',
          description:
            'Seguros empresariales a medida para estructuras corporativas complejas y multi-jurisdiccionales.',
        },
        {
          title: 'Planificación Sucesoria',
          description:
            'Estructuración fiduciaria de pólizas para transmisión intergeneracional patrimonial blindada.',
        },
      ],
      ctaText: 'IR A SEGUROS & COBERTURAS ↗',
      ctaUrl: 'https://seguros.caparaholding.com',
    },
  },
]

// ─── Contacto ─────────────────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo = {
  address: 'Av. del Libertador 1234, Piso 10 — CABA, Argentina',
  phone: '+54 (011) 4800-0000',
  email: 'institucional@caparaholding.com',
}

// ─── Acerca De ────────────────────────────────────────────────────────────────

export const ABOUT_CONTENT = {
  manifesto: [
    'Capará Holding es un grupo empresarial de capitales privados orientado al desarrollo patrimonial integral, con operaciones especializadas en Real Estate corporativo y residencial premium, estructuración de inversiones patrimoniales y coberturas de protección familiar.',
    'Fundado sobre principios de rigor institucional, transparencia fiduciaria y visión estratégica de largo plazo, el Grupo articula sus divisiones para ofrecer a sus clientes un ecosistema completo de preservación y crecimiento patrimonial a través de generaciones.',
  ],
  governance: [
    {
      label: 'TRANSPARENCIA',
      description:
        'Información clara, oportuna y verificable para todos nuestros clientes e inversores.',
    },
    {
      label: 'RIGOR FIDUCIARIO',
      description:
        'Estructura de custodia y rendición de cuentas conforme a los más estrictos estándares regulatorios.',
    },
    {
      label: 'VISIÓN LARGO PLAZO',
      description:
        'Estrategias patrimoniales diseñadas para generar valor sostenido e intergeneracional.',
    },
  ],
  fiduciaryNote:
    'Las operaciones del Grupo se realizan bajo estrictos marcos regulatorios vigentes y cuentan con respaldo fiduciario certificado conforme a la normativa aplicable.',
}
