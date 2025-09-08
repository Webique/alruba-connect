import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    whyUs: 'لماذا نحن',
    contact: 'تواصل',
    
    // Hero Section
    heroTitle: 'معكم نحو أفضل بيئة عمل',
    heroSubtitle: 'نوفّر حلول صيانة متكاملة وكفاءة تشغيلية بأعلى معايير الجودة',
    callNow: 'إتصل الآن',
    getQuote: 'طلب عرض سعر',
    
    // About Section
    aboutTitle: 'من نحن',
    aboutText: 'تأسست شركة أبراج الربى لتقديم خدمات الصيانة المتكاملة في مجالات تكييف الهواء، الكهرباء والصيانة العامة، إضافةً إلى صيانة معدات المطاعم. نعمل على تلبية احتياجات عملائنا من خلال تقديم حلول مبتكرة وفعّالة، مع ضمان أعلى مستويات الجودة في الأداء.\n\nيمتلك فريق أبراج الربى خبرات عالية ويعمل وفق أعلى معايير الخدمة والتقنية، مع التزام بالتطوير المستمر لمواكبة أحدث التقنيات في السوق.',
    
    // Services
    servicesTitle: 'خدماتنا',
    generalMaintenance: 'الصيانة العامة',
    electricalServices: 'الخدمات الكهربائية',
    airConditioning: 'صيانة مكيفات الهواء',
    commercialCleaning: 'تنظيف تجاري',
    insectControl: 'مكافحة الحشرات',
    carpetCleaning: 'تنظيف الموكيت والسجاد',
    
    // Service descriptions
    generalMaintenanceDesc: 'تقديم خدمات الصيانة للمرافق والمعدات • فحص وصيانة الأنظمة لضمان الأداء الفعّال • تحسين وتطوير المنشآت',
    electricalServicesDesc: 'تركيب وصيانة الأنظمة الكهربائية، فحص ومعالجة الأعطال، حلول إضاءة متقدمة وآمنة',
    airConditioningDesc: 'فحص وصيانة المكيفات، تركيب وتشغيل أنظمة التكييف، تنظيف وصيانة الفلاتر والمكونات الداخلية',
    commercialCleaningDesc: 'نظافة المباني والواجهات واللافتات لخلق انطباعٍ ترحيبي لأعمالك',
    insectControlDesc: 'حماية الممتلكات من الآفات بطرق آمنة وفعّالة لضمان بيئة خالية من الحشرات',
    carpetCleaningDesc: 'تنظيف عميق ينعش السجاد ويزيل البقع ومسببات الحساسية',
    
    coverage: 'تغطية كاملة للمملكة',
    
    // Why Us
    whyUsTitle: 'لماذا تختارنا',
    experiencedTeam: 'فريق ذو خبرة: موظفون مدرّبون وملتزمون بتقديم نتائج عالية الجودة',
    ecoFriendly: 'ممارسات صديقة للبيئة: نُولي الأولوية لمنتجات تنظيف آمنة وأساليب فعّالة',
    customizedSolutions: 'حلول مخصّصة: خدمات مصمّمة لتلبية احتياجاتك الفريدة',
    competitivePricing: 'أسعار تنافسية: تنافسية بدون المساس بالجودة',
    reliableService: 'خدمة موثوقة: التزام بالمواعيد ومصداقية تتجاوز التوقعات',
    
    // CTA
    ctaText: 'إتصل الآن: 0553364426',
    call: 'اتصال',
    whatsapp: 'واتساب',
    
    // Contact Form
    contactTitle: 'تواصل معنا',
    name: 'الاسم',
    phone: 'رقم الجوال',
    service: 'الخدمة المطلوبة',
    description: 'وصف مختصر',
    submitRequest: 'إرسال الطلب',
    
    // Service options
    maintenance: 'الصيانة',
    electrical: 'الخدمات الكهربائية',
    ac: 'تكييف الهواء',
    cleaning: 'التنظيف',
    insectControlOption: 'مكافحة الحشرات',
    carpetCleaningOption: 'تنظيف السجاد',
    
    // Contact Info
    phoneLabel: 'الهاتف',
    websiteLabel: 'الموقع الإلكتروني',
    serviceNote: 'نسعد بخدمتكم ونلتزم بالرد السريع',
    
    // Footer
    copyright: '© أبراج الربى – جميع الحقوق محفوظة',
    
    // Success message
    requestSent: 'تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    whyUs: 'Why Us',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'With you towards a better work environment',
    heroSubtitle: 'Integrated maintenance solutions with top-tier quality and efficiency',
    callNow: 'Call Now',
    getQuote: 'Get a Quote',
    
    // About Section
    aboutTitle: 'About Us',
    aboutText: 'Abraj AlRuba was founded to deliver integrated maintenance services across air conditioning, electrical systems, and general maintenance, plus restaurant equipment care. We provide innovative, efficient solutions while ensuring the highest standards of quality and performance.\n\nOur team brings deep expertise and is committed to continuous improvement, adopting the latest industry technologies.',
    
    // Services
    servicesTitle: 'Our Services',
    generalMaintenance: 'General Maintenance',
    electricalServices: 'Electrical Services',
    airConditioning: 'Air Conditioning',
    commercialCleaning: 'Commercial Cleaning',
    insectControl: 'Insect Control',
    carpetCleaning: 'Carpet Cleaning',
    
    // Service descriptions
    generalMaintenanceDesc: 'Maintenance for facilities and equipment • System inspection and servicing for efficient performance • Facility upgrades and improvements',
    electricalServicesDesc: 'Install & maintain electrical systems, troubleshoot faults, and provide advanced, safe lighting solutions',
    airConditioningDesc: 'AC inspection & servicing, installation & commissioning, filter and internal component cleaning',
    commercialCleaningDesc: 'Keep commercial buildings and signage spotless for a welcoming first impression',
    insectControlDesc: 'Protect property using safe, effective methods to ensure a pest-free environment',
    carpetCleaningDesc: 'Deep cleaning to rejuvenate carpets, remove stains and allergens',
    
    coverage: 'Full KSA coverage',
    
    // Why Us
    whyUsTitle: 'Why Choose Us',
    experiencedTeam: 'Experienced Team: Highly trained professionals dedicated to quality',
    ecoFriendly: 'Eco-Friendly Practices: Prioritize safe, eco-friendly products and methods',
    customizedSolutions: 'Customized Solutions: Tailored to your specific needs',
    competitivePricing: 'Competitive Pricing: Great value without compromising quality',
    reliableService: 'Reliable Service: Punctual, trustworthy, and results-driven',
    
    // CTA
    ctaText: 'Call Now: 0553364426',
    call: 'Call',
    whatsapp: 'WhatsApp',
    
    // Contact Form
    contactTitle: 'Contact Us',
    name: 'Name',
    phone: 'Phone',
    service: 'Service',
    description: 'Brief Description',
    submitRequest: 'Submit Request',
    
    // Service options
    maintenance: 'Maintenance',
    electrical: 'Electrical',
    ac: 'AC',
    cleaning: 'Cleaning',
    insectControlOption: 'Insect Control',
    carpetCleaningOption: 'Carpet Cleaning',
    
    // Contact Info
    phoneLabel: 'Phone',
    websiteLabel: 'Website',
    serviceNote: "We're happy to help and respond promptly",
    
    // Footer
    copyright: '© Abraj AlRuba — All rights reserved',
    
    // Success message
    requestSent: 'Request sent successfully! We will contact you soon.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const value: LanguageContextValue = {
    language,
    setLanguage,
    isRTL: language === 'ar',
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};