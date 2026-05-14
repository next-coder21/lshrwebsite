"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Shield, Users, Building2, CreditCard, Clock, FileText, BarChart3,
  Briefcase, CheckCircle2, Lock, Database, Globe, GitBranch, Server,
  Code2, ChevronRight, AlertTriangle, Key, ArrowDown, ArrowRight,
  LayoutDashboard, UserCheck, Settings, Layers
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = [
  { id: "super-admin", label: "SUPER_ADMIN", color: "bg-red-600", light: "bg-red-50", border: "border-red-200", text: "text-red-700", dot: "bg-red-500", desc: "Platform operator — manages all tenants, plans, billing, and system-wide audit logs.", access: ["Platform stats dashboard", "Tenant onboarding & management", "Plan creation & allocation", "Subscription billing", "Audit logs (Phase 5)"] },
  { id: "client-admin", label: "CLIENT_ADMIN", color: "bg-violet-600", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", dot: "bg-violet-500", desc: "Tenant administrator — full access within their org. Manages employees, payroll, leaves, and settings.", access: ["All HRMS modules", "Employee CRUD", "Payroll processing", "Leave approvals", "Department & role management", "Org settings"] },
  { id: "manager", label: "MANAGER", color: "bg-blue-600", light: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-500", desc: "Department manager — team-scoped access. Reviews leave requests and monitors team attendance.", access: ["Team attendance view (dept-scoped)", "Pending leave approvals", "Performance reviews for team", "Read-only employee list"] },
  { id: "user", label: "USER", color: "bg-emerald-600", light: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500", desc: "Employee self-service — applies for leave, views own attendance, downloads payslips, and manages their profile.", access: ["My Profile (via /employees/me)", "My Attendance history", "My Leave balance & requests", "My Payslips"] },
];

const AUTH_FLOW = [
  { step: "01", label: "POST /auth/login", desc: "Email + password submitted. BCrypt password verified against DB.", icon: Key },
  { step: "02", label: "JWT Issued", desc: "HS512-signed JWT with userId, tenantId, role, and 24h expiry.", icon: Lock },
  { step: "03", label: "Token stored", desc: "Frontend stores token in Redux auth slice. Axios interceptor attaches Bearer header on every request.", icon: Database },
  { step: "04", label: "JwtAuthenticationFilter", desc: "Every request intercepted. Token validated, SecurityContext populated with UserPrincipal.", icon: Shield },
  { step: "05", label: "@PreAuthorize", desc: "Method-level role checks on every controller endpoint. Returns 403 if role insufficient.", icon: CheckCircle2 },
  { step: "06", label: "Tenant isolation", desc: "SecurityUtils.getCurrentTenantId() scopes all DB queries to caller's tenant. Cross-tenant data access is impossible.", icon: Building2 },
];

const MODULES = [
  { icon: BarChart3, label: "Dashboard", color: "text-red-600", bg: "bg-red-50", border: "border-red-100", flows: [{ actor: "SUPER_ADMIN", api: "GET /super-admin/stats", result: "Platform totals: tenants, users, employees, MRR" }, { actor: "CLIENT_ADMIN / MANAGER", api: "GET /dashboard/stats", result: "Tenant totals: headcount, budget, attendance, leave counts" }] },
  { icon: Users, label: "Employee Management", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", flows: [{ actor: "CLIENT_ADMIN", api: "GET / POST / PUT / DELETE /employees", result: "Full CRUD. @Valid on create + update. Excel export." }, { actor: "Any authenticated", api: "GET /employees/me", result: "Self-service — resolves own employee record via linked userId." }] },
  { icon: Clock, label: "Attendance", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", flows: [{ actor: "Any authenticated", api: "POST /attendance/check-in & check-out", result: "Records session. Marks LATE if after 09:15. Calculates work duration." }, { actor: "MANAGER / CLIENT_ADMIN", api: "GET /attendance/team", result: "Department-scoped records via manager's linked employee → department." }] },
  { icon: FileText, label: "Leave Management", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", flows: [{ actor: "Any authenticated", api: "POST /leaves", result: "Apply for leave. Email to employee + tenant admin. Status: PENDING." }, { actor: "MANAGER / CLIENT_ADMIN", api: "PATCH /leaves/{id}/status + GET /leaves/pending-approvals", result: "Approve / reject with email notification. Pending approvals panel." }, { actor: "Any authenticated", api: "GET /leaves/balance", result: "Allocated / used (APPROVED days) / remaining per leave type." }] },
  { icon: CreditCard, label: "Payroll", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", flows: [{ actor: "CLIENT_ADMIN", api: "POST /payroll", result: "Process payroll for employee + month/year. @Valid + @PreAuthorize." }, { actor: "CLIENT_ADMIN", api: "PATCH /payroll/{id}/status", result: "DRAFT → PROCESSED → PAID lifecycle." }] },
  { icon: Briefcase, label: "Recruitment", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100", flows: [{ actor: "CLIENT_ADMIN", api: "POST /jobs", result: "Create job posting: OPEN / CLOSED / DRAFT / PAUSED." }, { actor: "Any", api: "POST /candidates", result: "APPLIED → SCREENING → INTERVIEW → OFFER → HIRED / REJECTED." }] },
];

const TENANT_LIFECYCLE = [
  { step: "1", label: "SUPER_ADMIN creates plan", desc: 'Plan with name, price, limits (maxEmployees, maxUsers). E.g. "Professional — $99/mo".' },
  { step: "2", label: "SUPER_ADMIN onboards tenant", desc: "POST /clients/onboard — Tenant + CLIENT_ADMIN account. Welcome email sent." },
  { step: "3", label: "SUPER_ADMIN allocates plan", desc: "POST /plan-allocations — links plan to tenant. Status ACTIVE." },
  { step: "4", label: "CLIENT_ADMIN logs in", desc: "JWT with tenantId + CLIENT_ADMIN role. All queries auto-scoped." },
  { step: "5", label: "CLIENT_ADMIN builds org", desc: "Departments, employees, leave configs, shifts, user invites." },
  { step: "6", label: "Day-to-day operations", desc: "Attendance, leave approvals, payroll, recruitment, performance reviews." },
];

const STACK = [
  { layer: "Frontend", items: ["React 19", "TypeScript 5.9", "Vite 7", "Redux Toolkit 2", "React Router 7", "TailwindCSS 4"], color: "text-cyan-600", bg: "bg-cyan-50", icon: Globe },
  { layer: "Backend", items: ["Spring Boot 3.2.1", "Java 21", "Spring Security 6", "JWT (HS512)", "JPA / Hibernate", "Hexagonal Architecture"], color: "text-blue-600", bg: "bg-blue-50", icon: Server },
  { layer: "Database", items: ["PostgreSQL (port 5433)", "Multi-tenant via tenantId column", "Flyway (planned)", "ddl-auto: update (dev)"], color: "text-violet-600", bg: "bg-violet-50", icon: Database },
  { layer: "Security", items: ["BCrypt passwords", "JWT HS512 from env var", "Method-level @PreAuthorize", "Tenant data isolation", "@Valid on all requests", "GlobalExceptionHandler"], color: "text-red-600", bg: "bg-red-50", icon: Shield },
];

const SPRINT_SUMMARY = [
  { sprint: "Sprint 1", label: "Foundation & Security", done: 14, color: "bg-emerald-500" },
  { sprint: "Sprint 2", label: "Platform Stats & UX Hardening", done: 9, color: "bg-emerald-500" },
  { sprint: "Sprint 3", label: "Employee Self-Service & Nav", done: 3, color: "bg-emerald-500" },
  { sprint: "Sprint 4", label: "Manager Views", done: 2, color: "bg-emerald-500" },
  { sprint: "Sprint 5+", label: "Settings, Payroll Calc, Docker", done: 0, color: "bg-gray-600" },
];

// ─── Flow chart nodes ─────────────────────────────────────────────────────────

function Box({ label, sub, color = "bg-white border-gray-200", text = "text-gray-900", subText = "text-gray-400", icon: Icon, small }: { label: string; sub?: string; color?: string; text?: string; subText?: string; icon?: React.ElementType; small?: boolean }) {
  return (
    <div className={`rounded-xl border px-4 py-3 shadow-sm flex items-center gap-2 ${color} ${small ? "text-[10px]" : "text-xs"}`}>
      {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${text}`} />}
      <div>
        <p className={`font-black uppercase tracking-tight leading-none ${text} ${small ? "text-[9px]" : "text-[11px]"}`}>{label}</p>
        {sub && <p className={`mt-0.5 font-bold ${subText} ${small ? "text-[8px]" : "text-[9px]"} uppercase tracking-widest`}>{sub}</p>}
      </div>
    </div>
  );
}

function Arrow({ down, label }: { down?: boolean; label?: string }) {
  return (
    <div className={`flex ${down ? "flex-col" : "flex-row"} items-center gap-1 flex-shrink-0`}>
      {label && <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{label}</span>}
      {down
        ? <ArrowDown className="w-5 h-5 text-gray-500" />
        : <ArrowRight className="w-5 h-5 text-gray-500" />}
    </div>
  );
}

function DiamondNode({ label }: { label: string }) {
  return (
    <div className="relative flex items-center justify-center w-28 h-28 flex-shrink-0">
      <div className="absolute inset-2 rotate-45 rounded-lg bg-amber-50 border-2 border-amber-300" />
      <p className="relative text-[9px] font-black text-amber-800 uppercase tracking-widest text-center leading-tight z-10 px-4">{label}</p>
    </div>
  );
}

function SectionHeader({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <div className="border-b border-gray-100 pb-6">
      <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">{label}</p>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">{title}</h2>
      <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── Flowchart section ────────────────────────────────────────────────────────

function FlowChart() {
  return (
    <div className="space-y-16 py-4">

      {/* 1. Auth pipeline */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">1 — Authentication Pipeline</p>
        <div className="flex flex-col items-center gap-0">
          {/* Row 1: Browser → Controller → Decision */}
          <div className="flex flex-wrap justify-center items-center gap-3 w-full">
            <Box label="Browser / App" sub="User submits login" color="bg-gray-900 border-gray-700" text="text-white" subText="text-gray-400" icon={Globe} />
            <Arrow label="POST /auth/login" />
            <Box label="AuthController" sub="Spring Boot" color="bg-blue-50 border-blue-200" text="text-blue-800" icon={Server} />
            <Arrow label="BCrypt verify" />
            <DiamondNode label="Password valid?" />
          </div>
          {/* Row 2: YES / NO branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-2xl">
            <div className="flex flex-col items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">YES — Success Path</span>
              <Arrow down />
              <Box label="JWT Issued" sub="HS512 · 24h" color="bg-emerald-50 border-emerald-200" text="text-emerald-800" icon={Lock} />
              <Arrow down label="stored in Redux" />
              <Box label="Axios Interceptor" sub="Bearer header on all requests" color="bg-cyan-50 border-cyan-200" text="text-cyan-800" icon={Shield} />
            </div>
            <div className="flex flex-col items-center gap-2 bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest">NO — Failure Path</span>
              <Arrow down />
              <Box label="401 Unauthorized" sub="error.response.data.message" color="bg-rose-50 border-rose-200" text="text-rose-700" icon={AlertTriangle} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Request pipeline */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">2 — Every API Request Pipeline</p>
        {/* Linear top row */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
          <Box label="API Request" sub="with Bearer token" color="bg-gray-100 border-gray-300" text="text-gray-800" icon={ArrowRight} />
          <Arrow />
          <Box label="JwtAuthFilter" sub="validates token" color="bg-amber-50 border-amber-200" text="text-amber-800" icon={Shield} />
          <Arrow />
          <DiamondNode label="Token valid?" />
        </div>
        {/* Two branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* YES branch */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <span className="text-[9px] font-black text-blue-700 uppercase tracking-widest">YES — Token valid</span>
            <Arrow down />
            <Box label="SecurityContext" sub="UserPrincipal set" color="bg-blue-50 border-blue-200" text="text-blue-800" icon={UserCheck} />
            <Arrow down />
            <Box label="@PreAuthorize" sub="role check" color="bg-violet-50 border-violet-200" text="text-violet-800" icon={Lock} />
            <Arrow down />
            <DiamondNode label="Role sufficient?" />
            <div className="grid grid-cols-2 gap-3 mt-2 w-full">
              <div className="flex flex-col items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                <span className="text-[8px] font-black text-emerald-700 uppercase tracking-widest">YES</span>
                <Arrow down />
                <Box label="Controller" sub="service logic" color="bg-emerald-50 border-emerald-200" text="text-emerald-800" icon={Settings} small />
                <Arrow down />
                <Box label="TenantId scoped" sub="DB query" color="bg-emerald-100 border-emerald-300" text="text-emerald-900" icon={Database} small />
              </div>
              <div className="flex flex-col items-center gap-2 bg-rose-50 border border-rose-200 rounded-xl p-3">
                <span className="text-[8px] font-black text-rose-700 uppercase tracking-widest">NO</span>
                <Arrow down />
                <Box label="403 Forbidden" sub="access denied" color="bg-rose-50 border-rose-200" text="text-rose-700" icon={AlertTriangle} small />
              </div>
            </div>
          </div>
          {/* NO branch */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest">NO — Token invalid / expired</span>
            <Arrow down />
            <Box label="401 Unauthorized" sub="token expired / invalid" color="bg-rose-50 border-rose-200" text="text-rose-700" icon={AlertTriangle} />
          </div>
        </div>
      </div>

      {/* 3. Role → dashboard fork */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">3 — Login → Role-based Dashboard Fork</p>
        <div className="flex flex-col items-center gap-0">
          <Box label="POST /auth/login → JWT" sub="userId · tenantId · role" color="bg-gray-900 border-gray-700" text="text-white" subText="text-gray-400" icon={Lock} />
          <Arrow down label="role check" />
          <DiamondNode label="Which role?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 w-full">
            {[
              { role: "SUPER_ADMIN", color: "bg-red-50 border-red-200", text: "text-red-800", modules: ["Platform Stats", "Tenant Mgmt", "Plan Mgmt", "Billing", "Audit Logs"], api: "GET /super-admin/stats" },
              { role: "CLIENT_ADMIN", color: "bg-violet-50 border-violet-200", text: "text-violet-800", modules: ["Dashboard", "Employees", "Payroll", "Leaves", "Settings"], api: "GET /dashboard/stats" },
              { role: "MANAGER", color: "bg-blue-50 border-blue-200", text: "text-blue-800", modules: ["Dashboard", "Team Attendance", "Pending Approvals", "Performance"], api: "GET /dashboard/stats" },
              { role: "USER", color: "bg-emerald-50 border-emerald-200", text: "text-emerald-800", modules: ["My Profile", "My Attendance", "My Leaves", "My Payslips"], api: "GET /employees/me" },
            ].map((r) => (
              <div key={r.role} className={`rounded-2xl border p-4 ${r.color}`}>
                <span className={`text-[9px] font-black uppercase tracking-widest ${r.text} block mb-3`}>{r.role}</span>
                <code className="text-[8px] font-mono text-gray-500 block mb-3">{r.api}</code>
                <ul className="space-y-1.5">
                  {r.modules.map((m, mi) => (
                    <li key={`${r.role}-${mi}`} className={`text-[9px] font-black uppercase tracking-widest ${r.text} flex items-center gap-1.5`}>
                      <span className="w-1 h-1 rounded-full bg-current flex-shrink-0" />{m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Employee lifecycle */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">4 — Employee Record Lifecycle</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 items-center">
          {[
            { label: "Create Employee", sub: "POST /employees", color: "bg-blue-50 border-blue-200", text: "text-blue-800" },
            { label: "Link User Account", sub: "linked_user_id FK", color: "bg-blue-100 border-blue-300", text: "text-blue-900" },
            { label: "Assign Department", sub: "department_id FK", color: "bg-cyan-50 border-cyan-200", text: "text-cyan-800" },
            { label: "Assign Shift", sub: "POST /shifts/assign", color: "bg-amber-50 border-amber-200", text: "text-amber-800" },
            { label: "Clock In / Out", sub: "POST /attendance/*", color: "bg-emerald-50 border-emerald-200", text: "text-emerald-800" },
            { label: "Apply Leave", sub: "POST /leaves", color: "bg-violet-50 border-violet-200", text: "text-violet-800" },
            { label: "Payroll Processed", sub: "POST /payroll", color: "bg-pink-50 border-pink-200", text: "text-pink-800" },
          ].map((node, i) => (
            <div key={node.label} className={`rounded-xl border p-3 ${node.color} relative`}>
              <span className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-gray-800 text-white rounded-full text-[8px] font-black flex items-center justify-center">{i + 1}</span>
              <p className={`text-[9px] font-black uppercase tracking-tight ${node.text}`}>{node.label}</p>
              <p className="text-[8px] font-bold text-gray-400 mt-0.5">{node.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-3 text-center">Steps 1 → 7 in order</p>
      </div>

      {/* 5. Leave approval flow */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">5 — Leave Request & Approval Flow</p>
        <div className="flex flex-col items-center gap-0 max-w-lg mx-auto">
          {[
            { label: "Employee applies", sub: "POST /leaves → status: PENDING", color: "bg-blue-50 border-blue-200", text: "text-blue-800", icon: Users },
            null,
            { label: "Email sent to HR + Admin", sub: "via EmailPort (SMTP)", color: "bg-gray-100 border-gray-200", text: "text-gray-700", icon: FileText },
            null,
            { label: "Manager / CLIENT_ADMIN", sub: "sees Pending Approvals tab", color: "bg-violet-50 border-violet-200", text: "text-violet-800", icon: UserCheck },
          ].map((item, i) => item === null
            ? <Arrow key={i} down />
            : <Box key={(item as { label: string }).label} {...(item as Parameters<typeof Box>[0])} />
          )}
          <div className="flex gap-8 mt-2">
            <div className="flex flex-col items-center gap-2">
              <Arrow down label="APPROVE" />
              <Box label="Status → APPROVED" sub="email to employee" color="bg-emerald-50 border-emerald-200" text="text-emerald-800" icon={CheckCircle2} small />
              <Arrow down />
              <Box label="Balance deducted" sub="usedDays += duration" color="bg-emerald-100 border-emerald-300" text="text-emerald-900" small />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Arrow down label="REJECT" />
              <Box label="Status → REJECTED" sub="email to employee" color="bg-rose-50 border-rose-200" text="text-rose-700" icon={AlertTriangle} small />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Tenant setup flow */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">6 — Tenant Onboarding Flow</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: "1", label: "Create Plan", sub: "POST /plans", color: "bg-red-50 border-red-200", text: "text-red-800", icon: CreditCard, by: "SUPER_ADMIN" },
            { step: "2", label: "Onboard Tenant", sub: "POST /clients/onboard", color: "bg-red-100 border-red-300", text: "text-red-900", icon: Building2, by: "SUPER_ADMIN" },
            { step: "3", label: "Allocate Plan", sub: "POST /plan-allocations", color: "bg-orange-50 border-orange-200", text: "text-orange-800", icon: Layers, by: "SUPER_ADMIN" },
            { step: "4", label: "CLIENT_ADMIN Login", sub: "JWT with tenantId", color: "bg-violet-50 border-violet-200", text: "text-violet-800", icon: Lock, by: "CLIENT_ADMIN" },
            { step: "5", label: "Build Org Structure", sub: "Dept · Employees · Configs", color: "bg-blue-50 border-blue-200", text: "text-blue-800", icon: Users, by: "CLIENT_ADMIN" },
            { step: "6", label: "Live Operations", sub: "Attendance · Leaves · Payroll", color: "bg-emerald-50 border-emerald-200", text: "text-emerald-800", icon: BarChart3, by: "CLIENT_ADMIN" },
          ].map((node) => (
            <div key={node.step} className={`rounded-2xl border p-4 flex flex-col gap-2 ${node.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Step {node.step}</span>
                <span className={`text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full ${node.by === "SUPER_ADMIN" ? "bg-red-100 text-red-700" : "bg-violet-100 text-violet-700"}`}>{node.by}</span>
              </div>
              <Box label={node.label} sub={node.sub} color={`${node.color} border-0 shadow-none px-0 py-0`} text={node.text} icon={node.icon} small />
            </div>
          ))}
        </div>
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-3">Steps 1–3: SUPER_ADMIN · Steps 4–6: CLIENT_ADMIN</p>
      </div>

      {/* 7. Recruitment pipeline */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">7 — Recruitment Kanban Pipeline</p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {[
            { label: "APPLIED", color: "bg-gray-100 border-gray-300", text: "text-gray-700" },
            { label: "SCREENING", color: "bg-blue-50 border-blue-200", text: "text-blue-700" },
            { label: "INTERVIEW", color: "bg-amber-50 border-amber-200", text: "text-amber-700" },
            { label: "OFFER", color: "bg-violet-50 border-violet-200", text: "text-violet-700" },
          ].reduce<React.ReactNode[]>((acc, node, i, arr) => {
            acc.push(
              <div key={node.label} className={`px-5 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest ${node.color} ${node.text}`}>
                {node.label}
              </div>
            );
            if (i < arr.length - 1) acc.push(<Arrow key={`r${i}`} />);
            return acc;
          }, [])}
          <Arrow />
          <div className="flex flex-col gap-2">
            <div className="px-5 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-[10px] font-black uppercase tracking-widest text-emerald-700">HIRED ✓</div>
            <div className="px-5 py-3 rounded-xl border border-rose-200 bg-rose-50 text-[10px] font-black uppercase tracking-widest text-rose-700">REJECTED ✕</div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Architecture Reference ───────────────────────────────────────────────────

function ArchitectureReference() {
  return (
    <div className="space-y-24">
      <section>
        <SectionHeader label="01 — Roles & Access" title="Who can do what" desc="LisHR has four built-in roles. Access is enforced at the Spring Security method level via @PreAuthorize — not just on the frontend." />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {ROLES.map((r) => (
            <div key={r.id} className={`rounded-2xl border ${r.border} ${r.light} p-6`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${r.color}`}>{r.label}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{r.desc}</p>
              <ul className="space-y-1.5">
                {r.access.map((a, ai) => (
                  <li key={`${r.id}-${ai}`} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${r.dot}`} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="02 — Authentication Flow" title="Login → JWT → Tenant isolation" desc="Every request goes through the same six-step security pipeline. No endpoint is unprotected." />
        <div className="mt-10 relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-100" />
          <div className="space-y-6">
            {AUTH_FLOW.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="flex gap-5 relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center z-10">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{s.step}</span>
                      <code className="text-xs font-black text-gray-900">{s.label}</code>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <SectionHeader label="03 — Module API Flows" title="Every endpoint, every actor" desc="What each role can call, what the backend does, and what comes back. Tenant isolation is implicit on every endpoint." />
        <div className="mt-10 space-y-8">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className={`px-6 py-4 border-b border-gray-100 flex items-center gap-3 ${m.bg}`}>
                  <div className={`w-8 h-8 rounded-xl ${m.bg} border ${m.border} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${m.color}`} />
                  </div>
                  <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">{m.label}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {m.flows.map((f, i) => (
                    <div key={i} className="px-6 py-4 grid md:grid-cols-[160px_220px_1fr] gap-3 items-start">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest w-fit ${f.actor.includes("SUPER") ? "bg-red-100 text-red-700" : f.actor.includes("CLIENT") ? "bg-violet-100 text-violet-700" : f.actor.includes("MANAGER") ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>{f.actor}</span>
                      <code className="text-[11px] font-black text-gray-800 bg-gray-50 px-2 py-1 rounded-lg">{f.api}</code>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.result}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader label="04 — Tenant Lifecycle" title="From platform to active org" desc="How a new customer goes from zero to a fully operational HRMS in six steps." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TENANT_LIFECYCLE.map((t) => (
            <div key={t.step} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">{t.step}</div>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mt-2 mb-2">{t.label}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="05 — Tech Stack" title="Every layer, every version" desc="Exact versions in production as of Sprint 4." />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {STACK.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.layer} className={`rounded-2xl border border-gray-100 ${s.bg} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${s.color}`}>{s.layer}</span>
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader label="06 — Data Model" title="How entities relate" desc="Core relationships to understand before reading any service code." />
        <div className="mt-10 bg-gray-950 text-white rounded-3xl p-8 font-mono text-xs leading-relaxed space-y-4">
          {[
            ["Tenant", "→ has many →", "User, Employee, Department, Leave, Attendance, Payroll, Shift"],
            ["Employee", "→ linked to →", "User (OneToOne via linked_user_id) — enables /employees/me resolution"],
            ["Employee", "→ belongs to →", "Department (ManyToOne) — used by team attendance scoping"],
            ["Leave", "→ references →", "LeaveTypeConfig (type), Employee (applicant), Tenant (isolation)"],
            ["Attendance", "→ references →", "Employee, Tenant — date + employeeId unique per tenant per day"],
            ["PlanAllocation", "→ links →", "Plan ↔ Tenant — tracks maxEmployees, maxUsers, billing status"],
            ["Payroll", "→ references →", "Employee, Tenant — month + year filter prevents cross-year pollution"],
          ].map(([entity, rel, targets], di) => (
            <div key={di} className="flex flex-wrap gap-x-2 gap-y-0.5 items-center">
              <span className="text-red-400 font-black">{entity}</span>
              <span className="text-gray-500">{rel}</span>
              <span className="text-gray-300">{targets}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="07 — Test Accounts" title="Ready-to-use seed data" desc="Seeded by DataSeeder on every fresh boot. Idempotent — safe to re-run." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { email: "superadmin@lishr.com", password: "Admin@123", role: "SUPER_ADMIN", desc: "Platform admin. No tenantId. Uses /super-admin/stats.", color: "border-red-200 bg-red-50", badge: "bg-red-600" },
            { email: "priya.sharma@techvista.com", password: "Admin@123", role: "CLIENT_ADMIN", desc: "TechVista tenant admin. Full HRMS access for their org.", color: "border-violet-200 bg-violet-50", badge: "bg-violet-600" },
            { email: "Any seeded employee email", password: "Admin@123", role: "USER", desc: "Self-service access. 15 employees seeded across 4 departments.", color: "border-emerald-200 bg-emerald-50", badge: "bg-emerald-600" },
          ].map((a) => (
            <div key={a.role} className={`rounded-2xl border p-6 ${a.color}`}>
              <span className={`inline-flex px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white mb-3 ${a.badge}`}>{a.role}</span>
              <p className="text-xs font-black text-gray-900 mb-0.5">{a.email}</p>
              <p className="text-[10px] font-bold text-gray-500 mb-3">Password: <code className="bg-white px-1.5 py-0.5 rounded text-gray-700">{a.password}</code></p>
              <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-black text-amber-900 uppercase tracking-tight">Reference document — not user-facing</p>
          <p className="text-xs text-amber-700 mt-1 leading-relaxed">This page is an internal architecture reference for the LisHR development team. API paths, role names, and data structures reflect Sprint 4 (v0.4.0) and will be updated automatically as sprints complete.</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page shell ───────────────────────────────────────────────────────────────

export default function FlowPageClient() {
  const [tab, setTab] = useState<"arch" | "flow">("arch");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.1),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6">
            <Code2 className="w-3 h-3 text-red-400" />
            Architecture Reference — LisHR v0.4.0
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-none">
            Application <span className="text-red-500">Flow</span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed mb-12">
            End-to-end reference for every role, module, API endpoint, data flow, and security decision in LisHR HRMS.
          </p>

          {/* Sprint progress */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Development Progress</p>
            <div className="space-y-3">
              {SPRINT_SUMMARY.map((s) => (
                <div key={s.sprint} className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-gray-400 w-20 flex-shrink-0">{s.sprint}</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: s.done > 0 ? "100%" : "0%" }} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 w-48 hidden md:block">{s.label}</span>
                  <span className="text-[10px] font-black text-white w-10 text-right">{s.done > 0 ? `${s.done} ✓` : "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab switcher */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex">
            <button
              onClick={() => setTab("arch")}
              className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest border-b-2 transition-all ${tab === "arch" ? "border-red-600 text-red-600" : "border-transparent text-gray-400 hover:text-gray-700"}`}
            >
              Architecture Reference
            </button>
            <button
              onClick={() => setTab("flow")}
              className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest border-b-2 transition-all ${tab === "flow" ? "border-red-600 text-red-600" : "border-transparent text-gray-400 hover:text-gray-700"}`}
            >
              Flow Chart
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {tab === "arch" ? <ArchitectureReference /> : <FlowChart />}
      </div>

      <Footer />
    </div>
  );
}
