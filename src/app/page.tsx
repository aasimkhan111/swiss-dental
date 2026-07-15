import { Navbar } from "@/components/layout/Navbar";
import { MobileFooter } from "@/components/layout/MobileFooter";
import { Hero } from "@/components/sections/Hero";
import { ReviewsShowcase } from "@/components/sections/ReviewsShowcase";
import { BookingWizard } from "@/components/wizard/BookingWizard";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ReviewsShowcase />
        <BookingWizard />
      </main>
      <Footer />
      <MobileFooter />
    </>
  );
}
