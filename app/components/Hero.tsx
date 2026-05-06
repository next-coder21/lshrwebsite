"use client";
import { ArrowRight, ChevronRight, Globe, Lock, Award, BarChart3 } from "lucide-react";

const TRUST = [
  { icon: Globe, label: "GDPR Compliant" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Award, label: "ISO 27001 Ready" },
  { icon: BarChart3, label: "Real-Time Analytics" },
];

const MOCK_SIDEBAR = ["Dashboard", "Employees", "Attendance", "Payroll", "Leaves", "Recruitment"];
const MOCK_STATS = [
  ["Total Staff", "248", "border-blue-500/20 text-blue-400"],
  ["Present Today", "219", "border-emerald-500/20 text-emerald-400"],
  ["On Leave", "14", "border-amber-500/20 text-amber-400"],
  ["Open Roles", "7", "border-purple-500/20 text-purple-400"],
];
const MOCK_BARS = [40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden bg-[#0F172A]">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          A Liji Groups Product — Built for Modern Teams
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] mb-6">
          The HR Platform
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
            Built for Scale.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          LijiHR is a production-grade, multi-tenant HR platform — from recruitment pipelines and payroll to attendance, leaves, shifts, and performance reviews, unified in one powerful dashboard.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://app.lishr.in"
            className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-red-600/30 active:scale-95"
          >
            Start Free Today
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-3 px-8 py-4 bg-white/8 hover:bg-white/14 text-white border border-white/15 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
          >
            See All Features
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-600">
              <Icon className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard mock */}
        <div className="relative max-w-5xl mx-auto animate-float">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-2.5 backdrop-blur-sm shadow-2xl">
            <div className="bg-[#0d1526] rounded-2xl border border-white/5 p-5 min-h-[360px] flex gap-4">
              {/* Sidebar mock */}
              <div className="hidden md:flex flex-col gap-1.5 w-44 flex-shrink-0">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-black text-xs shadow">
                    L
                  </div>
                  <span className="text-white font-black text-sm tracking-tight">
                    Liji<span className="text-red-500">HR</span>
                  </span>
                </div>
                {MOCK_SIDEBAR.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors ${
                      i === 0
                        ? "bg-red-600/20 text-red-400 border border-red-600/20"
                        : "text-gray-700 hover:text-gray-500"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content mock */}
              <div className="flex-1 flex flex-col gap-3 min-w-0">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2.5 bg-white/15 rounded-full w-36 mb-2" />
                    <div className="h-1.5 bg-white/8 rounded-full w-22" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-red-600/25 rounded-xl border border-red-600/20" />
                    <div className="h-8 w-8 bg-white/8 rounded-xl border border-white/5" />
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  {MOCK_STATS.map(([label, val, cls]) => (
                    <div
                      key={label}
                      className={`rounded-xl border bg-white/4 p-3 ${cls.split(" ")[0]}`}
                    >
                      <div className={`text-xl font-black ${cls.split(" ")[1]}`}>{val}</div>
                      <div className="text-[9px] font-bold text-gray-700 uppercase tracking-widest mt-0.5 leading-tight">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <div className="flex-1 grid grid-cols-3 gap-2.5">
                  <div className="col-span-2 bg-white/4 rounded-xl border border-white/5 p-3">
                    <div className="h-1.5 bg-white/10 rounded-full w-28 mb-4" />
                    <div className="flex items-end gap-1 h-20">
                      {MOCK_BARS.map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-sm transition-all ${
                            i === 10 ? "bg-red-500/70" : "bg-red-600/30"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/4 rounded-xl border border-white/5 p-3">
                    <div className="h-1.5 bg-white/10 rounded-full w-16 mb-4" />
                    {[
                      ["Engineering", "42%", "bg-blue-500"],
                      ["Product", "28%", "bg-red-500"],
                      ["Ops", "19%", "bg-amber-500"],
                      ["Design", "11%", "bg-purple-500"],
                    ].map(([dept, pct, color]) => (
                      <div key={dept} className="mb-2.5">
                        <div className="flex justify-between mb-1">
                          <span className="text-[8px] font-bold text-gray-600 uppercase">{dept}</span>
                          <span className="text-[8px] font-black text-gray-500">{pct}</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${color} rounded-full`}
                            style={{ width: pct }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-5 -right-5 bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl rotate-3 border border-red-500/50">
            Live Dashboard
          </div>
          <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl -rotate-2 border border-emerald-500/50 animate-float-delay">
            99.9% Uptime
          </div>
        </div>
      </div>
    </section>
  );
}
