import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // Importação da telemetria da Vercel

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leandro Veiga",
  description: "Desenvolvimento de software.",
  metadataBase: new URL("https://leandroveiga.com.br"),
  openGraph: {
    title: "Leandro Veiga",
    description: "Desenvolvimento de software.",
    url: "https://leandroveiga.com.br",
    siteName: "Leandro Veiga",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
        
        {/* Componente de Telemetria da Vercel injetado globalmente de forma segura */}
        <Analytics />
      </body>
    </html>
  );
}