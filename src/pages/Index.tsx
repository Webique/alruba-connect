import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { CtaSection } from '@/components/CtaSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'أبراج الربى | Abraj AlRuba - خدمات الصيانة المتكاملة';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'شركة أبراج الربى لخدمات الصيانة المتكاملة - تكييف، كهرباء، تنظيف تجاري، مكافحة حشرات في المملكة العربية السعودية');
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;