import { CheckCircle, AlertTriangle, XCircle, TrendingUp, Sparkles, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';

export function AuditSummary() {
  const summary = {
    totalQuestions: 45,
    pass: 28,
    warning: 12,
    fail: 5,
    overallScore: 72,
    aiConfidence: 96,
  };

  const metrics = [
    { label: 'CO Coverage', value: 78, status: 'warning' as const },
    { label: 'Bloom Balance', value: 85, status: 'pass' as const },
    { label: 'Difficulty Distribution', value: 65, status: 'warning' as const },
    { label: 'Question Quality', value: 92, status: 'pass' as const },
  ];

  const getStatusColor = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass': return { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' };
      case 'warning': return { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-100' };
      case 'fail': return { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-100' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Score - Traffic Light Design */}
      <Card className="border-t-4 border-t-indigo-500 shadow-xl bg-gradient-to-br from-white to-indigo-50/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-indigo-600" />
              Overall Assessment Score
            </CardTitle>
            <Badge className="bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 border-indigo-200">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Confidence: {summary.aiConfidence}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Overall Quality</span>
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {summary.overallScore}%
              </span>
            </div>
            <div className="relative">
              <Progress value={summary.overallScore} className="h-3" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-amber-500 to-red-500 rounded-full opacity-20 pointer-events-none"></div>
            </div>
          </div>

          {/* Traffic Light Summary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-green-200">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-1">{summary.pass}</div>
                <div className="text-sm font-medium text-green-700">Pass</div>
                <div className="absolute inset-0 bg-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-amber-200">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-1">{summary.warning}</div>
                <div className="text-sm font-medium text-amber-700">Warning</div>
                <div className="absolute inset-0 bg-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-red-200">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-1">{summary.fail}</div>
                <div className="text-sm font-medium text-red-700">Fail</div>
                <div className="absolute inset-0 bg-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Quality Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {metrics.map((metric, index) => {
            const colors = getStatusColor(metric.status);
            return (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold ${colors.text}`}>{metric.value}%</span>
                    <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center`}>
                      {metric.status === 'pass' ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Progress
                    value={metric.value}
                    className={`h-2.5 ${colors.light}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"></div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}