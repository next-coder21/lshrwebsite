import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ArrowRight, Zap, Shield, Globe, Users, Building2, Heart, Target, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — LijiHR",
  description: "LijiHR is a production-grade, multi-tenant HR platform built by Liji Groups. Learn about our mission, architecture, and the team behind the product.",
};

const VALUES = [
  {
    icon: Target,
    title: "Clarity over complexity",
    desc: "Every workflow in LijiHR follows a clear lifecycle — DRAFT → PROCESSED → PAID, PENDING → APPROVED / REJECTED. No ambiguous states, no hidden steps.",
  },
  {
    icon: Shield,
    title: "Security by design",
    desc: "JWT with HMAC-SHA signing, BCrypt hashing, method-level @PreAuthorize on every endpoint, and strict multi-tenant data isolation enforced at the service layer.",
  },
  {
    icon: Layers,
    title: "Architecture that lasts",
    desc: "Hexagonal architecture keeps the domain layer completely decoupled from Spring, JPA, and HTTP. Business logic is pure Java — independently testable and framework-agnostic.",
  },
  {
    icon: Heart,
    title: "Built for real teams",
    desc: "From a 3-person startup to a 200-employee organisation — LijiHR scales with you. The Free plan covers everything a small team needs, with no credit card required.",
  },
];

const MILESTONES = [
  { year: "2023", title: "Project started", desc: "LijiHR began as an internal tool for Liji Groups to manage its own growing workforce." },
  { year: "2024", title: "Multi-tenancy launch", desc: "Rebuilt on hexagonal architecture with full multi-tenant isolation — every resource scoped to a tenantId extracted from the JWT." },
  { year: "2024", title: "12 modules shipped", desc: "Recruitment, Payroll, Attendance, Leaves, Shifts, Performance Reviews, Roles, Reports, Billing — all production-grade." },
  { year: "2025", title: "Public launch", desc: "Opened to organisations worldwide. Swagger-documented REST API, PDF exports, Excel reports, and the Super Admin multi-tenant panel all live." },
];

const TEAM_STATS = [
  { label: "Modules", value: "12" },
  { label: "Permissions", value: "30+" },
  { label: "PDF Templates", value: "6" },
  { label: "API Endpoints", value: "80+" },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            A Liji Groups Product
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
            Built by a team<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
              that uses it daily.
            </span>
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            LijiHR started as Liji Groups&apos; own internal HR system. When it outgrew a spreadsheet, we built it properly — hexagonal architecture, multi-tenancy, full audit trails, and every module a real HR team needs.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM_STATS.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-black text-white mb-1">{value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-lg mb-5">
              <Target className="w-4 h-4 text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Our Mission</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              HR software that works the way your team actually works.
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">
              Most HR tools are either too simple to handle real organisations or too complex to deploy without a consultant. LijiHR is neither. It ships with sensible defaults, enforces clear workflows, and scales from a 5-person team to an enterprise with unlimited tenants and custom branding.
            </p>
            <p className="text-gray-500 font-medium leading-relaxed">
              Every module follows the same principle: one source of truth, one clear lifecycle, and full audit visibility at every stage. No black boxes. No workarounds.
            </p>
          </div>
          <div className="bg-gray-950 rounded-3xl p-8 border border-white/5 space-y-4">
            <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-6">Core Principles</p>
            {[
              { label: "Domain-driven design", sub: "Business logic in pure Java, framework-free" },
              { label: "Multi-tenant by default", sub: "Every resource scoped to tenantId from JWT" },
              { label: "Lifecycle-first workflows", sub: "DRAFT → PROCESSED → PAID, not free-form fields" },
              { label: "Zero cross-tenant leakage", sub: "Enforced at service layer, not just UI" },
              { label: "OpenAPI-documented", sub: "Full Swagger at /swagger-ui.html" },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-black text-white">{label}</p>
                  <p className="text-xs text-gray-500 font-medium">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">What we believe in.</h2>
            <p className="text-gray-500 font-medium">The principles that shaped every architecture decision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-sm font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">How we got here.</h2>
            <p className="text-gray-500 font-medium">From internal tool to production platform.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {MILESTONES.map(({ year, title, desc }) => (
                <div key={title} className="relative flex items-start gap-6">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[9px] font-black text-white">{year}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-sm font-black text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liji Groups */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg mx-auto mb-6">
            L
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">A Liji Groups Product</h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto leading-relaxed mb-8">
            Liji Groups builds production-grade software for real business problems. LijiHR is our flagship product — the HR platform we built for ourselves and now share with the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 active:scale-95">
              Get in touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href="https://app.lishr.in"
              className="flex items-center gap-2 px-8 py-3.5 bg-white/8 hover:bg-white/14 text-white border border-white/15 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
              <Zap className="w-3.5 h-3.5" /> Try LijiHR Free
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
