import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, 
  Leaf, 
  Settings, 
  DollarSign, 
  Shield 
} from 'lucide-react';

const features = [
  {
    icon: Users,
    textKey: 'experiencedTeam',
  },
  {
    icon: Leaf,
    textKey: 'ecoFriendly',
  },
  {
    icon: Settings,
    textKey: 'customizedSolutions',
  },
  {
    icon: DollarSign,
    textKey: 'competitivePricing',
  },
  {
    icon: Shield,
    textKey: 'reliableService',
  },
];

export const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 bg-gradient-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('whyUsTitle')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.textKey} 
                  className="flex items-start space-x-4 rtl:space-x-reverse animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-white/90 leading-relaxed">
                      {t(feature.textKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};