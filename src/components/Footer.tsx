import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">أبراج الربى</span>
              <span className="text-muted mx-2">|</span>
              <span className="text-secondary">Abraj AlRuba</span>
            </div>
            <p className="text-white/70 text-sm">
              {t('serviceNote')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-white/70 hover:text-primary transition-colors text-sm"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-white/70 hover:text-primary transition-colors text-sm"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-white/70 hover:text-primary transition-colors text-sm"
              >
                {t('services')}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-white">{t('contact')}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">
                <span className="text-primary font-medium">{t('phoneLabel')}:</span> 0553364426
              </p>
              <p className="text-white/70">
                <span className="text-secondary font-medium">{t('websiteLabel')}:</span> www.abraj-alruba.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            {t('copyright')}
          </p>
          <p className="text-white/60 text-sm mt-1">
            www.abraj-alruba.com
          </p>
        </div>
      </div>
    </footer>
  );
};