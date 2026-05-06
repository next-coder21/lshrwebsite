import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — LijiHR",
  description: "Simple, transparent pricing. FREE, BASIC, PREMIUM, and ENTERPRISE plans. A Liji Groups product.",
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    sub: "Forever",
    description: "For small teams getting started with digital HR.",
    cta: "Get Started Free",
    href: "https://app.lishr.in",
    highlight: false,
    badge: null,
    employees: "Up to 10 employees",
    features: [
      "Employee profiles & org chart",
      "Leave management (ANNUAL, SICK, UNPAID)",
      "Basic attendance tracking",
      "Employee self-service portal",
      "Email notifications",
      "Community support",
    ],
    missing: [
      "Payroll processing",
      "Recruitment pipeline",
      "Shift management",
      "Performance reviews",
      "Custom roles & permissions",
      "PDF reports & exports",
    ],
  },
  {
    name: "Basic",
    price: "$29",
    sub: "per month",
    description: "For growing teams that need the full HR suite.",
    cta: "Start Basic",
    href: "https://app.lishr.in",
    highlight: false,
    badge: null,
    employees: "Up to 50 employees",
    features: [
      "Everything in Free",
      "Payroll (DRAFT → PROCESSED → PAID)",
      "Recruitment pipeline with Kanban",
      "Shift templates & weekly schedules",
      "PDF payslips & pipeline reports",
      "Excel employee & user exports",
      "Priority support",
    ],
    missing: [
      "Custom roles with 30+ permissions",
      "Performance review cycles",
      "PDF offer letters with watermarks",
      "Multi-tenant management",
    ],
  },
  {
    name: "Premium",
    price: "$79",
    sub: "per month",
    description: "Full suite for established organisations.",
    cta: "Start Premium",
    href: "https://app.lishr.in",
    highlight: true,
    badge: "Most Popular",
    employees: "Up to 200 employees",
    features: [
      "Everything in Basic",
      "Custom roles with 30+ permissions",
      "Performance review cycles (DRAFT → IN_PROGRESS → COMPLETED)",
      "PDF offer letters with cover page + watermark",
      "Approval workflow configuration",
      "Billing & subscription management",
      "Dedicated support",
    ],
    missing: [],
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "Contact us",
    description: "Tailored for large multi-tenant organisations.",
    cta: "Contact Sales",
    href: "mailto:sales@lishr.in",
    highlight: false,
    badge: null,
    employees: "Unlimited employees & tenants",
    features: [
      "Everything in Premium",
      "Full multi-tenant Super Admin panel",
      "Per-tenant custom branding & prefix",
      "SLA uptime guarantee (99.9%)",
      "Custom integrations & full REST API",
      "On-premise deployment option",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    missing: [],
  },
];

const COMPARISON = [
  { feature: "Employees", free: "Up to 10", basic: "Up to 50", premium: "Up to 200", enterprise: "Unlimited" },
  { feature: "Organisations", free: "1", basic: "1", premium: "1", enterprise: "Unlimited" },
  { feature: "Employee Profiles", free: true, basic: true, premium: true, enterprise: true },
  { feature: "Leave Management", free: true, basic: true, premium: true, enterprise: true },
  { feature: "Attendance Tracking", free: "Basic", basic: "Full", premium: "Full", enterprise: "Full" },
  { feature: "Self-Service Portal", free: true, basic: true, premium: true, enterprise: true },
  { feature: "Payroll Automation", free: false, basic: true, premium: true, enterprise: true },
  { feature: "Recruitment Pipeline (ATS)", free: false, basic: true, premium: true, enterprise: true },
  { feature: "Shift Management", free: false, basic: true, premium: true, enterprise: true },
  { feature: "PDF Reports & Exports", free: false, basic: true, premium: true, enterprise: true },
  { feature: "Custom Roles (30+ permissions)", free: false, basic: false, premium: true, enterprise: true },
  { feature: "Performance Reviews", free: false, basic: false, premium: true, enterprise: true },
  { feature: "Offer Letters with Watermark", free: false, basic: false, premium: true, enterprise: true },
  { feature: "Approval Workflows", free: false, basic: false, premium: true, enterprise: true },
  { feature: "Multi-Tenancy", free: false, basic: false, premium: false, enterprise: true },
  { feature: "Custom Branding", free: false, basic: false, premium: false, enterprise: true },
  { feature: "On-Premise Deployment", free: false, basic: false, premium: false, enterprise: true },
  { feature: "REST API", free: false, basic: false, premium: false, enterprise: true },
  { feature: "Support", free: "Community", basic: "Priority", premium: "Dedicated", enterprise: "24/7" },
];

const FAQS = [
  {
    q: "What's included in the Free plan?",
    a: "The Free plan covers up to 10 employees with employee profiles, leave management (ANNUAL, SICK, UNPAID types), basic attendance tracking, and the employee self-service portal — no credit card required.",
  },
  {
    q: "What are custom roles?",
    a: "Custom roles are tenant-defined roles with any combination of 30+ granular permissions (e.g. RECRUITMENT_VIEW, PAYROLL_MANAGE, LEAVE_APPROVE). They fully override the system role defaults and are available from the Premium plan onwards.",
  },
  {
    q: "What PDF reports are available?",
    a: "Basic and above: payslips, pipeline reports, candidate profiles, interview summaries. Premium and above additionally includes multi-page offer letters with a branded cover page and watermark.",
  },
  {
    q: "What does multi-tenancy mean for Enterprise?",
    a: "Enterprise customers get a Super Admin panel to manage unlimited client organisations — each fully isolated with their own employees, roles, payroll, and recruitment data. SUPER_ADMIN can operate across tenants while all other users are scoped to their own organisation.",
  },
  {
    q: "Can I switch plans mid-cycle?",
    a: "Yes — upgrades take effect immediately and are prorated. Downgrades take effect at the end of your billing cycle.",
  },
  {
    q: "What is the payroll lifecycle?",
    a: "Every payroll run goes through three stages: DRAFT (initial calculation), PROCESSED (reviewed and confirmed), and PAID (disbursed). Each stage is tracked and audited.",
  },
  {
    q: "Is there an API?",
    a: "Yes. Enterprise plans include full REST API access with Swagger documentation at /swagger-ui.html and /v3/api-docs. The API covers all modules — jobs, candidates, employees, payroll, leaves, and more.",
  },
  {
    q: "Can I deploy on-premise?",
    a: "On-premise deployment is available under the Enterprise plan for organisations with strict data residency or compliance requirements. Contact sales to discuss your infrastructure setup.",
  },
];

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <Check className="w-4 h-4 text-emerald-500 mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-gray-200 mx-auto" />;
  return <span className="text-xs font-medium text-gray-600">{val}</span>;
}

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-white text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">
            <Zap className="w-3 h-3" /> Simple, transparent pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Pay for what you use.<br />
            <span className="text-red-600">Nothing more.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto">
            FREE · BASIC · PREMIUM · ENTERPRISE — four clear tiers, no hidden fees, no lock-ins.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map(({ name, price, sub, description, cta, href, highlight, badge, employees, features, missing }) => (
            <div key={name} className={`relative rounded-3xl p-8 flex flex-col ${highlight ? "bg-gray-950 text-white ring-2 ring-red-600 shadow-2xl shadow-red-600/20 scale-[1.03]" : "bg-white border border-gray-100 shadow-sm"}`}>
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {badge}
                </div>
              )}
              <div className="mb-6">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${highlight ? "text-red-400" : "text-gray-500"}`}>{name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-5xl font-black tracking-tight ${highlight ? "text-white" : "text-gray-900"}`}>{price}</span>
                </div>
                <p className={`text-xs font-medium mb-4 ${highlight ? "text-gray-400" : "text-gray-400"}`}>{sub}</p>
                <p className={`text-sm font-medium leading-relaxed mb-4 ${highlight ? "text-gray-300" : "text-gray-500"}`}>{description}</p>
                <p className={`text-[10px] font-black uppercase tracking-widest ${highlight ? "text-red-400" : "text-red-600"}`}>{employees}</p>
              </div>

              <a href={href}
                className={`w-full py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center mb-8 flex items-center justify-center gap-2 transition-all active:scale-95 ${highlight ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}>
                {cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <ul className="space-y-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-red-400" : "text-emerald-500"}`} />
                    <span className={`text-xs font-medium ${highlight ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
                {missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-30">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-400 line-through">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight text-center mb-12">Compare plans in detail.</h2>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 bg-gray-950 px-6 py-4">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Feature</div>
              {["Free", "Basic", "Premium", "Enterprise"].map((p) => (
                <div key={p} className="text-center text-[10px] font-black uppercase tracking-widest text-white">{p}</div>
              ))}
            </div>
            {COMPARISON.map(({ feature, free, basic, premium, enterprise }, i) => (
              <div key={feature} className={`grid grid-cols-5 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}>
                <div className="text-xs font-medium text-gray-700">{feature}</div>
                <div className="text-center"><CellValue val={free} /></div>
                <div className="text-center"><CellValue val={basic} /></div>
                <div className="text-center"><CellValue val={premium} /></div>
                <div className="text-center"><CellValue val={enterprise} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight text-center mb-12">Frequently asked questions.</h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-sm font-black text-gray-900 mb-2">{q}</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-medium mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Talk to us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
