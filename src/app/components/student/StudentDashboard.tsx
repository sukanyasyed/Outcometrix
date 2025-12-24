import { BookOpen, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { SkillDistributionChart } from './SkillDistributionChart';
import { PracticeQuestionList } from './PracticeQuestionList';
import { StudentFeedbackCard } from './StudentFeedbackCard';

export function StudentDashboard() {
  const skillLevels = [
    { skill: 'Remember', progress: 85, status: 'good' },
    { skill: 'Understand', progress: 72, status: 'good' },
    { skill: 'Apply', progress: 68, status: 'warning' },
    { skill: 'Analyze', progress: 45, status: 'warning' },
    { skill: 'Evaluate', progress: 32, status: 'needs-work' },
    { skill: 'Create', progress: 28, status: 'needs-work' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-red-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="py-8">
            <h1 className="mb-2 text-white">Welcome back, Student!</h1>
            <p className="text-xl text-white/90">
              Track your learning progress and practice with targeted questions
            </p>
          </CardContent>
        </Card>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Overall Progress
                </CardTitle>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">65%</div>
              <Progress value={65} className="mb-2" />
              <p className="text-xs text-gray-500">Across all skill levels</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Questions Practiced
                </CardTitle>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold mb-1">127</div>
              <Badge className="bg-purple-600">+15 this week</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Focus Area
                </CardTitle>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold mb-1">Analysis Skills</div>
              <p className="text-xs text-gray-500">Needs improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Skill Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Skill Levels</CardTitle>
            <CardDescription>
              Progress across different thinking skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillLevels.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{skill.skill}</span>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(skill.status)}`} />
                  </div>
                  <span className="text-sm font-semibold">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} />
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
