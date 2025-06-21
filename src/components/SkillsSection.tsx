interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

function SkillCard({ icon, title, description, technologies }: SkillCardProps) {
  return (
    <div className="group glass-subtle rounded-3xl p-10 hover:glass transition-all duration-500 hover:scale-102">
      <div className="mb-8">
        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{icon}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-neutral-400 leading-relaxed mb-8">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-4 py-2 glass-subtle rounded-full text-neutral-300 text-sm font-medium hover:glass transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    {
      icon: '⚡',
      title: 'Frontend',
      description: 'Desenvolvimento de interfaces modernas e responsivas utilizando as mais recentes tecnologias web.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'Construção de APIs robustas e escaláveis com arquitetura bem estruturada e banco de dados relacionais.',
      technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Express']
    },
    {
      icon: '🛠️',
      title: 'Ferramentas',
      description: 'Domínio de ferramentas essenciais para desenvolvimento, versionamento e deploy de aplicações.',
      technologies: ['Git', 'Linux', 'Docker', 'Prisma ORM']
    }
  ];

  return (
    <section className="py-32">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-8">
            <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Ferramentas e tecnologias que utilizo para criar soluções completas e eficientes
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}