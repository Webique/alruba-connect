import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export const CtaSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      
      {/* Subtle theme color accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ee791d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#3dbcd1] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Simple, clean heading */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="w-20 h-1 bg-[#ee791d] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لخدمتكم. اختر الطريقة الأنسب للتواصل'
                : 'We are here to serve you. Choose your preferred way to connect'
              }
            </p>
          </div>
          
          {/* Simple contact buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-[#ee791d] hover:bg-[#d96a18] text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[180px]"
              onClick={() => window.open('tel:0553364426')}
            >
              <Phone className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('call')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-[#3dbcd1] hover:bg-[#2ba3b8] text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[180px]"
              onClick={() => window.open('https://wa.me/966553364426')}
            >
              <MessageCircle className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('whatsapp')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[180px]"
              onClick={() => window.open('https://instagram.com/abraj4cleaning')}
            >
              <Instagram className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
              {language === 'ar' ? 'إنستغرام' : 'Instagram'}
            </Button>
          </div>
          
          {/* Simple contact info */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-white/60 text-sm mb-4">
              {language === 'ar' ? 'أو اتصل بنا مباشرة على' : 'Or call us directly at'}
            </p>
            <p className="text-2xl font-bold text-white">
              0553364426
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};