'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Institution = {
  id: number;
  name: string;
  verified: boolean;
  students: number;
  partnerships: number;
};

const institutions: Institution[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name:
    i % 2 === 0
      ? `Kigali Technical Institute ${i + 1}`
      : `Musanze TVET ${i + 1}`,
  verified: i % 3 !== 0,
  students: 200 + i * 15,
  partnerships: 5 + (i % 6),
}));

export default function InstitutionsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>TVET Institutions</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 text-left">Institution</th>
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Students</th>
                <th className="px-3 py-2 text-left">Partnerships</th>
                <th className="px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {institutions.map((inst) => (
                <tr key={inst.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{inst.name}</td>
                  <td className="px-3 py-2">
                    {inst.verified ? (
                      <Badge className="bg-green-100 text-green-700">
                        Verified
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-700">
                        Pending
                      </Badge>
                    )}
                  </td>
                  <td className="px-3 py-2">{inst.students}</td>
                  <td className="px-3 py-2">{inst.partnerships}</td>
                  <td className="px-3 py-2 space-x-2">
                    <Button size="sm" variant="default">
                      Approve
                    </Button>
                    <Button size="sm" variant="secondary">
                      Deny
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
