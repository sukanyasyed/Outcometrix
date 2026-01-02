import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Sparkles, 
  Clock, 
  Target, 
  Brain, 
  ChevronRight, 
  CheckCircle2, 
  Info,
  Lightbulb,
  TrendingUp,
  RefreshCw,
  Heart
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface StudentPracticeProps {
  whyViewEnabled?: boolean;
}

export function StudentPractice({ whyViewEnabled }: StudentPracticeProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const practiceQuestions = [
    {
      id: 1,
      text: 'Explain the concept of polymorphism in object-oriented programming with a simple example.',
      skill: 'Understanding Concepts',
      skillEmoji: '💡',
      difficulty: 'Easy',
      estimatedTime: '5 min',
      bloomLevel: 'L2',
      aiReason: 'This question helps you understand core programming concepts clearly',
      examRelevance: 'This type of question appears frequently in exams',
      hint: 'Think about how one thing can take many forms',
    },
    {
      id: 2,
      text: 'Compare and contrast arrays and linked lists. When would you use each?',
      skill: 'Analysis & Comparison',
      skillEmoji: '🔍',
      difficulty: 'Medium',
      estimatedTime: '8 min',
      bloomLevel: 'L4',
      aiReason: 'This helps improve your analysis skills by comparing different approaches',
      examRelevance: 'Comparison questions test your deeper understanding',
      hint: 'Think about speed vs flexibility',
    },
    {
      id: 3,
      text: 'Design a simple class structure for a library management system.',
      skill: 'Creative Design',
      skillEmoji: '🚀',
      difficulty: 'Hard',
      estimatedTime: '12 min',
      bloomLevel: 'L6',
      aiReason: 'This challenges you to create solutions from scratch',
      examRelevance: 'Design questions show your mastery of concepts',
      hint: 'Start with the main entities: books, members, transactions',
    },
    {
      id: 4,
      text: 'What are the four pillars of object-oriented programming?',
      skill: 'Recalling Facts',
      skillEmoji: '🎯',
      difficulty: 'Easy',
      estimatedTime: '3 min',
      bloomLevel: 'L1',
      aiReason: 'Building a strong foundation with core concepts',
      examRelevance: 'Foundational knowledge is essential',
      hint: 'Think about encapsulation, inheritance...',
    },
    {
      id: 5,
      text: 'Apply binary search to find a value in a sorted array. Show your steps.',
      skill: 'Problem Solving',
      skillEmoji: '⚙️',
      difficulty: 'Medium',
      estimatedTime: '10 min',
      bloomLevel: 'L3',
      aiReason: 'Practicing algorithmic thinking step-by-step',
      examRelevance: 'Common exam pattern - apply learned algorithms',
      hint: 'Divide and conquer',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'hard':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleMarkComplete = (id: number) => {
    setAnsweredQuestions(prev => new Set([...prev, id]));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Practice & Improve
          </h1>
          <p className="text-gray-600">
            Adaptive questions selected just for you • Practice at your own pace
          </p>
        </div>

        {/* AI Guidance Banner */}
        <Card className="mb-6 bg-gradient-to-r from-indigo-50 via-violet-50 to-pink-50 border-2 border-indigo-200">
          <CardContent className="py-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  AI Selected These Questions For You
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Personalized
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Based on your progress, these questions will help you strengthen analysis skills and prepare for exams.
                </p>
                {whyViewEnabled && (
                  <div className="text-xs text-indigo-700 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    AI noticed you need more practice with analysis-level questions (Bloom Level 4). Don&apos;t worry - we&apos;ll build up gradually!
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Today&apos;s Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-600">Questions Completed</span>
              <span className="font-semibold text-indigo-600">
                {answeredQuestions.size}/{practiceQuestions.length}
              </span>
            </div>
            <Progress value={(answeredQuestions.size / practiceQuestions.length) * 100} className="h-2.5" />
            <p className="text-xs text-gray-500 mt-2">
              Great start! Keep going to build your skills 💪
            </p>
          </CardContent>
        </Card>

        {/* Practice Questions */}
        <div className="space-y-4">
          <TooltipProvider>
            {practiceQuestions.map((question) => {
              const isCompleted = answeredQuestions.has(question.id);
              const isSelected = selectedQuestion === question.id;

              return (
                <Card
                  key={question.id}
                  className={`transition-all ${
                    isCompleted
                      ? 'bg-green-50 border-green-200'
                      : isSelected
                      ? 'ring-2 ring-indigo-400 shadow-lg'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${
                        isCompleted
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                          : 'bg-gradient-to-br from-indigo-500 to-violet-500'
                      } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-white text-lg">{question.skillEmoji}</span>
                        )}
                      </div>

                      <div className="flex-1">
                        {/* Question Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                                {question.skill}
                              </Badge>
                              <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                                {question.difficulty}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {question.estimatedTime}
                              </Badge>
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-2">
                              {question.text}
                            </p>
                          </div>
                        </div>

                        {/* WHY View - Student Mode */}
                        {whyViewEnabled && !isCompleted && (
                          <div className="mb-3 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-xs font-medium text-indigo-900 mb-1">
                                    Why This Question?
                                  </div>
                                  <p className="text-xs text-indigo-700">{question.aiReason}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-xs font-medium text-violet-900 mb-1">
                                    Exam Relevance
                                  </div>
                                  <p className="text-xs text-violet-700">{question.examRelevance}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Show hint if selected */}
                        {isSelected && !isCompleted && (
                          <div className="mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-start gap-2">
                              <Sparkles className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-xs font-medium text-yellow-900 mb-1">
                                  Helpful Hint
                                </div>
                                <p className="text-xs text-yellow-700">{question.hint}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-2">
                          {!isCompleted ? (
                            <>
                              <Button
                                size="sm"
                                variant={isSelected ? 'default' : 'outline'}
                                onClick={() => setSelectedQuestion(isSelected ? null : question.id)}
                                className={isSelected ? 'bg-gradient-to-r from-indigo-600 to-violet-600' : ''}
                              >
                                {isSelected ? 'Hide' : 'Start Practicing'}
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                              {isSelected && (
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700"
                                  onClick={() => handleMarkComplete(question.id)}
                                >
                                  <CheckCircle2 className="w-4 h-4 mr-1" />
                                  Mark Complete
                                </Button>
                              )}
                            </>
                          ) : (
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Completed! Great job!
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Encouragement Card */}
        {answeredQuestions.size > 0 && (
          <Card className="mt-6 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200">
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 mb-1">
                    Amazing Progress! 🎉
                  </div>
                  <p className="text-sm text-gray-600">
                    You&apos;ve completed {answeredQuestions.size} {answeredQuestions.size === 1 ? 'question' : 'questions'} today. 
                    {answeredQuestions.size === practiceQuestions.length 
                      ? ' You finished all questions - you&apos;re a star! ⭐' 
                      : ' Keep going to strengthen your skills!'}
                  </p>
                </div>
                {answeredQuestions.size === practiceQuestions.length && (
                  <Button
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                    onClick={() => setAnsweredQuestions(new Set())}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Practice More
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
