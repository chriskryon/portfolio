export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container-custom">
        <div className="glass-strong rounded-4xl p-20 text-center">
          <h2 className="text-6xl font-bold mb-8">
            <span className="text-gradient">Entre em Contato</span>
          </h2>
          
          <p className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tem uma oportunidade onde posso demonstrar e desenvolver minhas habilidades? 
            Busco colaborar em projetos que me permitam crescer como desenvolvedor Backend, 
            aplicando conhecimentos em APIs, bancos de dados e arquiteturas modernas.
          </p>

          <div className="mb-12">
            <p className="text-lg text-neutral-300 mb-8 font-medium">
              Em busca de experiências para me especializar em Backend Development
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <span className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm">
                APIs RESTful
              </span>
              <span className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm">
                Node.js & TypeScript
              </span>
              <span className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm">
                PostgreSQL
              </span>
              <span className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm">
                Arquitetura em Camadas
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <a 
              href="mailto:christopher.silva4@fatec.sp.gov.br" 
              className="btn-primary px-12 py-4 rounded-2xl text-white text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <span>Discutir Oportunidade</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          <div className="flex justify-center gap-12">
            <a 
              href="mailto:christopher.silva4@fatec.sp.gov.br"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              Email
            </a>
            <a 
              href="https://github.com/chriskryon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://christophercosta.vercel.app/"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}