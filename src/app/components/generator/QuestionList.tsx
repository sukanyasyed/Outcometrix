import { FileText, RotateCw, Eye, Sparkles, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { QuestionDNAStrip } from '../shared/QuestionDNAStrip';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import type { Question } from './QuestionGenerator';

interface QuestionListProps {
  questions: Question[];
  onSelectQuestion: (question: Question) => void;
  onRegenerateQuestion: (id: string) => void;
  whyViewEnabled?: boolean;
}

export function QuestionList({ questions, onSelectQuestion, onRegenerateQuestion, whyViewEnabled }: QuestionListProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getBloomColor = (bloom: string) => {
    const level = parseInt(bloom.replace('L', ''));
    if (level <= 2) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (level <= 4) return 'bg-violet-100 text-violet-800 border-violet-200';
    return 'bg-pink-100 text-pink-800 border-pink-200';
  };

  return (
    <div className="space-y-4">
      <Card className="border-t-4 border-t-indigo-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Generated Questions ({questions.length})
            </CardTitle>
            <Badge className="bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 border-indigo-200">
              AI Confidence: 94%
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <TooltipProvider>
        {questions.map((question) => (
          <Card
            key={question.id}
            className={`hover:shadow-xl transition-all duration-300 ${
              whyViewEnabled ? 'ring-2 ring-indigo-200 shadow-lg shadow-indigo-100' : ''
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900 flex-1 pr-4">
                      {question.text}
                    </p>
                    {whyViewEnabled && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="flex-shrink-0">
                            <Info className="w-4 h-4 text-indigo-500 animate-pulse" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-indigo-900 text-white border-indigo-700">
                          <p className="text-xs">{question.justification}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className={`text-xs ${whyViewEnabled ? 'ring-1 ring-indigo-300 shadow-sm' : ''}`}
                    >
                      {question.co}
                    </Badge>
                    <Badge
                      className={`text-xs ${getBloomColor(question.bloom)} ${
                        whyViewEnabled ? 'ring-1 ring-violet-300' : ''
                      }`}
                    >
                      {question.bloom}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Load: {question.cognitiveLoad}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-gray-50">
                      {question.topic}
                    </Badge>
                  </div>

                  {/* Question DNA Strip */}
                  <div className="mb-4 bg-gradient-to-r from-gray-50 to-indigo-50/30 rounded-lg p-3 border border-gray-100">
                    <div className="text-xs font-medium text-gray-600 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-indigo-500" />
                      Question DNA
                    </div>
                    <QuestionDNAStrip
                      co={question.co}
                      bloom={question.bloom}
                      difficulty={question.difficulty}
                      cognitiveLoad={question.cognitiveLoad}
                    />
                  </div>

                  {whyViewEnabled && (
                    <div className="mb-3 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-indigo-900 mb-1">
                            AI Justification
                          </div>
                          <p className="text-xs text-indigo-700">{question.justification}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onSelectQuestion(question)}
                      className="hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onRegenerateQuestion(question.id)}
                      className="hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700"
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
      </TooltipProvider>
    </div>
  );
}