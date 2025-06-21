export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="container-custom px-4 sm:px-6">
        <div className="glass-strong rounded-2xl sm:rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="text-gradient">Entre em Contato</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Tem uma oportunidade onde posso demonstrar e desenvolver minhas habilidades? 
            Busco colaborar em projetos que me permitam crescer como desenvolvedor Backend, 
            aplicando conhecimentos em APIs, bancos de dados e arquiteturas modernas.
          </p>

          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-neutral-300 mb-6 sm:mb-8 font-medium">
              Em busca de experiências para me especializar em Backend Development
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
              <span className="px-3 sm:px-4 py-1 sm:py-2 glass-subtle rounded-full text-neutral-300 text-xs sm:text-sm">
                APIs RESTful
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 glass-subtle rounded-full text-neutral-300 text-xs sm:text-sm">
                Node.js & TypeScript
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 glass-subtle rounded-full text-neutral-300 text-xs sm:text-sm">
                PostgreSQL
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 glass-subtle rounded-full text-neutral-300 text-xs sm:text-sm">
                Arquitetura em Camadas
              </span>
            </div>
          </div>

          <div className="flex justify-center mb-12 sm:mb-16">
            <a 
              href="mailto:christopher.silva4@fatec.sp.gov.br" 
              className="btn-primary px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-white text-base sm:text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <span>Discutir Oportunidade</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            <a 
              href="mailto:christopher.silva4@fatec.sp.gov.br"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-medium"
            >
              Email
            </a>
            <a 
              href="https://github.com/chriskryon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://christophercosta.vercel.app/"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-medium"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}