'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const kpis = [
  { label: 'Students onboarded', value: 12450 },
  { label: 'Active TVET institutions', value: 86 },
  { label: 'Private partners', value: 142 },
  { label: 'Graduate employment rate', value: '72%' },
];

const enrollmentData = [
  { month: 'Jan', value: 800 },
  { month: 'Feb', value: 1200 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 1700 },
  { month: 'May', value: 2100 },
  { month: 'Jun', value: 2400 },
];

const demandData = [
  { sector: 'Construction', value: 400 },
  { sector: 'Energy', value: 320 },
  { sector: 'Hospitality', value: 280 },
  { sector: 'Automotive', value: 220 },
  { sector: 'ICT', value: 500 },
];

const placementsData = [
  { name: 'Internships', value: 35 },
  { name: 'Apprenticeships', value: 25 },
  { name: 'Jobs', value: 40 },
];

const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444'];

export default function GovDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label} className="bg-white/70">
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">{k.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{k.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Enrollment trends</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector demand</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demandData}>
                <XAxis dataKey="sector" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Job placements</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={placementsData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={40}
                  outerRadius={70}
                  label
                >
                  {placementsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
