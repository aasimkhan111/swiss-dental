"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function MobileFooter() {
  const { language } = useLanguage();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="flex gap-3">
        <button className="flex-1 bg-charcoal-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
          <Phone className="w-5 h-5" />
          {language === 'en' ? 'Call Clinic' : 'اتصل بالعيادة'}
        </button>
        <button className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd5b] transition-colors">
          <MessageCircle className="w-5 h-5" />
          {language === 'en' ? 'WhatsApp' : 'واتساب'}
        </button>
      </div>
    </motion.div>
  );
}
