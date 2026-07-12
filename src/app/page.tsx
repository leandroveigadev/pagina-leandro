import Image from "next/image";
import { ArrowRight, MessageCircle, User, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#09090b] px-6">
      
      {/* Luzes de Fundo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#84cc16]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            Engenheiro de Software Sênior
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Arquitetura <br />
            <span className="text-[#84cc16]">inteligente.</span>
          </h1>

          <p className="text-lg text-zinc-400 mb-10 max-w-md leading-relaxed font-light">
            Ajudo empresas a escalar com código seguro, alta performance e arquitetura limpa. Foco total na inteligência do seu sistema.
          </p>

          {/* ÁREA DE BOTÕES */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            
            {/* Botão Principal */}
            <button className="flex items-center justify-center gap-2 h-14 w-full rounded-lg bg-[#84cc16] hover:bg-[#9bef20] text-black font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(132,204,22,0.2)]">
              Solicitar orçamento <ArrowRight size={18} />
            </button>

            {/* Linha com dois botões secundários */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-14 rounded-lg border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all bg-zinc-900/30">
                <User size={18} /> Sobre
              </button>
              <button className="flex items-center justify-center gap-2 h-14 rounded-lg border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all bg-zinc-900/30">
                <Briefcase size={18} /> Portfólio
              </button>
            </div>
            
            {/* Botão de conversa (terceário) */}
            <button className="flex items-center justify-center gap-2 h-12 w-full text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
              <MessageCircle size={16} /> Conversar agora pelo WhatsApp
            </button>
          </div>
        </div>

        {/* Lado Direito: Foto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-1 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#09090b]">
              <Image 
                src="/perfil.jpg" 
                alt="Leandro Veiga" 
                width={400} 
                height={400} 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}