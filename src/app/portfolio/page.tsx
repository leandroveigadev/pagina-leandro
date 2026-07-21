import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Portfolio() {
  // Criamos um array de projetos para evitar repetição de código (Clean Code)
  const projects = [
    { id: 1, title: "Análise Dinâmica", desc: "Monitoramento de performance térmica em caldeiras de recuperação química com Python.", image: "/print1.png" },
    { id: 2, title: "Modelos matemáticos e Físicos", desc: "Estrutura computacional para variáveis físicas e suas interações em processo do setor de papel e celulose.", image: "/correlacao.png" },
    { id: 3, title: "Qualidade de Software", desc: "Testes automatizados para garantir a qualidade do código.", image: "/qualidade.png" },
    { id: 4, title: "Desenvolvimento Web", desc: "Desenvolvimento de sites limpos, bem estruturados para funil de vendas, portfólio e conexão com seus clientes.", image: "/webdev.png" },
    { id: 5, title: "Camada para integração (API)", desc: "Criação de testes automatizados para garantir que o sistema não quebre, refatoração de código antigo seguindo padrões modernos (como o uso de microsserviços).", image: null },
    { id: 6, title: "Performance Ambiental", desc: "Cruzamento de dados ambientais para análise de impacto, alertas de compliance, relatórios de desempenho, visualização de resultados e evolução de arquitetura.", image: "/ambiental.png" },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-[#84cc16] transition-colors mb-10">
          <ArrowLeft size={18} /> Voltar para Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Portfólio</h1>
        
        <section className="mb-20">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800 flex items-center justify-center">
             <span className="text-zinc-500">[Espaço para Vídeo Institucional]</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Projetos em Destaque</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-4">
                <div className={`relative aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all ${project.image ? 'group-hover:border-[#84cc16]/50' : 'bg-zinc-100 dark:bg-zinc-900'}`}>
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">Em breve</div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}