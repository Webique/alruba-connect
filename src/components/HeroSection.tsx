import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero1.jpg';

export const HeroSection = () => {
  const { t, language } = useLanguage();

  const openWhatsApp = () => {
    window.open('https://wa.me/966553364426', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Theme color overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ee791d]/10 via-transparent to-[#3dbcd1]/10"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            {/* Decorative line above title */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#ee791d] to-[#3dbcd1] mx-auto mb-8 rounded-full"></div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-lg">{t('heroTitle')}</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-white/95 leading-relaxed max-w-3xl mx-auto font-light">
              {t('heroSubtitle')}
            </p>
            
            {/* Enhanced WhatsApp Button */}
            <div className="w-full flex justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#ee791d] to-[#d96a18] hover:from-[#d96a18] hover:to-[#ee791d] text-white text-lg px-10 py-5 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl font-semibold"
                onClick={openWhatsApp}
              >
                <MessageCircle className={`w-6 h-6 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#3dbcd1] rounded-full"></div>
                <span>{language === 'ar' ? 'خدمة 24/7' : '24/7 Service'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ee791d] rounded-full"></div>
                <span>{language === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#3dbcd1] rounded-full"></div>
                <span>{language === 'ar' ? 'استجابة سريعة' : 'Quick Response'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};