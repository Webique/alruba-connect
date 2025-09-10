import { useLanguage } from '@/contexts/LanguageContext';
import generalMaintenanceImg from '@/assets/general-maintenance.jpg';
import electricalServicesImg from '@/assets/electrical-services.jpg';
import airConditioningImg from '@/assets/air-conditioning.jpg';
import commercialCleaningImg from '@/assets/commercial-cleaning.jpg';
import insectControlImg from '@/assets/insect-control.jpg';
import carpetCleaningImg from '@/assets/carpet-cleaning.jpg';

const services = [
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
    image: carpetCleaningImg,
    titleKey: 'carpetCleaning',
    descKey: 'carpetCleaningDesc',
    alt: 'Carpet Cleaning Services',
  },
  {
    image: generalMaintenanceImg,
    titleKey: 'generalMaintenance',
    descKey: 'generalMaintenanceDesc',
    alt: 'General Maintenance Services',
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background with theme colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#ee791d]/5 via-transparent to-[#3dbcd1]/5"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ee791d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#3dbcd1] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ee791d] to-[#3dbcd1] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('coverage')}
          </p>
        </div>

        {/* Modern services layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.titleKey}
              className={`group animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-12`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image section */}
              <div className="flex-1 flex justify-center">
                <div className="w-fit rounded-2xl overflow-hidden bg-white shadow-md">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="block h-64 md:h-72 object-contain"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#ee791d] transition-colors duration-300">
                    {t(service.titleKey)}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#ee791d] to-[#3dbcd1] rounded-full mx-auto md:mx-0"></div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>
                
                {/* Call to action */}
                <div className="pt-4 flex justify-center md:justify-start">
                  <button onClick={() => window.open('https://wa.me/966553364426', '_blank')} className="inline-flex items-center text-[#ee791d] font-semibold hover:text-[#d96a18] transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                    <span className="mr-2">
                      {t('callNow')}
                    </span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};