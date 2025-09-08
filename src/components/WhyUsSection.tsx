import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
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
    color: 'bg-blue-500',
  },
  {
    icon: Leaf,
    textKey: 'ecoFriendly',
    color: 'bg-green-500',
  },
  {
    icon: Settings,
    textKey: 'customizedSolutions',
    color: 'bg-purple-500',
  },
  {
    icon: DollarSign,
    textKey: 'competitivePricing',
    color: 'bg-yellow-500',
  },
  {
    icon: Shield,
    textKey: 'reliableService',
    color: 'bg-red-500',
  },
];

export const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in-up">
            {t('whyUsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.textKey} 
                  className="group hover-lift bg-white shadow-lg hover:shadow-2xl border-0 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {t(feature.textKey)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">
              {t('coverage')}
            </span>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};