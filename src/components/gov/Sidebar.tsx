'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { href: '/gov', label: 'Dashboard' },
  { href: '/gov/students', label: 'Students' },
  { href: '/gov/institutions', label: 'Institutions' },
  { href: '/gov/private-sector', label: 'Private Sector' },
  { href: '/gov/reports', label: 'Reports' },
  { href: '/gov/settings', label: 'Settings' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-64 border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60',
        'md:static md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'transition-transform'
      )}
    >
      <div className="flex h-14 items-center justify-between px-4 border-b">
        <span className="font-semibold">Gov Dashboard</span>
        <button
          className="md:hidden text-sm px-2 py-1 rounded hover:bg-gray-100"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav className="p-3 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block rounded px-3 py-2 text-sm',
                active ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
              )}
              onClick={onClose}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
