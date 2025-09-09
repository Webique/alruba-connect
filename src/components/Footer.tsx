import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram } from 'lucide-react';

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
            <div className="mb-4 flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/b034660a-2fe8-49d6-aa67-b7d87773ccff.png" 
                alt="Abraj AlRuba Logo" 
                className="h-10 w-auto"
              />
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
            <div className="space-y-3 text-sm">
              <div className="text-center md:text-right">
                <span className="text-primary font-medium">{t('phoneLabel')}:</span>
                <span className="text-white/70 block">+966 543767765</span>
              </div>
              <div className="text-center md:text-right">
                <span className="text-primary font-medium">Email:</span>
                <span className="text-white/70 block">Sales@abraj-alruba.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end mt-4">
                <button
                  onClick={() => window.open('https://instagram.com/abraj4cleaning')}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@abraj4cleaning</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};