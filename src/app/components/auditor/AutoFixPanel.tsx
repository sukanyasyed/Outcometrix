import { Wand2, CheckCircle } from 'lucide-react';
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
    },
    {
      id: '2',
      title: 'Add 4 questions for CO6',
      description: 'Generate questions on Web Security concepts',
      autoFixable: true,
    },
    {
      id: '3',
      title: 'Replace redundant questions',
      description: 'Remove Q15 and Q18, keep Q12 with modifications',
      autoFixable: true,
    },
    {
      id: '4',
      title: 'Increase L4-L6 questions',
      description: 'Convert 8 L1-L2 questions to higher-order thinking',
      autoFixable: true,
    },
    {
      id: '5',
      title: 'Add context to rote questions',
      description: 'Enhance 15 questions with scenario-based elements',
      autoFixable: false,
    },
  ];

  const handleAutoFix = () => {
    toast.success('Auto-fix applied successfully! Review the changes below.');
  };

  const handleFixAll = () => {
    toast.success('All auto-fixable issues resolved! Download the improved question paper.');
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-purple-600" />
          <CardTitle>Suggested Improvements</CardTitle>
        </div>
        <CardDescription>
          AI-powered fixes for detected issues
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start gap-2 mb-2">
              {suggestion.autoFixable ? (
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-1">{suggestion.title}</div>
                <p className="text-xs text-gray-600 mb-2">{suggestion.description}</p>
                {suggestion.autoFixable && (
                  <Badge variant="outline" className="text-xs">
                    Auto-fixable
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 space-y-2">
          <Button className="w-full" onClick={handleFixAll}>
            <Wand2 className="w-4 h-4 mr-2" />
            Fix All Automatically
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Manual review required for 1 suggestion
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
