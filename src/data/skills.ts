export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  level: 'learning' | 'intermediate' | 'advanced';
}

export const skills: Skill[] = [
  {
    id: 'frontend',
    icon: '⚡',
    title: 'Frontend',
    description: 'Desenvolvimento de interfaces responsivas e modernas com foco em experiência do usuário.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Tailwind CSS'],
    level: 'intermediate'
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend',
    description: 'Construção de APIs RESTful robustas e integração com bancos de dados relacionais.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Express'],
    level: 'intermediate'
  },
  {
    id: 'tools',
    icon: '🛠️',
    title: 'Ferramentas',
    description: 'Controle de versão, containerização básica e ferramentas de desenvolvimento para deploy eficiente.',
    technologies: ['Git', 'Linux', 'Docker', 'Prisma ORM'],
    level: 'learning'
  }
];

export const getSkillsByLevel = (level: Skill['level']) => {
  return skills.filter(skill => skill.level === level);
};

export const getSkillById = (id: string) => {
  return skills.find(skill => skill.id === id);
};