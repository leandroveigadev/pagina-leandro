import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, PlayCircle } from "lucide-react";

export default function Portfolio() {
  const projects = [
    { id: 1, title: "Análise eCiência de Dados", desc: "Monitoramento de performance térmica em caldeiras de recuperação química com Python.", image: "/print1.png" },
    { id: 2, title: "Modelos matemáticos e Físicos", desc: "Estrutura computacional para variáveis físicas e suas interações em processo do setor de papel e celulose.", image: "/correlacao.png" },
    { id: 3, title: "Qualidade de Software", desc: "Testes automatizados para garantir a qualidade do código.", image: "/qualidade.png" },
    { id: 4, title: "Desenvolvimento Web", desc: "Desenvolvimento de sites limpos, bem estruturados para funil de vendas, portfólio e conexão com seus clientes.", image: "/webdev.png" },
    { id: 5, title: "Fluxo de Integração de Sistemas", desc: "Camada de front-end que se conecta de forma segura a serviços externos e banco de dados.", image: "/front.png" },
    { id: 6, title: "Performance Ambiental", desc: "Cruzamento de dados ambientais para análise de impacto, alertas de compliance, relatórios de desempenho, visualização de resultados e evolução de arquitetura.", image: "/ambiental.png" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20 relative overflow-x-hidden selection:bg-[#84cc16] selection:text-black">
      
      {/* Efeitos de Luz Atmosféricos no Fundo */}
      <div className="absolute top-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#84cc16]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[25%] right-[15%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#84cc16] transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>Voltar para Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Portfólio</h1>
        
        {/* SEÇÃO DO VÍDEO INSTITUCIONAL COM DESIGN PREMIUM (GLOW + BORDA GRADIENT) */}
        <section className="mb-24 relative">
          
          {/* Aura / Brilho Tridimensional Atrás do Vídeo */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#84cc16]/30 via-emerald-500/10 to-cyan-500/30 blur-2xl opacity-70 pointer-events-none" />

          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-zinc-950 p-[1px] bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl group">
            
            <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-black">
              <video 
                src="/institucional.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-102"
              />

              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Badge Flutuante Institucional Discreto */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-md flex items-center gap-2 shadow-xl">
                <PlayCircle size={14} className="text-[#84cc16] animate-pulse" />
                <span className="text-[11px] font-medium tracking-wide text-zinc-200">Visão corporativa</span>
              </div>
            </div>

          </div>
        </section>

        {/* SEÇÃO DE PROJETOS */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Projetos em Destaque</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-4 p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-all">
                <div className={`relative aspect-video rounded-xl overflow-hidden border border-zinc-800 transition-all ${project.image ? 'group-hover:border-[#84cc16]/50' : 'bg-zinc-900'}`}>
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">Em breve</div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}