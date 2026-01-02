import { useTopic } from '../../contexts/TopicContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface QuestionDNAStripProps {
  co: string;
  bloom: string;
  difficulty: string;
  cognitiveLoad: string;
  showTooltip?: boolean;
}

export function QuestionDNAStrip({ co, bloom, difficulty, cognitiveLoad, showTooltip = true }: QuestionDNAStripProps) {
  const { theme } = useTopic();
  
  // Calculate segment widths based on values
  const getCoWeight = (co: string) => {
    const coNum = parseInt(co.replace('CO', ''));
    return (coNum / 6) * 25; // Max 25% width
  };

  const getBloomDepth = (bloom: string) => {
    const bloomNum = parseInt(bloom.replace('L', ''));
    return (bloomNum / 6) * 30; // Max 30% width
  };

  const getDifficultyWidth = (diff: string) => {
    const widths = { Easy: 15, Medium: 25, Hard: 30 };
    return widths[diff as keyof typeof widths] || 20;
  };

  const getCognitiveWidth = (load: string) => {
    const widths = { Low: 15, Moderate: 20, High: 25 };
    return widths[load as keyof typeof widths] || 20;
  };

  // Use theme colors for DNA segments
  const segments = [
    { 
      color: theme.primaryColor, 
      bgColor: 'bg-[var(--dna-co)]',
      width: getCoWeight(co), 
      label: co,
      name: 'Course Outcome',
      description: `This question maps to ${co}` 
    },
    { 
      color: theme.secondaryColor, 
      bgColor: 'bg-[var(--dna-bloom)]',
      width: getBloomDepth(bloom), 
      label: bloom,
      name: 'Bloom Level',
      description: `Cognitive level: ${bloom} - ${getBloomName(bloom)}` 
    },
    { 
      color: '#F59E0B', 
      bgColor: 'bg-[var(--dna-difficulty)]',
      width: getDifficultyWidth(difficulty), 
      label: difficulty,
      name: 'Difficulty',
      description: `Difficulty level: ${difficulty}` 
    },
    { 
      color: '#EC4899', 
      bgColor: 'bg-[var(--dna-cognitive)]',
      width: getCognitiveWidth(cognitiveLoad), 
      label: cognitiveLoad,
      name: 'Cognitive Load',
      description: `Expected cognitive effort: ${cognitiveLoad}` 
    },
  ];
  
  function getBloomName(bloom: string): string {
    const names: Record<string, string> = {
      'L1': 'Remember',
      'L2': 'Understand',
      'L3': 'Apply',
      'L4': 'Analyze',
      'L5': 'Evaluate',
      'L6': 'Create',
    };
    return names[bloom] || 'Unknown';
  }

  return (
    <TooltipProvider>
      <div className="relative">
        <div className="flex h-2.5 rounded-full overflow-hidden bg-gray-100 shadow-inner">
          {segments.map((segment, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <div
                  className={`transition-all duration-300 hover:opacity-80 cursor-pointer`}
                  style={{ 
                    width: `${segment.width}%`,
                    backgroundColor: segment.color 
                  }}
                />
              </TooltipTrigger>
              {showTooltip && (
                <TooltipContent 
                  className="bg-gray-900 text-white border-gray-700"
                  style={{ borderLeftColor: segment.color, borderLeftWidth: '3px' }}
                >
                  <div className="text-xs">
                    <div className="font-semibold mb-1">{segment.name}</div>
                    <div className="text-gray-300">{segment.description}</div>
                  </div>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          {segments.map((segment, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <div 
                className="w-2 h-2 rounded-full shadow-sm"
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="font-medium">{segment.label}</span>
            </span>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}