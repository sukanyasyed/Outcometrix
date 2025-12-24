import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

export function SkillDistributionChart() {
  const data = [
    { skill: 'Remember', current: 85, target: 80 },
    { skill: 'Understand', current: 72, target: 75 },
    { skill: 'Apply', current: 68, target: 80 },
    { skill: 'Analyze', current: 45, target: 70 },
    { skill: 'Evaluate', current: 32, target: 65 },
    { skill: 'Create', current: 28, target: 60 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Distribution</CardTitle>
        <CardDescription>
          Your performance vs expected levels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar name="Your Level" dataKey="current" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Radar name="Target Level" dataKey="target" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
