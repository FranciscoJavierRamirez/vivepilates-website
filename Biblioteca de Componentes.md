# 📚 Biblioteca de Componentes VivePilates v3.0 - Con Especificaciones Técnicas

## 🟢 ETAPA 1: COMPONENTES CON CONTENIDO CONFIRMADO

### 🏠 **Página: Inicio**

#### HeroSection

```typescript
interface HeroSectionProps {
  quotes: Array<{
    text: string;
    author: string;
  }>;
  audienceSelector?: boolean;
  defaultAudience?: 'general' | 'pregnant' | 'seniors' | 'rehab' | 'youth';
}

// Implementación con personalización por audiencia
export default function HeroSection({
  quotes = defaultQuotes,
  audienceSelector = true,
  defaultAudience = 'general',
}: HeroSectionProps) {
  // Contenido dinámico según audiencia seleccionada
}
```

**Subcomponentes:**

- `CTAButton` - Con tracking de conversión
- `AudienceQuickSelector` - Nuevo componente para filtrado
- `QuoteRotator` - Animación suave entre frases
- `GradientOverlay` - Transiciones según audiencia

#### Gallery (Optimizada)

```typescript
interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
    category?: 'reformer' | 'chairs' | 'space' | 'team';
  }>;
  loading?: 'eager' | 'lazy';
  modalEnabled?: boolean;
}
```

**Optimizaciones:**

- `GalleryModal` - Apertura en modal para performance
- `LazyImage` - Carga progresiva con placeholder blur
- `CategoryFilter` - Filtrado por tipo de espacio

#### DifferentiatorGrid (Placeholders Inteligentes)

```typescript
interface DifferentiatorProps {
  metrics: {
    yearsExperience: string | number;
    totalStudents: string | number;
    maxClassSize: number;
    certificationYear: string | number;
  };
  fallbackToGeneric?: boolean;
}

// Uso con variables de entorno
const differentiators = {
  yearsExperience: import.meta.env.PUBLIC_YEARS_EXP || '15+',
  totalStudents: import.meta.env.PUBLIC_TOTAL_STUDENTS || '500+',
  maxClassSize: 6, // Confirmado
  certificationYear: import.meta.env.PUBLIC_CERT_YEAR || '2010',
};
```

---

### 👤 **Página: Sobre Nosotros**

#### MissionVision (Con Type Safety)

```typescript
interface MissionVisionProps {
  mission: string;
  vision: string;
  values: Array<{
    name: string;
    description?: string;
    icon?: string;
  }>;
}

const defaultContent = {
  mission: 'Queremos entregar bienestar y atención personalizada...',
  vision: 'Tener por objetivo lograr las metas personales...',
  values: [
    { name: 'perseverancia', icon: 'target' },
    { name: 'disciplina', icon: 'calendar' },
    { name: 'colaboración', icon: 'users' },
    { name: 'entendimiento', icon: 'heart' },
  ],
};
```

#### AboutTeam (Interactivo)

```astro
---
interface TeamMember {
  name: string;
  role: string;
  certification: string;
  image?: string;
  testimonial?: string;
}

const team: TeamMember[] = [
  // Datos de Etapa 2
];
---

<section class="team-section">
  <div class="team-grid">
    {
      team.length > 0 ? (
        team.map(member => <TeamMemberCard {...member} />)
      ) : (
        <TeamPlaceholder />
      )
    }
  </div>
</section>
```

---

### ❓ **Página: ¿Por qué Pilates?**

#### PrinciplesGrid (Visual e Interactivo)

```typescript
interface PrincipleProps {
  principles: Array<{
    title: string;
    description: string;
    icon?: string;
    order: number;
  }>;
  displayMode?: 'grid' | 'carousel' | 'accordion';
}

const sixPrinciples = [
  { title: 'Respiración', description: 'Base del movimiento', order: 1 },
  { title: 'Concentración', description: 'Mente-cuerpo conectados', order: 2 },
  { title: 'Centralización', description: 'Core como centro', order: 3 },
  { title: 'Control', description: 'Movimiento consciente', order: 4 },
  { title: 'Precisión', description: 'Calidad sobre cantidad', order: 5 },
  { title: 'Fluidez', description: 'Movimiento continuo', order: 6 },
];
```

**Interactividad:**

```javascript
// Hover muestra descripción expandida
principleCard.addEventListener('mouseenter', e => {
  const description = e.target.querySelector('.description');
  description.style.maxHeight = description.scrollHeight + 'px';
  VivePilatesAnalytics.track('principle_hover', {
    principle: e.target.dataset.principle,
  });
});
```

#### BenefitsList (Categorizado con Filtros)

```astro
---
interface Benefit {
  id: number;
  text: string;
  category: 'physical' | 'mental' | 'medical';
  relatedAudiences: string[];
}

const benefits: Benefit[] = [
  {
    id: 1,
    text: 'Mejora la postura',
    category: 'physical',
    relatedAudiences: ['general', 'seniors'],
  },
  {
    id: 2,
    text: 'Aumenta la flexibilidad',
    category: 'physical',
    relatedAudiences: ['general', 'pregnant'],
  },
  {
    id: 3,
    text: 'Mejora la fuerza en piernas y espalda',
    category: 'physical',
    relatedAudiences: ['general', 'rehab'],
  },
  {
    id: 4,
    text: 'Aumenta capacidad transverso abdominal',
    category: 'physical',
    relatedAudiences: ['pregnant', 'general'],
  },
  {
    id: 5,
    text: 'Fortalece el CORE',
    category: 'physical',
    relatedAudiences: ['general', 'pregnant'],
  },
  {
    id: 6,
    text: 'Mejora la calidad del sueño',
    category: 'mental',
    relatedAudiences: ['general', 'seniors'],
  },
  {
    id: 7,
    text: 'Equilibra musculatura',
    category: 'physical',
    relatedAudiences: ['rehab', 'general'],
  },
  {
    id: 8,
    text: 'Ayuda con escoliosis no estructural',
    category: 'medical',
    relatedAudiences: ['rehab', 'youth'],
  },
  {
    id: 9,
    text: 'Mejora problemas en la espalda',
    category: 'medical',
    relatedAudiences: ['general', 'seniors', 'rehab'],
  },
  {
    id: 10,
    text: 'Aumenta la concentración',
    category: 'mental',
    relatedAudiences: ['general', 'youth'],
  },
  {
    id: 11,
    text: 'Mejora el equilibrio',
    category: 'physical',
    relatedAudiences: ['seniors', 'general'],
  },
];
---

<BenefitsCategorized
  benefits={benefits}
  enableFiltering={true}
  colorCoding={true}
/>
```

#### TestimonialsCarousel (Filtrable por Audiencia)

```typescript
interface Testimonial {
  id: number;
  name: string;
  age?: number;
  text: string;
  benefitHighlight?: string;
  audience?: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Inés Ariztía',
    text: 'Me encanta ir a pilates, el mejor break de la semana...',
    benefitHighlight: 'Relajación',
    audience: 'general',
    rating: 5,
  },
  {
    id: 6,
    name: 'Cristian Rodriguez',
    age: 62,
    text: 'He visto mejorar mi elasticidad y agilidad',
    benefitHighlight: 'Flexibilidad',
    audience: 'seniors',
    rating: 5,
  },
  // ... resto de testimonios
];
```

---

### 🧘 **Página: Servicios**

#### ServiceCard (Con Indicadores Visuales)

```astro
---
interface ServiceCardProps {
  title: string;
  description: string;
  capacity: number;
  duration: string;
  equipment: string[];
  highlight?: boolean;
  image?: string;
}

const services = [
  {
    title: 'Clases Grupales Personalizadas',
    description: 'Atención individualizada en grupos reducidos',
    capacity: 6,
    duration: '55 minutos',
    equipment: ['Reformer', 'Sillas multifuncionales', 'Barriles'],
    highlight: true,
  },
];
---

<div class="service-card" data-highlight={service.highlight}>
  <div class="capacity-badge">
    <Icon name="users" />
    <span>Máximo {service.capacity} personas</span>
  </div>
  <!-- Resto del contenido -->
</div>
```

#### PricingPlaceholder (Preparado para Etapa 2)

```astro
---
// Componente stub para precios
---

<div class="pricing-section">
  <h3>Planes y Precios</h3>
  <p>Consulta nuestros planes personalizados</p>
  <CTAButton
    href="https://wa.me/56912345678?text=Hola,%20quiero%20información%20sobre%20precios"
    icon="whatsapp"
    tracking="pricing_inquiry"
  >
    Consultar Precios por WhatsApp
  </CTAButton>
</div>
```

#### FacilitiesAccordion (Nuevo Componente)

```typescript
interface Facility {
  name: string;
  description: string;
  icon: string;
  available: boolean;
}

const facilities: Facility[] = [
  {
    name: 'Recepción',
    description: 'Espera cómoda e hidratación',
    icon: 'lobby',
    available: true,
  },
  {
    name: 'Baño',
    description: 'Instalaciones limpias',
    icon: 'restroom',
    available: true,
  },
  {
    name: 'Bicicletero',
    description: 'Gratuito en -2',
    icon: 'bike',
    available: true,
  },
  {
    name: 'Estacionamiento',
    description: 'Pagado en edificio',
    icon: 'parking',
    available: true,
  },
];
```

---

### 🌐 **Elementos Transversales**

#### AccessibilityToolbar (Nuevo)

```astro
---
// Toolbar de accesibilidad
---

<div
  class="a11y-toolbar"
  role="toolbar"
  aria-label="Herramientas de accesibilidad"
>
  <button onclick="toggleHighContrast()" aria-label="Alto contraste">
    <Icon name="contrast" />
  </button>
  <button onclick="increaseFontSize()" aria-label="Aumentar texto">
    <Icon name="text-increase" />
  </button>
  <button onclick="decreaseFontSize()" aria-label="Reducir texto">
    <Icon name="text-decrease" />
  </button>
</div>

<script>
  function toggleHighContrast() {
    document.body.toggleAttribute('data-high-contrast');
    localStorage.setItem(
      'highContrast',
      document.body.hasAttribute('data-high-contrast')
    );
  }
</script>
```

#### WhatsAppButton (Con Contexto)

```typescript
interface WhatsAppButtonProps {
  defaultMessage?: string;
  context?: 'general' | 'pricing' | 'trial' | 'schedule';
  floating?: boolean;
  trackingLabel?: string;
}

// Mensajes contextuales
const messages = {
  general: 'Hola, quiero más información sobre VivePilates',
  pricing: 'Hola, quiero información sobre precios y planes',
  trial: 'Hola, quiero agendar una clase de prueba',
  schedule: 'Hola, quiero consultar sobre horarios disponibles',
};
```

---

## 🔴 ETAPA 2: COMPONENTES CON CONTENIDO PENDIENTE

### Componentes que requieren aprobación:

#### DifferentiatorComparison

```typescript
interface DifferentiatorComparisonProps {
  ourMetrics: {
    classSize: number;
    yearsExperience: number;
    certifications: string[];
  };
  competitorAverage: {
    classSize: number;
    yearsExperience: number;
  };
}
```

#### InstructorShowcase

```typescript
interface InstructorProps {
  instructors: Array<{
    name: string;
    specialization: string;
    certifications: string[];
    yearsExperience: number;
    photo: string;
    bio: string;
  }>;
}
```

#### PricingTiers

```typescript
interface PricingTier {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
  sessionsPerMonth: number;
  validityPeriod: string;
}
```

---

## 📊 MÉTRICAS Y TRACKING

### Eventos a Trackear (GA4)

```javascript
// Configuración de eventos
const trackingEvents = {
  // Interacciones principales
  cta_click: { category: 'conversion', value: 10 },
  whatsapp_click: { category: 'conversion', value: 8 },
  gallery_open: { category: 'engagement', value: 3 },

  // Personalización
  audience_select: { category: 'personalization', value: 5 },
  benefit_filter: { category: 'engagement', value: 2 },

  // Contenido
  testimonial_view: { category: 'content', value: 2 },
  principle_expand: { category: 'content', value: 1 },
  accordion_open: { category: 'engagement', value: 1 },
};
```

---

## 🚀 GUÍA DE IMPLEMENTACIÓN RÁPIDA

### 1. Setup Inicial con Astro 5

```bash
# Crear proyecto
npm create astro@latest vivepilates -- --template minimal

# Instalar dependencias
cd vivepilates
npm install @astrojs/image @astrojs/sitemap astro-compress

# Agregar integraciones necesarias
npx astro add tailwind
npx astro add react # Solo para componentes interactivos
```

### 2. Estructura de Componentes Etapa 1

```
src/components/
├── etapa1/
│   ├── home/
│   │   ├── HeroSection.astro
│   │   ├── QuoteSlider.astro
│   │   ├── Gallery.astro
│   │   ├── OpeningHours.astro
│   │   ├── TrialClassCTA.astro
│   │   ├── ContactInfo.astro
│   │   └── MapEmbed.astro
│   ├── about/
│   │   ├── MissionVision.astro
│   │   ├── AboutTeam.astro
│   │   └── AboutMethod.astro
│   ├── why-pilates/
│   │   ├── PrinciplesGrid.astro
│   │   ├── BenefitsList.astro
│   │   ├── AudienceCards.astro
│   │   └── TestimonialsCarousel.astro
│   ├── services/
│   │   ├── ServiceCard.astro
│   │   ├── RoomShowcase.astro
│   │   ├── ServiceInfo.astro
│   │   ├── TrialClassInfo.astro
│   │   ├── LocationInfo.astro
│   │   └── FacilitiesList.astro
│   └── shared/
│       ├── Navbar.astro
│       ├── Footer.astro
│       ├── WhatsAppButton.astro
│       ├── CTAButton.astro
│       ├── IconTag.astro
│       └── AccessibilityToolbar.astro

└── interactive/
    ├── AudienceSelector.tsx      # React para interactividad
    ├── TestimonialFilter.tsx     # React para filtrado
    └── GalleryModal.tsx          # React para modal
```

### 3. Configuración de Variables de Entorno

```bash
# .env
PUBLIC_SITE_URL=https://vivepilates.cl
PUBLIC_WHATSAPP_NUMBER=56912345678
PUBLIC_GOOGLE_MAPS_KEY=your-key-here

# Variables para placeholders Etapa 2
PUBLIC_YEARS_EXPERIENCE=15
PUBLIC_TOTAL_STUDENTS=500
PUBLIC_CERT_YEAR=2010
```

### 4. Ejemplo de Implementación - HeroSection

```astro
---
// src/components/etapa1/home/HeroSection.astro
import CTAButton from '../../shared/CTAButton.astro';
import AudienceSelector from '../../interactive/AudienceSelector.tsx';

interface Props {
  enableAudienceSelector?: boolean;
}

const { enableAudienceSelector = true } = Astro.props;

const quotes = [
  {
    text: 'Cada persona es el arquitecto de su propia felicidad',
    author: 'Joseph Pilates',
  },
  {
    text: 'La aptitud física es el primer requisito de la felicidad',
    author: 'Joseph Pilates',
  },
  {
    text: 'La contrología es la coordinación completa de cuerpo, mente y espíritu',
    author: 'Joseph Pilates',
  },
  {
    text: 'La contrología no es un sistema de ejercicios al azar',
    author: 'Joseph Pilates',
  },
  {
    text: 'La contrología desarrolla el cuerpo uniformemente',
    author: 'Joseph Pilates',
  },
];

const audienceMessages = {
  general: 'Transforma tu Vida con Pilates',
  pregnant: 'Cuidado Especializado para tu Embarazo',
  seniors: 'Movilidad y Bienestar en tu Edad Dorada',
  rehab: 'Recupera tu Fuerza con Profesionales',
  youth: 'Desarrolla tu Potencial desde Joven',
};
---

<section class="hero-section" data-audience="general">
  <div class="hero-background">
    <div class="gradient-overlay"></div>
  </div>

  <div class="hero-content">
    {
      enableAudienceSelector && (
        <AudienceSelector client:load messages={audienceMessages} />
      )
    }

    <h1 class="hero-title" data-audience-text>
      {audienceMessages.general}
    </h1>

    <div class="quote-slider">
      {
        quotes.map((quote, index) => (
          <blockquote
            class="quote-item"
            data-index={index}
            data-active={index === 0}
          >
            <p>"{quote.text}"</p>
            <cite>- {quote.author}</cite>
          </blockquote>
        ))
      }
    </div>

    <div class="hero-cta">
      <CTAButton
        href="/servicios#clase-prueba"
        variant="primary"
        size="large"
        icon="sparkles"
      >
        Agenda tu Clase de Prueba Gratis
      </CTAButton>

      <div class="trust-badges">
        <span class="badge">
          <Icon name="users" />
          Máximo 6 Personas
        </span>
        <span class="badge">
          <Icon name="certificate" />
          Profesionales Certificados
        </span>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .gradient-overlay {
    height: 100%;
    background: linear-gradient(135deg, var(--cream) 0%, var(--rose-pale) 100%);
    transition: background 0.6s ease;
  }

  /* Variaciones por audiencia */
  [data-audience='pregnant'] .gradient-overlay {
    background: linear-gradient(
      135deg,
      var(--cream) 0%,
      var(--sage-green) 20%,
      var(--rose-pale) 100%
    );
  }

  [data-audience='seniors'] .gradient-overlay {
    background: linear-gradient(
      135deg,
      var(--warm-gray) 0%,
      var(--trust-blue) 20%,
      var(--cream) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--charcoal-gray);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
  }

  .quote-slider {
    position: relative;
    height: 120px;
    margin: 2rem 0;
  }

  .quote-item {
    position: absolute;
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
  }

  .quote-item[data-active='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  .trust-badges {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--warm-gold);
    color: white;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<script>
  // Rotación de quotes
  const quotes = document.querySelectorAll('.quote-item');
  let currentQuote = 0;

  setInterval(() => {
    quotes[currentQuote].setAttribute('data-active', 'false');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].setAttribute('data-active', 'true');
  }, 5000);

  // Listener para cambios de audiencia
  document.addEventListener('audienceChange', event => {
    const hero = document.querySelector('.hero-section');
    const title = document.querySelector('[data-audience-text]');

    hero.setAttribute('data-audience', event.detail.audience);
    title.textContent = event.detail.message;

    // Track en analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'audience_select', {
        event_category: 'personalization',
        event_label: event.detail.audience,
        value: 1,
      });
    }
  });
</script>
```

### 5. Componente Interactivo - AudienceSelector (React)

```tsx
// src/components/interactive/AudienceSelector.tsx
import { useState } from 'react';

interface AudienceSelectorProps {
  messages: Record<string, string>;
  onAudienceChange?: (audience: string) => void;
}

export default function AudienceSelector({
  messages,
  onAudienceChange,
}: AudienceSelectorProps) {
  const [selected, setSelected] = useState('general');

  const audiences = [
    { id: 'general', label: 'Todos', icon: '👥' },
    { id: 'pregnant', label: 'Embarazadas', icon: '🤰' },
    { id: 'seniors', label: 'Adultos Mayores', icon: '👴' },
    { id: 'rehab', label: 'Rehabilitación', icon: '🏥' },
    { id: 'youth', label: 'Jóvenes', icon: '🏃' },
  ];

  const handleSelect = (audienceId: string) => {
    setSelected(audienceId);

    // Dispatch custom event for Astro components
    const event = new CustomEvent('audienceChange', {
      detail: {
        audience: audienceId,
        message: messages[audienceId],
      },
    });
    document.dispatchEvent(event);

    if (onAudienceChange) {
      onAudienceChange(audienceId);
    }
  };

  return (
    <div className="audience-selector">
      <p className="selector-label">Encuentra tu programa ideal:</p>
      <div className="audience-options">
        {audiences.map(audience => (
          <button
            key={audience.id}
            onClick={() => handleSelect(audience.id)}
            className={`audience-btn ${selected === audience.id ? 'active' : ''}`}
            aria-pressed={selected === audience.id}
          >
            <span className="audience-icon">{audience.icon}</span>
            <span className="audience-label">{audience.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
```
