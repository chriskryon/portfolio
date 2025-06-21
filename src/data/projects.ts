export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: 'Frontend' | 'Backend' | 'Full-Stack' | 'API' | 'Mobile';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  highlights?: string[];
}

// Backend project showcasing API development skills
const CAR_RENTAL_BACKEND: Project = {
  id: 'car-rental-backend',
  title: 'Sistema de Locadora - Backend',
  description: 'API completa desenvolvida com Node.js, TypeScript e PostgreSQL. Sistema robusto com autenticação JWT, upload de imagens, validações com Zod e arquitetura em camadas seguindo princípios SOLID e Clean Architecture.',
  fullDescription: 'API RESTful completa para sistema de locadora de carros, implementando autenticação JWT, upload de imagens, validações robustas e arquitetura em camadas. O projeto demonstra conhecimentos em desenvolvimento backend, segurança de APIs e boas práticas de programação.',
  technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Express', 'JWT', 'Zod'],
  category: 'Backend',
  githubUrl: 'https://github.com/chriskryon/car-rental-back',
  imageUrl: 'https://i.imgur.com/TbPD6D7.png',
  featured: true,
  status: 'completed',
  highlights: [
    'Arquitetura em camadas (Controllers, Services, Repositories)',
    'Autenticação JWT com refresh tokens',
    'Upload e processamento de imagens',
    'Validações consistentes com Zod',
    'Documentação completa da API'
  ]
};

// Frontend project demonstrating React skills
const CAR_RENTAL_FRONTEND: Project = {
  id: 'car-rental-frontend',
  title: 'Sistema de Locadora - Frontend',
  description: 'Interface moderna construída com React, TypeScript e Tailwind CSS. Painel administrativo completo para gerenciamento de frota, com sistema de upload de imagens e interface responsiva.',
  fullDescription: 'Plataforma frontend moderna para sistema de aluguel de carros, featuring painel administrativo completo, sistema de gerenciamento de usuários e interface responsiva otimizada para diferentes dispositivos.',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
  category: 'Frontend',
  githubUrl: 'https://github.com/chriskryon/car-rental-front',
  imageUrl: 'https://i.imgur.com/LL27BRO.png',
  featured: false,
  status: 'completed',
  highlights: [
    'Interface responsiva e moderna',
    'Painel administrativo completo',
    'Sistema de upload de imagens',
    'Gerenciamento de estado eficiente',
    'Integração com API backend'
  ]
};

// Modern fintech landing page
const DIVERSE_LANDING: Project = {
  id: 'diverse-landing',
  title: 'Diverse Landing Page',
  description: 'Landing page moderna para fintech que valoriza diversidade, construída com Next.js e TypeScript. Interface responsiva com animações fluidas, formulários integrados e foco em inclusão financeira.',
  fullDescription: 'Projeto frontend para uma fintech inovadora que posiciona diversidade como ativo central. Desenvolvida com Next.js App Router, apresenta soluções financeiras para pessoas físicas e jurídicas, com design moderno e experiência de usuário inclusiva.',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
  category: 'Frontend',
  githubUrl: 'https://github.com/chriskryon/diverse-landing',
  liveUrl: 'https://diverse-landing.vercel.app',
  imageUrl: 'https://i.imgur.com/Z8SW7oz.png',
  featured: false,
  status: 'completed',
  highlights: [
    'Design inclusivo e acessível',
    'Animações fluidas com Framer Motion',
    'Formulários otimizados com React Hook Form',
    'App Router do Next.js 13+',
    'Deploy automatizado na Vercel'
  ]
};

// All projects in order of importance
export const projects: Project[] = [
  CAR_RENTAL_BACKEND,
  CAR_RENTAL_FRONTEND,
  DIVERSE_LANDING
];

// Utility functions for project filtering
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getCompletedProjects = (): Project[] => {
  return projects.filter(project => project.status === 'completed');
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Quick access to specific project categories
export const getBackendProjects = (): Project[] => getProjectsByCategory('Backend');
export const getFrontendProjects = (): Project[] => getProjectsByCategory('Frontend');
export const getFullStackProjects = (): Project[] => getProjectsByCategory('Full-Stack');