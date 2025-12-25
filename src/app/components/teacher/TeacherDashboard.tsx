import { Target, TrendingUp, BarChart3, Brain, FileText, AlertCircle, Sparkles, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { BloomsPyramidChart } from './BloomsPyramidChart';
import { OutcomeCoverageHeatmap } from './OutcomeCoverageHeatmap';
import { TopicDistributionChart } from './TopicDistributionChart';
import { RecentActivity } from './RecentActivity';
import { OutcomeDriftCompass } from '../shared/OutcomeDriftCompass';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface TeacherDashboardProps {
  whyViewEnabled?: boolean;
}

export function TeacherDashboard({ whyViewEnabled }: TeacherDashboardProps) {
  const metrics = [
    {
      title: 'CO Coverage',
      value: '87%',
      change: '+12%',
      icon: Target,
      color: 'text-blue-600',
      bgGradient: 'from-blue-500 to-cyan-500',
      status: 'good',
      aiConfidence: 94,
      explanation: 'AI detected 87% coverage across all Course Outcomes with high confidence based on question bank analysis',
    },
    {
      title: 'Bloom Balance',
      value: 'Balanced',
      change: 'Optimal',
      icon: Brain,
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-500',
      status: 'good',
      aiConfidence: 91,
      explanation: 'Question distribution across Bloom levels is optimal for comprehensive assessment',
    },
    {
      title: 'Difficulty Balance',
      value: '72%',
      change: '+5%',
      icon: BarChart3,
      color: 'text-amber-600',
      bgGradient: 'from-amber-500 to-orange-500',
      status: 'warning',
      aiConfidence: 88,
      explanation: 'Difficulty distribution needs adjustment - consider adding more hard-level questions',
    },
    {
      title: 'AI Confidence',
      value: '94%',
      change: 'High',
      icon: Sparkles,
      color: 'text-indigo-600',
      bgGradient: 'from-indigo-500 to-violet-500',
      status: 'good',
      aiConfidence: 94,
      explanation: 'Overall AI analysis confidence is high based on comprehensive data analysis',
    },
  ];

  const recentQuestions = [
    { id: 1, text: 'Explain the concept of polymorphism...', co: 'CO3', bloom: 'L2', difficulty: 'Medium' },
    { id: 2, text: 'Design a relational database schema for...', co: 'CO5', bloom: 'L4', difficulty: 'Hard' },
    { id: 3, text: 'List the key features of object-oriented...', co: 'CO1', bloom: 'L1', difficulty: 'Easy' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Teacher Dashboard
            </h1>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 border border-indigo-200">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">AI-Powered</span>
            </div>
          </div>
          <p className="text-gray-600">
            Real-time outcome alignment and quality metrics with explainable AI insights
          </p>
        </div>

        {/* Metrics Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Card className={`hover:shadow-xl transition-all duration-300 border-t-4 ${
                    whyViewEnabled ? 'ring-2 ring-indigo-200 shadow-lg shadow-indigo-100' : ''
                  }`}
                  style={{
                    borderTopColor: metric.status === 'good' ? '#10B981' : 
                                   metric.status === 'warning' ? '#F59E0B' : '#EF4444'
                  }}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600">
                          {metric.title}
                        </CardTitle>
                        <div className={`w-12 h-12 bg-gradient-to-br ${metric.bgGradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2 flex items-baseline gap-2">
                        <div className="text-3xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                          {metric.value}
                        </div>
                        {whyViewEnabled && (
                          <Zap className="w-4 h-4 text-indigo-500 animate-pulse" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          className={metric.status === 'good' 
                            ? 'bg-green-100 text-green-700 border-green-200' 
                            : 'bg-amber-100 text-amber-700 border-amber-200'}
                        >
                          {metric.change}
                        </Badge>
                        <span className="text-xs text-gray-500">vs last month</span>
                      </div>
                      {whyViewEnabled && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3 h-3 text-indigo-500" />
                            <span className="text-xs font-medium text-indigo-600">AI Confidence</span>
                          </div>
                          <Progress value={metric.aiConfidence} className="h-1.5" />
                          <span className="text-xs text-gray-500 mt-1">{metric.aiConfidence}%</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                {whyViewEnabled && (
                  <TooltipContent className="max-w-xs bg-indigo-900 text-white border-indigo-700">
                    <p className="text-xs">{metric.explanation}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <BloomsPyramidChart />
          <OutcomeCoverageHeatmap />
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <TopicDistributionChart />
          <OutcomeDriftCompass driftLevel="stable" deviation={12} />
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <RecentActivity questions={recentQuestions} />
        </div>

        {/* Alerts */}
        <Card className="border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50/50 to-transparent hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  AI Recommendations
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Auto-Generated
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Based on comprehensive question bank analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-amber-100 hover:border-amber-300 transition-colors">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm flex items-center gap-2">
                    CO4 needs more coverage
                    {whyViewEnabled && (
                      <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                        AI Detected
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Only 45% of CO4 is covered. Consider generating more questions.
                  </div>
                  {whyViewEnabled && (
                    <div className="text-xs text-indigo-600 mt-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      AI analyzed 156 questions and found insufficient CO4 alignment
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-amber-100 hover:border-amber-300 transition-colors">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm flex items-center gap-2">
                    Low L5-L6 Bloom levels
                    {whyViewEnabled && (
                      <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                        AI Detected
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Only 15% questions at Evaluate/Create level. Add more higher-order thinking questions.
                  </div>
                  {whyViewEnabled && (
                    <div className="text-xs text-indigo-600 mt-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Bloom distribution analysis shows imbalance towards lower cognitive levels
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}