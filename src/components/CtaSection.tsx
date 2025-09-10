import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram, Mail, Clock, MapPin } from 'lucide-react';

export const CtaSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      
      {/* Subtle theme color accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ee791d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#3dbcd1] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-20 animate-fade-in-up">
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ee791d] to-[#3dbcd1] mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نحن هنا لخدمتكم على مدار الساعة. تواصل معنا بأي طريقة تفضلها'
                : 'We are here to serve you 24/7. Contact us through any method you prefer'
              }
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Phone & WhatsApp Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-[#3dbcd1] to-[#2ba3b8] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {language === 'ar' ? 'اتصل أو راسلنا' : 'Call or Message Us'}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {language === 'ar' ? 'اتصل بنا أو أرسل رسالة عبر واتساب' : 'Call us or send a WhatsApp message'}
                </p>
                <div className="space-y-2 mb-6">
                  <button 
                    onClick={() => window.open('https://wa.me/966553364426')}
                    className="text-2xl font-bold text-white hover:text-[#3dbcd1] transition-colors duration-300 cursor-pointer block"
                    dir="ltr"
                  >
                    +966 553364426
                  </button>
                </div>
                <div className="flex gap-3 w-full">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-[#3dbcd1] hover:bg-[#2ba3b8] text-white font-semibold"
                    onClick={() => window.open('tel:+966543767765')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t('call')}
                  </Button>
                  <Button 
                    size="lg" 
                    className="flex-1 bg-[#3dbcd1] hover:bg-[#2ba3b8] text-white font-semibold"
                    onClick={() => window.open('https://wa.me/966543767765')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('whatsapp')}
                  </Button>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-[#ee791d] to-[#d96a18] rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
                </p>
                <p className="text-lg font-bold text-white mb-6 break-all">Sales@abraj-alruba.com</p>
                <Button 
                  size="lg" 
                  className="w-full bg-[#ee791d] hover:bg-[#d96a18] text-white font-semibold"
                  onClick={() => window.open('mailto:Sales@abraj-alruba.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'إرسال بريد' : 'Send Email'}
                </Button>
              </div>
            </div>
          </div>

          {/* Instagram Container */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group max-w-md w-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {language === 'ar' ? 'تابعنا على إنستغرام' : 'Follow us on Instagram'}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {language === 'ar' ? 'شاهد أعمالنا وأحدث المشاريع' : 'See our work and latest projects'}
                </p>
                <p className="text-lg font-bold text-white mb-6">@abraj4cleaning</p>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                  onClick={() => window.open('https://instagram.com/abraj4cleaning')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'تابعنا' : 'Follow Us'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};