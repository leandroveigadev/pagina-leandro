import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro Veiga | Engenharia de Software e Arquitetura Limpa",
  description: "Desenvolvimento enxuto, código seguro, performance e arquitetura limpa.",
  metadataBase: new URL("https://leandroveiga.dev"), // Altere para seu domínio ou o link da Vercel depois
  openGraph: {
    title: "Leandro Veiga | Engenharia de Software",
    description: "Soluções robustas em engenharia de software, microsserviços e arquitetura limpa.",
    url: "https://leandroveiga.dev",
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
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}