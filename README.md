# Leandro Veiga - Desenvolvimento Enxuto.

🌐 **Acesso rápido ao ambiente de produção:** [leandroveiga.com.br](https://leandroveiga.com.br)

## Sobre o Projeto

Este é o código-fonte do meu site pessoal e ambiente de serviços. A ideia central aqui foi construir uma aplicação do zero aplicando o conceito de "desenvolvimento enxuto".

O objetivo não é apenas listar as tecnologias que pratico, mas mostrar na prática como construo interfaces e arquiteturas: priorizando código limpo, performance, componentização e uma experiência de usuário (UX) fluida em qualquer dispositivo.

## 🛠️ Stack

Optei por um ecossistema moderno focado em entrega rápida, segurança e escalabilidade:

- **Next.js (App Router):** Roteamento e renderização híbrida para máxima velocidade.
- **TypeScript:** Tipagem estática para reduzir bugs e deixar o código previsível.
- **Tailwind CSS:** Estilização utility-first, garantindo um layout 100% responsivo e com CSS enxuto.
- **Web3Forms:** Integração de API serverless para envio assíncrono do formulário de contatos (sem reload de página).
- **Vercel & Analytics:** Infraestrutura de hospedagem (Edge) com telemetria nativa para acompanhamento de tráfego e performance em tempo real.
- **Lucide React:** Biblioteca leve de ícones SVG.

## 💡 Destaques da Implementação

Para recrutadores e engenheiros analisando este repositório, destaco alguns pontos da arquitetura:
- **Design System Responsivo:** Layout adaptável (Mobile First) contendo menu hamburguer inteligente que preserva o espaço de tela em smartphones.
- **Processamento Assíncrono:** O formulário de contato trata os envios e validações via requisições assíncronas (Fetch API), fornecendo feedback visual imediato ao usuário sem travar a thread principal.
- **Otimização de Assets:** Uso de blurs dinâmicos nativos do Tailwind e otimização pesada de imagens para evitar layout shift.

## ⚙️ Como rodar o projeto localmente

Caso queira baixar e testar a aplicação na sua máquina:

Clone este repositório:
```bash
git clone [https://github.com/leandroveigadev/pagina-leandro.git](https://github.com/leandroveigadev/pagina-leandro.git)


