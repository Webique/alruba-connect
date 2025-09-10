import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const CleaningCareSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#3dbcd1] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#ee791d] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            {t('careTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ee791d] to-[#3dbcd1] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('careSubtitle')}
          </p>
        </div>

        {/* points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#3dbcd1]/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#3dbcd1]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('carePoint1Title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t('carePoint1')}</p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#ee791d]/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#ee791d]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('carePoint2Title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t('carePoint2')}</p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#3dbcd1]/10 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[#3dbcd1]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('carePoint3Title')}</h3>
            <p className="text-gray-600 text-sm md:text-base">{t('carePoint3')}</p>
          </div>
        </div>

        {/* cta */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-sm">
            {language === 'ar' ? 'جاهزون لخدمتكم بتنظيف يليق بعملكم.' : 'Ready to deliver cleaning that elevates your space.'}
          </p>
        </div>
      </div>
    </section>
  );
};


