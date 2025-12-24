import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function BloomsPyramidChart() {
  const data = [
    { level: 'L1: Remember', questions: 25, target: 20, label: 'Remember' },
    { level: 'L2: Understand', questions: 30, target: 25, label: 'Understand' },
    { level: 'L3: Apply', questions: 22, target: 25, label: 'Apply' },
    { level: 'L4: Analyze', questions: 15, target: 15, label: 'Analyze' },
    { level: 'L5: Evaluate', questions: 6, target: 10, label: 'Evaluate' },
    { level: 'L6: Create', questions: 2, target: 5, label: 'Create' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bloom&apos;s Taxonomy Distribution</CardTitle>
        <CardDescription>
          Cognitive level breakdown of your question bank
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="questions" fill="#3b82f6" name="Current" />
            <Bar dataKey="target" fill="#94a3b8" name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
