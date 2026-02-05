import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Space_Grotesk, Plus_Jakarta_Sans, Vazirmatn } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const farsiFont = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-farsi"
});

export const metadata: Metadata = {
  title: "MeshkinHost | Cloud Hosting Built for Momentum",
  description: "Premium hosting provider with modern cloud services."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const lang = cookieStore.get("meshkin_lang")?.value ?? "en";
  return (
    <html
      lang={lang}
      className={`${displayFont.variable} ${bodyFont.variable} ${farsiFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}