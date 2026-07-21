import Link from "next/link";
import { ArrowLeft, Mail, Code2, TerminalSquare, Database } from "lucide-react";

export default function Sobre() {
  // Array de tecnologias para manter o Clean Code
  const stack = [
    {
      id: 1,
      icon: <Code2 size={32} strokeWidth={1.5} />,
      title: "Back-end Java",
      desc: "Spring Boot, Java 21 e Arquitetura Hexagonal para sistemas robustos."
    },
    {
      id: 2,
      icon: <TerminalSquare size={32} strokeWidth={1.5} />,
      title: "Front-end Moderno",
      desc: "Next.js, TypeScript e Tailwind CSS para interfaces de alta performance."
    },
    {
      id: 3,
      icon: <Database size={32} strokeWidth={1.5} />,
      title: "Persistência",
      desc: "PostgreSQL, JPA/Hibernate e Maven focados em integridade de dados."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Botão de Voltar */}
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-[#84cc16] transition-colors mb-10">
          <ArrowLeft size={18} /> Voltar para Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre mim</h1>
        
        <section className="space-y-6 text-zinc-400 leading-relaxed mb-16">
          <p>
            Olá! Leandro Veiga aqui, sou da área de engenharia de software e focado em construir sistemas que unem 
            arquitetura robusta e performance impecável. Minha jornada é guiada pelo compromisso com o 
            <strong className="text-zinc-200 font-semibold"> Código limpo,</strong> arquitetura inteligente e pela busca de melhoria contínua, e que seja aplicável ao seu negócio.
          </p>
          <p>
            Busco ser referência em ecossistemas de alta disponibilidade, atuo desde a modelagem de bancos de dados 
            até a entrega final em produção, sempre garantindo escalabilidade e segurança. Acredito que 
            um software bem escrito é o melhor investimento que uma empresa pode fazer.
          </p>
        </section>

        {/* Stack Tecnológica - Cards Refinados */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Stack Principal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stack.map((item) => (
              <div 
                key={item.id} 
                className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
              >
                {/* Ícone com fundo verde suave */}
                <div className="w-14 h-14 rounded-xl bg-[#84cc16]/10 flex items-center justify-center text-[#84cc16] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chamada Final Refinada */}
        <div className="mt-20 p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#84cc16]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">Vamos construir algo juntos?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Estou disponível para novos desafios, projetos de consultoria técnica e parcerias para estudos e pesquisas.
            </p>
            <a 
              href="mailto:contato@seue-mail.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#84cc16] text-zinc-950 font-bold rounded-xl hover:bg-[#9bef20] transition-transform hover:scale-105 active:scale-95"
            >
              <Mail size={20} /> Entrar em contato
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}