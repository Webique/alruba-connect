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
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${language === 'ar' ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-[0.8fr_1.2fr]'}`}>
            
            {/* Text Content */}
            <div className={`animate-fade-in-up ${language === 'ar' ? 'lg:order-1 text-right' : 'lg:order-1 text-left'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">{t('heroTitle')}</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl">
                {t('heroSubtitle')}
              </p>
              
              {/* Single WhatsApp Button */}
              <div className="flex justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#ee791d] hover:bg-[#d96a18] text-white text-lg px-8 py-4 hover-lift shadow-lg transform transition-all duration-300 hover:scale-105"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
                  {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                </Button>
              </div>
            </div>

            {/* Visual Content Side */}
            <div className={`animate-scale-in ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl backdrop-blur-sm"></div>
                  
                  {/* Company Info Card */}
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 max-w-sm w-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#ee791d] rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {language === 'ar' ? 'أبراج الربى' : 'Abraj AlRuba'}
                      </h3>
                      <p className="text-white/80 mb-4 text-sm">
                        {language === 'ar' ? 'خدمات الصيانة المتكاملة' : 'Integrated Maintenance Services'}
                      </p>
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-[#ee791d]">
                        <span className="font-semibold">0553364426</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#3dbcd1] rounded-full opacity-80 animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ee791d] rounded-full opacity-60 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
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