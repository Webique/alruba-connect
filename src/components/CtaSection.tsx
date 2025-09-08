import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
            {t('ctaText')}
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="btn-secondary-brand text-lg px-8 py-4 hover-lift"
              onClick={() => window.open('tel:0553364426')}
            >
              <Phone className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('call')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary hover-lift"
              onClick={() => window.open('https://wa.me/966553364426')}
            >
              <MessageCircle className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
              {t('whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};