import { Plus, Trash2, Edit2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function CourseOutcomeEditor() {
  const courseOutcomes = [
    {
      id: 'CO1',
      description: 'Understand fundamental concepts of object-oriented programming',
      bloomLevel: 'L2',
    },
    {
      id: 'CO2',
      description: 'Apply data structures to solve computational problems',
      bloomLevel: 'L3',
    },
    {
      id: 'CO3',
      description: 'Analyze algorithm efficiency and complexity',
      bloomLevel: 'L4',
    },
    {
      id: 'CO4',
      description: 'Design normalized database schemas',
      bloomLevel: 'L5',
    },
    {
      id: 'CO5',
      description: 'Create complete software applications using OOP principles',
      bloomLevel: 'L6',
    },
    {
      id: 'CO6',
      description: 'Evaluate web security vulnerabilities and countermeasures',
      bloomLevel: 'L5',
    },
  ];

  const getBloomColor = (bloom: string) => {
    const level = parseInt(bloom.replace('L', ''));
    if (level <= 2) return 'bg-blue-100 text-blue-800';
    if (level <= 4) return 'bg-purple-100 text-purple-800';
    return 'bg-pink-100 text-pink-800';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Course Outcomes</CardTitle>
            <CardDescription>
              Define and map learning outcomes to Bloom&apos;s taxonomy
            </CardDescription>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add CO
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {courseOutcomes.map((co) => (
            <div
              key={co.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Badge className="mt-1">{co.id}</Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 mb-2">{co.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Bloom Level:</span>
                    <Select defaultValue={co.bloomLevel}>
                      <SelectTrigger className="w-32 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L1">L1: Remember</SelectItem>
                        <SelectItem value="L2">L2: Understand</SelectItem>
                        <SelectItem value="L3">L3: Apply</SelectItem>
                        <SelectItem value="L4">L4: Analyze</SelectItem>
                        <SelectItem value="L5">L5: Evaluate</SelectItem>
                        <SelectItem value="L6">L6: Create</SelectItem>
                      </SelectContent>
                    </Select>
                    <Badge className={`${getBloomColor(co.bloomLevel)} text-xs`}>
                      {co.bloomLevel}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
