export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  level: 'learning' | 'intermediate' | 'advanced';
}

// Current technical skills organized by proficiency
const FRONTEND_SKILL: Skill = {
  id: 'frontend',
  icon: '⚡',
  title: 'Frontend',
  description: 'Desenvolvimento de interfaces responsivas e modernas com foco em experiência do usuário.',
  technologies: ['React', 'TypeScript', 'CSS3', 'Tailwind CSS'],
  level: 'intermediate'
};

const BACKEND_SKILL: Skill = {
  id: 'backend',
  icon: '⚙️',
  title: 'Backend',
  description: 'Construção de APIs RESTful robustas e integração com bancos de dados relacionais.',
  technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Express'],
  level: 'intermediate'
};

const TOOLS_SKILL: Skill = {
  id: 'tools',
  icon: '🛠️',
  title: 'Ferramentas',
  description: 'Controle de versão, containerização básica e ferramentas de desenvolvimento para deploy eficiente.',
  technologies: ['Git', 'Linux', 'Docker', 'Prisma ORM'],
  level: 'learning'
};

// Export all skills in logical order
export const skills: Skill[] = [
  BACKEND_SKILL,    // Primary focus
  FRONTEND_SKILL,   // Secondary skill
  TOOLS_SKILL       // Supporting tools
];

// Utility functions with explicit return types
export const getSkillsByLevel = (level: Skill['level']): Skill[] => {
  return skills.filter(skill => skill.level === level);
};

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(skill => skill.id === id);
};

// Quick access functions for common queries
export const getIntermediateSkills = (): Skill[] => getSkillsByLevel('intermediate');
export const getLearningSkills = (): Skill[] => getSkillsByLevel('learning');
export const getAdvancedSkills = (): Skill[] => getSkillsByLevel('advanced');