import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Subtle decorative background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="prose prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
              {t('aboutText').split('\n\n').map((paragraph, index) => (
                <div key={index} className="relative">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                    {paragraph}
                  </p>
                  {/* Subtle accent line */}
                  {index < t('aboutText').split('\n\n').length - 1 && (
                    <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mt-6 mx-auto animate-scale-in" style={{ animationDelay: `${0.7 + index * 0.2}s` }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};