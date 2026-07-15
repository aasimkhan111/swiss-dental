"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2940&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent (prefers-color-scheme: dark):from-charcoal-900/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="font-bold text-charcoal-800">
              {isEn ? '5-Star Rated Dental Luxury' : 'فخامة العناية بالأسنان بتصنيف 5 نجوم'}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-charcoal-900 mb-6 leading-tight"
          >
            {isEn ? (
              <>Swiss Quality Dental Care in the <span className="text-red-600">Heart of Salmiya.</span></>
            ) : (
              <>عناية سويسرية فائقة للأسنان في <span className="text-red-600">قلب السالمية.</span></>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
          >
            {isEn 
              ? "Transforming smiles with cutting-edge technology. Experience premium, pain-free dentistry tailored just for you."
              : "نصنع ابتسامات مشرقة بأحدث التقنيات. اختبر طب أسنان فاخر وبدون ألم، مصمم خصيصاً لك."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group">
              {isEn ? 'Start Your Booking Wizard' : 'ابدأ حجز موعدك الآن'}
              <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${!isEn && 'rotate-180 group-hover:-translate-x-1'}`} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
