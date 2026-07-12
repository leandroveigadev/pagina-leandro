import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configurando a fonte Poppins com os pesos que vamos usar
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Leandro Veiga",
  description: "Seu parceiro de negócios com resultados reais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Forçamos o modo escuro ("dark") e injetamos a variável da fonte
    <html lang="pt-BR" className={`${poppins.variable} dark`}>
      {/* O fundo #09090b é um preto levemente fosco, muito usado por empresas tech */}
      <body className="bg-[#09090b] text-zinc-100 font-poppins antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}