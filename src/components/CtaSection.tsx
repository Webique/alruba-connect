import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export const CtaSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse" style={{ top: '80%', left: '20%', animationDelay: '2s' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-bounce"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading */}
          <div className="mb-12 animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {t('ctaText')}
            </h3>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px]"
              onClick={() => window.open('tel:0553364426')}
            >
              <Phone className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('call')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px] border-0"
              onClick={() => window.open('https://wa.me/966553364426')}
            >
              <MessageCircle className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('whatsapp')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px] border-0"
              onClick={() => window.open('https://instagram.com/abraj4cleaning')}
            >
              <Instagram className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {language === 'ar' ? 'إنستغرام' : 'Instagram'}
            </Button>
          </div>
          
          {/* Additional info */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا الآن للحصول على استشارة مجانية' 
                : 'We are here to serve you 24/7. Contact us now for a free consultation'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};