interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  featured?: boolean;
}

function ProjectCard({ title, description, technologies, category, githubUrl, featured = false }: ProjectCardProps) {
  return (
    <div className={`group glass-subtle rounded-3xl p-8 hover:glass transition-all duration-500 hover:scale-102 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      {/* Project Image Placeholder */}
      <div className={`w-full ${featured ? 'h-80' : 'h-48'} glass rounded-2xl mb-8 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
        <div className="text-6xl opacity-20">
          {category === 'Backend' && '�'}
          {category === 'Frontend' && '�'}
          {category === 'Full-Stack' && '🌐'}
          {category === 'API' && '�'}
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/80 group-hover:rotate-45 transition-transform duration-300">↗</span>
        </div>
        {githubUrl && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-neutral-400">
            <span>GitHub</span>
            <span>•</span>
            <span>Open Source</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 glass-subtle rounded-full text-neutral-400 text-sm font-medium">
            {category}
          </span>
        </div>
        
        <h3 className={`${featured ? 'text-4xl' : 'text-2xl'} font-bold text-white group-hover:text-gradient transition-all duration-300`}>
          {title}
        </h3>
        
        <p className="text-neutral-400 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 pt-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm font-medium hover:glass transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {githubUrl && (
          <div className="pt-4">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
            >
              <span>Ver no GitHub</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Sistema de Locadora - Backend',
      description: 'API completa desenvolvida com Node.js, TypeScript e PostgreSQL. Sistema robusto com autenticação JWT, upload de imagens, validações com Zod e arquitetura em camadas seguindo princípios SOLID e Clean Architecture.',
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Express', 'JWT'],
      category: 'Backend',
      githubUrl: 'https://github.com/chriskryon/car-rental-back',
      featured: true
    },
    {
      title: 'Sistema de Locadora - Frontend',
      description: 'Interface moderna construída com React, TypeScript e Tailwind CSS. Painel administrativo completo para gerenciamento de frota, com sistema de upload de imagens e interface responsiva.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Frontend',
      githubUrl: 'https://github.com/chriskryon/car-rental-front'
    },
    {
      title: 'API de Gerenciamento',
      description: 'API RESTful desenvolvida para demonstrar conhecimentos em desenvolvimento backend, com documentação completa e boas práticas de segurança.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      category: 'API'
    },
    {
      title: 'Aplicação Web Completa',
      description: 'Projeto full-stack integrando frontend React com backend Node.js, demonstrando integração completa entre tecnologias modernas.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      category: 'Full-Stack'
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-8">
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Seleção de projetos que demonstram minhas habilidades em desenvolvimento full-stack, 
            desde APIs robustas até interfaces modernas e responsivas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}