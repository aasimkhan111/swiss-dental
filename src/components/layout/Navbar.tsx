"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const { language, toggleLanguage, dir } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/swiss.jpg" alt="Swiss Dental" width={240} height={80} className="h-16 md:h-24 w-auto object-contain py-2" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#services" className="hover:text-gold-500 transition-colors">
            {language === 'en' ? 'Services' : 'الخدمات'}
          </Link>
          <Link href="#doctors" className="hover:text-gold-500 transition-colors">
            {language === 'en' ? 'Specialists' : 'الأطباء'}
          </Link>
          <Link href="#reviews" className="hover:text-gold-500 transition-colors">
            {language === 'en' ? 'Reviews' : 'التقييمات'}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          
          <button className="hidden md:flex bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full font-bold items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            <Calendar className="w-4 h-4" />
            {language === 'en' ? 'Book Appointment' : 'احجز موعداً'}
          </button>
        </div>
      </div>
    </header>
  );
}
