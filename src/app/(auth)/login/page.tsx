'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return (
    <div className="min-h-dvh grid place-items-center bg-gradient-to-b from-white to-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Government Portal Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <Input type="email" placeholder="you@gov.rw" />
          </div>
          <div className="space-y-2">
            <label className="text-sm">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign in</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Button variant="secondary">Gov ID</Button>
            <Button variant="secondary">Gov Email</Button>
          </div>

          <p className="text-xs text-gray-500">
            For demo only. Return to{' '}
            <Link href="/" className="underline">
              home
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
