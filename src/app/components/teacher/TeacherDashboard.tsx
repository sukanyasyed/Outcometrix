import { Target, TrendingUp, BarChart3, Brain, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { BloomsPyramidChart } from './BloomsPyramidChart';
import { OutcomeCoverageHeatmap } from './OutcomeCoverageHeatmap';
import { TopicDistributionChart } from './TopicDistributionChart';
import { RecentActivity } from './RecentActivity';

export function TeacherDashboard() {
  const metrics = [
    {
      title: 'CO Coverage',
      value: '87%',
      change: '+12%',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      status: 'good',
    },
    {
      title: 'Bloom Balance',
      value: 'Balanced',
      change: 'Optimal',
      icon: Brain,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      status: 'good',
    },
    {
      title: 'Difficulty Balance',
      value: '72%',
      change: '+5%',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      status: 'warning',
    },
    {
      title: 'AI Confidence',
      value: '94%',
      change: 'High',
      icon: TrendingUp,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      status: 'good',
    },
  ];

  const recentQuestions = [
    { id: 1, text: 'Explain the concept of polymorphism...', co: 'CO3', bloom: 'L2', difficulty: 'Medium' },
    { id: 2, text: 'Design a relational database schema for...', co: 'CO5', bloom: 'L4', difficulty: 'Hard' },
    { id: 3, text: 'List the key features of object-oriented...', co: 'CO1', bloom: 'L1', difficulty: 'Easy' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Teacher Dashboard</h1>
          <p className="text-gray-600">
            Overview of your question bank quality and outcome alignment
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {metric.title}
                  </CardTitle>
                  <div className={`w-10 h-10 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold mb-1">{metric.value}</div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={metric.status === 'good' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <BloomsPyramidChart />
          <OutcomeCoverageHeatmap />
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <TopicDistributionChart />
          <RecentActivity questions={recentQuestions} />
        </div>

        {/* Alerts */}
        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>
                  Based on your current question bank analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-sm">CO4 needs more coverage</div>
                  <div className="text-sm text-gray-600">
                    Only 45% of CO4 is covered. Consider generating more questions.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-sm">Low L5-L6 Bloom levels</div>
                  <div className="text-sm text-gray-600">
                    Only 15% questions at Evaluate/Create level. Add more higher-order thinking questions.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
