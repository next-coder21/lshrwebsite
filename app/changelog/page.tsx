import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { changelog, getSprintSummary } from "../data/changelog";
import { CheckCircle2, Clock, Circle, AlertCircle, Code2, Shield, Wrench, Database, Layout, Server, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — LisHR",
  description: "Track every sprint, fix, and feature shipped in LisHR HRMS. Updated automatically at the end of each development sprint.",
};

const STATUS_CONFIG = {
  completed: { label: "Completed", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500" },
  active:    { label: "In Progress", icon: Clock,         color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-200",    dot: "bg-blue-500"    },
  queued:    { label: "Queued",      icon: Circle,        color: "text-gray-400",    bg: "bg-gray-50",    border: "border-gray-200",    dot: "bg-gray-300"    },
};

const ITEM_STATUS_CONFIG = {
  done:        { label: "Done",        icon: CheckCircle2, color: "text-emerald-600" },
  in_progress: { label: "In Progress", icon: Clock,        color: "text-blue-600"    },
  queued:      { label: "Queued",      icon: Circle,       color: "text-gray-400"    },
};

const TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  security: { label: "Security", color: "bg-red-100 text-red-700" },
  feature:  { label: "Feature",  color: "bg-purple-100 text-purple-700" },
  fix:      { label: "Fix",      color: "bg-amber-100 text-amber-700" },
  backend:  { label: "Backend",  color: "bg-blue-100 text-blue-700" },
  frontend: { label: "Frontend", color: "bg-cyan-100 text-cyan-700" },
  data:     { label: "Data",     color: "bg-green-100 text-green-700" },
  devops:   { label: "DevOps",   color: "bg-slate-100 text-slate-700" },
};

const PRIORITY_CONFIG: Record<string, string> = {
  critical: "bg-red-600 text-white",
  high:     "bg-orange-100 text-orange-700",
  medium:   "bg-yellow-100 text-yellow-700",
  low:      "bg-gray-100 text-gray-600",
};

export default function ChangelogPage() {
  const summary = getSprintSummary();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Live Development Log
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Changelog
          </h1>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            Every sprint, every fix, every feature — shipped transparently. Auto-updated at the end of each development sprint.
          </p>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "Sprints Shipped", value: summary.completed, sub: "of " + (summary.completed + summary.active + summary.queued) },
              { label: "Items Completed", value: summary.completedItems, sub: "of " + summary.totalItems },
              { label: "Active Sprint",   value: summary.active || "—", sub: summary.active ? "in progress" : "awaiting" },
              { label: "Queued Sprints",  value: summary.queued, sub: "planned" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {changelog.map((sprint, idx) => {
            const sc = STATUS_CONFIG[sprint.status];
            const StatusIcon = sc.icon;
            const isCompleted = sprint.status === "completed";
            const isQueued = sprint.status === "queued";

            return (
              <div key={sprint.id} className="relative">
                {/* Timeline connector */}
                {idx < changelog.length - 1 && (
                  <div className="absolute left-[19px] top-[52px] w-0.5 h-full bg-gray-100 -z-10" />
                )}

                <div className="flex gap-6">
                  {/* Dot */}
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${isCompleted ? "border-emerald-500 bg-emerald-50" : isQueued ? "border-gray-200 bg-white" : "border-blue-500 bg-blue-50"}`}>
                      <StatusIcon className={`w-4 h-4 ${sc.color}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-2xl border ${isQueued ? "border-gray-200 bg-gray-50/50" : "border-gray-200 bg-white shadow-sm"}`}>
                    {/* Sprint header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${sc.bg} ${sc.color} border ${sc.border}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                              {sc.label}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">v{sprint.version}</span>
                            {sprint.date !== "TBD" && (
                              <span className="text-[10px] text-gray-400">{sprint.date}</span>
                            )}
                          </div>
                          <h2 className={`text-xl font-black tracking-tight mt-2 ${isQueued ? "text-gray-400" : "text-gray-900"}`}>
                            {sprint.name}
                          </h2>
                          <p className={`text-sm mt-1 leading-relaxed ${isQueued ? "text-gray-400" : "text-gray-500"}`}>
                            {sprint.summary}
                          </p>
                        </div>

                        {/* Build stats */}
                        {!isQueued && (
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${sprint.stats.buildStatus === "passing" ? "bg-emerald-100 text-emerald-700" : sprint.stats.buildStatus === "failing" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-500"}`}>
                              Build {sprint.stats.buildStatus}
                            </div>
                            <div className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600">
                              {sprint.stats.tsErrors} TS errors
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {sprint.stats.completed}/{sprint.stats.total} items
                          </span>
                          <span className="text-[10px] font-black text-gray-400">
                            {sprint.stats.total > 0 ? Math.round((sprint.stats.completed / sprint.stats.total) * 100) : 0}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${isCompleted ? "bg-emerald-500" : isQueued ? "bg-gray-200" : "bg-blue-500"}`}
                            style={{ width: `${sprint.stats.total > 0 ? (sprint.stats.completed / sprint.stats.total) * 100 : 0}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="divide-y divide-gray-50">
                      {sprint.items.map((item) => {
                        const tc = TYPE_CONFIG[item.type];
                        const isc = ITEM_STATUS_CONFIG[item.status];
                        const ItemStatusIcon = isc.icon;

                        return (
                          <div key={item.id} className={`px-6 py-4 flex gap-4 ${isQueued ? "opacity-60" : ""}`}>
                            <ItemStatusIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isc.color}`} />
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-sm font-black text-gray-900">{item.title}</span>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${tc.color}`}>{tc.label}</span>
                                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${PRIORITY_CONFIG[item.priority]}`}>{item.priority}</span>
                              </div>
                              <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                              {item.files && item.files.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {item.files.map((f) => (
                                    <code key={f} className="px-2 py-0.5 bg-gray-100 rounded text-[9px] font-mono text-gray-500">{f}</code>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
