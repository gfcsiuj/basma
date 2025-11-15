
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
    name: { ar: 'درج منزل', en: 'House Staircase' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://www.raed.net/img?id=1466830',
    description: {
      ar: 'تصميم وتنفيذ سلالم داخلية عصرية تجمع بين الأناقة والمتانة.',
      en: 'Design and implementation of modern interior staircases that combine elegance and durability.'
    }
  },
  {
    id: 2,
    name: { ar: 'تصميم واجهة منزل', en: 'House Facade Design' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://www.raed.net/img?id=1466832',
    description: {
      ar: 'نقدم حلولاً مبتكرة لتصميم وتنفيذ واجهات المنازل التي تعكس ذوقك الرفيع.',
      en: 'We offer innovative solutions for designing and implementing house facades that reflect your high taste.'
    }
  },
  {
    id: 3,
    name: { ar: 'غرفة خزائن ملابس', en: 'Walk-in Closet' },
    category: { ar: 'غرف نوم', en: 'Bedrooms' },
    imageUrl: 'https://www.raed.net/img?id=1466833',
    description: {
      ar: 'تصميم غرف ملابس متكاملة توفر حلول تخزين ذكية وعملية.',
      en: 'Designing integrated walk-in closets that provide smart and practical storage solutions.'
    }
  },
  {
    id: 4,
    name: { ar: 'تصميم مطبخ', en: 'Kitchen Design' },
    category: { ar: 'مطابخ', en: 'Kitchens' },
    imageUrl: 'https://www.raed.net/img?id=1466834',
    description: {
      ar: 'مطابخ مصممة خصيصاً لتلبية احتياجاتك، مع التركيز على الجودة والتصميم الفريد.',
      en: 'Custom-designed kitchens to meet your needs, with a focus on quality and unique design.'
    }
  },
  {
    id: 5,
    name: { ar: 'ديكور محل مجوهرات', en: 'Jewelry Store Decor' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://www.raed.net/img?id=1466835',
    description: {
      ar: 'تنفيذ ديكورات تجارية فاخرة تبرز جمال معروضاتك وتجذب العملاء.',
      en: 'Implementation of luxurious commercial decorations that highlight the beauty of your displays and attract customers.'
    }
  },
  {
    id: 6,
    name: { ar: 'نوافذ ألمنيوم', en: 'Aluminum Windows' },
    category: { ar: 'أبواب وشبابيك', en: 'Doors & Windows' },
    imageUrl: 'https://www.raed.net/img?id=1466837',
    description: {
      ar: 'نوافذ ألمنيوم عالية الجودة توفر عزلاً ممتازاً للصوت والحرارة مع تصاميم عصرية.',
      en: 'High-quality aluminum windows that provide excellent sound and heat insulation with modern designs.'
    }
  },
  {
    id: 7,
    name: { ar: 'واجهة بيت', en: 'House Facade' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://www.raed.net/img?id=1466846',
    description: {
      ar: 'تصميم وتنفيذ واجهات خارجية للمنازل تجمع بين الجمالية والجودة العالية.',
      en: 'Design and implementation of exterior house facades that combine aesthetics and high quality.'
    }
  },
  {
    id: 8,
    name: { ar: 'ديكور مطبخ', en: 'Kitchen Decor' },
    category: { ar: 'مطابخ', en: 'Kitchens' },
    imageUrl: 'https://www.raed.net/img?id=1466847',
    description: {
      ar: 'لمسات فنية وديكورات مبتكرة لمطبخك تضفي عليه طابعاً فريداً وعصرياً.',
      en: 'Artistic touches and innovative decorations for your kitchen that give it a unique and modern character.'
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
