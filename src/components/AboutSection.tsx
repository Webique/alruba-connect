import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground animate-fade-in-up">
            {t('aboutTitle')}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed animate-slide-in-right">
            {t('aboutText').split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};