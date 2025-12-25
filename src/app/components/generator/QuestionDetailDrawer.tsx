import { X, CheckCircle, RotateCw, Lightbulb } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { QuestionDNAStrip } from '../shared/QuestionDNAStrip';
import { FacultyAITimeline } from '../shared/FacultyAITimeline';
import type { Question } from './QuestionGenerator';

interface QuestionDetailDrawerProps {
  question: Question | null;
  onClose: () => void;
  onRegenerate: (id: string) => void;
}

export function QuestionDetailDrawer({ question, onClose, onRegenerate }: QuestionDetailDrawerProps) {
  if (!question) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end animate-in fade-in duration-200">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-violet-600 z-10 px-6 py-4 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-white">Question Details</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Question Text */}
          <Card className="border-t-4 border-t-indigo-500 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-violet-50">
              <CardTitle>Question</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-900 leading-relaxed">{question.text}</p>
            </CardContent>
          </Card>

          {/* Question DNA Strip */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Question DNA</CardTitle>
            </CardHeader>
            <CardContent>
              <QuestionDNAStrip
                co={question.co}
                bloom={question.bloom}
                difficulty={question.difficulty}
                cognitiveLoad={question.cognitiveLoad}
              />
            </CardContent>
          </Card>

          {/* Metadata */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Course Outcome</div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">{question.co}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Bloom Level</div>
                  <Badge className="bg-violet-100 text-violet-800 border-violet-200">{question.bloom}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">{question.difficulty}</Badge>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Cognitive Load</div>
                  <Badge className="bg-pink-100 text-pink-800 border-pink-200">{question.cognitiveLoad}</Badge>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-gray-600 mb-1">Topic</div>
                  <Badge variant="outline" className="bg-gray-50">{question.topic}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Justification */}
          <Card className="border-l-4 border-l-indigo-500 shadow-md bg-gradient-to-r from-indigo-50/50 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-indigo-600" />
                <CardTitle className="text-base">AI Justification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm leading-relaxed">
                {question.justification}
              </p>
            </CardContent>
          </Card>

          {/* Faculty-AI Co-Creation Timeline */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <FacultyAITimeline />
            </CardContent>
          </Card>

          {/* Alignment Info */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-md">
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
          <div className="flex gap-3 pt-4 sticky bottom-0 bg-white py-4 border-t">
            <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg">
              <CheckCircle className="w-4 h-4 mr-2" />
              Accept Question
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-violet-300 hover:bg-violet-50 hover:text-violet-700"
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