import { FileText, RotateCw, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import type { Question } from './QuestionGenerator';

interface QuestionListProps {
  questions: Question[];
  onSelectQuestion: (question: Question) => void;
  onRegenerateQuestion: (id: string) => void;
}

export function QuestionList({ questions, onSelectQuestion, onRegenerateQuestion }: QuestionListProps) {
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

  const getBloomColor = (bloom: string) => {
    const level = parseInt(bloom.replace('L', ''));
    if (level <= 2) return 'bg-blue-100 text-blue-800';
    if (level <= 4) return 'bg-purple-100 text-purple-800';
    return 'bg-pink-100 text-pink-800';
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Generated Questions ({questions.length})</CardTitle>
            <Badge variant="outline">AI Confidence: 94%</Badge>
          </div>
        </CardHeader>
      </Card>

      {questions.map((question) => (
        <Card key={question.id} className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  {question.text}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {question.co}
                  </Badge>
                  <Badge className={`text-xs ${getBloomColor(question.bloom)}`}>
                    {question.bloom}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Load: {question.cognitiveLoad}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {question.topic}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onSelectQuestion(question)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onRegenerateQuestion(question.id)}
                  >
                    <RotateCw className="w-4 h-4 mr-1" />
                    Regenerate
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
