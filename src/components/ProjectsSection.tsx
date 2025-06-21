import { projects, type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'regular';
}

function ProjectCard({ project, variant = 'regular' }: ProjectCardProps) {
  const { title, description, technologies, category, githubUrl, liveUrl, status, highlights } = project;
  const isFeatured = variant === 'featured';
  
  const getCategoryIcon = (category: string) => {
    const icons = {
      'Backend': '🚀',
      'Frontend': '💻',
      'Full-Stack': '🌐',
      'API': '🔧',
      'Mobile': '📱'
    };
    return icons[category as keyof typeof icons] || '💡';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'completed': 'bg-green-500/20 border-green-400/30 text-green-300',
      'in-progress': 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300',
      'planned': 'bg-blue-500/20 border-blue-400/30 text-blue-300'
    };
    return colors[status as keyof typeof colors] || colors.completed;
  };

  const getStatusText = (status: string) => {
    const texts = {
      'completed': 'Concluído',
      'in-progress': 'Em Desenvolvimento',
      'planned': 'Planejado'
    };
    return texts[status as keyof typeof texts] || 'Concluído';
  };

  if (isFeatured) {
    return (
      <div className="group glass-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:glass transition-all duration-500 hover:scale-102">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left: Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-1 glass-subtle rounded-full text-neutral-400 text-xs sm:text-sm font-medium">
                  {category}
                </span>
                <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                  {getStatusText(status)}
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                {title}
              </h3>
            </div>
            
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base lg:text-lg">
              {description}
            </p>

            {highlights && (
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-white">Principais recursos:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {highlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
              {technologies.slice(0, 6).map((tech) => (
                <span 
                  key={tech}
                  className="px-2 sm:px-3 py-1 glass-subtle rounded-full text-neutral-300 text-xs font-medium hover:glass transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  <span>Ver Código</span>
                  <span>→</span>
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  <span>Ver Demo</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-48 sm:h-60 lg:h-80 glass rounded-xl sm:rounded-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              ) : (
                <div className="text-6xl sm:text-8xl opacity-20">
                  {getCategoryIcon(category)}
                </div>
              )}
              
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                {liveUrl && (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/80 border-2 border-white/80 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg">
                    <span className="text-white text-sm sm:text-lg">🔗</span>
                  </div>
                )}
                {githubUrl && (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900/80 border-2 border-white/80 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg">
                    <span className="text-white text-sm sm:text-lg">↗</span>
                  </div>
                )}
              </div>

              {githubUrl && (
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-2 text-xs sm:text-sm text-white bg-black/50 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                  <span>GitHub</span>
                  <span>•</span>
                  <span>Open Source</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular card - compact version
  return (
    <div className="group glass-subtle rounded-2xl p-6 hover:glass transition-all duration-500 hover:scale-102">
      {/* Header */}
      <div className="w-full h-32 glass rounded-xl mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="text-4xl opacity-20">
            {getCategoryIcon(category)}
          </div>
        )}
        
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </div>

        <div className="absolute top-2 right-2 flex gap-1">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-900/90 border border-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-white text-sm">🔗</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-900/90 border border-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-white text-sm">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {/* Category and Title */}
        <div className="space-y-2">
          <span className="px-2 py-1 glass-subtle rounded-full text-neutral-400 text-xs font-medium">
            {category}
          </span>
          
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-neutral-400 leading-relaxed text-sm">
          {description.length > 120 ? description.substring(0, 120) + '...' : description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 glass-subtle rounded-full text-neutral-300 text-xs font-medium hover:glass transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 text-neutral-500 text-xs">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        {(githubUrl || liveUrl) && (
          <div className="flex items-center gap-3 pt-2">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
              >
                <span>Código</span>
                <span>→</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium"
              >
                <span>Demo</span>
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus projetos que demonstram a evolução das minhas habilidades em desenvolvimento, 
            desde APIs backend até interfaces frontend modernas
          </p>
        </div>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12 sm:mb-16">
            <ProjectCard project={featuredProject} variant="featured" />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="regular" />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 sm:mb-3">
              {projects.length}
            </div>
            <div className="text-neutral-300 text-sm sm:text-base font-medium">Projetos</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Desenvolvidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 sm:mb-3">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-neutral-300 text-sm sm:text-base font-medium">Finalizados</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Prontos para uso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 sm:mb-3">
              {projects.filter(p => p.githubUrl).length}
            </div>
            <div className="text-neutral-300 text-sm sm:text-base font-medium">Open Source</div>
            <div className="text-neutral-500 text-xs sm:text-sm">Código disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
}