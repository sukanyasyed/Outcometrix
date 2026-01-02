import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import {
  TrendingUp,
  Calendar,
  Target,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  BookOpen,
  Brain,
  Heart,
  Zap,
  MessageCircle,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';

export function StudentProgress() {
  const [reflection, setReflection] = useState('');
  const [showReflection, setShowReflection] = useState(false);

  const weeklyProgress = [
    { week: 'Week 1', questionsAnswered: 12, accuracy: 65, focus: 'Remember' },
    { week: 'Week 2', questionsAnswered: 18, accuracy: 72, focus: 'Understand' },
    { week: 'Week 3', questionsAnswered: 22, accuracy: 78, focus: 'Apply' },
    { week: 'Week 4', questionsAnswered: 27, accuracy: 82, focus: 'Apply & Analyze' },
    { week: 'This Week', questionsAnswered: 15, accuracy: 75, focus: 'Analyze', isCurrent: true },
  ];

  const examReadiness = [
    { 
      topic: 'Basic Concepts', 
      readiness: 92, 
      status: 'ready',
      description: 'You&apos;re well-prepared!',
      questionsNeeded: 0
    },
    { 
      topic: 'Problem Solving', 
      readiness: 78, 
      status: 'almost-ready',
      description: 'Almost there!',
      questionsNeeded: 3
    },
    { 
      topic: 'Analysis', 
      readiness: 65, 
      status: 'needs-practice',
      description: 'Keep practicing',
      questionsNeeded: 8
    },
    { 
      topic: 'Creative Design', 
      readiness: 45, 
      status: 'needs-practice',
      description: 'More practice needed',
      questionsNeeded: 12
    },
  ];

  const learningPath = [
    {
      phase: 'Learn',
      icon: BookOpen,
      status: 'completed',
      description: 'Understand core concepts',
      completedDate: '2 weeks ago',
    },
    {
      phase: 'Practice',
      icon: Target,
      status: 'current',
      description: 'Apply knowledge through exercises',
      completedDate: 'In progress',
    },
    {
      phase: 'Reflect',
      icon: MessageCircle,
      status: 'upcoming',
      description: 'Think about what you learned',
      completedDate: 'Coming soon',
    },
    {
      phase: 'Improve',
      icon: TrendingUp,
      status: 'upcoming',
      description: 'Build on your strengths',
      completedDate: 'Next step',
    },
  ];

  const getReadinessColor = (status: string) => {
    switch (status) {
      case 'ready':
        return { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-50', border: 'border-green-200' };
      case 'almost-ready':
        return { bg: 'bg-blue-500', text: 'text-blue-700', light: 'bg-blue-50', border: 'border-blue-200' };
      default:
        return { bg: 'bg-amber-500', text: 'text-amber-700', light: 'bg-amber-50', border: 'border-amber-200' };
    }
  };

  const getReadinessLabel = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Ready ✅';
      case 'almost-ready':
        return 'Almost Ready 📈';
      default:
        return 'Keep Practicing 🎯';
    }
  };

  const handleReflectionSubmit = () => {
    // In a real app, this would save the reflection
    alert('Thank you for sharing your thoughts! Your reflection helps us understand your learning journey better. 💙');
    setReflection('');
    setShowReflection(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Your Learning Progress
          </h1>
          <p className="text-gray-600">
            Track your growth, celebrate achievements, and plan your next steps
          </p>
        </div>

        {/* Learning Path Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Your Learning Journey
            </CardTitle>
            <CardDescription>
              Learn → Practice → Reflect → Improve
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {learningPath.map((phase, index) => {
                const Icon = phase.icon;
                const isCompleted = phase.status === 'completed';
                const isCurrent = phase.status === 'current';

                return (
                  <div
                    key={phase.phase}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      isCompleted
                        ? 'bg-green-50 border-green-200'
                        : isCurrent
                        ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                          isCompleted
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                            : isCurrent
                            ? 'bg-gradient-to-br from-indigo-500 to-violet-500 animate-pulse'
                            : 'bg-gray-300'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">{phase.phase}</div>
                      <div className="text-xs text-gray-600 mb-2">{phase.description}</div>
                      <Badge
                        className={`text-xs ${
                          isCompleted
                            ? 'bg-green-100 text-green-700'
                            : isCurrent
                            ? 'bg-indigo-100 text-indigo-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {phase.completedDate}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-indigo-700">
                  <strong>You&apos;re in the Practice phase!</strong> The AI is recommending questions to help you apply what you&apos;ve learned. 
                  When you&apos;re ready, we&apos;ll move to Reflection together.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exam Readiness */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              Exam Readiness Meter
            </CardTitle>
            <CardDescription>
              How prepared you are for assessments in each topic
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {examReadiness.map((topic) => {
              const colors = getReadinessColor(topic.status);

              return (
                <div key={topic.topic} className={`p-4 rounded-lg border-2 ${colors.border} ${colors.light}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{topic.topic}</div>
                      <p className="text-sm text-gray-600">{topic.description}</p>
                    </div>
                    <Badge className={`${colors.bg} text-white border-0`}>
                      {getReadinessLabel(topic.status)}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Readiness</span>
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {topic.readiness}%
                      </span>
                    </div>
                    <Progress value={topic.readiness} className="h-2.5" />
                  </div>
                  {topic.questionsNeeded > 0 && (
                    <div className="text-xs text-gray-600 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-500" />
                      Practice {topic.questionsNeeded} more {topic.questionsNeeded === 1 ? 'question' : 'questions'} to feel fully ready
                    </div>
                  )}
                  {topic.questionsNeeded === 0 && (
                    <div className="text-xs text-green-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      You&apos;re ready for this topic! Great job! 🎉
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Weekly Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              Weekly Progress Timeline
            </CardTitle>
            <CardDescription>
              See how you&apos;ve grown over the past weeks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyProgress.map((week, index) => (
                <div
                  key={week.week}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    week.isCurrent
                      ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200'
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          week.isCurrent
                            ? 'bg-gradient-to-br from-indigo-500 to-violet-500'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{week.week}</div>
                        <div className="text-sm text-gray-600">Focus: {week.focus}</div>
                      </div>
                    </div>
                    {week.isCurrent && (
                      <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                        <Clock className="w-3 h-3 mr-1" />
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Questions Answered</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {week.questionsAnswered}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Understanding</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {week.accuracy}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">You&apos;re Growing! 🌱</div>
                  <p className="text-sm text-gray-700">
                    Your understanding has improved by <strong>17%</strong> over the past month. 
                    You&apos;re also answering <strong>more challenging questions</strong>. Keep up the amazing work!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Mode */}
        <Card className="mb-8 bg-gradient-to-r from-violet-50 via-purple-50 to-pink-50 border-2 border-violet-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-violet-600" />
              Reflection Time
            </CardTitle>
            <CardDescription>
              Share your thoughts about your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showReflection ? (
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  Taking a moment to reflect helps you understand what&apos;s working well and what you can improve. 
                  It&apos;s a powerful learning tool! 🤔
                </p>
                <Button
                  onClick={() => setShowReflection(true)}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Start Reflecting
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-violet-200">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      💭 What part was most challenging for you this week?
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-violet-200">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      💪 Which strategy helped you the most?
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-violet-200">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      ⭐ What are you most proud of?
                    </div>
                  </div>
                </div>

                <Textarea
                  placeholder="Share your thoughts here... (This is private and helps us understand your learning better)"
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  className="min-h-[120px] bg-white"
                />

                <div className="flex gap-2">
                  <Button
                    onClick={handleReflectionSubmit}
                    disabled={!reflection.trim()}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Submit Reflection
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowReflection(false);
                      setReflection('');
                    }}
                  >
                    Cancel
                  </Button>
                </div>

                <div className="text-xs text-violet-700 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Your reflections are private and used only to improve your learning experience
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              Your Achievements
            </CardTitle>
            <CardDescription>
              Celebrate your milestones and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border-2 border-green-200 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="font-semibold text-gray-900 mb-1">Week Warrior</div>
                <div className="text-xs text-gray-600">7-day practice streak</div>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-blue-200 text-center">
                <div className="text-4xl mb-2">💪</div>
                <div className="font-semibold text-gray-900 mb-1">Strong Foundation</div>
                <div className="text-xs text-gray-600">Mastered basic skills</div>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-violet-200 text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-semibold text-gray-900 mb-1">Progress Star</div>
                <div className="text-xs text-gray-600">17% improvement</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/60 rounded-lg text-center">
              <p className="text-xs text-gray-600">
                <strong>Next milestone:</strong> Complete 100 practice questions to unlock "Century Achiever" badge 🎯
              </p>
              <Progress value={75} className="mt-2 h-2" />
              <p className="text-xs text-gray-500 mt-1">75/100 questions</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
