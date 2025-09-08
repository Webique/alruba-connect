import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export const CtaSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-5xl md:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لخدمتكم. اختر الطريقة الأنسب للتواصل'
                : 'We are here to serve you. Choose your preferred way to connect'
              }
            </p>
          </div>
          
          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px]"
              onClick={() => window.open('tel:0553364426')}
            >
              <Phone className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('call')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px] border-0"
              onClick={() => window.open('https://wa.me/966553364426')}
            >
              <MessageCircle className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('whatsapp')}
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 font-semibold min-w-[200px] border-0"
              onClick={() => window.open('https://instagram.com/abraj4cleaning')}
            >
              <Instagram className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
              {language === 'ar' ? 'إنستغرام' : 'Instagram'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};