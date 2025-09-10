'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Exportable reports</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Export PDF</Button>
          <Button variant="secondary">Export Excel</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-powered recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-gradient-to-br from-gray-50 to-white p-4">
            <p className="text-sm text-gray-700">
              Based on enrollment trends and sector demand, consider increasing
              capacity for ICT and Construction programs in Kigali and Huye.
              Encourage private sector partners to post more apprenticeships
              aligned to these fields.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
