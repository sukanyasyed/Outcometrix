import { BookOpen, TrendingUp, Target, Sparkles, Award, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { SkillDistributionChart } from './SkillDistributionChart';
import { PracticeQuestionList } from './PracticeQuestionList';
import { StudentFeedbackCard } from './StudentFeedbackCard';

export function StudentDashboard() {
  const skillLevels = [
    { skill: 'Remember', progress: 85, status: 'good', emoji: '🎯' },
    { skill: 'Understand', progress: 72, status: 'good', emoji: '💡' },
    { skill: 'Apply', progress: 68, status: 'warning', emoji: '⚙️' },
    { skill: 'Analyze', progress: 45, status: 'warning', emoji: '🔍' },
    { skill: 'Evaluate', progress: 32, status: 'needs-work', emoji: '⚖️' },
    { skill: 'Create', progress: 28, status: 'needs-work', emoji: '🚀' },
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

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white border-0 shadow-2xl shadow-indigo-200">
          <CardContent className="py-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-white">Welcome back, Student!</h1>
            </div>
            <p className="text-xl text-white/90 mb-4">
              Track your learning progress and practice with AI-powered questions
            </p>
            <div className="flex gap-3">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                <Award className="w-3 h-3 mr-1" />
                5 Day Streak 🔥
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                Level 12
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-xl transition-all border-t-4 border-t-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Overall Progress
                </CardTitle>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                65%
              </div>
              <Progress value={65} className="mb-3 h-2" />
              <p className="text-xs text-gray-500">Across all skill levels</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-t-4 border-t-violet-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Questions Practiced
                </CardTitle>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                127
              </div>
              <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
                <Sparkles className="w-3 h-3 mr-1" />
                +15 this week
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all border-t-4 border-t-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Focus Area
                </CardTitle>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold mb-1 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Analysis Skills
              </div>
              <div className="flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-orange-500" />
                <p className="text-xs text-gray-600 font-medium">Let&apos;s improve together!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Progress */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-violet-50">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Your Skill Levels
            </CardTitle>
            <CardDescription>
              Progress across different thinking skills
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            {skillLevels.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.emoji}</span>
                    <div>
                      <span className="text-sm font-semibold text-gray-800">{skill.skill}</span>
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

        {/* Charts and Practice */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <SkillDistributionChart />
          <StudentFeedbackCard />
        </div>

        {/* Practice Questions */}
        <PracticeQuestionList />
      </div>
    </div>
  );
}