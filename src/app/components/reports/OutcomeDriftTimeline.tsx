import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function OutcomeDriftTimeline() {
  const data = [
    { semester: 'Jan-Jun 2023', CO1: 78, CO2: 82, CO3: 75, CO4: 45, CO5: 88, CO6: 52 },
    { semester: 'Jul-Dec 2023', CO1: 82, CO2: 85, CO3: 80, CO4: 58, CO5: 90, CO6: 65 },
    { semester: 'Jan-Jun 2024', CO1: 85, CO2: 88, CO3: 85, CO4: 72, CO5: 92, CO6: 78 },
    { semester: 'Jul-Dec 2024', CO1: 87, CO2: 90, CO3: 88, CO4: 78, CO5: 94, CO6: 82 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outcome Coverage Drift Analysis</CardTitle>
        <CardDescription>
          Track how CO coverage has evolved over semesters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis label={{ value: 'Coverage %', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="CO1" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="CO2" stroke="#8b5cf6" strokeWidth={2} />
            <Line type="monotone" dataKey="CO3" stroke="#ec4899" strokeWidth={2} />
            <Line type="monotone" dataKey="CO4" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="CO5" stroke="#10b981" strokeWidth={2} />
            <Line type="monotone" dataKey="CO6" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm font-medium text-blue-900 mb-2">Key Insights</div>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• CO4 showed significant improvement from 45% to 78% over 4 semesters</li>
            <li>• CO5 consistently maintained high coverage (&gt;88%)</li>
            <li>• CO6 improved steadily from 52% to 82%</li>
            <li>• All COs now meet the minimum 75% threshold</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
