import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/decor/AnimatedBackground";
import ScrollPager from "@/components/providers/ScrollPager";
import SmoothScroll from "@/components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizza Dijital | Dijital Ajans & Yaratıcı Çözümler",
  description:
    "Pizza Dijital ile markanı dilim dilim büyüt. Dijital pazarlama, tasarım ve yazılım çözümlerini tek tabakta sunuyoruz.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Pizza Dijital | Dijital Ajans",
    description:
      "Pizza Dijital ile markanı dilim dilim büyüt. Tasarım, yazılım ve pazarlama tek çatı altında.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Pizza Dijital",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>
          <ScrollPager>
            <Navbar />
            {/* bloblar tüm sayfanın arkasında sabit */}
            <AnimatedBackground />
            <div className="pt-[100px]">{children}</div>
          </ScrollPager>
        </SmoothScroll>
      </body>
    </html>
  );
}
