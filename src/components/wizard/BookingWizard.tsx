"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, User, ShieldCheck } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

const specialties = [
  { id: 'cosmetic', en: 'Cosmetic Dentistry', ar: 'طب الأسنان التجميلي' },
  { id: 'implants', en: 'Dental Implants', ar: 'زراعة الأسنان' },
  { id: 'whitening', en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
  { id: 'veneers', en: 'Veneers', ar: 'فينير' },
];

const doctors = [
  { id: 'dr_ahmed', nameEn: 'Dr. Ahmed Al-Fadhel', nameAr: 'د. أحمد الفضل', titleEn: 'Cosmetic Specialist', titleAr: 'أخصائي تجميل', daysEn: 'Mon, Wed, Thu', daysAr: 'الإثنين، الأربعاء، الخميس' },
  { id: 'dr_sara', nameEn: 'Dr. Sara Khalid', nameAr: 'د. سارة خالد', titleEn: 'Implantologist', titleAr: 'أخصائية زراعة', daysEn: 'Tue, Sun', daysAr: 'الثلاثاء، الأحد' },
];

const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '05:00 PM'];

export function BookingWizard() {
  const { language } = useLanguage();
  const isEn = language === 'en';
  
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState({
    specialty: '',
    doctor: '',
    time: '',
    name: '',
    phone: '',
    civilId: ''
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 5) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
              {isEn ? '1. Select Specialty' : '1. اختر التخصص'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialties.map(spec => (
                <button
                  key={spec.id}
                  onClick={() => { setData({...data, specialty: spec.id}); nextStep(); }}
                  className={`p-6 text-start rounded-2xl border-2 transition-all ${data.specialty === spec.id ? 'border-gold-500 bg-gold-50/50' : 'border-gray-100 hover:border-gold-500/50 bg-white'}`}
                >
                  <h4 className="font-bold text-lg text-charcoal-900">{isEn ? spec.en : spec.ar}</h4>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
              {isEn ? '2. Select Specialist' : '2. اختر الطبيب المعالج'}
            </h3>
            <div className="grid gap-4">
              {doctors.map(doc => (
                <button
                  key={doc.id}
                  onClick={() => { setData({...data, doctor: doc.id}); nextStep(); }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${data.doctor === doc.id ? 'border-gold-500 bg-gold-50/50' : 'border-gray-100 hover:border-gold-500/50 bg-white'}`}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 overflow-hidden relative">
                    <User className="absolute inset-0 m-auto text-gray-400 w-8 h-8" />
                  </div>
                  <div className="text-start">
                    <h4 className="font-bold text-lg text-charcoal-900">{isEn ? doc.nameEn : doc.nameAr}</h4>
                    <p className="text-sm text-gold-600 font-medium">{isEn ? doc.titleEn : doc.titleAr}</p>
                    <p className="text-xs text-gray-500 mt-1">{isEn ? 'Available:' : 'متاح:'} {isEn ? doc.daysEn : doc.daysAr}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
              {isEn ? '3. Select Time Slot' : '3. اختر وقت الموعد'}
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 text-charcoal-900 font-bold mb-4">
                <Calendar className="w-5 h-5 text-gold-500" />
                {isEn ? 'Available Today' : 'متاح اليوم'}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => { setData({...data, time}); nextStep(); }}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-colors ${data.time === time ? 'bg-charcoal-900 text-white border-charcoal-900' : 'bg-gray-50 text-charcoal-800 border-gray-200 hover:border-charcoal-900'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
              {isEn ? '4. Patient Details' : '4. بيانات المريض'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{isEn ? 'Full Name' : 'الاسم الكامل'}</label>
                <input 
                  type="text" 
                  value={data.name}
                  onChange={e => setData({...data, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{isEn ? 'Phone Number' : 'رقم الهاتف'}</label>
                <input 
                  type="tel"
                  value={data.phone}
                  onChange={e => setData({...data, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-start"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{isEn ? 'Civil ID' : 'الرقم المدني'}</label>
                <input 
                  type="text"
                  value={data.civilId}
                  onChange={e => setData({...data, civilId: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-start"
                  dir="ltr"
                />
              </div>
              <button 
                onClick={nextStep}
                disabled={!data.name || !data.phone || !data.civilId}
                className="w-full bg-charcoal-900 text-white py-4 rounded-xl font-bold mt-4 disabled:opacity-50 hover:bg-black transition-colors"
              >
                {isEn ? 'Proceed to Payment' : 'المتابعة للدفع'}
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 text-[#00A859] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                {isEn ? '5. Secure Checkout' : '5. الدفع الآمن'}
              </h3>
              <p className="text-gray-500 text-sm">
                {isEn ? 'Powered by Tap Payments / MyFatoorah' : 'مدعوم من تاب بايمنتس / ماي فاتورة'}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                <span className="font-medium text-gray-600">{isEn ? 'Booking Deposit' : 'عربون الحجز'}</span>
                <span className="font-bold text-lg">5.000 KWD</span>
              </div>
              <p className="text-xs text-gray-500 mb-6 text-center">
                {isEn ? '(Adjustable in final bill at the clinic)' : '(يتم خصم المبلغ من الفاتورة النهائية في العيادة)'}
              </p>
              
              {/* Mock KNET Button */}
              <button className="w-full bg-[#00A859] hover:bg-[#00924D] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors mb-3 shadow-lg shadow-[#00A859]/20">
                {isEn ? 'Pay with KNET' : 'ادفع عبر كي-نت'}
              </button>
              {/* Mock Credit Card */}
              <button className="w-full bg-white border border-gray-200 text-charcoal-900 hover:bg-gray-50 py-4 rounded-xl font-bold transition-colors">
                {isEn ? 'Credit Card' : 'البطاقة الائتمانية'}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="book" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-charcoal-900 mb-4">
            {isEn ? 'Instant Booking' : 'حجز فوري'}
          </h2>
          <p className="text-gray-600">
            {isEn ? 'Reserve your spot in minutes.' : 'احجز موعدك في دقائق.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-100 -z-10" />
            <div 
              className="absolute left-0 top-1/2 h-1 bg-gold-500 -z-10 transition-all duration-500" 
              style={{ width: `${((step - 1) / 4) * 100}%`, right: isEn ? 'auto' : 0, left: isEn ? 0 : 'auto' }} 
            />
            
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                  step >= num ? 'bg-gold-500 border-gold-500 text-white' : 'bg-white border-gray-200 text-gray-400'
                }`}
              >
                {step > num ? <CheckCircle2 className="w-4 h-4" /> : num}
              </div>
            ))}
          </div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={step}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          {step > 1 && step < 5 && (
            <button 
              onClick={prevStep}
              className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-gray-400 hover:text-charcoal-900 font-medium flex items-center gap-1 transition-colors"
            >
              {isEn ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              {isEn ? 'Back' : 'رجوع'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
