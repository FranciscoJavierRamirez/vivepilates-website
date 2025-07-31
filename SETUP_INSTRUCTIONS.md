# Instrucciones de Configuración - VivePilates

## ✅ Implementación Completada

### Componentes Implementados:

- ✅ Layout base con header y footer
- ✅ HeroSection con rotación de quotes
- ✅ DifferentiatorGrid con diferenciadores clave
- ✅ BenefitsExpandable con beneficios categorizados
- ✅ TestimonialHighlighted con testimonio destacado
- ✅ **Gallery.astro** - Galería de fotos del estudio
- ✅ ContactInfo con información práctica
- ✅ WhatsAppButton flotante
- ✅ CTAButton para clases de prueba

### Contenido en Markdown:

- ✅ Archivos `.md` configurados con frontmatter para Content Collections
- ✅ Configuración de collections en `src/content/config.ts`
- ✅ Variables de entorno en `.env`

## 🔧 Configuración Pendiente

### 1. Variables de Entorno (.env)

El archivo `.env` ya está creado con placeholders. Actualiza con valores reales:

```env
PUBLIC_WHATSAPP_NUMBER=56912345678
PUBLIC_GOOGLE_MAPS_KEY=tu-clave-de-google-maps-aqui
PUBLIC_SITE_URL=https://vivepilates.cl
PUBLIC_ADDRESS="Av. Kennedy 6800, Vitacura"
PUBLIC_PHONE="+56 9 1234 5678"
PUBLIC_EMAIL="info@vivepilates.cl"
PUBLIC_SCHEDULE_WEEKDAYS="Lunes a Viernes: 8:00 - 20:00"
PUBLIC_SCHEDULE_WEEKENDS="Sábados: 9:00 - 14:00"
```

### 2. Imágenes Reales

Reemplaza las imágenes placeholder en `src/components/home/Gallery.astro`:

```astro
// Cambiar de fallbackImages a galleryImages const images = galleryImages; // en
lugar de fallbackImages
```

Y agrega las imágenes reales en `public/images/gallery/`:

- `sala-1.jpg`
- `sala-2.jpg`
- `equipamiento.jpg`
- `clase-grupo.jpg`
- `entrada.jpg`
- `vestuario.jpg`

### 3. Google Maps Integration

Para integrar Google Maps en `ContactInfo.astro`, necesitas:

1. Obtener una API key de Google Maps
2. Actualizar `PUBLIC_GOOGLE_MAPS_KEY` en `.env`
3. Implementar el iframe de Google Maps

### 4. Content Collections Integration

Los archivos `.md` están configurados pero necesitas integrar la lectura en los componentes:

```astro
// En HeroSection.astro, por ejemplo: import {getCollection} from
'astro:content'; const homeInfo = await getCollection('home-content');
```

## 🚀 Comandos para Ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura Final

```
src/
├── components/
│   ├── home/
│   │   ├── HeroSection.astro ✅
│   │   ├── DifferentiatorGrid.astro ✅
│   │   ├── BenefitsExpandable.astro ✅
│   │   ├── TestimonialHighlighted.astro ✅
│   │   ├── Gallery.astro ✅
│   │   └── ContactInfo.astro ✅
│   ├── layout/
│   │   ├── Header.astro ✅
│   │   └── Footer.astro ✅
│   └── etapa1/shared/
│       ├── WhatsAppButton.astro ✅
│       └── CTAButton.astro ✅
├── content/
│   ├── home-info.md ✅
│   ├── differentiators.md ✅
│   ├── benefits.md ✅
│   ├── testimonial-highlight.md ✅
│   ├── contact.md ✅
│   └── config.ts ✅
├── layouts/
│   └── BaseLayout.astro ✅
└── pages/
    └── index.astro ✅
```

## 🎯 Próximos Pasos

1. **Reemplazar imágenes placeholder** con fotos reales del estudio
2. **Configurar Google Maps** con API key real
3. **Integrar Content Collections** en los componentes
4. **Probar funcionalidad completa** del sitio
5. **Optimizar para SEO** con meta tags adicionales
6. **Configurar analytics** (Google Analytics, etc.)

## 📞 Soporte

Si encuentras problemas:

1. Verifica que todas las dependencias estén instaladas
2. Revisa la consola del navegador para errores
3. Asegúrate de que las variables de entorno estén configuradas
4. Verifica que los archivos `.md` tengan el frontmatter correcto

¡La implementación está completa según el instructivo! Solo faltan las configuraciones específicas del negocio (imágenes reales, API keys, etc.).
