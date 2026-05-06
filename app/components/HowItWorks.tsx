import { Building2, Users, Zap, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Building2,
    title: "Create Your Workspace",
    desc: "Register your organisation, configure departments, roles, and invite your admin team — all in under 5 minutes.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-300",
  },
  {
    step: "02",
    icon: Users,
    title: "Onboard Your People",
    desc: "Add employees — portal accounts are auto-provisioned with secure credentials sent directly to their inbox.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "group-hover:border-red-300",
  },
  {
    step: "03",
    icon: Zap,
    title: "Run HR on Autopilot",
    desc: "Payroll, attendance, leaves, and approvals flow automatically through your configurable workflows.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "group-hover:border-emerald-300",
  },
];

export default function HowItWorks() {
  return (
    <section id="solutions" className="py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-18" style={{ marginBottom: "4.5rem" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            Simple Setup
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-5">
            Up and Running
            <br />
            <span className="text-red-600">in Minutes.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg leading-relaxed">
            No lengthy onboarding. No professional services required. Just sign
            up and your team is live.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33%-20px)] right-[calc(33%-20px)] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-red-300 to-transparent" />
          </div>

          {STEPS.map(({ step, icon: Icon, title, desc, color, bg, border }) => (
            <div key={step} className="text-center group">
              {/* Icon circle */}
              <div className="relative inline-flex mb-7">
                <div
                  className={`w-[104px] h-[104px] bg-white border-2 border-gray-200 ${border} rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full text-[10px] font-black flex items-center justify-center border-2 border-white shadow-md">
                  {parseInt(step)}
                </span>
              </div>

              <h3 className="font-black text-gray-900 text-base uppercase tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-xs mx-auto">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://app.lishr.in"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95"
          >
            Start Your Workspace Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
