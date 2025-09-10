'use client';

import { useState, type ReactNode } from 'react';
import Sidebar from '@/components/gov/Sidebar';
import Topbar from '@/components/gov/Topbar';

export default function GovLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 md:ml-64">
          <div className="mx-auto max-w-7xl p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
