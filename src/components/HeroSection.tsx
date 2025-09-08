import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  const { t, language } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/966553364426', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-brand text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="block text-white">{t('heroTitle')}</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl ${language === 'ar' ? 'text-right mr-0' : 'text-left ml-0'}`}>
              {t('heroSubtitle')}
            </p>
            
            {/* Single WhatsApp Button */}
            {language === 'ar' ? (
              <div className="flex justify-end">
                <Button 
                  size="lg" 
                  className="bg-[#ee791d] hover:bg-[#d96a18] text-white text-lg px-8 py-4 hover-lift shadow-lg transform transition-all duration-300 hover:scale-105"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-6 h-6 ml-3" />
                  تواصل عبر واتساب
                </Button>
              </div>
            ) : (
              <div className="flex justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#ee791d] hover:bg-[#d96a18] text-white text-lg px-8 py-4 hover-lift shadow-lg transform transition-all duration-300 hover:scale-105"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Contact via WhatsApp
                </Button>
              </div>
            )}
          </div>

          {/* Floating Elements around the content */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#3dbcd1] rounded-full opacity-80 animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ee791d] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-12 h-12 bg-[#ee791d] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-[#3dbcd1] rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};