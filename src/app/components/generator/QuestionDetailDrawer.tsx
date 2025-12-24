import { X, CheckCircle, RotateCw, Lightbulb } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { Question } from './QuestionGenerator';

interface QuestionDetailDrawerProps {
  question: Question | null;
  onClose: () => void;
  onRegenerate: (id: string) => void;
}

export function QuestionDetailDrawer({ question, onClose, onRegenerate }: QuestionDetailDrawerProps) {
  if (!question) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl h-full bg-white shadow-xl overflow-y-auto">
        <div className="sticky top-0 bg-white border-b z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2>Question Details</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Question Text */}
          <Card>
            <CardHeader>
              <CardTitle>Question</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900">{question.text}</p>
            </CardContent>
          </Card>

          {/* Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Course Outcome</div>
                  <Badge>{question.co}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Bloom Level</div>
                  <Badge className="bg-purple-100 text-purple-800">{question.bloom}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                  <Badge className="bg-yellow-100 text-yellow-800">{question.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Cognitive Load</div>
                  <Badge variant="outline">{question.cognitiveLoad}</Badge>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-gray-600 mb-1">Topic</div>
                  <Badge variant="outline">{question.topic}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Justification */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <CardTitle>AI Justification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                {question.justification}
              </p>
            </CardContent>
          </Card>

          {/* Alignment Info */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium text-green-900 mb-1">
                    Outcome Aligned
                  </div>
                  <p className="text-sm text-green-700">
                    This question is properly aligned with course outcomes and follows Bloom&apos;s taxonomy guidelines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1">
              <CheckCircle className="w-4 h-4 mr-2" />
              Accept Question
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onRegenerate(question.id)}
            >
              <RotateCw className="w-4 h-4 mr-2" />
              Regenerate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
