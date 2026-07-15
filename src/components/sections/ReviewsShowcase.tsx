"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

const mockReviews = [
  {
    id: 1,
    author: "Sarah A.",
    rating: 5,
    textEn: "Exceptional service! The staff is incredibly professional and the clinic is spotless. Best dental experience in Kuwait.",
    textAr: "خدمة استثنائية! طاقم العمل محترف للغاية والعيادة نظيفة جداً. أفضل تجربة لطب الأسنان في الكويت.",
    dateEn: "2 weeks ago",
    dateAr: "قبل أسبوعين"
  },
  {
    id: 2,
    author: "Mohammed K.",
    rating: 5,
    textEn: "Got my veneers done here. The results exceeded my expectations. Dr. Ahmed is a true artist.",
    textAr: "قمت بتركيب الفينير هنا. النتائج فاقت توقعاتي. الدكتور أحمد فنان حقيقي.",
    dateEn: "1 month ago",
    dateAr: "قبل شهر"
  },
  {
    id: 3,
    author: "Fatima R.",
    rating: 5,
    textEn: "Painless root canal! I was terrified but they made me feel so comfortable. Highly recommended.",
    textAr: "علاج عصب بدون ألم! كنت خائفة جداً ولكنهم جعلوني أشعر براحة تامة. أنصح بهم بشدة.",
    dateEn: "2 months ago",
    dateAr: "قبل شهرين"
  }
];

export function ReviewsShowcase() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="font-bold text-charcoal-900">4.9★ {isEn ? 'on' : 'على'} Google Maps</span>
            <a 
              href="https://goo.gl" 
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium ms-2"
            >
              <MapPin className="w-4 h-4" />
              {isEn ? 'View Maps' : 'عرض الخريطة'}
            </a>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4"
          >
            {isEn ? 'Trusted by 100s of Patients in Kuwait' : 'موثوق من مئات المرضى في الكويت'}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-charcoal-900 rounded-full flex items-center justify-center text-white font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-900">{review.author}</h4>
                    <p className="text-xs text-gray-500">{isEn ? review.dateEn : review.dateAr}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {isEn ? review.textEn : review.textAr}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
