import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Sparkles, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface BloomMasteryRingProps {
  whyViewEnabled?: boolean;
}

export function BloomMasteryRing({ whyViewEnabled }: BloomMasteryRingProps) {
  const bloomLevels = [
    { level: 'L1', name: 'Remember', mastery: 85, color: '#3B82F6', emoji: '🎯' },
    { level: 'L2', name: 'Understand', mastery: 72, color: '#8B5CF6', emoji: '💡' },
    { level: 'L3', name: 'Apply', mastery: 68, color: '#EC4899', emoji: '⚙️' },
    { level: 'L4', name: 'Analyze', mastery: 45, color: '#F59E0B', emoji: '🔍' },
    { level: 'L5', name: 'Evaluate', mastery: 32, color: '#10B981', emoji: '⚖️' },
    { level: 'L6', name: 'Create', mastery: 28, color: '#EF4444', emoji: '🚀' },
  ];

  const radius = 80;
  const centerX = 120;
  const centerY = 120;
  const strokeWidth = 20;

  const createArc = (startAngle: number, endAngle: number, color: string, mastery: number) => {
    const actualEndAngle = startAngle + ((endAngle - startAngle) * mastery) / 100;
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, actualEndAngle);
    const largeArcFlag = actualEndAngle - startAngle <= 180 ? 0 : 1;

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const anglePerLevel = 360 / bloomLevels.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          Thinking Skills Mastery
        </CardTitle>
        <CardDescription>
          Your progress across different levels of thinking
        </CardDescription>
        {whyViewEnabled && (
          <Badge variant="outline" className="w-fit bg-indigo-50 text-indigo-700 border-indigo-200">
            <Info className="w-3 h-3 mr-1" />
            Based on Bloom&apos;s Taxonomy
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {/* Ring Chart */}
          <svg width="240" height="240" className="mb-6">
            {/* Background circles */}
            {bloomLevels.map((_, index) => {
              const startAngle = index * anglePerLevel;
              const endAngle = startAngle + anglePerLevel;
              const start = polarToCartesian(centerX, centerY, radius, endAngle);
              const end = polarToCartesian(centerX, centerY, radius, startAngle);
              const largeArcFlag = 0;

              return (
                <path
                  key={`bg-${index}`}
                  d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`}
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                />
              );
            })}

            {/* Progress arcs */}
            {bloomLevels.map((level, index) => {
              const startAngle = index * anglePerLevel;
              const endAngle = startAngle + anglePerLevel;

              return (
                <TooltipProvider key={level.level}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <path
                        d={createArc(startAngle, endAngle, level.color, level.mastery)}
                        fill="none"
                        stroke={level.color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div className="font-semibold mb-1">{level.name} ({level.level})</div>
                        <div className="text-gray-300">Mastery: {level.mastery}%</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}

            {/* Center text */}
            <text x={centerX} y={centerY - 10} textAnchor="middle" className="text-2xl font-bold fill-gray-900">
              65%
            </text>
            <text x={centerX} y={centerY + 10} textAnchor="middle" className="text-xs fill-gray-500">
              Overall
            </text>
          </svg>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {bloomLevels.map((level) => (
              <div key={level.level} className="flex items-center gap-2">
                <span className="text-lg">{level.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: level.color }}
                    ></div>
                    <span className="text-xs font-medium text-gray-700 truncate">
                      {level.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{level.mastery}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {whyViewEnabled && (
          <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-indigo-700">
                This ring shows your mastery at each thinking level. The colored segments show how much you&apos;ve practiced and improved at each skill.
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
