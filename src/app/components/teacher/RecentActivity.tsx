import { FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface Question {
  id: number;
  text: string;
  co: string;
  bloom: string;
  difficulty: string;
}

interface RecentActivityProps {
  questions: Question[];
}

export function RecentActivity({ questions }: RecentActivityProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Questions</CardTitle>
        <CardDescription>
          Latest generated questions from your bank
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {question.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {question.co}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {question.bloom}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
            <Clock className="w-4 h-4" />
            <span>Last updated 2 hours ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
