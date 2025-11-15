
import type { Service, ServiceCategory } from './types';

export const UI_TEXT = {
  ar: {
    navHome: 'الرئيسية',
    navServices: 'خدماتنا',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا',
    heroTitle: 'نصنع بصمة تبقى في بيتك لسنين طويلة',
    heroSubtitle: 'إذا تفكر تغيّر شكل بيتك، تسوّي مطبخ عصري، أو تحتاج شبابيك وأبواب بأعلى جودة—فـ بصمة هي المكان اللي يدخلك وتطلع منه مقتنع 100%.',
    heroButton: 'تصفح أعمالنا',
    featuredTitle: 'أبرز أعمالنا',
    categoriesTitle: 'تصفح خدماتنا',
    footerDescription: 'بصمة للألمنيوم والمطابخ الحديثة هي وجهتك الأولى للجودة، الالتزام، والضمان الذي يجعلك مطمئناً في كل خطوة.',
    footerLinks: 'روابط سريعة',
    footerContact: 'تواصل معنا',
    language: 'English',
    bottomNavHome: 'الرئيسية',
    bottomNavServices: 'خدماتنا',
    bottomNavAbout: 'من نحن',
    bottomNavContact: 'اتصل بنا',
    servicesPageTitle: 'جميع خدماتنا',
    contactPageTitle: 'اتصل بنا',
    contactPageSubtitle: 'تواصل معنا الآن للحصول على استشارة مجانية وبدء مشروعك.',
    aboutPageTitle: 'عن شركة بصمة',
    menu: 'القائمة',
    allCategories: 'الكل',
    searchPlaceholder: 'ابحث عن خدمة...',
    noResults: 'لم يتم العثور على نتائج',
    search: 'بحث',
    address: 'العنوان',
    addressLocation: 'النجف الاشرف - حي السلام شارع الحزام الأخضر مقابل مطعم ابن هندول',
    whatsapp: 'واتساب',
    telegram: 'تلجرام',
    aboutButton: 'اعرف المزيد عنا',
    contactButton: 'كل طرق التواصل',
    aboutHomepageText: 'إذا تفكر تغيّر شكل بيتك، تسوّي مطبخ عصري، أو تحتاج شبابيك وأبواب بأعلى جودة—فـ بصمة هي المكان اللي يدخلك وتطلع منه مقتنع 100%.',
  },
  en: {
    navHome: 'Home',
    navServices: 'Our Services',
    navAbout: 'About Us',
    navContact: 'Contact Us',
    heroTitle: 'Crafting a Lasting Impression in Your Home',
    heroSubtitle: 'Considering a home makeover, a modern kitchen, or high-quality windows and doors? Basma is where you walk in with an idea and walk out 100% confident.',
    heroButton: 'Browse Our Work',
    featuredTitle: 'Featured Work',
    categoriesTitle: 'Browse Our Services',
    footerDescription: 'Basma for Aluminum and Modern Kitchens is your premier destination for quality, commitment, and a guarantee that gives you peace of mind every step of the way.',
    footerLinks: 'Quick Links',
    footerContact: 'Contact Us',
    language: 'العربية',
    bottomNavHome: 'Home',
    bottomNavServices: 'Services',
    bottomNavAbout: 'About',
    bottomNavContact: 'Contact',
    servicesPageTitle: 'All Our Services',
    contactPageTitle: 'Contact Us',
    contactPageSubtitle: 'Get in touch for a free consultation and let\'s start your project.',
    aboutPageTitle: 'About Basma',
    menu: 'Menu',
    allCategories: 'All',
    searchPlaceholder: 'Search for a service...',
    noResults: 'No results found',
    search: 'Search',
    address: 'Address',
    addressLocation: 'Najaf Al-Ashraf - Hay Al-Salam - Green Belt St - Opposite Ibn Hindol Restaurant',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    aboutButton: 'Learn More About Us',
    contactButton: 'See All Contact Methods',
    aboutHomepageText: 'Considering a home makeover, a modern kitchen, or high-quality windows and doors? Basma is where you walk in with an idea and walk out 100% confident.',
  },
};

export const SERVICES: Service[] = [
  {
    id: 1,
    name: { ar: 'مطبخ حديث', en: 'Modern Kitchen' },
    category: { ar: 'مطابخ', en: 'Kitchens' },
    imageUrl: 'https://picsum.photos/seed/kitchen1/400/400',
    description: {
      ar: 'تصميم وتنفيذ مطابخ عصرية باستخدام أجود المواد، مع استغلال مثالي للمساحات لتحقيق التوازن بين الجمال والوظيفة.',
      en: 'Designing and implementing modern kitchens using the finest materials, with optimal space utilization to balance aesthetics and functionality.'
    }
  },
  {
    id: 2,
    name: { ar: 'أبواب وشبابيك ألمنيوم', en: 'Aluminum Doors & Windows' },
    category: { ar: 'أبواب وشبابيك', en: 'Doors & Windows' },
    imageUrl: 'https://picsum.photos/seed/windows/400/400',
    description: {
      ar: 'نقدم حلولاً متكاملة للأبواب والشبابيك من الألمنيوم عالي الجودة، مع عزل ممتاز للصوت والحرارة وتصاميم تناسب كل الأذواق.',
      en: 'We provide integrated solutions for high-quality aluminum doors and windows, with excellent sound and heat insulation and designs to suit all tastes.'
    }
  },
  {
    id: 3,
    name: { ar: 'واجهة زجاجية', en: 'Glass Facade' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://picsum.photos/seed/facade/400/400',
    description: {
      ar: 'تصميم وتركيب واجهات زجاجية أنيقة وعملية للمباني التجارية والسكنية، تضفي لمسة من الحداثة وتسمح بمرور الضوء الطبيعي.',
      en: 'Design and installation of elegant and practical glass facades for commercial and residential buildings, adding a touch of modernity and allowing natural light to pass through.'
    }
  },
  {
    id: 4,
    name: { ar: 'غرفة نوم مودرن', en: 'Modern Bedroom' },
    category: { ar: 'غرف نوم', en: 'Bedrooms' },
    imageUrl: 'https://picsum.photos/seed/bedroom/400/400',
    description: {
      ar: 'نصمم غرف نوم تجمع بين الراحة والأناقة، باستخدام ديكورات MDF عصرية وتصاميم مبتكرة تخلق مساحة هادئة ومريحة.',
      en: 'We design bedrooms that combine comfort and elegance, using modern MDF decorations and innovative designs to create a calm and comfortable space.'
    }
  },
  {
    id: 5,
    name: { ar: 'شاور حديث', en: 'Modern Shower' },
    category: { ar: 'حمامات', en: 'Bathrooms' },
    imageUrl: 'https://picsum.photos/seed/shower/400/400',
    description: {
        ar: 'تركيب شاورات حديثة بتصاميم زجاجية فاخرة، تمنح حمامك مظهراً عصرياً وشعوراً بالاتساع.',
        en: 'Installation of modern showers with luxurious glass designs, giving your bathroom a contemporary look and a feeling of spaciousness.'
    }
  },
  {
    id: 6,
    name: { ar: 'ديكور MDF', en: 'MDF Decoration' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://picsum.photos/seed/mdf/400/400',
    description: {
        ar: 'تنفيذ كافة الديكورات الداخلية باستخدام ألواح MDF عالية الجودة، بما في ذلك المحجرات الحديثة وتغليف الجدران.',
        en: 'Implementation of all interior decorations using high-quality MDF panels, including modern railings and wall cladding.'
    }
  },
  {
    id: 7,
    name: { ar: 'مطبخ بتصميم كلاسيكي', en: 'Classic Design Kitchen' },
    category: { ar: 'مطابخ', en: 'Kitchens' },
    imageUrl: 'https://picsum.photos/seed/kitchen2/400/400',
    description: {
        ar: 'تصاميم مطابخ تجمع بين فخامة الكلاسيكية ومتانة المواد الحديثة، لخلق تحفة فنية في منزلك.',
        en: 'Kitchen designs that combine classic luxury with the durability of modern materials to create a masterpiece in your home.'
    }
  },
  {
    id: 8,
    name: { ar: 'مغاسل كوارتز وMDF', en: 'Quartz & MDF Sinks' },
    category: { ar: 'حمامات', en: 'Bathrooms' },
    imageUrl: 'https://picsum.photos/seed/sink/400/400',
    description: {
        ar: 'تصنيع وتركيب مغاسل فاخرة من الكوارتز وMDF، تتميز بالمتانة ومقاومة الماء والتصاميم العصرية.',
        en: 'Manufacturing and installation of luxury sinks from quartz and MDF, characterized by durability, water resistance, and modern designs.'
    }
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: 'kitchens',
        name: { ar: 'مطابخ', en: 'Kitchens' },
        imageUrl: 'https://picsum.photos/seed/category_kitchens/400/400'
    },
    {
        id: 'doors-windows',
        name: { ar: 'أبواب وشبابيك', en: 'Doors & Windows' },
        imageUrl: 'https://picsum.photos/seed/category_doors/400/400'
    },
    {
        id: 'facades-decor',
        name: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
        imageUrl: 'https://picsum.photos/seed/category_decor/400/400'
    },
    {
        id: 'bedrooms',
        name: { ar: 'غرف نوم', en: 'Bedrooms' },
        imageUrl: 'https://picsum.photos/seed/category_bedrooms/400/400'
    },
    {
        id: 'bathrooms',
        name: { ar: 'حمامات', en: 'Bathrooms' },
        imageUrl: 'https://picsum.photos/seed/category_bathrooms/400/400'
    }
];
