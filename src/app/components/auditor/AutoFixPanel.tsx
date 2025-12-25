import { Wand2, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { toast } from 'sonner';

export function AutoFixPanel() {
  const suggestions = [
    {
      id: '1',
      title: 'Add 6 questions for CO4',
      description: 'Generate questions covering Database Normalization',
      autoFixable: true,
      impact: 'high',
    },
    {
      id: '2',
      title: 'Add 4 questions for CO6',
      description: 'Generate questions on Web Security concepts',
      autoFixable: true,
      impact: 'medium',
    },
    {
      id: '3',
      title: 'Replace redundant questions',
      description: 'Remove Q15 and Q18, keep Q12 with modifications',
      autoFixable: true,
      impact: 'medium',
    },
    {
      id: '4',
      title: 'Increase L4-L6 questions',
      description: 'Convert 8 L1-L2 questions to higher-order thinking',
      autoFixable: true,
      impact: 'high',
    },
    {
      id: '5',
      title: 'Add context to rote questions',
      description: 'Enhance 15 questions with scenario-based elements',
      autoFixable: false,
      impact: 'low',
    },
  ];

  const handleAutoFix = () => {
    toast.success('Auto-fix applied successfully! Review the changes below.');
  };

  const handleFixAll = () => {
    toast.success('All auto-fixable issues resolved! Download the improved question paper.');
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="sticky top-20 border-t-4 border-t-violet-500 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-violet-50 to-pink-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Wand2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              Suggested Improvements
              <Badge className="bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 border-violet-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              Automatic fixes for detected issues
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-6">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={`p-3 rounded-lg border-2 transition-all hover:shadow-md ${
              suggestion.autoFixable
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-300'
                : 'bg-gray-50 border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-2 mb-2">
              {suggestion.autoFixable ? (
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              ) : (
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-sm font-medium text-gray-900">{suggestion.title}</div>
                  <Badge className={`text-xs ${getImpactColor(suggestion.impact)}`}>
                    {suggestion.impact}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-2">{suggestion.description}</p>
                {suggestion.autoFixable && (
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Auto-fixable</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 space-y-3 border-t border-gray-200">
          <Button
            className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-lg shadow-violet-200"
            onClick={handleFixAll}
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Fix All Automatically
          </Button>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>4 auto-fixable</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>1 manual review</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}