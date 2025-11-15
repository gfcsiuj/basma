
import type { Service, ServiceCategory, HighlightService } from './types';

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
    servicesPageTitle: 'جميع أعمالنا',
    servicesHighlightTitle: 'خدماتنا الرئيسية',
    contactPageTitle: 'اتصل بنا',
    contactPageSubtitle: 'تواصل معنا الآن للحصول على استشارة مجانية وبدء مشروعك.',
    aboutPageTitle: 'عن شركة بصمة',
    menu: 'القائمة',
    allCategories: 'الكل',
    searchPlaceholder: 'ابحث عن خدمة...',
    noResults: 'لم يتم العور على نتائج',
    search: 'بحث',
    address: 'العنوان',
    addressLocation: 'النجف الاشرف - حي السلام شارع الحزام الأخضر مقابل مطعم ابن هندول',
    whatsapp: 'واتساب',
    telegram: 'تلجرام',
    instagram: 'انستغرام',
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
    servicesPageTitle: 'All Our Works',
    servicesHighlightTitle: 'Our Core Services',
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
    instagram: 'Instagram',
    aboutButton: 'Learn More About Us',
    contactButton: 'See All Contact Methods',
    aboutHomepageText: 'Considering a home makeover, a modern kitchen, or high-quality windows and doors? Basma is where you walk in with an idea and walk out 100% confident.',
  },
};

export const HIGHLIGHT_SERVICES: HighlightService[] = [
  { id: 1, name: { ar: 'مطابخ حديثة بتصاميم فاخرة وعمل متقن', en: 'Modern kitchens with luxury designs' }, imageUrl: 'https://www.raed.net/img?id=1466859' },
  { id: 2, name: { ar: 'أبواب وشبابيك ألمنيوم بجودة عالية', en: 'High-quality aluminum doors and windows' }, imageUrl: 'https://www.raed.net/img?id=1466910' },
  { id: 3, name: { ar: 'واجهات زجاجية عملية وأنيقة', en: 'Practical and elegant glass facades' }, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTVYdoH4Oli7je3fOmvAqlK78td2zbrIElQ&s' },
  { id: 4, name: { ar: 'ديكورات MDF جديدة وعصرية', en: 'New and modern MDF decorations' }, imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrxnvMQNEGVyjMCOGKRyRtmiulHDeffRabvzxKM-MQjMIA1X6Z' },
  { id: 5, name: { ar: 'غرف نوم وغرف أطفال', en: 'Bedrooms and children\'s rooms' }, imageUrl: 'https://waghetdecor.com/wp-content/uploads/2020/10/22.jpg' },
  { id: 6, name: { ar: 'شاورات حديثة', en: 'Modern showers' }, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-eYlDQKxL8M9cyLPM8VOMVyxyv1bg3XUdg&s' },
  { id: 7, name: { ar: 'مغاسل كوارتز وMDF', en: 'Quartz and MDF sinks' }, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE3a_t27vWL1JJCq-_YJVmZIDnz0mtxr1jw&s' },
  { id: 8, name: { ar: 'محجرات حديثة وديكور داخلي كامل للمنزل', en: 'Modern railings and complete interior decor' }, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uKP83ainonMVit6BzaR8TjnGuOkI9iecdQ&s' },
];

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
    name: { ar: 'تصميم مطبخ', en: 'Kitchen Decor' },
    category: { ar: 'مطابخ', en: 'Kitchens' },
    imageUrl: 'https://www.raed.net/img?id=1466859',
    description: {
      ar: 'لمسات فنية وديكورات مبتكرة لمطبخك تضفي عليه طابعاً فريداً وعصرياً.',
      en: 'Artistic touches and innovative decorations for your kitchen that give it a unique and modern character.'
    }
  },
  {
    id: 9,
    name: { ar: 'ديكور متجر', en: 'Store Decor' },
    category: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
    imageUrl: 'https://www.raed.net/img?id=1466853',
    description: {
      ar: 'تصاميم داخلية عصرية للمتاجر والمحلات التجارية.',
      en: 'Modern interior designs for stores and commercial shops.'
    }
  },
  {
    id: 10,
    name: { ar: 'تصميم أبواب', en: 'Door Design' },
    category: { ar: 'أبواب وشبابيك', en: 'Doors & Windows' },
    imageUrl: 'https://www.raed.net/img?id=1466867',
    description: {
      ar: 'أبواب ألمنيوم بتصاميم فريدة تجمع بين الأمان والجمال.',
      en: 'Aluminum doors with unique designs that combine security and beauty.'
    }
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: 'kitchens',
        name: { ar: 'مطابخ', en: 'Kitchens' },
        imageUrl: 'https://www.raed.net/img?id=1466859'
    },
    {
        id: 'doors-windows',
        name: { ar: 'أبواب وشبابيك', en: 'Doors & Windows' },
        imageUrl: 'https://www.raed.net/img?id=1466910'
    },
    {
        id: 'facades-decor',
        name: { ar: 'واجهات وديكور', en: 'Facades & Decor' },
        imageUrl: 'https://www.raed.net/img?id=1466911'
    },
    {
        id: 'bedrooms',
        name: { ar: 'غرف نوم', en: 'Bedrooms' },
        imageUrl: 'https://waghetdecor.com/wp-content/uploads/2020/10/22.jpg'
    },
    {
        id: 'bathrooms',
        name: { ar: 'حمامات', en: 'Bathrooms' },
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8l896bIVPMQ6QvWNyXHm8N3LoSF3BSNp2iQYMFECp2OsFbE_uKy6coqBUIXEpkDIAlJ4&usqp=CAU'
    }
];