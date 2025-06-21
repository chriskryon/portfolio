export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
      <div className="container-custom text-center">
        {/* Avatar */}
        <div className="relative mb-8 sm:mb-12 animate-fade-in">
          <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl animate-float border-4 border-white/10 relative z-10">
            <img 
              src="https://i.imgur.com/bsklhdq.jpeg" 
              alt="Christopher - Desenvolvedor Full-Stack" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-slow" />
        </div>

        {/* Title */}
        <div className="mb-6 sm:mb-8 animate-slide-up">
          <div className="mb-2 sm:mb-3">
            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
              👋 Olá, eu sou
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight">
            <span className="text-gradient hover:scale-105 transition-transform duration-300 inline-block">
              Christopher
            </span>
          </h1>

          {/* Status indicator */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs sm:text-sm font-medium">Disponível para projetos</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto">
              Rumo ao <span className="text-gradient-primary font-medium">Full-Stack</span>
            </p>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Aprendendo a criar experiências digitais modernas e eficientes
            </p>
          </div>
        </div>

        {/* Tech badges */}
        <div className="mb-4 sm:mb-6 animate-slide-up">
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Git', 'Docker'].map((tech) => (
              <span 
                key={tech}
                className="px-2 sm:px-3 py-1 glass-subtle rounded-full text-neutral-300 text-xs font-medium hover:glass transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8 animate-slide-up">
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed px-4">
            Estudante apaixonado por transformar ideias em código, focado em aprender e criar soluções web que combinam 
            <span className="text-white font-medium"> performance</span>, 
            <span className="text-white font-medium"> qualidade</span> e 
            <span className="text-white font-medium"> boas práticas</span> de desenvolvimento.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-slide-up mb-6 sm:mb-8 px-4">
          <button 
            type="button" 
            onClick={scrollToContact}
            className="group btn-primary px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-white text-sm sm:text-base font-medium shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Vamos Conversar</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          
          <button 
            type="button" 
            onClick={scrollToProjects}
            className="group btn-secondary px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-white text-sm sm:text-base font-medium hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Ver Projetos</span>
              <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-6 sm:h-8 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/40 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}