import { BookOpen, TrendingUp, Target, Sparkles, Award, Rocket, Heart, Zap, Trophy, Flame, Star, ChevronRight, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { SkillDistributionChart } from './SkillDistributionChart';
import { StudentFeedbackCard } from './StudentFeedbackCard';
import { BloomMasteryRing } from './BloomMasteryRing';
import { OutcomeCoverageMeter } from './OutcomeCoverageMeter';
import { LearningStreak } from './LearningStreak';
import type { Page } from '../../App';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface StudentDashboardProps {
  whyViewEnabled?: boolean;
  onNavigate: (page: Page) => void;
}

export function StudentDashboard({ whyViewEnabled, onNavigate }: StudentDashboardProps) {
  const skillLevels = [
    { skill: 'Remember', progress: 85, status: 'good', emoji: '🎯', bloomLevel: 'L1' },
    { skill: 'Understand', progress: 72, status: 'good', emoji: '💡', bloomLevel: 'L2' },
    { skill: 'Apply', progress: 68, status: 'warning', emoji: '⚙️', bloomLevel: 'L3' },
    { skill: 'Analyze', progress: 45, status: 'warning', emoji: '🔍', bloomLevel: 'L4' },
    { skill: 'Evaluate', progress: 32, status: 'needs-work', emoji: '⚖️', bloomLevel: 'L5' },
    { skill: 'Create', progress: 28, status: 'needs-work', emoji: '🚀', bloomLevel: 'L6' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-amber-500';
      default:
        return 'bg-orange-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'good':
        return 'Excellent!';
      case 'warning':
        return 'Good Progress';
      default:
        return 'Keep Going!';
    }
  };

  const readinessScore = 72;
  const confidenceLevel = 'Medium';
  const currentStreak = 5;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Statement Banner */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 border-2 border-indigo-200">
          <CardContent className="py-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  AI Supports Your Learning, Not Grading
                  {whyViewEnabled && (
                    <Badge variant="outline" className="bg-indigo-100 text-indigo-700 border-indigo-300">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Transparent AI
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Our AI helps you understand your strengths, practice effectively, and improve at your own pace. No hidden scoring, no pressure.
                </p>
                {whyViewEnabled && (
                  <div className="mt-2 text-xs text-indigo-700 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    All recommendations are based on your practice patterns, not comparisons with others
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white border-0 shadow-2xl shadow-indigo-200 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <CardContent className="py-10 relative z-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h1 className="text-white">Welcome back, Student!</h1>
                </div>
                <p className="text-xl text-white/90 mb-4">
                  Ready to practice and improve your skills today?
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    <Flame className="w-3 h-3 mr-1" />
                    {currentStreak} Day Streak 🔥
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    <Trophy className="w-3 h-3 mr-1" />
                    Level 12
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    <Star className="w-3 h-3 mr-1" />
                    127 Questions Practiced
                  </Badge>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 shadow-xl"
                onClick={() => onNavigate('practice')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Practicing
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Skill Readiness Score */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-xl transition-all border-t-4 border-t-blue-500 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-gray-600">
                        Skill Readiness
                      </CardTitle>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {readinessScore}%
                    </div>
                    <Progress value={readinessScore} className="mb-3 h-2" />
                    <p className="text-xs text-gray-500">Overall learning readiness</p>
                    {whyViewEnabled && (
                      <div className="mt-2 text-xs text-indigo-600 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Based on your mastery across all skills
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TooltipTrigger>
              {whyViewEnabled && (
                <TooltipContent className="max-w-xs bg-blue-900 text-white border-blue-700">
                  <p className="text-xs">This score shows how ready you are based on your practice patterns and skill mastery. It helps you know when you're prepared for assessments.</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          {/* Confidence Indicator */}
          <Card className="hover:shadow-xl transition-all border-t-4 border-t-violet-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Confidence Level
                </CardTitle>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {confidenceLevel}
              </div>
              <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
                <Sparkles className="w-3 h-3 mr-1" />
                Growing Stronger
              </Badge>
              <p className="text-xs text-gray-500 mt-2">How confident you feel</p>
            </CardContent>
          </Card>

          {/* Focus Area */}
          <Card className="hover:shadow-xl transition-all border-t-4 border-t-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Next Focus Area
                </CardTitle>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold mb-1 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Analysis Skills
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                <Rocket className="w-4 h-4 text-orange-500" />
                <p className="text-xs text-gray-600 font-medium">Let&apos;s practice together!</p>
              </div>
              <Button 
                size="sm" 
                className="w-full mt-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
                onClick={() => onNavigate('practice')}
              >
                Practice Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bloom Mastery & Outcome Coverage */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <BloomMasteryRing whyViewEnabled={whyViewEnabled} />
          <OutcomeCoverageMeter whyViewEnabled={whyViewEnabled} />
        </div>

        {/* Learning Streak */}
        <div className="mb-8">
          <LearningStreak currentStreak={currentStreak} />
        </div>

        {/* Skill Progress */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-violet-50">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Your Thinking Skills
            </CardTitle>
            <CardDescription>
              Progress across different levels of thinking • No competition, just growth
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            {skillLevels.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-800">{skill.skill}</span>
                        <Badge variant="outline" className="text-xs">{skill.bloomLevel}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(skill.status)} animate-pulse`} />
                        <span className="text-xs text-gray-500">{getStatusLabel(skill.status)}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{skill.progress}%</span>
                </div>
                <div className="relative">
                  <Progress value={skill.progress} className="h-3" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Charts and Feedback */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <SkillDistributionChart />
          <StudentFeedbackCard whyViewEnabled={whyViewEnabled} />
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-indigo-50 via-violet-50 to-pink-50 border-2 border-indigo-100">
          <CardContent className="py-6">
            <h3 className="mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600" />
              Ready to Learn More?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all"
                onClick={() => onNavigate('practice')}
              >
                <BookOpen className="w-8 h-8 text-indigo-600" />
                <div className="text-center">
                  <div className="font-semibold">Practice Questions</div>
                  <div className="text-xs text-gray-500">Adaptive learning</div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all"
                onClick={() => onNavigate('skill-map')}
              >
                <Target className="w-8 h-8 text-violet-600" />
                <div className="text-center">
                  <div className="font-semibold">Skill Map</div>
                  <div className="text-xs text-gray-500">See your journey</div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-md transition-all"
                onClick={() => onNavigate('progress')}
              >
                <TrendingUp className="w-8 h-8 text-pink-600" />
                <div className="text-center">
                  <div className="font-semibold">View Progress</div>
                  <div className="text-xs text-gray-500">Track growth</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
