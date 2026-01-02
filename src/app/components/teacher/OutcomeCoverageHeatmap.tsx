import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useTopic } from '../../contexts/TopicContext';
import { Target } from 'lucide-react';

export function OutcomeCoverageHeatmap() {
  const { theme } = useTopic();
  
  const courseOutcomes = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'];
  const bloomLevels = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'];

  // Coverage matrix (0-10 scale)
  const coverageData = [
    [8, 6, 4, 2, 1, 0], // CO1
    [7, 9, 5, 3, 2, 1], // CO2
    [6, 8, 7, 4, 3, 1], // CO3
    [4, 5, 3, 2, 1, 0], // CO4 - needs work
    [5, 7, 6, 5, 3, 2], // CO5
    [6, 6, 5, 4, 2, 1], // CO6
  ];

  const getCoverageColor = (value: number) => {
    if (value >= 7) return '#10B981'; // green
    if (value >= 5) return '#F59E0B'; // amber
    if (value >= 3) return '#F97316'; // orange
    if (value >= 1) return '#EF4444'; // red
    return '#E5E7EB'; // gray
  };

  const getCoverageOpacity = (value: number) => {
    if (value === 0) return 0.2;
    if (value <= 3) return 0.5;
    if (value <= 6) return 0.8;
    return 1;
  };

  return (
    <Card className="border-t-4" style={{ borderTopColor: theme.primaryColor }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" style={{ color: theme.primaryColor }} />
          CO Coverage Heatmap
        </CardTitle>
        <CardDescription>
          Question distribution across {theme.name} Course Outcomes and Bloom levels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-16"></div>
                {bloomLevels.map((level) => (
                  <div key={level} className="w-14 text-center">
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{
                        borderColor: theme.primaryColor + '40',
                        backgroundColor: theme.primaryColor + '10',
                        color: theme.primaryColor
                      }}
                    >
                      {level}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Heatmap Grid */}
              {courseOutcomes.map((co, rowIndex) => (
                <div key={co} className="flex items-center gap-2 mb-2">
                  <div className="w-16">
                    <Badge 
                      className="w-full justify-center"
                      style={{
                        backgroundColor: theme.secondaryColor,
                        color: 'white'
                      }}
                    >
                      {co}
                    </Badge>
                  </div>
                  {coverageData[rowIndex].map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className="w-14 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-sm hover:shadow-md"
                      style={{
                        backgroundColor: getCoverageColor(value),
                        opacity: getCoverageOpacity(value)
                      }}
                      title={`${co} - ${bloomLevels[colIndex]}: ${value} questions`}
                    >
                      <span className="text-white text-xs font-semibold">
                        {value > 0 ? value : ''}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 text-xs text-gray-600 pt-4 border-t">
            <span className="font-medium">Coverage:</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>High (7+)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-amber-500 rounded"></div>
              <span>Good (5-6)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Low (3-4)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-red-400 rounded"></div>
              <span>Critical (1-2)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}