'use client';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export type RoadmapData = {
  title: string;
  description: string;
  modules: { name: string; description: string }[];
  salaries: { level: 'entry' | 'mid' | 'senior'; range: string }[];
  companies: { name: string; logoUrl?: string }[];
};

interface RoadmapPreviewProps {
  roadmapData: RoadmapData;
}

type ModuleStatus = 'todo' | 'in_progress' | 'done' | 'skipped';

export default function RoadmapPreview({ roadmapData }: RoadmapPreviewProps) {
  const levelLabel: Record<'entry' | 'mid' | 'senior', string> = {
    entry: 'Entry level',
    mid: 'Mid level',
    senior: 'Senior level',
  };

  const storageKey = useMemo(
    () => `roadmap-progress:${roadmapData.title}`,
    [roadmapData.title]
  );

  const [statuses, setStatuses] = useState<ModuleStatus[]>(() => {
    if (typeof window === 'undefined')
      return roadmapData.modules.map(() => 'todo');
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as ModuleStatus[];
        if (
          Array.isArray(parsed) &&
          parsed.length === roadmapData.modules.length
        ) {
          return parsed;
        }
      }
    } catch {}
    return roadmapData.modules.map(() => 'todo');
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(statuses));
    } catch {}
  }, [statuses, storageKey]);

  const counts = useMemo(() => {
    const base = { todo: 0, in_progress: 0, done: 0, skipped: 0 } as Record<
      ModuleStatus,
      number
    >;
    for (const s of statuses) base[s] += 1;
    return base;
  }, [statuses]);

  const progressPct = useMemo(() => {
    const total = statuses.length || 1;
    return Math.round((counts.done / total) * 100);
  }, [counts.done, statuses.length]);

  function cycleStatus(current: ModuleStatus): ModuleStatus {
    switch (current) {
      case 'todo':
        return 'in_progress';
      case 'in_progress':
        return 'done';
      case 'done':
        return 'todo';
      case 'skipped':
        return 'todo';
      default:
        return 'todo';
    }
  }

  function setStatusAt(index: number, next: ModuleStatus) {
    setStatuses((prev) => prev.map((s, i) => (i === index ? next : s)));
  }

  function handleModuleClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    current: ModuleStatus
  ) {
    // Modifier keys similar to roadmap.sh shortcuts
    if (e.altKey) {
      setStatusAt(index, 'skipped');
      return;
    }
    if (e.shiftKey) {
      setStatusAt(index, 'in_progress');
      return;
    }
    setStatusAt(index, cycleStatus(current));
  }

  function handleContextMenu(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) {
    e.preventDefault();
    setStatusAt(index, 'done');
  }

  function resetProgress() {
    setStatuses(roadmapData.modules.map(() => 'todo'));
  }

  function statusStyles(status: ModuleStatus) {
    switch (status) {
      case 'done':
        return {
          card: 'bg-green-500/10 border-green-500/30',
          badge: 'bg-green-500 text-black',
          dot: 'bg-green-500',
        };
      case 'in_progress':
        return {
          card: 'bg-blue-500/10 border-blue-500/30',
          badge: 'bg-blue-500 text-white',
          dot: 'bg-blue-400',
        };
      case 'skipped':
        return {
          card: 'bg-white/[0.04] border-white/20 opacity-70',
          badge: 'bg-white/20 text-white',
          dot: 'bg-white/40',
        };
      default:
        return {
          card: 'bg-white/[0.06] border-white/10',
          badge: 'bg-white/10 text-white',
          dot: 'bg-white/30',
        };
    }
  }

  return (
    <section className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <header className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            {roadmapData.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base mt-2 leading-6">
            {roadmapData.description}
          </p>
        </header>

        {/* Modules timeline */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white/90">
              Modules & Skills
            </h3>
            <span className="text-xs text-white/50">
              {counts.done} done • {counts.in_progress} in progress •{' '}
              {counts.skipped} skipped
            </span>
          </div>
          <div className="mb-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between mb-3 text-xs text-white/60">
            <span>{progressPct}% complete</span>
            <button
              type="button"
              onClick={resetProgress}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              Reset progress
            </button>
          </div>
          <div className="relative">
            <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ol className="inline-flex gap-3 sm:gap-4 pr-2">
                {roadmapData.modules.map((m, idx) => {
                  const s = statuses[idx];
                  const styles = statusStyles(s);
                  return (
                    <li key={m.name} className="min-w-[240px] sm:min-w-[280px]">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={(e) => handleModuleClick(e, idx, s)}
                        onContextMenu={(e) => handleContextMenu(e, idx)}
                        className={`relative h-full rounded-2xl border p-4 sm:p-5 cursor-pointer select-none transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] ${styles.card}`}
                      >
                        <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-2xl overflow-hidden">
                          <div
                            className={`${
                              s === 'done'
                                ? 'bg-green-500'
                                : s === 'in_progress'
                                ? 'bg-blue-400'
                                : s === 'skipped'
                                ? 'bg-white/20'
                                : 'bg-white/10'
                            } h-full`}
                          />
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`size-7 sm:size-8 grid place-items-center rounded-full text-[11px] font-semibold ring-1 ring-white/15 ${styles.badge}`}
                            >
                              {idx + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-semibold leading-tight">
                              {m.name}
                            </h4>
                          </div>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[10px] border border-white/10 bg-white/5`}
                          >
                            <span
                              className={`size-1.5 rounded-full ${styles.dot}`}
                            />
                            {s.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 leading-6">
                          {m.description}
                        </p>
                        <div className="mt-3 text-[10px] text-white/40">
                          Click: cycle • Shift+Click: in progress • Option/Alt:
                          skip • Right-click: done
                        </div>
                        {idx < roadmapData.modules.length - 1 && (
                          <div className="absolute -right-3 top-1/2 hidden sm:block">
                            <div className="w-6 h-[2px] bg-white/10" />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* Salaries */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-sm font-semibold text-white/90 mb-3">
            Potential Salaries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {(['entry', 'mid', 'senior'] as const).map((level) => {
              const item = roadmapData.salaries.find((s) => s.level === level);
              return (
                <div
                  key={level}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-4"
                >
                  <div className="text-xs text-white/60">
                    {levelLabel[level]}
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {item?.range ?? 'TBD'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Companies */}
        <div>
          <h3 className="text-sm font-semibold text-white/90 mb-3">
            Hiring Companies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
            {roadmapData.companies.map((c) => (
              <div
                key={c.name}
                className="aspect-[3/2] rounded-xl border border-white/10 bg-white/[0.06] grid place-items-center overflow-hidden"
              >
                {c.logoUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={c.logoUrl}
                      alt={c.name}
                      fill
                      sizes="160px"
                      className="object-contain p-3"
                    />
                  </div>
                ) : (
                  <span className="text-[11px] sm:text-xs text-white/70 px-2 text-center leading-snug">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
