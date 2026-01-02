import { createContext, useContext, useState, ReactNode } from 'react';
import { LucideIcon, Network, Database, Cpu, BrainCircuit, GitBranch, Server, Globe, Code, Layers } from 'lucide-react';

export type TopicId = 
  | 'data-structures'
  | 'operating-systems'
  | 'database-systems'
  | 'machine-learning'
  | 'computer-networks'
  | 'software-engineering'
  | 'web-development'
  | 'algorithms'
  | 'cloud-computing';

export interface TopicTheme {
  id: TopicId;
  name: string;
  icon: LucideIcon;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  metaphor: string;
  description: string;
  visualStyle: {
    pattern: 'nodes' | 'lanes' | 'grid' | 'layers' | 'network' | 'tree' | 'flow' | 'stack';
    iconStyle: 'geometric' | 'organic' | 'technical' | 'abstract';
  };
}

const topicThemes: Record<TopicId, TopicTheme> = {
  'data-structures': {
    id: 'data-structures',
    name: 'Data Structures & Algorithms',
    icon: GitBranch,
    primaryColor: '#3B82F6',
    secondaryColor: '#60A5FA',
    accentColor: '#93C5FD',
    gradientFrom: '#3B82F6',
    gradientTo: '#60A5FA',
    metaphor: 'Connected nodes and tree structures',
    description: 'Visual representations using linked nodes, trees, and graph structures',
    visualStyle: {
      pattern: 'nodes',
      iconStyle: 'geometric',
    },
  },
  'operating-systems': {
    id: 'operating-systems',
    name: 'Operating Systems',
    icon: Cpu,
    primaryColor: '#8B5CF6',
    secondaryColor: '#A78BFA',
    accentColor: '#C4B5FD',
    gradientFrom: '#8B5CF6',
    gradientTo: '#A78BFA',
    metaphor: 'Process lanes and scheduling timelines',
    description: 'Parallel process lanes, CPU cycles, and memory blocks',
    visualStyle: {
      pattern: 'lanes',
      iconStyle: 'technical',
    },
  },
  'database-systems': {
    id: 'database-systems',
    name: 'Database Systems',
    icon: Database,
    primaryColor: '#10B981',
    secondaryColor: '#34D399',
    accentColor: '#6EE7B7',
    gradientFrom: '#10B981',
    gradientTo: '#34D399',
    metaphor: 'Tables and relational grids',
    description: 'Grid patterns representing tables, rows, and relational connections',
    visualStyle: {
      pattern: 'grid',
      iconStyle: 'geometric',
    },
  },
  'machine-learning': {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: BrainCircuit,
    primaryColor: '#EC4899',
    secondaryColor: '#F472B6',
    accentColor: '#F9A8D4',
    gradientFrom: '#EC4899',
    gradientTo: '#F472B6',
    metaphor: 'Neural network layers',
    description: 'Layered architecture showing neurons, weights, and connections',
    visualStyle: {
      pattern: 'layers',
      iconStyle: 'organic',
    },
  },
  'computer-networks': {
    id: 'computer-networks',
    name: 'Computer Networks',
    icon: Network,
    primaryColor: '#06B6D4',
    secondaryColor: '#22D3EE',
    accentColor: '#67E8F9',
    gradientFrom: '#06B6D4',
    gradientTo: '#22D3EE',
    metaphor: 'Network topology and data flow',
    description: 'Interconnected nodes showing network paths and protocols',
    visualStyle: {
      pattern: 'network',
      iconStyle: 'technical',
    },
  },
  'software-engineering': {
    id: 'software-engineering',
    name: 'Software Engineering',
    icon: Code,
    primaryColor: '#F59E0B',
    secondaryColor: '#FBBF24',
    accentColor: '#FCD34D',
    gradientFrom: '#F59E0B',
    gradientTo: '#FBBF24',
    metaphor: 'Development lifecycle flow',
    description: 'Sequential phases and iterative development cycles',
    visualStyle: {
      pattern: 'flow',
      iconStyle: 'abstract',
    },
  },
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    icon: Globe,
    primaryColor: '#14B8A6',
    secondaryColor: '#2DD4BF',
    accentColor: '#5EEAD4',
    gradientFrom: '#14B8A6',
    gradientTo: '#2DD4BF',
    metaphor: 'Component hierarchy',
    description: 'Nested components and DOM tree structures',
    visualStyle: {
      pattern: 'tree',
      iconStyle: 'geometric',
    },
  },
  'algorithms': {
    id: 'algorithms',
    name: 'Algorithms',
    icon: GitBranch,
    primaryColor: '#6366F1',
    secondaryColor: '#818CF8',
    accentColor: '#A5B4FC',
    gradientFrom: '#6366F1',
    gradientTo: '#818CF8',
    metaphor: 'Flowcharts and decision trees',
    description: 'Step-by-step flows with branching logic',
    visualStyle: {
      pattern: 'flow',
      iconStyle: 'geometric',
    },
  },
  'cloud-computing': {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Server,
    primaryColor: '#8B5CF6',
    secondaryColor: '#A78BFA',
    accentColor: '#C4B5FD',
    gradientFrom: '#8B5CF6',
    gradientTo: '#D8B4FE',
    metaphor: 'Distributed layers and services',
    description: 'Multi-tier architecture with service layers',
    visualStyle: {
      pattern: 'stack',
      iconStyle: 'technical',
    },
  },
};

interface TopicContextType {
  currentTopic: TopicId;
  setCurrentTopic: (topic: TopicId) => void;
  theme: TopicTheme;
  allTopics: TopicTheme[];
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

export function TopicProvider({ children }: { children: ReactNode }) {
  const [currentTopic, setCurrentTopic] = useState<TopicId>('data-structures');

  const value: TopicContextType = {
    currentTopic,
    setCurrentTopic,
    theme: topicThemes[currentTopic],
    allTopics: Object.values(topicThemes),
  };

  return <TopicContext.Provider value={value}>{children}</TopicContext.Provider>;
}

export function useTopic() {
  const context = useContext(TopicContext);
  if (context === undefined) {
    throw new Error('useTopic must be used within a TopicProvider');
  }
  return context;
}
