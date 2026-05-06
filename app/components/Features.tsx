import {
  Users, Clock, DollarSign, TrendingUp, Shield, Calendar,
  Briefcase, Building2, ChevronRight, Zap, FileText, Settings,
} from "lucide-react";

const FEATURES = [
  {
    icon: Building2,
    title: "Tenant Management",
    desc: "Multi-tenant SaaS foundation. Each client organisation is fully isolated — create, activate, or deactivate tenants from one Super Admin panel.",
    gradient: "from-slate-600 to-gray-700",
    bg: "bg-slate-50",
    text: "text-slate-600",
    border: "hover:border-slate-200",
  },
  {
    icon: Users,
    title: "User & Role Management",
    desc: "4 system roles (Super Admin, Client Admin, Manager, Employee) plus unlimited custom roles with 30+ granular permissions. Custom roles override system defaults.",
    gradient: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    text: "text-red-600",
    border: "hover:border-red-200",
  },
  {
    icon: Users,
    title: "Employee Management",
    desc: "Full employee lifecycle: onboard → active → terminate. Rich profiles with personal info, job title, department, salary, hire date, and linked user accounts.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: Briefcase,
    title: "Recruitment Pipeline",
    desc: "End-to-end ATS. Visual Kanban pipeline: APPLIED → SCREENING → INTERVIEW → OFFER → HIRED / REJECTED. PHONE, VIDEO, IN_PERSON interview types. PDF offer letters with watermarks.",
    gradient: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "hover:border-purple-200",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    desc: "ANNUAL, SICK, UNPAID and custom leave types. Manager approval workflow: PENDING → APPROVED / REJECTED. Real-time leave balance tracking per employee.",
    gradient: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    desc: "Clock-in / clock-out records per employee. Late arrival detection, absent day flagging, daily and monthly attendance summaries with exportable reports.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    icon: DollarSign,
    title: "Payroll Processing",
    desc: "Monthly payroll runs per tenant. Gross pay, deductions, net pay calculations. Payroll lifecycle: DRAFT → PROCESSED → PAID. Individual payslip PDF generation.",
    gradient: "from-green-500 to-lime-500",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "hover:border-green-200",
  },
  {
    icon: Settings,
    title: "Shift Management",
    desc: "Define shift templates with name, start time, and end time. Assign shifts to employees with effective date ranges. Weekly schedule views per department.",
    gradient: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "hover:border-indigo-200",
  },
  {
    icon: TrendingUp,
    title: "Performance Reviews",
    desc: "Review cycles with configurable periods. Employee self-assessment + manager rating. Goals tracking with completion status. Statuses: DRAFT → IN_PROGRESS → COMPLETED.",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "hover:border-pink-200",
  },
  {
    icon: FileText,
    title: "Reports & PDF Exports",
    desc: "Pipeline reports, candidate profiles, interview summaries, offer letters (cover page + watermark), and payslips — all as PDF. Excel exports for employees and users with styled headers.",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "hover:border-orange-200",
  },
  {
    icon: Shield,
    title: "Approvals & Workflows",
    desc: "Multi-level approval chains across leaves, payroll, and performance. Configurable per tenant. Real-time tracking — no more chasing approvals over email.",
    gradient: "from-gray-600 to-slate-700",
    bg: "bg-gray-50",
    text: "text-gray-600",
    border: "hover:border-gray-200",
  },
  {
    icon: Building2,
    title: "Billing & Subscriptions",
    desc: "Tenant subscription plans: FREE, BASIC, PREMIUM, ENTERPRISE. Invoice generation with line items. Payment status tracking. Plan upgrade and resource limit enforcement.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "hover:border-violet-200",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-18" style={{ marginBottom: "4.5rem" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 mb-5">
            <Zap className="w-3 h-3" />
            12 Modules · 30+ Permissions · Multi-Tenant
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-5">
            One Platform.
            <br />
            <span className="text-red-600">Every HR Function.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-lg leading-relaxed">
            From the moment someone applies to the day they retire — LijiHR handles the entire employee journey with zero spreadsheets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc, bg, text, gradient, border }) => (
            <div
              key={title}
              className={`group relative bg-white border-2 border-gray-100 ${border} rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl`}
              />
              <div
                className={`w-13 h-13 ${bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ width: "52px", height: "52px" }}
              >
                <Icon className={`w-5 h-5 ${text}`} />
              </div>
              <h3 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                {desc}
              </p>
              <div
                className={`mt-5 flex items-center gap-1 ${text} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Learn more
                </span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
