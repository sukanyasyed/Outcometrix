import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useTopic } from '../../contexts/TopicContext';
import { Badge } from '../ui/badge';
import { Brain } from 'lucide-react';

export function BloomsPyramidChart() {
  const { theme } = useTopic();
  
  const data = [
    { level: 'L1: Remember', questions: 25, target: 20, label: 'Remember' },
    { level: 'L2: Understand', questions: 30, target: 25, label: 'Understand' },
    { level: 'L3: Apply', questions: 22, target: 25, label: 'Apply' },
    { level: 'L4: Analyze', questions: 15, target: 15, label: 'Analyze' },
    { level: 'L5: Evaluate', questions: 6, target: 10, label: 'Evaluate' },
    { level: 'L6: Create', questions: 2, target: 5, label: 'Create' },
  ];
  
  // Calculate balance status
  const getBalanceStatus = () => {
    const totalQuestions = data.reduce((sum, item) => sum + item.questions, 0);
    const higherOrder = data.slice(3).reduce((sum, item) => sum + item.questions, 0);
    const percentage = (higherOrder / totalQuestions) * 100;
    
    if (percentage >= 30) return { status: 'Excellent', color: theme.primaryColor };
    if (percentage >= 20) return { status: 'Good', color: '#10B981' };
    return { status: 'Needs Improvement', color: '#F59E0B' };
  };
  
  const balance = getBalanceStatus();

  return (
    <Card className="border-t-4" style={{ borderTopColor: theme.primaryColor }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" style={{ color: theme.primaryColor }} />
              Bloom&apos;s Taxonomy Distribution
            </CardTitle>
            <CardDescription>
              Cognitive level breakdown of your {theme.name} question bank
            </CardDescription>
          </div>
          <Badge 
            variant="outline"
            className="gap-1.5"
            style={{ 
              borderColor: balance.color + '40',
              backgroundColor: balance.color + '10',
              color: balance.color
            }}
          >
            {balance.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: `2px solid ${theme.primaryColor}40`,
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar 
              dataKey="questions" 
              name="Current" 
              radius={[8, 8, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={
                    index < 2 ? theme.accentColor :
                    index < 4 ? theme.secondaryColor :
                    theme.primaryColor
                  } 
                />
              ))}
            </Bar>
            <Bar 
              dataKey="target" 
              fill="#94a3b8" 
              name="Target"
              opacity={0.5}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100">
          <div className="text-xs text-gray-600">
            <span className="font-semibold" style={{ color: theme.primaryColor }}>
              Higher-Order Thinking (L4-L6):
            </span>
            {' '}23% of questions • Target: 30%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}