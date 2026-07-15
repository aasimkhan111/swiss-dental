"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, AtSign, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Intro */}
          <div>
            <div className="flex items-center mb-6 bg-white p-2 rounded-lg inline-block">
              <Image src="/swiss.jpg" alt="Swiss Dental" width={180} height={60} className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {isEn 
                ? "Premium dental care in Kuwait, combining Swiss precision with unmatched luxury and comfort for your smile."
                : "عناية فائقة بالأسنان في الكويت، تجمع بين الدقة السويسرية والفخامة التي لا تضاهى لابتسامتك."}
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold-500">
              {isEn ? 'Contact Us' : 'اتصل بنا'}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span dir="ltr">+965 66154966</span>
              </li>
              <li className="flex gap-3">
                <AtSign className="w-5 h-5 text-gold-500 shrink-0" />
                <span>@swissdental.kw</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>info@swissdental.kw</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-gold-500">
              {isEn ? 'Location' : 'الموقع'}
            </h4>
            <div className="flex gap-3 text-sm text-gray-300 mb-6">
              <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
              <p className="leading-relaxed">
                {isEn 
                  ? "14th & 15th Floor, Mazaya Clinic 6, Block 1, Street 2, Lane 4, Plot 41 Ras-Al Salmiya, Salmiya 20002, Kuwait"
                  : "الطابق 14 و 15، عيادة مزايا 6، قطعة 1، شارع 2، جادة 4، قسيمة 41 رأس السالمية، السالمية 20002، الكويت"}
              </p>
            </div>
            <a 
              href="https://goo.gl" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors px-6 py-2.5 rounded-full text-sm font-bold"
            >
              {isEn ? 'Open in Google Maps' : 'افتح في خرائط جوجل'}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Swiss Dental Clinic. {isEn ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
        </div>
      </div>
    </footer>
  );
}
