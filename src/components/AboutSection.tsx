import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"></div>
      
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-primary to-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 animate-fade-in-up">
              {t('aboutTitle')}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
              {t('aboutText').split('\n\n').map((paragraph, index) => (
                <div key={index} className="relative">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                    {paragraph}
                  </p>
                  {/* Decorative accent line */}
                  {index < t('aboutText').split('\n\n').length - 1 && (
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full mx-auto animate-scale-in" style={{ animationDelay: `${0.7 + index * 0.2}s` }}></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bottom decoration */}
            <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="flex space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-8 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce opacity-80"></div>
        <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};