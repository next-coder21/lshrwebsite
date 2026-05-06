import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { ArrowRight, Building2, Users, Shield, Check, Zap, Globe, Lock, FileText, DollarSign, TrendingUp, Briefcase } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — LijiHR",
  description: "LijiHR for HR Teams, Agencies, and Enterprises. Multi-tenant HR built for every scale — from a 5-person team to unlimited client organisations.",
};

const HR_TEAMS_FEATURES = [
  { icon: Users, label: "Employee lifecycle", desc: "Onboard → active → terminate with rich profiles and org chart." },
  { icon: FileText, label: "Leave & attendance", desc: "ANNUAL, SICK, UNPAID types with manager approval workflows and real-time balances." },
  { icon: DollarSign, label: "Payroll in minutes", desc: "DRAFT → PROCESSED → PAID. Auto gross/net calculation. PDF payslips for every employee." },
  { icon: Briefcase, label: "Recruitment pipeline", desc: "Kanban ATS: APPLIED → SCREENING → INTERVIEW → OFFER → HIRED/REJECTED." },
  { icon: TrendingUp, label: "Performance reviews", desc: "Structured cycles with self-assessment, manager ratings, and goals tracking." },
  { icon: Shield, label: "Role-based access", desc: "4 system roles + unlimited custom roles with 30+ granular permissions." },
];

const AGENCY_FEATURES = [
  { icon: Globe, label: "Full multi-tenancy", desc: "Each client is a completely isolated organisation — own employees, roles, payroll, and data." },
  { icon: Shield, label: "Super Admin panel", desc: "Manage all client organisations from one panel. Create, activate, or deactivate tenants instantly." },
  { icon: Lock, label: "Zero cross-tenant leakage", desc: "tenantId from JWT enforced at service layer. No client can see another client's data." },
  { icon: Building2, label: "Per-tenant branding", desc: "Custom branding and prefix configuration per client organisation." },
  { icon: FileText, label: "Per-tenant billing", desc: "Subscription plan management per client. FREE, BASIC, PREMIUM, or ENTERPRISE per tenant." },
  { icon: Zap, label: "REST API access", desc: "Full OpenAPI-documented REST API at /swagger-ui.html for custom integrations." },
];

const ENTERPRISE_FEATURES = [
  { label: "Unlimited employees & tenants" },
  { label: "Full Super Admin multi-tenant panel" },
  { label: "Per-tenant custom branding & prefix" },
  { label: "SLA uptime guarantee — 99.9%" },
  { label: "Custom integrations & full REST API" },
  { label: "On-premise deployment option" },
  { label: "Dedicated account manager" },
  { label: "24/7 priority support" },
  { label: "Custom roles with 30+ permissions" },
  { label: "Performance review cycles" },
  { label: "PDF offer letters with watermark" },
  { label: "Approval workflow configuration" },
];

const COMPARISON = [
  { label: "Organisations", hr: "1", agency: "Unlimited", enterprise: "Unlimited" },
  { label: "Employees", hr: "Up to 200", agency: "Per tenant", enterprise: "Unlimited" },
  { label: "Super Admin panel", hr: false, agency: true, enterprise: true },
  { label: "Multi-tenant isolation", hr: false, agency: true, enterprise: true },
  { label: "Per-tenant branding", hr: false, agency: false, enterprise: true },
  { label: "On-premise deployment", hr: false, agency: false, enterprise: true },
  { label: "SLA guarantee", hr: false, agency: false, enterprise: true },
  { label: "Custom integrations", hr: false, agency: false, enterprise: true },
  { label: "Dedicated account manager", hr: false, agency: false, enterprise: true },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
        <Check className="w-3 h-3 text-emerald-600" />
      </div>
    </div>
  );
  if (val === false) return (
    <div className="flex justify-center">
      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
        <div className="w-2 h-px bg-gray-400" />
      </div>
    </div>
  );
  return <p className="text-xs font-bold text-gray-700 text-center">{val}</p>;
}

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            Built for every scale
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
            One platform.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
              Every team size.
            </span>
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re running HR for a 10-person startup, managing multiple client organisations as an agency, or deploying across a global enterprise — LijiHR scales with you.
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a href="#hr-teams" className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors">
              HR Teams
            </a>
            <a href="#agencies" className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors">
              Agencies
            </a>
            <a href="#enterprise" className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors shadow-lg shadow-red-600/30">
              Enterprise
            </a>
          </div>
        </div>
      </section>

      {/* For HR Teams */}
      <section id="hr-teams" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg mb-5">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">For HR Teams</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Everything your HR team needs. Nothing it doesn&apos;t.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Stop juggling spreadsheets, email chains, and disconnected tools. LijiHR puts every HR function — from the first job post to the last payslip — in one place with clear workflows and zero ambiguity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {HR_TEAMS_FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">{label}</p>
                      <p className="text-[11px] text-gray-500 font-medium leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="https://app.lishr.in"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gray-950 hover:bg-gray-800 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95">
                  Start Free <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/pricing"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
                  See plans
                </Link>
              </div>
            </div>
            <div className="bg-gray-950 rounded-3xl p-8 border border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">What&apos;s included</p>
              <div className="space-y-3">
                {["Free plan — up to 10 employees", "Basic — up to 50 employees", "Premium — up to 200 employees", "12 HR modules", "PDF payslips & offer letters", "Excel exports", "Employee self-service portal", "JWT auth + role-based access"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">Plans for HR teams</p>
                <p className="text-2xl font-black text-white">Free → $79 / mo</p>
                <p className="text-xs text-gray-500 font-medium">No credit card required to start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Agencies */}
      <section id="agencies" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gray-950 rounded-3xl p-8 border border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Multi-tenant architecture</p>
              <div className="space-y-4">
                {["Tenant A — Acme Corp (50 employees)", "Tenant B — Globex Ltd (120 employees)", "Tenant C — Initech Inc (34 employees)"].map((t, i) => (
                  <div key={t} className="bg-white/5 border border-white/8 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-white">{t}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div className="flex gap-2">
                      {["Payroll", "Recruitment", "Shifts"].map(m => (
                        <span key={m} className="text-[9px] font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded">{m}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Super Admin Panel</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">Full visibility across all tenants</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg mb-5">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">For Agencies</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Manage every client from one Super Admin panel.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">
                Each client is a fully isolated tenant — their own employees, roles, payroll, and data. Zero cross-tenant leakage, enforced at the service layer. You get one panel to rule them all.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {AGENCY_FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">{label}</p>
                      <p className="text-[11px] text-gray-500 font-medium leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-950 hover:bg-gray-800 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95">
                Talk to sales <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Enterprises */}
      <section id="enterprise" className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/20 rounded-lg mb-5">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-400">For Enterprises</span>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-4">
              Enterprise-grade HR, your way.
            </h2>
            <p className="text-gray-400 font-medium max-w-xl mx-auto leading-relaxed">
              Custom deployments, SLA guarantees, dedicated support, and infrastructure that meets the most demanding compliance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-1 gap-3">
              {ENTERPRISE_FEATURES.map(({ label }) => (
                <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-2xl px-5 py-3.5">
                  <div className="w-5 h-5 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-red-400" />
                  </div>
                  <span className="text-sm font-bold text-gray-200">{label}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Pricing</p>
                <p className="text-4xl font-black text-white">Custom</p>
                <p className="text-gray-500 font-medium text-sm mt-1">Tailored to your organisation size and requirements.</p>
              </div>
              <div className="border-t border-white/10 pt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Organisations</span>
                  <span className="text-white font-black">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Employees</span>
                  <span className="text-white font-black">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">SLA uptime</span>
                  <span className="text-emerald-400 font-black">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Support</span>
                  <span className="text-white font-black">24/7</span>
                </div>
              </div>
              <a href="mailto:sales@lishr.in"
                className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 active:scale-95">
                Contact sales <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[10px] text-gray-600 font-medium text-center">Typically responds same business day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight text-center mb-12">Compare solutions.</h2>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-gray-950 px-6 py-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Feature</div>
              {["HR Teams", "Agencies", "Enterprise"].map(p => (
                <div key={p} className="text-center text-[10px] font-black uppercase tracking-widest text-white">{p}</div>
              ))}
            </div>
            {COMPARISON.map(({ label, hr, agency, enterprise }, i) => (
              <div key={label} className={`grid grid-cols-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}>
                <div className="text-xs font-medium text-gray-700">{label}</div>
                <Cell val={hr} />
                <Cell val={agency} />
                <Cell val={enterprise} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-950 hover:bg-gray-800 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
              Full pricing comparison <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
