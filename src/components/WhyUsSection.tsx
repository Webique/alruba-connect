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
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: Leaf,
    textKey: 'ecoFriendly',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: Settings,
    textKey: 'customizedSolutions',
    gradient: 'from-amber-500 to-orange-700',
  },
  {
    icon: DollarSign,
    textKey: 'competitivePricing',
    gradient: 'from-orange-600 to-red-500',
  },
  {
    icon: Shield,
    textKey: 'reliableService',
    gradient: 'from-amber-400 to-orange-500',
  },
];

export const WhyUsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
      
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-amber-500 to-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              {t('whyUsTitle')}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={feature.textKey}
                className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 animate-fade-in-up ${
                  !isEven && language === 'en' ? 'lg:flex-row-reverse' : ''
                } ${
                  isEven && language === 'ar' ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className={`w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    {/* Floating decoration */}
                    <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-full animate-pulse`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br ${feature.gradient} rounded-full animate-bounce`} style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                      {t(feature.textKey)}
                    </p>
                    {/* Decorative line */}
                    <div className={`w-20 h-1 bg-gradient-to-r ${feature.gradient} mt-4 rounded-full ${language === 'ar' ? 'mr-auto' : 'ml-auto lg:ml-0'}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full px-12 py-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse mr-4 rtl:ml-4 rtl:mr-0"></div>
            <span className="text-xl font-bold">
              {t('coverage')}
            </span>
            <div className="w-4 h-4 bg-white rounded-full animate-pulse ml-4 rtl:mr-4 rtl:ml-0" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};