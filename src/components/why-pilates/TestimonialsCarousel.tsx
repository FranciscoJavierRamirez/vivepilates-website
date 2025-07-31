import { useState } from 'react';
import type { TestimonialCarouselProps, Testimonial } from '@/types';

const audienceNames = {
  general: 'General',
  seniors: 'Adultos Mayores',
  pregnant: 'Embarazadas',
  rehab: 'Rehabilitación',
  youth: 'Jóvenes',
};

const benefitColors = {
  Relajación: 'var(--sage-green)',
  Fuerza: 'var(--trust-blue)',
  Flexibilidad: 'var(--coral-primary)',
  'Dolor espalda': 'var(--deep-coral)',
  Atención: 'var(--warm-gold)',
  Entretenimiento: 'var(--warm-gold)',
  Relajo: 'var(--sage-green)',
  Ambiente: 'var(--trust-blue)',
  Variedad: 'var(--coral-primary)',
};

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // Filtrar testimonios
  const filtered =
    filter === 'all'
      ? testimonials
      : testimonials.filter(t => t.audience === filter || t.benefit === filter);

  // Paginación
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentTestimonials = filtered.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Obtener filtros únicos
  const uniqueAudiences = [...new Set(testimonials.map(t => t.audience))];
  const uniqueBenefits = [...new Set(testimonials.map(t => t.benefit))];

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(0); // Reset pagination
  };

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-12 bg-[var(--rose-pale)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-[var(--deep-coral)]">
          Testimonios Reales
        </h2>
        <p className="text-center text-lg text-[var(--charcoal-gray)] mb-8 max-w-2xl mx-auto">
          Conoce las experiencias de nuestros alumnos y cómo el Pilates ha
          transformado sus vidas
        </p>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[var(--coral-primary)] text-white'
                  : 'bg-[var(--white)] text-[var(--charcoal-gray)] hover:bg-[var(--cream)]'
              }`}
            >
              Todos ({testimonials.length})
            </button>

            {/* Filtros por audiencia */}
            {uniqueAudiences.map(audience => (
              <button
                key={audience}
                onClick={() => handleFilterChange(audience)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === audience
                    ? 'bg-[var(--trust-blue)] text-white'
                    : 'bg-[var(--white)] text-[var(--charcoal-gray)] hover:bg-[var(--cream)]'
                }`}
              >
                {audienceNames[audience] || audience} (
                {testimonials.filter(t => t.audience === audience).length})
              </button>
            ))}
          </div>

          {/* Filtros por beneficio */}
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueBenefits.slice(0, 6).map(benefit => (
              <button
                key={benefit}
                onClick={() => handleFilterChange(benefit)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  filter === benefit
                    ? 'text-white'
                    : 'bg-[var(--white)] text-[var(--charcoal-gray)] hover:bg-[var(--cream)]'
                }`}
                style={
                  filter === benefit
                    ? {
                        backgroundColor:
                          benefitColors[benefit] || 'var(--coral-primary)',
                      }
                    : {}
                }
              >
                {benefit}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonios Grid */}
        <div className="min-h-[400px]">
          {currentTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="bg-[var(--white)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Header con nombre y rating */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-[var(--deep-coral)]">
                        {testimonial.name}
                      </h4>
                      {testimonial.age && (
                        <span className="text-sm text-[var(--charcoal-gray)]">
                          {testimonial.age} años
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="text-xs text-[var(--charcoal-gray)]">
                        {testimonial.rating}/5
                      </div>
                    </div>
                  </div>

                  {/* Testimonio */}
                  <blockquote className="italic text-[var(--charcoal-gray)] mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-xs px-2 py-1 rounded-full text-white font-medium"
                      style={{
                        backgroundColor:
                          benefitColors[testimonial.benefit] ||
                          'var(--coral-primary)',
                      }}
                    >
                      {testimonial.benefit}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--cream)] text-[var(--charcoal-gray)]">
                      {audienceNames[testimonial.audience] ||
                        testimonial.audience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[var(--charcoal-gray)] text-lg">
                No hay testimonios disponibles para este filtro.
              </p>
              <button
                onClick={() => handleFilterChange('all')}
                className="mt-4 px-4 py-2 bg-[var(--coral-primary)] text-white rounded-lg hover:bg-[var(--deep-coral)] transition-colors"
              >
                Ver todos los testimonios
              </button>
            </div>
          )}
        </div>

        {/* Navegación de paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-[var(--white)] text-[var(--charcoal-gray)] rounded-lg hover:bg-[var(--cream)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              ← Anterior
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentPage === i
                      ? 'bg-[var(--coral-primary)] text-white'
                      : 'bg-[var(--white)] text-[var(--charcoal-gray)] hover:bg-[var(--cream)]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 bg-[var(--white)] text-[var(--charcoal-gray)] rounded-lg hover:bg-[var(--cream)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Siguiente →
            </button>
          </div>
        )}

        {/* Estadísticas */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-[var(--white)] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[var(--coral-primary)]">
                {testimonials.length}
              </div>
              <div className="text-sm text-[var(--charcoal-gray)]">
                Testimonios reales
              </div>
            </div>
            <div className="bg-[var(--white)] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[var(--sage-green)]">
                {(
                  testimonials.reduce((acc, t) => acc + t.rating, 0) /
                  testimonials.length
                ).toFixed(1)}
              </div>
              <div className="text-sm text-[var(--charcoal-gray)]">
                Rating promedio
              </div>
            </div>
            <div className="bg-[var(--white)] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[var(--trust-blue)]">
                {uniqueBenefits.length}
              </div>
              <div className="text-sm text-[var(--charcoal-gray)]">
                Beneficios reportados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
