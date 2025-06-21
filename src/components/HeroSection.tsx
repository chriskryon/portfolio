export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="container-custom text-center">
        {/* Avatar */}
        <div className="relative mb-16 animate-fade-in">
          <div className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-2xl animate-float border-4 border-white/10">
            <img 
              src="https://i.imgur.com/bsklhdq.jpeg" 
              alt="Christopher - Desenvolvedor Full-Stack" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 mx-auto w-40 h-40 rounded-full bg-linear-135/oklch from-primary-400/20 to-primary-600/20 blur-2xl animate-pulse-slow" />
        </div>

        {/* Title */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-8xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Christopher</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
            Rumo ao Desenvolvimento Full-Stack
          </p>
        </div>

        {/* Description */}
        <div className="mb-16 animate-slide-up">
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Construindo aplicações web modernas e eficientes através da combinação de tecnologias 
            front-end e back-end, com foco em qualidade, performance e experiência do usuário.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up">
          <button 
            type="button" 
            className="btn-primary px-12 py-4 rounded-2xl text-white text-lg font-medium shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Vamos Conversar</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          
          <button 
            type="button" 
            className="btn-secondary px-12 py-4 rounded-2xl text-white text-lg font-medium hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Ver Projetos</span>
              <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}