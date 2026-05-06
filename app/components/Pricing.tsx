import { CheckCircle, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "Forever free",
    desc: "For small teams getting started with digital HR.",
    features: [
      "Up to 10 employees",
      "Employee profiles & org chart",
      "Leave management (ANNUAL, SICK, UNPAID)",
      "Basic attendance tracking",
      "Employee self-service portal",
      "Email support",
    ],
    cta: "Get Started Free",
    highlight: false,
    href: "https://app.lishr.in",
  },
  {
    name: "Basic",
    price: "$29",
    period: "/ month",
    desc: "For growing teams that need the full HR suite.",
    features: [
      "Up to 50 employees",
      "Payroll (DRAFT → PROCESSED → PAID)",
      "Recruitment pipeline with Kanban",
      "Shift management & weekly schedules",
      "PDF payslips & pipeline reports",
      "Excel employee & user exports",
      "Priority support",
    ],
    cta: "Start Basic",
    highlight: false,
    href: "https://app.lishr.in",
  },
  {
    name: "Premium",
    price: "$79",
    period: "/ month",
    desc: "Full suite for established organisations.",
    features: [
      "Up to 200 employees",
      "All modules unlocked",
      "Custom roles with 30+ permissions",
      "Performance review cycles",
      "PDF offer letters with watermarks",
      "Approval workflow configuration",
      "Dedicated support",
    ],
    cta: "Start Premium",
    highlight: true,
    href: "https://app.lishr.in",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact us",
    desc: "Tailored for large multi-tenant organisations.",
    features: [
      "Unlimited employees & tenants",
      "Full multi-tenant Super Admin panel",
      "Per-tenant custom branding",
      "SLA uptime guarantee (99.9%)",
      "Custom integrations & REST API",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlight: false,
    href: "mailto:sales@lishr.in",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-18" style={{ marginBottom: "4.5rem" }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-5">
            Transparent
            <br />
            <span className="text-red-600">Pricing.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg leading-relaxed">
            Start free and scale as you grow. No hidden fees. No lock-in. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map(({ name, price, period, desc, features, cta, highlight, href }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "bg-gray-900 border-gray-800 shadow-2xl lg:scale-105"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-xl"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-red-500/50">
                  Most Popular
                </div>
              )}

              <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${highlight ? "text-red-400" : "text-gray-400"}`}>
                {name}
              </div>

              <div className="flex items-end gap-1.5 mb-1.5">
                <span className={`text-5xl font-black leading-none ${highlight ? "text-white" : "text-gray-900"}`}>
                  {price}
                </span>
              </div>
              <div className={`text-xs font-bold mb-2 ${highlight ? "text-gray-500" : "text-gray-400"}`}>
                {period}
              </div>
              <p className={`text-xs font-medium leading-relaxed mb-7 ${highlight ? "text-gray-500" : "text-gray-400"}`}>
                {desc}
              </p>

              <ul className="flex-1 space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-red-400" : "text-emerald-500"}`} />
                    <span className={`text-[12px] font-bold leading-snug ${highlight ? "text-gray-300" : "text-gray-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={href}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                  highlight
                    ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-10">
          All plans include JWT auth · Role-based access control · Multi-tenant isolation
        </p>
      </div>
    </section>
  );
}
