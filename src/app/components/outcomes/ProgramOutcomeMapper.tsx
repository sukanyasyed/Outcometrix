import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export function ProgramOutcomeMapper() {
  const programOutcomes = ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8'];
  const courseOutcomes = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'];

  // Mapping strength: 0 = None, 1 = Low, 2 = Medium, 3 = High
  const mappingData = [
    [3, 2, 1, 0, 1, 0, 0, 1], // CO1
    [2, 3, 2, 1, 2, 1, 0, 1], // CO2
    [1, 2, 3, 2, 2, 1, 1, 0], // CO3
    [0, 1, 2, 3, 1, 2, 1, 0], // CO4
    [1, 2, 2, 2, 3, 2, 2, 1], // CO5
    [0, 1, 1, 1, 2, 3, 3, 2], // CO6
  ];

  const getStrengthColor = (value: number) => {
    switch (value) {
      case 3:
        return 'bg-green-500';
      case 2:
        return 'bg-blue-500';
      case 1:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-200';
    }
  };

  const getStrengthOpacity = (value: number) => {
    if (value === 0) return 'opacity-30';
    if (value === 1) return 'opacity-50';
    if (value === 2) return 'opacity-75';
    return 'opacity-100';
  };

  const getStrengthLabel = (value: number) => {
    switch (value) {
      case 3: return 'High';
      case 2: return 'Med';
      case 1: return 'Low';
      default: return '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>CO-PO Mapping Matrix</CardTitle>
        <CardDescription>
          Course Outcome to Program Outcome correlation strength
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-max">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-20"></div>
              {programOutcomes.map((po) => (
                <div key={po} className="w-16 text-center">
                  <Badge variant="outline" className="text-xs">
                    {po}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Mapping Grid */}
            {courseOutcomes.map((co, rowIndex) => (
              <div key={co} className="flex items-center gap-2 mb-2">
                <div className="w-20">
                  <Badge className="w-full justify-center">{co}</Badge>
                </div>
                {mappingData[rowIndex].map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className={`w-16 h-12 rounded flex items-center justify-center ${getStrengthColor(value)} ${getStrengthOpacity(value)} transition-all hover:scale-110 cursor-pointer`}
                    title={`${co} - ${programOutcomes[colIndex]}: ${getStrengthLabel(value)} correlation`}
                  >
                    <span className="text-white text-xs font-semibold">
                      {getStrengthLabel(value)}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs text-gray-600 pt-4 border-t mt-4">
          <span>Correlation:</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span>None</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
