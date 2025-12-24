import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

export function AuditSummary() {
  const summary = {
    totalQuestions: 45,
    pass: 28,
    warning: 12,
    fail: 5,
    overallScore: 72,
  };

  const metrics = [
    { label: 'CO Coverage', value: 78, status: 'warning' },
    { label: 'Bloom Balance', value: 85, status: 'pass' },
    { label: 'Difficulty Distribution', value: 65, status: 'warning' },
    { label: 'Question Quality', value: 92, status: 'pass' },
  ];

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card className="border-l-4 border-l-blue-600">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Assessment Score</span>
            <span className="text-3xl font-bold text-blue-600">{summary.overallScore}%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={summary.overallScore} className="mb-4" />
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-semibold">{summary.pass}</span>
              </div>
              <span className="text-sm text-gray-600">Pass</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <span className="text-2xl font-semibold">{summary.warning}</span>
              </div>
              <span className="text-sm text-gray-600">Warning</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-2xl font-semibold">{summary.fail}</span>
              </div>
              <span className="text-sm text-gray-600">Fail</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Quality Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{metric.value}%</span>
                  {metric.status === 'pass' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  )}
                </div>
              </div>
              <Progress
                value={metric.value}
                className={metric.status === 'pass' ? 'bg-green-100' : 'bg-yellow-100'}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
