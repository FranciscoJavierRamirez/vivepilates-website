# Estructura del Proyecto - Vive Pilates

## 📁 Estructura de Carpetas

```
vivepilates-website/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes de UI reutilizables
│   │   │   ├── Button.astro       # Botones con variantes
│   │   │   ├── Card.astro         # Tarjetas para contenido
│   │   │   └── Container.astro    # Contenedor responsivo
│   │   └── layout/                # Componentes de layout
│   │       ├── Header.astro       # Navegación principal
│   │       └── Footer.astro       # Pie de página
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout base con Header/Footer
│   ├── pages/
│   │   ├── index.astro            # Página de inicio
│   │   └── servicios.mdx          # Página de servicios (MDX)
│   ├── styles/
│   │   └── global.css             # Estilos globales con Tailwind
│   └── content/                   # Contenido MDX (futuro)
├── public/                        # Archivos estáticos
├── tailwind.config.js             # Configuración de Tailwind 4
├── astro.config.mjs              # Configuración de Astro
└── package.json                   # Dependencias del proyecto
```

## 🎨 Configuración de Tailwind 4

### Colores Personalizados

El archivo `tailwind.config.js` incluye una paleta de colores personalizada:

- **Primary**: Azules (0ea5e9 - 082f49)
- **Secondary**: Púrpuras (d946ef - 4a044e)
- **Accent**: Amarillos (eab308 - 422006)
- **Neutral**: Grises (fafafa - 0a0a0a)

### Utilidades Personalizadas

- **Animaciones**: `fade-in`, `slide-up`, `bounce-gentle`
- **Sombras**: `soft`, `medium`, `strong`
- **Espaciado**: `18`, `88`, `128`
- **Border Radius**: `xl`, `2xl`, `3xl`

## 🧩 Componentes UI

### Button Component

```astro
<Button
  variant="primary"
  |
  "secondary"
  |
  "outline"
  |
  "ghost"
  size="sm"
  |
  "md"
  |
  "lg"
  href="/ruta"
  class="clases-adicionales"
>
  Texto del botón
</Button>
```

### Card Component

```astro
<Card
  padding="sm"
  |
  "md"
  |
  "lg"
  shadow="none"
  |
  "soft"
  |
  "medium"
  |
  "strong"
  class="clases-adicionales"
>
  Contenido de la tarjeta
</Card>
```

### Container Component

```astro
<Container
  size="sm"
  |
  "md"
  |
  "lg"
  |
  "xl"
  |
  "full"
  padding="none"
  |
  "sm"
  |
  "md"
  |
  "lg"
  class="clases-adicionales"
>
  Contenido centrado
</Container>
```

## 📄 Layouts

### BaseLayout

Layout principal que incluye:

- Header con navegación
- Footer con información de contacto
- Meta tags para SEO
- Google Fonts (Inter)
- Estilos globales personalizados
- Scripts para funcionalidades interactivas

```astro
<BaseLayout
  title="Título de la página"
  description="Descripción para SEO"
  currentPage="nombre-pagina"
>
  Contenido de la página
</BaseLayout>
```

## 📝 Páginas MDX

### Estructura de una página MDX

```mdx
---
title: 'Título de la página'
description: 'Descripción para SEO'
currentPage: 'nombre-pagina'
---

import BaseLayout from '../layouts/BaseLayout.astro';
import Component from '../components/ui/Component.astro';

<BaseLayout 
  title={title}
  description={description}
  currentPage={currentPage}
>
  <!-- Contenido de la página -->
  <h1>Hola Mundo</h1>
  
  <Component>
    Contenido del componente
  </Component>
</BaseLayout>
```

## 🎯 Clases CSS Personalizadas

### Utilidades de Layout

- `.section-padding`: Padding vertical responsivo
- `.auto-grid`: Grid automático responsivo
- `.hero-gradient`: Gradiente para secciones hero

### Componentes Específicos

- `.card`: Tarjetas con hover effects
- `.pricing-card`: Tarjetas de precios
- `.testimonial-card`: Tarjetas de testimonios
- `.cta-button`: Botones de llamada a la acción

### Estados y Animaciones

- `.fade-in`: Animación de aparición
- `.slide-up`: Animación de deslizamiento
- `.loading`: Estado de carga
- `.icon`: Iconos con hover effects

### Badges y Estados

- `.badge`: Badges base
- `.badge-primary`, `.badge-secondary`, etc.: Variantes de color

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Comandos de Astro
npm run astro -- --help
```

## 📱 Responsive Design

El proyecto está configurado con breakpoints estándar de Tailwind:

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🎨 Personalización de Colores

Para cambiar la paleta de colores, edita el archivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#tu-color-50',
    100: '#tu-color-100',
    // ... hasta 950
  },
  // ... otros colores
}
```

## 📋 Próximos Pasos

1. **Personalizar colores**: Reemplazar la paleta actual con tu paleta específica
2. **Agregar contenido**: Crear páginas MDX para cada sección del sitio
3. **Optimizar imágenes**: Implementar lazy loading y optimización
4. **SEO**: Agregar meta tags específicos para cada página
5. **Analytics**: Integrar Google Analytics o similar
6. **Formularios**: Implementar formularios de contacto
7. **Blog**: Crear sección de blog con MDX

## 🔧 Configuración Actual

- ✅ Astro 5.12.6
- ✅ Tailwind 4.1.11
- ✅ MDX 4.3.2
- ✅ TypeScript
- ✅ Componentes UI reutilizables
- ✅ Layout responsivo
- ✅ Estilos globales personalizados
- ✅ Animaciones y transiciones
- ✅ SEO básico configurado
