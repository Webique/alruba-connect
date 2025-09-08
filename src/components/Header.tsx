import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b034660a-2fe8-49d6-aa67-b7d87773ccff.png" 
              alt="Abraj AlRuba Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('whyUs')}
            </button>
          </div>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg border border-border hover:bg-accent transition-colors text-sm font-medium"
            >
              {language === 'ar' ? 'EN' : 'العربية'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {t('whyUs')}
              </button>
              
              <div className="flex justify-start pt-4 border-t border-border">
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 rounded-lg border border-border hover:bg-accent transition-colors text-sm font-medium"
                >
                  {language === 'ar' ? 'EN' : 'العربية'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};