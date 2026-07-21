import Link from "next/link";
import { ArrowLeft, Code2, Database, Layout, Mail } from "lucide-react";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center px-6 py-12 relative overflow-x-hidden font-sans selection:bg-[#84cc16] selection:text-black">
      
      {/* Efeitos de Luz Atmosféricos */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 rounded-full bg-[#84cc16]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />

      {/* Botão de Retorno */}
      <div className="w-full max-w-4xl mb-8 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para Home</span>
        </Link>
      </div>

      {/* Container Principal */}
      <div className="w-full max-w-4xl flex flex-col gap-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Sobre <span className="text-[#84cc16]">mim</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            Olá! Leandro Veiga aqui, sou da área de engenharia de software e focado em construir sistemas com arquitetura robusta e com performance. Minha jornada é guiada pelo compromisso com o <strong className="text-zinc-200 font-semibold">Código limpo</strong>, arquitetura inteligente e pela busca de melhoria contínua, e que seja aplicável ao seu negócio.
          </p>
          <p className="text-zinc-400 text-base leading-relaxed font-light">
            Busco ser referência em ecossistemas de alta disponibilidade, atuo desde a modelagem de bancos de dados até a entrega final em produção, com entregas escaláveis e seguras. Acredito que um software bem escrito é o melhor investimento que uma empresa pode fazer.
          </p>
        </div>

        {/* Stack Principal */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-zinc-200 tracking-tight">Stack Principal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md flex flex-col gap-4 shadow-xl hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#84cc16]/10 text-[#84cc16] flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Back-end Java</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Spring Boot, Java 21 e Arquitetura Hexagonal para sistemas robustos.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md flex flex-col gap-4 shadow-xl hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                <Layout size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Front-end Moderno</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Next.js, TypeScript e Tailwind CSS para interfaces de alta performance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md flex flex-col gap-4 shadow-xl hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                <Database size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Persistência</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  PostgreSQL, JPA/Hibernate e Maven focados em integridade de dados.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action Final */}
        <div className="p-8 md:p-12 rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-md flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#84cc16]/5 via-transparent to-cyan-500/5 pointer-events-none" />
          
          <div className="flex flex-col gap-2 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">Vamos construir algo juntos?</h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg">
              Estou disponível para novos desafios, projetos de consultoria técnica e parcerias para estudos e pesquisas.
            </p>
          </div>

          {/* O link agora redireciona perfeitamente para a seção de contato da Home */}
          <Link 
            href="/#contato" 
            className="relative z-10 px-8 py-4 rounded-xl bg-[#84cc16] text-zinc-950 font-bold hover:bg-[#9bef20] transition-colors flex items-center gap-2 shadow-lg"
          >
            <Mail size={18} />
            <span>Entrar em contato</span>
          </Link>
        </div>

      </div>
    </main>
  );
}