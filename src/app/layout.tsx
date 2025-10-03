
import type { Metadata } from "next";
import { Encode_Sans_Condensed, Anton, Inter } from "next/font/google";
import Nav from "./components/navigation/page";
import Footer from "./components/footer/page";
import FlyonuiScript from "./components/FlyonuiScript";


import "./globals.css";
import MobileSidebar from "./components/sidebar/mobile";

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans-condensed",
  subsets: ["latin"],
  weight: "400"
});
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400"
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "500"
})

export const metadata: Metadata = {
  title: "Optimal Untuk Negeri",
  description: "Optimal Untuk Negeri - Layanan Bimbingan Belajar UKOM untuk Berbagai Jurusan Kesehatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${interFont.variable} antialiased`}
      >
        <div className="relative overflow-x-hidden overflow-y-auto max-h-screen">
          <Nav />
          
          {children}
          <Footer />
          <MobileSidebar />
        </div>
        <FlyonuiScript />
      </body>
    </html>
  );
}
