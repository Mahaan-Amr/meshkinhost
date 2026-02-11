import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";
import { Space_Grotesk, Plus_Jakarta_Sans, Vazirmatn } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";

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
  description: "Premium hosting provider with modern cloud services.",
  metadataBase: new URL("https://meshkinhost.com"),
  openGraph: {
    title: "MeshkinHost | Cloud Hosting Built for Momentum",
    description: "Premium hosting provider with modern cloud services.",
    url: "https://meshkinhost.com",
    siteName: "MeshkinHost",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MeshkinHost | Cloud Hosting Built for Momentum",
    description: "Premium hosting provider with modern cloud services."
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("meshkin_lang")?.value ?? "en";
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <html
      lang={lang}
      data-dir={dir}
      data-theme="light"
      className={`${displayFont.variable} ${bodyFont.variable} ${farsiFont.variable} ${
        lang === "fa" ? "font-farsi" : ""
      }`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
