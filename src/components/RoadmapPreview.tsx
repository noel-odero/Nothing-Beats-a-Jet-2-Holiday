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

  // light theme no-op: status-specific styles are applied inline in JSX

  return (
    <section className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 text-slate-900 shadow-sm">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {roadmapData.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-4 leading-relaxed max-w-4xl mx-auto">
            {roadmapData.description}
          </p>
        </header>

        {/* Progress Overview */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Learning Journey Progress
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-slate-600">{counts.done} completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white/70">
                  {counts.in_progress} in progress
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                <span className="text-slate-600">{counts.skipped} skipped</span>
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-400/10"></div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-700 font-medium">
              {progressPct}% Complete
            </span>
            <button
              type="button"
              onClick={resetProgress}
              className="px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-200 text-sm"
            >
              Reset Progress
            </button>
          </div>
        </div>

        {/* Vertical Modules Timeline */}
        <div className="mb-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-indigo-300 to-slate-200"></div>

            <div className="space-y-6">
              {roadmapData.modules.map((m, idx) => {
                const s = statuses[idx];
                return (
                  <div key={m.name} className="relative flex items-start gap-6">
                    {/* Module number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full border flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          s === 'done'
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : s === 'in_progress'
                            ? 'bg-blue-500 border-blue-500 text-white'
                            : s === 'skipped'
                            ? 'bg-slate-100 border-slate-200 text-slate-400'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Module content */}
                    <div className="flex-1 min-w-0">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={(e) => handleModuleClick(e, idx, s)}
                        onContextMenu={(e) => handleContextMenu(e, idx)}
                        className={`group relative rounded-2xl border p-6 cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                          s === 'done'
                            ? 'bg-green-500/10 border-green-500/30 shadow-green-500/10'
                            : s === 'in_progress'
                            ? 'bg-blue-500/10 border-blue-500/30 shadow-blue-500/10'
                            : s === 'skipped'
                            ? 'bg-white/5 border-white/20 opacity-70'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg sm:text-xl font-semibold leading-tight text-slate-900">
                            {m.name}
                          </h4>
                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border ${
                              s === 'done'
                                ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                                : s === 'in_progress'
                                ? 'bg-blue-100 text-blue-700 border-blue-200'
                                : s === 'skipped'
                                ? 'bg-slate-100 text-slate-600 border-slate-200'
                                : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                s === 'done'
                                  ? 'bg-emerald-500'
                                  : s === 'in_progress'
                                  ? 'bg-blue-500'
                                  : s === 'skipped'
                                  ? 'bg-slate-400'
                                  : 'bg-slate-500'
                              }`}
                            />
                            {s.replace('_', ' ')}
                          </span>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-4">
                          {m.description}
                        </p>

                        <div className="text-xs text-slate-400">
                          Click: cycle • Shift+Click: in progress • Option/Alt:
                          skip • Right-click: done
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Salaries */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Career Progression & Salaries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['entry', 'mid', 'senior'] as const).map((level, index) => {
              const item = roadmapData.salaries.find((s) => s.level === level);
              const colors = [
                'from-green-500 to-emerald-500',
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
              ];
              return (
                <div
                  key={level}
                  className="group relative rounded-2xl bg-white border border-slate-200 p-6 hover:border-slate-300 transition-all duration-200 hover:scale-[1.01] shadow-sm"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${colors[index]} flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 font-medium">
                          {levelLabel[level]}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">
                          {item?.range ?? 'TBD'}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">
                      {level === 'entry' &&
                        'Start your ML journey with foundational skills'}
                      {level === 'mid' &&
                        'Build expertise and take on complex projects'}
                      {level === 'senior' && 'Lead teams and drive ML strategy'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Companies */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Join Leading Companies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {roadmapData.companies.map((c) => (
              <div
                key={c.name}
                className="group aspect-square rounded-2xl border border-slate-200 bg-white grid place-items-center overflow-hidden hover:border-slate-300 transition-all duration-200 hover:scale-[1.01] shadow-sm"
              >
                {c.logoUrl ? (
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={c.logoUrl}
                      alt={c.name}
                      fill
                      sizes="120px"
                      className="object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="text-xs font-bold text-slate-500">
                        {c.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 leading-tight block">
                      {c.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
