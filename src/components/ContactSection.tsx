export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="container-custom">
        <div className="glass-strong rounded-4xl p-20 text-center">
          <h2 className="text-6xl font-bold mb-8">
            <span className="text-gradient">Entre em Contato Comigo</span>
          </h2>
          
          <p className="text-xl text-neutral-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar sua ideia em realidade? Estou sempre empolgado para colaborar 
            em projetos inovadores que expandem os limites do que é possível na web.
          </p>

          <div className="flex justify-center mb-16">
            <a 
              href="mailto:christopher.silva4@fatec.sp.gov.br" 
              className="btn-primary px-12 py-4 rounded-2xl text-white text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <span>Iniciar Conversa</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          <div className="flex justify-center gap-12">
            <button type="button" className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium">
              LinkedIn
            </button>
            <button type="button" className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium">
              GitHub
            </button>
            <button type="button" className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium">
              Email
            </button>
            <button type="button" className="text-neutral-400 hover:text-white transition-colors duration-300 text-lg font-medium">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}