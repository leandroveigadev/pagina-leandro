"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Database, TerminalSquare, Send, ArrowUp, CheckCircle2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Novo estado para o Menu Mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ddds = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67",
    "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "88", "89", "91", "93", "94", "95", "96", "97", "98", "99"
  ];

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Mensagem enviada com sucesso! Em breve retornaremos.");
        form.reset();
        
        setTimeout(() => {
          setStatusMessage("");
        }, 5000);
      } else {
        setStatusMessage("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatusMessage("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#050505] text-white flex flex-col items-center relative overflow-x-hidden font-sans selection:bg-[#84cc16] selection:text-black">
      
      {/* SEÇÃO 1: HERO */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-12">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-[#84cc16]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />

        <div className="absolute top-[25%] left-[5%] md:left-[10%] w-16 h-16 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md flex items-center justify-center animate-pulse shadow-2xl hidden md:flex z-20">
          <Code2 className="text-[#84cc16]/50" size={28} />
        </div>
        <div className="absolute bottom-[20%] right-[10%] md:right-[5%] w-20 h-20 rounded-full bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md flex items-center justify-center animate-pulse shadow-2xl hidden lg:flex z-20" style={{ animationDelay: '1s' }}>
          <Database className="text-cyan-400/50" size={32} />
        </div>
        
        {/* HEADER COM SUPORTE A MENU HAMBÚRGUER */}
        <header className="absolute top-0 left-0 w-full z-50">
          <div className="flex justify-between items-center px-4 sm:px-8 py-6 text-sm font-medium bg-[#050505]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-zinc-900 md:border-none">
            <div className="text-white text-lg font-bold tracking-widest shrink-0 z-50">
              Tecno<span className="text-[#84cc16]">logia</span>
            </div>
            
            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center gap-6 md:gap-8 text-zinc-400">
              <div className="hidden md:flex gap-6 mr-4">
                <Link href="/sobre" className="hover:text-white hover:text-[#84cc16] transition-colors duration-300">Sobre</Link>
                <Link href="/portfolio" className="hover:text-white hover:text-[#84cc16] transition-colors duration-300">Portfólio</Link>
              </div>
              
              <div className="flex gap-4 border-l border-zinc-800 pl-6">
                <a href="https://www.instagram.com/leandrooveiga/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/leandro-veiga-bb4a9b383/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </nav>

            {/* Ícones Mobile (Redes Sociais + Botão do Menu) */}
            <div className="flex md:hidden items-center gap-5 text-zinc-400 z-50">
              <a href="https://www.instagram.com/leandrooveiga/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/leandro-veiga-bb4a9b383/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-zinc-300 hover:text-white focus:outline-none ml-1"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Menu Dropdown Mobile com Animação Fluida */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl transition-all duration-300 overflow-hidden flex flex-col items-center shadow-2xl ${isMobileMenuOpen ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
            <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-[#84cc16] mb-5 w-full text-center">Sobre</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-[#84cc16] w-full text-center">Portfólio</Link>
          </div>
        </header>

        {/* CONTAINER DO CONTEÚDO PRINCIPAL */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-12 lg:gap-20 relative z-10 mt-16 md:mt-24">
          
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 md:leading-[1.1] break-words w-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84cc16] via-emerald-400 to-cyan-400">
                Desenvolvimento
              </span>
              <br />
              <span className="text-zinc-100">enxuto.</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 md:mb-12 font-light px-2 sm:px-0">
              Ajudo desenvolvedores e empresas a escalar utilizando código seguro, performance e arquitetura limpa. Foco total nas suas regras de negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12 md:mb-0 justify-center md:justify-start w-full sm:w-auto px-4 sm:px-0">
              <a 
                href="#contato" 
                onClick={scrollToContact}
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#84cc16] to-[#0ea5e9] text-zinc-950 font-bold overflow-hidden transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(132,204,22,0.25)] hover:shadow-[0_0_45px_rgba(132,204,22,0.45)] hover:scale-105"
              >
                <span className="relative z-10 text-lg">Solicitar orçamento</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative mt-8 md:mt-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#84cc16]/15 blur-[90px] rounded-full pointer-events-none" />
             
             <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border border-zinc-800/40 bg-zinc-900 group shadow-2xl z-10 transition-transform duration-500 hover:rotate-1">
               <Image 
                  src="/perfil.jpg" 
                  alt="Leandro Veiga" 
                  fill
                  className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(5,5,5,0.9)] pointer-events-none transition-opacity duration-1000 group-hover:opacity-50" />
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: FORMULÁRIO DE CONTATO (Intacto) */}
      <section id="contato" className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-32 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">Vamos conversar.</h2>
            <p className="text-zinc-400 text-lg">Preencha os dados abaixo que em breve entraremos em contato.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-2xl flex flex-col gap-6">
            
            <input type="hidden" name="access_key" value="20d5c20f-4f7a-4064-b319-836eb0288429" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300 ml-1">Nome completo</label>
              <input type="text" name="Nome" required placeholder="Digite seu nome" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">WhatsApp</label>
                <div className="flex gap-2">
                  <select name="DDD" defaultValue="51" className="w-20 sm:w-24 bg-zinc-950/50 border border-zinc-800 rounded-xl px-2 sm:px-3 py-3 text-white focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all cursor-pointer">
                    {ddds.map(ddd => (
                      <option key={ddd} value={ddd} className="bg-zinc-900">({ddd})</option>
                    ))}
                  </select>
                  <input type="tel" name="WhatsApp" required placeholder="90000-0000" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-300 ml-1">Localização</label>
                <div className="flex gap-2">
                  <input type="text" name="Cidade" required placeholder="Sua cidade" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all" />
                  <select name="Estado" defaultValue="RS" className="w-20 sm:w-24 bg-zinc-950/50 border border-zinc-800 rounded-xl px-2 sm:px-3 py-3 text-white focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all cursor-pointer">
                    {estados.map(uf => (
                      <option key={uf} value={uf} className="bg-zinc-900">{uf}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300 ml-1">Sua mensagem</label>
              <textarea name="Mensagem" required rows={4} placeholder="Como posso ajudar no seu projeto?" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#84cc16]/50 focus:ring-1 focus:ring-[#84cc16]/50 transition-all resize-none"></textarea>
            </div>

            {statusMessage && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] text-sm animate-fade-in">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="mt-2 w-full bg-[#84cc16] text-zinc-950 font-bold py-4 rounded-xl hover:bg-[#9bef20] transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
              <Send size={18} />
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>

          <div className="mt-16 mb-8 flex justify-center">
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-2 text-zinc-500 hover:text-[#84cc16] transition-colors text-sm font-medium group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              Voltar ao topo da página
            </button>
          </div>

        </div>
      </section>

      {/* BOTÃO FLUTUANTE DE VOLTAR AO TOPO */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-[#84cc16] hover:bg-zinc-800 hover:scale-110 backdrop-blur-md shadow-2xl transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </main>
  );
}