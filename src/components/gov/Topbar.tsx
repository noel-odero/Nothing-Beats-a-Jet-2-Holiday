'use client';

import Link from 'next/link';

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 h-14 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden rounded p-2 hover:bg-gray-100"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            ☰
          </button>
          <span className="font-semibold">Government Portal</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/gov" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/gov/reports" className="hover:underline">
            Reports
          </Link>
          <Link href="/gov/settings" className="hover:underline">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;
