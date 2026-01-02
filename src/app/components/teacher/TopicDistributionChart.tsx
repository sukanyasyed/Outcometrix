import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useTopic } from '../../contexts/TopicContext';
import { Badge } from '../ui/badge';

export function TopicDistributionChart() {
  const { theme, currentTopic } = useTopic();
  
  // Topic-specific data based on selected topic
  const getTopicData = () => {
    switch (currentTopic) {
      case 'data-structures':
        return [
          { name: 'Arrays & Lists', value: 28, color: theme.primaryColor },
          { name: 'Trees & Graphs', value: 24, color: theme.secondaryColor },
          { name: 'Hash Tables', value: 18, color: theme.accentColor },
          { name: 'Stacks & Queues', value: 15, color: '#60A5FA' },
          { name: 'Heaps', value: 10, color: '#93C5FD' },
          { name: 'Advanced', value: 5, color: '#BFDBFE' },
        ];
      case 'operating-systems':
        return [
          { name: 'Process Management', value: 26, color: theme.primaryColor },
          { name: 'Memory Management', value: 22, color: theme.secondaryColor },
          { name: 'File Systems', value: 18, color: theme.accentColor },
          { name: 'Scheduling', value: 16, color: '#A78BFA' },
          { name: 'Deadlocks', value: 12, color: '#C4B5FD' },
          { name: 'I/O Systems', value: 6, color: '#DDD6FE' },
        ];
      case 'database-systems':
        return [
          { name: 'SQL Queries', value: 30, color: theme.primaryColor },
          { name: 'Normalization', value: 22, color: theme.secondaryColor },
          { name: 'Transactions', value: 18, color: theme.accentColor },
          { name: 'Indexing', value: 14, color: '#34D399' },
          { name: 'Query Optimization', value: 10, color: '#6EE7B7' },
          { name: 'NoSQL', value: 6, color: '#A7F3D0' },
        ];
      case 'machine-learning':
        return [
          { name: 'Supervised Learning', value: 28, color: theme.primaryColor },
          { name: 'Neural Networks', value: 24, color: theme.secondaryColor },
          { name: 'Unsupervised Learning', value: 18, color: theme.accentColor },
          { name: 'Feature Engineering', value: 14, color: '#F472B6' },
          { name: 'Model Evaluation', value: 10, color: '#F9A8D4' },
          { name: 'Deep Learning', value: 6, color: '#FBCFE8' },
        ];
      case 'computer-networks':
        return [
          { name: 'Network Protocols', value: 26, color: theme.primaryColor },
          { name: 'TCP/IP Stack', value: 22, color: theme.secondaryColor },
          { name: 'Routing', value: 18, color: theme.accentColor },
          { name: 'Network Security', value: 16, color: '#22D3EE' },
          { name: 'Application Layer', value: 12, color: '#67E8F9' },
          { name: 'Wireless Networks', value: 6, color: '#A5F3FC' },
        ];
      default:
        return [
          { name: 'Core Concepts', value: 28, color: theme.primaryColor },
          { name: 'Advanced Topics', value: 22, color: theme.secondaryColor },
          { name: 'Applications', value: 18, color: theme.accentColor },
          { name: 'Practice', value: 15, color: '#60A5FA' },
          { name: 'Theory', value: 12, color: '#93C5FD' },
          { name: 'Others', value: 5, color: '#BFDBFE' },
        ];
    }
  };

  const data = getTopicData();
  
  // Use different visualizations based on visual pattern
  const isGridOrLanes = theme.visualStyle.pattern === 'grid' || theme.visualStyle.pattern === 'lanes';

  return (
    <Card className="border-t-4" style={{ borderTopColor: theme.primaryColor }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <theme.icon className="w-5 h-5" style={{ color: theme.primaryColor }} />
              Topic Distribution
            </CardTitle>
            <CardDescription>
              {theme.name} concepts breakdown by question coverage
            </CardDescription>
          </div>
          <Badge 
            variant="outline"
            className="gap-1.5"
            style={{ 
              borderColor: theme.primaryColor + '40',
              backgroundColor: theme.primaryColor + '10',
              color: theme.primaryColor
            }}
          >
            {theme.visualStyle.pattern}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {isGridOrLanes ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={100}
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
              <Bar 
                dataKey="value" 
                fill={theme.primaryColor}
                radius={[8, 8, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill={theme.primaryColor}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: `2px solid ${theme.primaryColor}40`,
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}