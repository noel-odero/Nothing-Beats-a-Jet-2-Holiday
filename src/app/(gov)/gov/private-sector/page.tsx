'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Company = {
  id: number;
  name: string;
  active: boolean;
  internships: number;
  jobs: number;
  apprenticeships: number;
};

const companies: Company[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name:
    i % 2 === 0 ? `Akagera Energy ${i + 1}` : `Nyungwe Hospitality ${i + 1}`,
  active: i % 3 !== 0,
  internships: 10 + (i % 4) * 2,
  jobs: 5 + (i % 5),
  apprenticeships: 8 + (i % 3),
}));

export default function PrivateSectorPage() {
  const [open, setOpen] = useState<Company | null>(null);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Private sector partners</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2 text-left">Company</th>
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Internships</th>
                <th className="px-3 py-2 text-left">Apprenticeships</th>
                <th className="px-3 py-2 text-left">Jobs</th>
                <th className="px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2">{c.name}</td>
                  <td className="px-3 py-2">
                    {c.active ? (
                      <Badge className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-700">
                        Inactive
                      </Badge>
                    )}
                  </td>
                  <td className="px-3 py-2">{c.internships}</td>
                  <td className="px-3 py-2">{c.apprenticeships}</td>
                  <td className="px-3 py-2">{c.jobs}</td>
                  <td className="px-3 py-2">
                    <Button size="sm" onClick={() => setOpen(c)}>
                      Message Company
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg bg-white shadow">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-semibold">Message {open.name}</h3>
              <button
                className="rounded p-1 hover:bg-gray-100"
                onClick={() => setOpen(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-4 space-y-3">
              <textarea
                className="w-full rounded border p-2"
                rows={4}
                placeholder="Write your message..."
              />
              <div className="flex justify-end gap-2">
                <Button variant="secondary" onClick={() => setOpen(null)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(null)}>Send</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
