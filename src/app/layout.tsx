import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Swiss Dental | Premium Dental Care in Kuwait",
  description: "Swiss Quality Dental Care in the Heart of Salmiya, Kuwait. Experience 5-star rated dental luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
