import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

export const CtaSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Main heading */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {language === 'ar' ? 'جاهزون لخدمتكم' : 'Ready to Serve You'}
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'احصلوا على خدمات الصيانة المتكاملة بأعلى معايير الجودة والمهنية'
                : 'Get comprehensive maintenance services with the highest standards of quality and professionalism'
              }
            </p>
          </div>
          
          {/* Professional action buttons */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Get Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">
                {language === 'ar' ? 'احجز موعد' : 'Book Appointment'}
              </h4>
              <p className="text-gray-300 mb-6">
                {language === 'ar' ? 'احجز موعداً مجانياً لتقييم احتياجاتك' : 'Book a free appointment to assess your needs'}
              </p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold w-full"
                onClick={() => window.open('tel:0553364426')}
              >
                {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
              </Button>
            </div>

            {/* Consultation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MessageSquare className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">
                {language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </h4>
              <p className="text-gray-300 mb-6">
                {language === 'ar' ? 'تحدث مع خبرائنا واحصل على استشارة مجانية' : 'Talk to our experts and get free consultation'}
              </p>
              <Button 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-xl font-semibold w-full"
                onClick={() => window.open('https://wa.me/966553364426')}
              >
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
              </Button>
            </div>

            {/* Emergency */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">24</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">
                {language === 'ar' ? 'خدمة طوارئ' : 'Emergency Service'}
              </h4>
              <p className="text-gray-300 mb-6">
                {language === 'ar' ? 'متوفرون على مدار الساعة لحالات الطوارئ' : 'Available 24/7 for emergency situations'}
              </p>
              <Button 
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-xl font-semibold w-full"
                onClick={() => window.open('tel:0553364426')}
              >
                {language === 'ar' ? 'اتصال طوارئ' : 'Emergency Call'}
                <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 rtl:ml-3 rtl:mr-0 animate-pulse"></div>
                <span>{language === 'ar' ? 'مرخص ومؤمن' : 'Licensed & Insured'}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 rtl:ml-3 rtl:mr-0 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>{language === 'ar' ? 'ضمان الجودة' : 'Quality Guaranteed'}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 rtl:ml-3 rtl:mr-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>{language === 'ar' ? 'فريق محترف' : 'Professional Team'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};