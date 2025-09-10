'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const fields = ['Construction', 'Energy', 'Hospitality', 'Automotive', 'ICT'];

const data = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  institution: i % 2 === 0 ? 'Kigali Tech' : 'Musanze TVET',
  field: fields[i % fields.length],
  location: i % 3 === 0 ? 'Kigali' : 'Huye',
  completion: Math.round(Math.random() * 100),
  certificates: Math.round(Math.random() * 5),
}));

const popularity = fields.map((f) => ({
  field: f,
  value: Math.round(100 + Math.random() * 400),
}));

export default function StudentsPage() {
  const [query, setQuery] = useState('');
  const [institution, setInstitution] = useState<string | undefined>();
  const [field, setField] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();

  const filtered = useMemo(() => {
    return data.filter((row) => {
      return (
        (!query || row.name.toLowerCase().includes(query.toLowerCase())) &&
        (!institution || row.institution === institution) &&
        (!field || row.field === field) &&
        (!location || row.location === location)
      );
    });
  }, [query, institution, field, location]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student filters</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Input
            placeholder="Search by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Select onValueChange={setInstitution}>
            <SelectTrigger>
              <SelectValue placeholder="Institution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kigali Tech">Kigali Tech</SelectItem>
              <SelectItem value="Musanze TVET">Musanze TVET</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setField}>
            <SelectTrigger>
              <SelectValue placeholder="Field" />
            </SelectTrigger>
            <SelectContent>
              {fields.map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kigali">Kigali</SelectItem>
              <SelectItem value="Huye">Huye</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Students</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Institution</th>
                <th className="px-3 py-2 text-left">Field</th>
                <th className="px-3 py-2 text-left">Location</th>
                <th className="px-3 py-2 text-left">Progress</th>
                <th className="px-3 py-2 text-left">Certificates</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{row.name}</td>
                  <td className="px-3 py-2">{row.institution}</td>
                  <td className="px-3 py-2">{row.field}</td>
                  <td className="px-3 py-2">{row.location}</td>
                  <td className="px-3 py-2 w-48">
                    <div className="flex items-center gap-2">
                      <Progress value={row.completion} className="h-2" />
                      <span className="tabular-nums text-xs text-gray-600">
                        {row.completion}%
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2">{row.certificates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most popular TVET fields</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={popularity}>
              <XAxis dataKey="field" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
