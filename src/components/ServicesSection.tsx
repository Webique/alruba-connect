import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import generalMaintenanceImg from '@/assets/general-maintenance.jpg';
import electricalServicesImg from '@/assets/electrical-services.jpg';
import airConditioningImg from '@/assets/air-conditioning.jpg';
import commercialCleaningImg from '@/assets/commercial-cleaning.jpg';
import insectControlImg from '@/assets/insect-control.jpg';
import carpetCleaningImg from '@/assets/carpet-cleaning.jpg';

const services = [
  {
    image: generalMaintenanceImg,
    titleKey: 'generalMaintenance',
    descKey: 'generalMaintenanceDesc',
    alt: 'General Maintenance Services',
  },
  {
    image: electricalServicesImg,
    titleKey: 'electricalServices',
    descKey: 'electricalServicesDesc',
    alt: 'Electrical Services',
  },
  {
    image: airConditioningImg,
    titleKey: 'airConditioning',
    descKey: 'airConditioningDesc',
    alt: 'Air Conditioning Services',
  },
  {
    image: commercialCleaningImg,
    titleKey: 'commercialCleaning',
    descKey: 'commercialCleaningDesc',
    alt: 'Commercial Cleaning Services',
  },
  {
    image: insectControlImg,
    titleKey: 'insectControl',
    descKey: 'insectControlDesc',
    alt: 'Insect Control Services',
  },
  {
    image: carpetCleaningImg,
    titleKey: 'carpetCleaning',
    descKey: 'carpetCleaningDesc',
    alt: 'Carpet Cleaning Services',
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in-up">
            {t('servicesTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.titleKey} 
              className="hover-lift bg-white shadow-card border-0 group animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(service.descKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground bg-secondary/10 inline-block px-4 py-2 rounded-full">
            {t('coverage')}
          </p>
        </div>
      </div>
    </section>
  );
};