import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Target, CheckCircle2, AlertCircle, Sparkles, Info } from 'lucide-react';

interface OutcomeCoverageMeterProps {
  whyViewEnabled?: boolean;
}

export function OutcomeCoverageMeter({ whyViewEnabled }: OutcomeCoverageMeterProps) {
  const outcomes = [
    { 
      id: 'skill-1', 
      name: 'Basic Concepts', 
      description: 'Understanding fundamental ideas',
      coverage: 92, 
      status: 'mastered',
      questionsAttempted: 23,
      totalQuestions: 25
    },
    { 
      id: 'skill-2', 
      name: 'Problem Solving', 
      description: 'Applying knowledge to solve problems',
      coverage: 78, 
      status: 'good',
      questionsAttempted: 19,
      totalQuestions: 24
    },
    { 
      id: 'skill-3', 
      name: 'Analysis & Design', 
      description: 'Breaking down and creating solutions',
      coverage: 65, 
      status: 'developing',
      questionsAttempted: 13,
      totalQuestions: 20
    },
    { 
      id: 'skill-4', 
      name: 'Critical Thinking', 
      description: 'Evaluating and judging solutions',
      coverage: 45, 
      status: 'needs-practice',
      questionsAttempted: 9,
      totalQuestions: 20
    },
    { 
      id: 'skill-5', 
      name: 'Creative Solutions', 
      description: 'Designing new approaches',
      coverage: 32, 
      status: 'needs-practice',
      questionsAttempted: 6,
      totalQuestions: 19
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mastered':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'good':
        return <CheckCircle2 className="w-4 h-4 text-blue-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mastered':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'good':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'developing':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-orange-100 text-orange-700 border-orange-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'mastered':
        return 'Mastered!';
      case 'good':
        return 'Strong';
      case 'developing':
        return 'Developing';
      default:
        return 'Keep Practicing';
    }
  };

  const overallCoverage = Math.round(
    outcomes.reduce((sum, o) => sum + o.coverage, 0) / outcomes.length
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          Skill Coverage
        </CardTitle>
        <CardDescription>
          What you&apos;ve practiced and learned so far
        </CardDescription>
        {whyViewEnabled && (
          <Badge variant="outline" className="w-fit bg-indigo-50 text-indigo-700 border-indigo-200">
            <Info className="w-3 h-3 mr-1" />
            Tracks your learning journey
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        {/* Overall Coverage */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-lg border border-indigo-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Coverage</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {overallCoverage}%
            </span>
          </div>
          <Progress value={overallCoverage} className="h-2.5" />
          <p className="text-xs text-gray-600 mt-2">
            You&apos;ve practiced across {outcomes.length} key skill areas
          </p>
        </div>

        {/* Individual Outcomes */}
        <div className="space-y-4">
          {outcomes.map((outcome) => (
            <div key={outcome.id} className="group">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getStatusIcon(outcome.status)}
                    <span className="text-sm font-semibold text-gray-800">
                      {outcome.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    {outcome.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className={`text-xs ${getStatusColor(outcome.status)}`}>
                      {getStatusLabel(outcome.status)}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {outcome.questionsAttempted}/{outcome.totalQuestions} questions
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-700">{outcome.coverage}%</span>
                </div>
              </div>
              <div className="relative">
                <Progress value={outcome.coverage} className="h-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"></div>
              </div>
              {whyViewEnabled && outcome.status === 'needs-practice' && (
                <div className="mt-2 text-xs text-indigo-600 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Try practicing a few more questions in this area to improve
                </div>
              )}
            </div>
          ))}
        </div>

        {whyViewEnabled && (
          <div className="mt-6 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-indigo-700">
                These skills represent different learning outcomes from your course. As you practice, you&apos;ll see your coverage grow across all areas.
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
