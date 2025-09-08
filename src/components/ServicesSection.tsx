import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Zap, 
  Wind, 
  Sparkles, 
  Bug, 
  Shirt,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    titleKey: 'generalMaintenance',
    descKey: 'generalMaintenanceDesc',
  },
  {
    icon: Zap,
    titleKey: 'electricalServices',
    descKey: 'electricalServicesDesc',
  },
  {
    icon: Wind,
    titleKey: 'airConditioning',
    descKey: 'airConditioningDesc',
  },
  {
    icon: Sparkles,
    titleKey: 'commercialCleaning',
    descKey: 'commercialCleaningDesc',
  },
  {
    icon: Bug,
    titleKey: 'insectControl',
    descKey: 'insectControlDesc',
  },
  {
    icon: Shirt,
    titleKey: 'carpetCleaning',
    descKey: 'carpetCleaningDesc',
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.titleKey} 
                className="hover-lift bg-white shadow-card border-0 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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