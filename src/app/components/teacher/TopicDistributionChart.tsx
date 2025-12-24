import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function TopicDistributionChart() {
  const data = [
    { name: 'Data Structures', value: 28, color: '#3b82f6' },
    { name: 'Algorithms', value: 22, color: '#8b5cf6' },
    { name: 'OOP Concepts', value: 18, color: '#ec4899' },
    { name: 'Database Design', value: 15, color: '#10b981' },
    { name: 'Web Technologies', value: 12, color: '#f59e0b' },
    { name: 'Others', value: 5, color: '#6b7280' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Topic Distribution</CardTitle>
        <CardDescription>
          Breakdown of questions by syllabus topics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
