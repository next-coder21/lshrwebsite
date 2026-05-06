import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { Users, Clock, DollarSign, FileText, BarChart3, Briefcase, Shield, Bell, Globe, Zap, Lock, Layers, Settings, TrendingUp, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — LijiHR",
  description: "Every HR function in one platform — recruitment pipeline, payroll, attendance, leaves, shifts, performance reviews, and more. A Liji Groups product.",
};

const MODULES = [
  {
    id: "recruitment",
    icon: Briefcase,
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    label: "Recruitment Pipeline",
    headline: "Hire faster with a full-stack ATS.",
    description: "End-to-end applicant tracking with a visual Kanban pipeline. Track every candidate from application to offer, schedule interviews, and fire off branded PDF offer letters — all inside LijiHR.",
    points: [
      "Job board: FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, REMOTE",
      "Job statuses: OPEN, CLOSED, DRAFT, PAUSED",
      "Kanban pipeline: APPLIED → SCREENING → INTERVIEW → OFFER → HIRED / REJECTED",
      "Interview types: PHONE, VIDEO, IN_PERSON with interviewer assignment",
      "1–5 star rating and feedback per interview",
      "PDF offer letter with cover page + watermark",
      "Pipeline summary report and candidate profile PDF",
    ],
  },
  {
    id: "employees",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    label: "Employee Management",
    headline: "Your entire workforce, perfectly organised.",
    description: "Full employee lifecycle management — from the day they join to the day they leave. Rich profiles linked to system user accounts, with department, salary, and hire date tracking.",
    points: [
      "Full profile: personal info, job title, department, salary, hire date",
      "Link employees to system user accounts",
      "Lifecycle: onboard → active → terminate",
      "Avatar / photo URL support",
      "Search and department filter",
      "Excel export with styled headers (Slate-800 background)",
    ],
  },
  {
    id: "attendance",
    icon: Clock,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    label: "Attendance Tracking",
    headline: "Time tracking built for real workplaces.",
    description: "Clock-in / clock-out per employee with daily and monthly summaries. Late arrival detection and absent day flagging ensure nothing slips through.",
    points: [
      "Clock-in / clock-out records per employee",
      "Daily attendance log table",
      "Monthly attendance summary",
      "Late arrival detection",
      "Absent day flagging",
      "Export-ready timesheets",
    ],
  },
  {
    id: "payroll",
    icon: DollarSign,
    color: "from-green-500 to-lime-500",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    label: "Payroll Processing",
    headline: "Payroll processed in minutes, not days.",
    description: "Monthly payroll runs per tenant with automatic gross pay, deductions, and net pay calculation. Every employee gets a downloadable PDF payslip.",
    points: [
      "Monthly payroll runs scoped per tenant",
      "Gross pay, deductions, net pay calculation",
      "Payroll lifecycle: DRAFT → PROCESSED → PAID",
      "Individual payslip PDF generation",
      "Payslip download from employee portal",
      "Full payroll revision history",
    ],
  },
  {
    id: "leaves",
    icon: FileText,
    color: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "Leave Management",
    headline: "Approvals without the back-and-forth.",
    description: "ANNUAL, SICK, UNPAID and custom leave types with manager approval workflows. Employees self-serve; managers approve in one click. Real-time balance visibility.",
    points: [
      "Leave types: ANNUAL, SICK, UNPAID, and custom",
      "Manager approval workflow: PENDING → APPROVED / REJECTED",
      "Leave balance tracking per employee",
      "Calendar-style date range picker",
      "Leave balance summary cards",
      "Department-level leave calendar",
    ],
  },
  {
    id: "shifts",
    icon: Settings,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    label: "Shift Management",
    headline: "Schedules that run themselves.",
    description: "Define shift templates with names and times, assign them to employees with effective date ranges, and view your full team's weekly schedule at a glance.",
    points: [
      "Shift templates: name, start time, end time",
      "Assign shifts to employees with date ranges",
      "Weekly schedule calendar view",
      "Department-based schedule filtering",
      "Shift conflict detection",
      "Schedule export per period",
    ],
  },
  {
    id: "performance",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    label: "Performance Reviews",
    headline: "360° feedback without the paperwork.",
    description: "Structured review cycles with employee self-assessment and manager ratings. Goals with completion tracking. Review statuses guide every stage of the cycle.",
    points: [
      "Review cycles with configurable periods",
      "Employee self-assessment + manager rating",
      "Goals tracking with completion status",
      "Review statuses: DRAFT → IN_PROGRESS → COMPLETED",
      "Historical review archive per employee",
      "Performance trend analytics",
    ],
  },
  {
    id: "roles",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    label: "Roles & Permissions",
    headline: "Permissions that actually make sense.",
    description: "4 system roles out of the box plus unlimited custom roles per organisation. Custom roles carry 30+ granular permissions and fully override system defaults.",
    points: [
      "System roles: SUPER_ADMIN, CLIENT_ADMIN, MANAGER, EMPLOYEE",
      "Custom roles with granular permission sets",
      "30+ permissions: RECRUITMENT_VIEW/MANAGE, PAYROLL_VIEW/MANAGE, LEAVE_APPROVE…",
      "Custom roles override system role defaults",
      "Per-user role assignment with badge display",
      "Permission grid UI for visual assignment",
    ],
  },
];

const PLATFORM_FEATURES = [
  { icon: Shield, label: "JWT Security", desc: "HMAC-SHA signed tokens with BCrypt password hashing. Stateless sessions. Method-level @PreAuthorize on every endpoint." },
  { icon: Globe, label: "Multi-Tenancy", desc: "Every resource is scoped to a tenantId extracted from the JWT. Zero cross-tenant data leakage — enforced at the service layer." },
  { icon: Bell, label: "Email Engine", desc: "HTTP-based mail adapter. All email failures are caught and logged — HR operations continue even if the mail service is down." },
  { icon: Zap, label: "Hexagonal Architecture", desc: "Domain layer is completely decoupled from Spring, JPA, and HTTP. Business logic lives in pure Java — fully testable in isolation." },
  { icon: Lock, label: "Approval Workflows", desc: "Multi-level approval chains configurable per tenant for leaves, payroll, and performance reviews. Real-time tracking at every stage." },
  { icon: Layers, label: "REST API + Swagger", desc: "Full OpenAPI 2.3.0 documentation at /swagger-ui.html. Every endpoint documented with request/response schemas." },
];

const TECH_STACK = [
  { layer: "Backend", items: ["Java 21 (LTS)", "Spring Boot 3.2.1", "PostgreSQL 16", "Spring Security + JJWT 0.12.3", "iText 5 (PDF)", "Apache POI 5 (Excel)"] },
  { layer: "Frontend", items: ["React 19.2.0", "TypeScript 5.9.3", "Vite 7.2.4", "Redux Toolkit 2.11.2", "Tailwind CSS 4.1.18", "React Router DOM 7.13.0"] },
];

export default function FeaturesPage() {
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
            12 Modules · A Liji Groups Product
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
            Every HR tool<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
              your team needs.
            </span>
          </h1>
          <p className="text-gray-400 font-medium text-lg max-w-xl mx-auto leading-relaxed">
            From the first job posting to the last payslip — LijiHR covers every step of the employee journey in one production-grade platform.
          </p>
        </div>
      </section>

      {/* Module sections */}
      <section className="py-8">
        {MODULES.map(({ id, icon: Icon, color, bg, iconColor, label, headline, description, points }, idx) => (
          <div key={id} id={id} className={`py-24 px-6 ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
            <div className={`max-w-6xl mx-auto flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}>
              {/* Text */}
              <div className="flex-1">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${bg} rounded-lg mb-5`}>
                  <Icon className={`w-4 h-4 ${iconColor}`} />
                  <span className={`text-[10px] font-black uppercase tracking-widest ${iconColor}`}>{label}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">{headline}</h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">{description}</p>
                <ul className="space-y-3">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Visual */}
              <div className="flex-1 w-full max-w-lg">
                <div className={`bg-gradient-to-br ${color} p-0.5 rounded-3xl shadow-2xl`}>
                  <div className="bg-gray-900 rounded-[22px] p-6 min-h-[320px] flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <div className="flex-1 h-5 bg-white/5 rounded-md ml-2" />
                    </div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg`} style={{ opacity: 0.7 - i * 0.1 }} />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 bg-white/10 rounded-full" style={{ width: `${85 - i * 10}%` }} />
                          <div className="h-2 bg-white/5 rounded-full" style={{ width: `${60 - i * 8}%` }} />
                        </div>
                        <div className="w-16 h-6 bg-white/5 rounded-lg" />
                      </div>
                    ))}
                    <div className={`mt-auto h-2 bg-gradient-to-r ${color} rounded-full opacity-40`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">Built on a world-class stack.</h2>
            <p className="text-gray-500 font-medium">Production-grade technologies chosen for reliability and performance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TECH_STACK.map(({ layer, items }) => (
              <div key={layer} className="bg-gray-950 rounded-3xl p-8 border border-white/5">
                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-5">{layer}</p>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform-wide features */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4">Enterprise-grade under the hood.</h2>
            <p className="text-gray-500 font-medium max-w-lg mx-auto">Every module is backed by infrastructure you can trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLATFORM_FEATURES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 transition-colors">
                <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-sm font-black text-white mb-2">{label}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
