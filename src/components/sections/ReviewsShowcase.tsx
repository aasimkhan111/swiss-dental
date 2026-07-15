"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const mockReviews = [
  {
    id: "mock1",
    author_name: "Sarah A.",
    rating: 5,
    text: "Exceptional service! The staff is incredibly professional and the clinic is spotless. Best dental experience in Kuwait.",
    textAr: "خدمة استثنائية! طاقم العمل محترف للغاية والعيادة نظيفة جداً. أفضل تجربة لطب الأسنان في الكويت.",
    relative_time_description: "2 weeks ago",
    dateAr: "قبل أسبوعين",
    profile_photo_url: ""
  },
  {
    id: "mock2",
    author_name: "Mohammed K.",
    rating: 5,
    text: "Got my veneers done here. The results exceeded my expectations. Dr. Ahmed is a true artist.",
    textAr: "قمت بتركيب الفينير هنا. النتائج فاقت توقعاتي. الدكتور أحمد فنان حقيقي.",
    relative_time_description: "1 month ago",
    dateAr: "قبل شهر",
    profile_photo_url: ""
  },
  {
    id: "mock3",
    author_name: "Fatima R.",
    rating: 5,
    text: "Painless root canal! I was terrified but they made me feel so comfortable. Highly recommended.",
    textAr: "علاج عصب بدون ألم! كنت خائفة جداً ولكنهم جعلوني أشعر براحة تامة. أنصح بهم بشدة.",
    relative_time_description: "2 months ago",
    dateAr: "قبل شهرين",
    profile_photo_url: ""
  }
];

export function ReviewsShowcase() {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [reviews, setReviews] = useState<any[]>(mockReviews);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0 && !data.error) {
          setReviews(data);
        }
      })
      .catch(console.error);
  }, []);

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
          {reviews.map((review, index) => (
            <motion.div
              key={review.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.profile_photo_url ? (
                    <img src={review.profile_photo_url} alt={review.author_name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <div className="w-10 h-10 bg-charcoal-900 rounded-full flex items-center justify-center text-white font-bold">
                      {review.author_name?.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-sm md:text-base line-clamp-1">{review.author_name}</h4>
                    <p className="text-xs text-gray-500">
                      {isEn ? review.relative_time_description : (review.dateAr || review.relative_time_description)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {!isEn && review.textAr ? review.textAr : review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
