import { Lightbulb, TrendingUp, AlertCircle, Sparkles, Heart, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface StudentFeedbackCardProps {
  whyViewEnabled?: boolean;
}

export function StudentFeedbackCard({ whyViewEnabled }: StudentFeedbackCardProps) {
  const feedback = [
    {
      icon: TrendingUp,
      type: 'strength',
      title: 'You&apos;re Strong in Recall & Understanding! 🌟',
      message: 'You excel at remembering concepts and understanding ideas. This is a solid foundation!',
      action: 'Keep building on this strength',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200',
    },
    {
      icon: Heart,
      type: 'improvement',
      title: 'Let&apos;s Work on Analysis Together',
      message: 'Breaking down complex problems takes practice. Try a few more analysis questions this week.',
      action: 'Practice 5 analysis questions',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
    },
    {
      icon: Lightbulb,
      type: 'suggestion',
      title: 'Ready for a Challenge?',
      message: 'Try some creative problem-solving questions to push your skills to the next level.',
      action: 'Explore creative tasks',
      color: 'text-violet-600',
      bgColor: 'bg-violet-100',
      borderColor: 'border-violet-200',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          Your Learning Insights
        </CardTitle>
        <CardDescription>
          Personalized, encouraging feedback just for you
        </CardDescription>
        {whyViewEnabled && (
          <Badge variant="outline" className="w-fit bg-indigo-50 text-indigo-700 border-indigo-200">
            <Info className="w-3 h-3 mr-1" />
            AI-generated, pressure-free guidance
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {feedback.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-2 ${item.borderColor} ${item.bgColor} hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1 text-gray-900">{item.title}</div>
                  <p className="text-sm text-gray-700 mb-2">{item.message}</p>
                  <div className="text-xs font-medium text-gray-600 flex items-center gap-1">
                    <span className="opacity-70">💡</span>
                    {item.action}
                  </div>
                  {whyViewEnabled && (
                    <div className="mt-2 pt-2 border-t border-gray-300/50">
                      <div className="text-xs text-gray-600 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        This insight is based on your recent practice patterns
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <p className="text-xs text-gray-700 text-center">
            <strong>Remember:</strong> Learning is a journey, not a race. Every question you practice makes you stronger! 💪
          </p>
        </div>
      </CardContent>
    </Card>
  );
}