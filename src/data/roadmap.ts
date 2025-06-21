export interface RoadmapItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  priority: 'high' | 'medium' | 'low';
  category: 'backend' | 'devops' | 'architecture';
}

export const roadmap: RoadmapItem[] = [
  // Backend Fundamentals (Jr → Pl)
  {
    id: 'messaging',
    icon: '📡',
    title: 'Mensageria',
    description: 'Sistemas de filas e comunicação assíncrona para arquiteturas distribuídas.',
    technologies: ['RabbitMQ', 'Apache Kafka', 'Redis Pub/Sub', 'AWS SQS'],
    priority: 'high',
    category: 'backend'
  },
  {
    id: 'caching',
    icon: '⚡',
    title: 'Cache & Performance',
    description: 'Estratégias de cache distribuído e otimização de performance.',
    technologies: ['Redis', 'Memcached', 'CDN', 'Database Indexing'],
    priority: 'high',
    category: 'backend'
  },
  {
    id: 'database-advanced',
    icon: '🗄️',
    title: 'Banco de Dados Avançado',
    description: 'Otimização, replicação e estratégias avançadas de banco de dados.',
    technologies: ['Query Optimization', 'Replication', 'Sharding', 'NoSQL'],
    priority: 'high',
    category: 'backend'
  },

  // DevOps Progression (Jr → Pl → Sr)
  {
    id: 'containerization',
    icon: '�',
    title: 'Containerização Avançada',
    description: 'Aprofundamento em Docker e orquestração de containers para ambientes de produção.',
    technologies: ['Docker Compose', 'Docker Swarm', 'Multi-stage Builds', 'Container Security'],
    priority: 'high',
    category: 'devops'
  },
  {
    id: 'testing-advanced',
    icon: '🧪',
    title: 'Testes & Qualidade',
    description: 'Estratégias de teste abrangentes e práticas de código limpo.',
    technologies: ['TDD', 'Integration Tests', 'Load Testing', 'Code Coverage'],
    priority: 'high',
    category: 'backend'
  },

  // Architecture & Design Patterns (Pl level)
  {
    id: 'microservices',
    icon: '�',
    title: 'Microsserviços',
    description: 'Arquitetura de microsserviços e padrões de comunicação entre serviços.',
    technologies: ['API Gateway', 'Service Mesh', 'gRPC', 'Circuit Breaker'],
    priority: 'medium',
    category: 'architecture'
  },
  {
    id: 'design-patterns',
    icon: '🏗️',
    title: 'Padrões de Arquitetura',
    description: 'Design patterns e princípios SOLID aplicados em sistemas enterprise.',
    technologies: ['SOLID', 'Clean Architecture', 'DDD', 'Event Sourcing'],
    priority: 'medium',
    category: 'architecture'
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Segurança Aplicada',
    description: 'Implementação de segurança em APIs e proteção contra vulnerabilidades.',
    technologies: ['OAuth 2.0', 'OWASP', 'Rate Limiting', 'Data Encryption'],
    priority: 'medium',
    category: 'backend'
  },

  // Cloud & Infrastructure (Pl → Sr)
  {
    id: 'orchestration',
    icon: '☸️',
    title: 'Orquestração & IaC',
    description: 'Kubernetes para orquestração enterprise e Terraform para automação de infraestrutura.',
    technologies: ['Kubernetes', 'Terraform', 'Helm Charts', 'AWS/GCP'],
    priority: 'medium',
    category: 'devops'
  },
  {
    id: 'monitoring',
    icon: '�',
    title: 'Observabilidade',
    description: 'Monitoramento, logs estruturados e métricas de aplicações em produção.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'APM Tools'],
    priority: 'medium',
    category: 'devops'
  },

  // Senior Level Skills
  {
    id: 'performance',
    icon: '⚡',
    title: 'Performance Engineering',
    description: 'Otimização de performance e escalabilidade para sistemas de alta demanda.',
    technologies: ['Profiling', 'Load Balancing', 'CDN Strategy', 'Caching Layers'],
    priority: 'low',
    category: 'architecture'
  },
  {
    id: 'cicd',
    icon: '🔄',
    title: 'CI/CD Enterprise',
    description: 'Pipelines complexos, estratégias de deploy e automação completa.',
    technologies: ['GitHub Actions', 'Jenkins', 'Blue-Green Deploy', 'Canary Release'],
    priority: 'low',
    category: 'devops'
  },
  {
    id: 'leadership',
    icon: '👥',
    title: 'Liderança Técnica',
    description: 'Mentoria, code review e decisões arquiteturais em equipes.',
    technologies: ['Code Review', 'Tech Leadership', 'Architecture Decisions', 'Mentoring'],
    priority: 'low',
    category: 'architecture'
  }
];

export const getRoadmapByPriority = (priority: RoadmapItem['priority']) => {
  return roadmap.filter(item => item.priority === priority);
};

export const getRoadmapByCategory = (category: RoadmapItem['category']) => {
  return roadmap.filter(item => item.category === category);
};