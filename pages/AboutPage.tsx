import React from 'react';
import { UI_TEXT } from '../constants';
import type { Language } from '../types';

interface AboutPageProps {
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const text = UI_TEXT[language];
  
  // Content is primarily in Arabic as per the source, will display that regardless of language toggle for now.
  const services = [
    "مطابخ حديثة بتصاميم فاخرة وعمل متقن",
    "أبواب وشبابيك ألمنيوم بجودة عالية",
    "واجهات زجاجية عملية وأنيقة",
    "ديكورات MDF جديدة وعصرية",
    "غرف نوم وغرف أطفال",
    "شاورات حديثة",
    "مغاسل كوارتز وMDF",
    "محجرات حديثة وديكور داخلي كامل للمنزل"
  ];
  const whyUs = [
    "نستخدم مواد أصلية من مناشئ عالمية معتمدة",
    "التزام كامل بالمواعيد",
    "عمل نظيف, دقيق, يضمن لك الراحة والجمالية",
    "تصميم حسب ذوقك وبصمتك الخاصة",
    "فريق محترف يعرف شلون ينفّذ الشغل بالمستوى اللي تستحقه"
  ];

  return (
    <div className="animate-fade animate-fade-in-up pb-28 md:pb-0">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-[var(--c-content)] mb-4">
              {text.aboutPageTitle}
            </h1>
            <p className="text-lg text-[var(--c-content)]/80 max-w-2xl mx-auto">
              إذا تفكر تغيّر شكل بيتك… تسوّي مطبخ عصري… أو تحتاج شبابيك وأبواب بأعلى جودة— فـ بصمة للألمنيوم والمطابخ الحديثة هي المكان اللي يدخلك وتطلع منه مقتنع 100% إن شغلك بأيادي أمينة.
            </p>
            <p className="text-2xl font-bold text-[var(--c-accent)] mt-6">
              نحن نصنع لك مو بس ديكور… نصنع بصمة تبقى ببيتك لسنين طويلة.
            </p>
          </div>
          <div className="space-y-12">
            <div className="p-8 bg-[var(--c-bg-alt)] rounded-xl shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">ماذا نُقدّم؟</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <span className="flex-shrink-0 w-6 h-6 bg-[var(--c-accent)] text-white rounded-full flex items-center justify-center mt-1">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">ليش تختار بصمة؟</h2>
              <ul className="space-y-4 max-w-xl mx-auto">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-[var(--c-bg-alt)] rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 text-[var(--c-accent)] mt-1">✔</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-[var(--c-accent)] text-white rounded-xl shadow-lg text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">عروض وخصومات حصرية للزبائن</h2>
              <p className="max-w-xl mx-auto text-lg opacity-90">
                كل ما تزيد شغلك ويّانا… يزيد خصمك! مطبخ + غرفة نوم؟ تحصل خصم قوي جداً. تضيف شبابيك؟ يكون الخصم أقوى. وإحنا دايماً نحسب للباقي… لأن رضاك هو هدفنا.
              </p>
            </div>
            <div className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">ضماننا الحقيقي</h2>
              <p className="max-w-xl mx-auto text-lg text-[var(--c-content)]/80 mb-4">
                مع بصمة… أنت مرتاح. ضمان “فعلي” وبالأرض… مو كلام.
              </p>
              <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse font-semibold text-[var(--c-content)]">
                  <span>✔ صيانة</span>
                  <span className="text-[var(--c-action)]">•</span>
                  <span>✔ إدامة</span>
                  <span className="text-[var(--c-action)]">•</span>
                  <span>✔ استبدال عند الحاجة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};