import { skills, type Skill } from '../data/skills';
import { roadmap, type RoadmapItem } from '../data/roadmap';

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const { icon, title, description, technologies } = skill;
  
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

interface RoadmapCardProps {
  item: RoadmapItem;
}

function RoadmapCard({ item }: RoadmapCardProps) {
  const { icon, title, description, technologies, priority } = item;
  
  const getPriorityColor = (priority: string) => {
    const colors = {
      'high': 'border-orange-400/50 bg-orange-500/20 text-orange-200',
      'medium': 'border-blue-400/50 bg-blue-500/20 text-blue-200',
      'low': 'border-purple-400/50 bg-purple-500/20 text-purple-200'
    };
    return colors[priority as keyof typeof colors] || colors.medium;
  };

  const getPriorityText = (priority: string) => {
    const texts = {
      'high': 'Alta Prioridade',
      'medium': 'Média Prioridade',
      'low': 'Baixa Prioridade'
    };
    return texts[priority as keyof typeof texts] || 'Média Prioridade';
  };
  
  return (
    <div className="group glass-subtle rounded-2xl p-6 hover:glass transition-all duration-500 hover:scale-102">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
            {getPriorityText(priority)}
          </div>
        </div>
        
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-neutral-400 leading-relaxed text-sm mb-4">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 glass-subtle rounded-full text-neutral-300 text-xs font-medium hover:glass transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const highPriorityItems = roadmap.filter(item => item.priority === 'high');
  const otherItems = roadmap.filter(item => item.priority !== 'high');

  return (
    <section id="skills" className="py-32">
      <div className="container-custom">
        {/* Current Skills */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-8">
            <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Stack tecnológico e ferramentas de desenvolvimento utilizadas para implementação de soluções web completas e eficientes
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Roadmap */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Tecnologias e conceitos que planejo dominar para alcançar o nível pleno/sênior em desenvolvimento backend
          </p>
        </div>

        {/* High Priority Items */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">🎯 Próximos Passos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highPriorityItems.map((item) => (
              <RoadmapCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Other Priority Items */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">📈 Metas Futuras</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherItems.map((item) => (
              <RoadmapCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}