import { Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function StudentFeedbackCard() {
  const feedback = [
    {
      icon: TrendingUp,
      type: 'strength',
      title: 'Strong Foundation',
      message: 'You excel at basic concepts and understanding. Keep it up!',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: AlertCircle,
      type: 'improvement',
      title: 'Analysis Skills Need Work',
      message: 'Practice more questions that require breaking down complex problems.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Lightbulb,
      type: 'suggestion',
      title: 'Try Creative Questions',
      message: 'Challenge yourself with design and creation tasks to reach the next level.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {feedback.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <div className="font-medium text-sm mb-1">{item.title}</div>
                <p className="text-sm text-gray-600">{item.message}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
