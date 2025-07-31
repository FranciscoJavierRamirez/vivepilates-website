import { useState } from 'react';

interface Benefit {
  text: string;
  category: 'physical' | 'mental' | 'medical';
  audiences?: string[];
}

interface Props {
  benefits: Benefit[];
}

const colorMap = {
  physical: 'var(--trust-blue)',
  mental: 'var(--sage-green)',
  medical: 'var(--deep-coral)',
};

const iconMap = {
  physical: '💪',
  mental: '🧘',
  medical: '🏥',
};

const categoryNames = {
  physical: 'Físicos',
  mental: 'Mentales',
  medical: 'Médicos',
};

export default function BenefitsCategorized({ benefits }: Props) {
  const [activeTab, setActiveTab] = useState<'physical' | 'mental' | 'medical'>(
    'physical'
  );

  // Organizar beneficios por categoría
  const categorized = benefits.reduce(
    (acc, benefit) => {
      acc[benefit.category] = acc[benefit.category] || [];
      acc[benefit.category].push(benefit);
      return acc;
    },
    {} as Record<string, Benefit[]>
  );

  const handleTabClick = (category: 'physical' | 'mental' | 'medical') => {
    setActiveTab(category);
  };

  return (
    <section className="py-12 bg-[var(--warm-gray)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-[var(--deep-coral)]">
          Beneficios por Categoría
        </h2>
        <p className="text-center text-lg text-[var(--charcoal-gray)] mb-12 max-w-2xl mx-auto">
          Descubre cómo el Pilates beneficia tu cuerpo, mente y salud de manera
          integral
        </p>

        {/* Tabs Navigation */}
        <div role="tablist" className="flex justify-center mb-8 space-x-2">
          {Object.keys(categorized).map(cat => {
            const category = cat as keyof typeof colorMap;
            const isActive = activeTab === category;

            return (
              <button
                key={cat}
                onClick={() => handleTabClick(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-[var(--cream)] text-[var(--charcoal-gray)] hover:bg-[var(--rose-pale)]'
                }`}
                style={isActive ? { backgroundColor: colorMap[category] } : {}}
                aria-selected={isActive}
                role="tab"
              >
                <span className="text-xl">{iconMap[category]}</span>
                <span>{categoryNames[category]}</span>
                <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  {categorized[category]?.length || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          className="bg-[var(--white)] rounded-lg shadow-md p-8 min-h-[300px] transition-all duration-300"
          style={{ borderTop: `4px solid ${colorMap[activeTab]}` }}
        >
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">{iconMap[activeTab]}</span>
            <h3
              className="text-2xl font-bold"
              style={{ color: colorMap[activeTab] }}
            >
              Beneficios {categoryNames[activeTab]}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorized[activeTab]?.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-[var(--cream)] hover:bg-[var(--rose-pale)] transition-colors duration-200"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: colorMap[activeTab] }}
                ></div>
                <div>
                  <p className="text-[var(--charcoal-gray)] leading-relaxed">
                    {benefit.text}
                  </p>
                  {benefit.audiences && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {benefit.audiences.map(audience => (
                        <span
                          key={audience}
                          className="text-xs px-2 py-1 rounded-full bg-white text-[var(--charcoal-gray)]"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )) || (
              <p className="text-[var(--charcoal-gray)] text-center col-span-2 py-8">
                No hay beneficios disponibles para esta categoría.
              </p>
            )}
          </div>

          {/* Summary Card */}
          <div
            className="mt-8 p-4 rounded-lg"
            style={{ backgroundColor: `${colorMap[activeTab]}15` }}
          >
            <p className="text-sm text-[var(--charcoal-gray)] text-center">
              <strong style={{ color: colorMap[activeTab] }}>
                {categorized[activeTab]?.length || 0} beneficios{' '}
                {categoryNames[activeTab].toLowerCase()}
              </strong>{' '}
              comprobados que experimentarás con la práctica regular de Pilates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
