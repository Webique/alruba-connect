import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle decorative background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-8 w-16 h-16 border border-gray-200 dark:border-gray-700 rotate-45 opacity-30"></div>
        <div className="absolute top-64 right-12 w-12 h-12 border border-gray-300 dark:border-gray-600 rotate-12 opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-gray-300 dark:bg-gray-600 rotate-45 opacity-20"></div>
        <div className="absolute bottom-48 right-8 w-20 h-20 border border-gray-200 dark:border-gray-700 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            {/* Background accent for title */}
            <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 blur-xl rounded-full transform scale-110"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up relative">
              {t('aboutTitle')}
            </h2>
            <div className="flex justify-center items-center gap-2 animate-scale-in">
              <div className="w-8 h-px bg-gray-400 dark:bg-gray-500"></div>
              <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              <div className="w-16 h-px bg-gray-400 dark:bg-gray-500"></div>
              <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
              <div className="w-8 h-px bg-gray-400 dark:bg-gray-500"></div>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Card shadow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-3xl transform rotate-1 scale-[1.02]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl transform -rotate-1 scale-[1.01]"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {/* Corner decorative elements */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-gray-300 dark:border-gray-600 opacity-50"></div>
              <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-gray-300 dark:border-gray-600 opacity-50"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-gray-300 dark:border-gray-600 opacity-50"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-gray-300 dark:border-gray-600 opacity-50"></div>
              
              <div className="prose prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
                {t('aboutText').split('\n\n').map((paragraph, index) => (
                  <div key={index} className="relative">
                    {/* Paragraph number indicator */}
                    <div className="absolute -left-8 top-2 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 opacity-70">
                      {index + 1}
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed animate-fade-in-up pl-4" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                      {paragraph}
                    </p>
                    {/* Subtle accent line between paragraphs */}
                    {index < t('aboutText').split('\n\n').length - 1 && (
                      <div className="flex justify-center mt-8 animate-scale-in" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-px bg-gray-300 dark:bg-gray-600"></div>
                          <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                          <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                          <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                          <div className="w-4 h-px bg-gray-300 dark:bg-gray-600"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Quote-style decoration at bottom */}
              <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <div className="text-6xl text-gray-200 dark:text-gray-700 font-serif leading-none">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};