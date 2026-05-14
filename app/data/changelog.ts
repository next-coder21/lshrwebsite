// ─────────────────────────────────────────────────────────────
//  LisHR Development Changelog
//  Managed by: Project Lead Agent
//  Auto-updated at end of each sprint completion
// ─────────────────────────────────────────────────────────────

export type SprintStatus = 'completed' | 'active' | 'queued';
export type ItemStatus = 'done' | 'in_progress' | 'queued';
export type ItemPriority = 'critical' | 'high' | 'medium' | 'low';
export type ItemType = 'security' | 'feature' | 'fix' | 'backend' | 'frontend' | 'data' | 'devops';

export interface ChangelogItem {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  priority: ItemPriority;
  status: ItemStatus;
  files?: string[];
}

export interface Sprint {
  id: string;
  name: string;
  version: string;
  date: string;
  status: SprintStatus;
  summary: string;
  stats: {
    completed: number;
    total: number;
    buildStatus: 'passing' | 'failing' | 'pending';
    tsErrors: number;
  };
  items: ChangelogItem[];
}

export const changelog: Sprint[] = [
  // ── SPRINT 1 ──────────────────────────────────────────────
  {
    id: 'sprint-1',
    name: 'Sprint 1 — Foundation & Security',
    version: '0.1.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'Hardened security, full mockup seed data across all features, lazy routes, error boundaries, and role-based access guards.',
    stats: { completed: 14, total: 14, buildStatus: 'passing', tsErrors: 0 },
    items: [
      {
        id: 's1-01', title: 'JWT secret → environment variable',
        description: 'Hardcoded 256-bit JWT secret removed from source. Now loaded from ${JWT_SECRET} env var with dev fallback.',
        type: 'security', priority: 'critical', status: 'done',
        files: ['LsHRB/src/main/resources/application.yml']
      },
      {
        id: 's1-02', title: 'Database credentials → environment variables',
        description: 'DB URL, username, and password moved to ${DB_URL}, ${DB_PASSWORD} env vars. .env.example created.',
        type: 'security', priority: 'critical', status: 'done',
        files: ['LsHRB/src/main/resources/application.yml', 'LsHRB/.env.example']
      },
      {
        id: 's1-03', title: 'Full mockup seed data — all 12 modules',
        description: 'DataSeeder rewritten: 2 tenants, 15 employees (4 departments), 30 days attendance, 3 payroll records, 5 leave requests, 5 job postings, 3 recruitment candidates, 2 shifts with assignments.',
        type: 'data', priority: 'critical', status: 'done',
        files: ['LsHRB/src/main/java/.../config/DataSeeder.java']
      },
      {
        id: 's1-04', title: 'Global Exception Handler (400/404/500)',
        description: '@RestControllerAdvice maps MethodArgumentNotValidException → 400 field errors, EntityNotFoundException → 404, all others → 500.',
        type: 'backend', priority: 'critical', status: 'done',
        files: ['LsHRB/src/main/java/.../web/exception/GlobalExceptionHandler.java']
      },
      {
        id: 's1-05', title: '@Valid on all request DTOs',
        description: 'EmployeeRequest, LoginRequest, LeaveRequest — added @NotBlank, @Email, @NotNull, @Min constraints. @Valid added to all @RequestBody params.',
        type: 'backend', priority: 'critical', status: 'done',
        files: ['LsHRB/src/main/java/.../dtos/request/EmployeeRequest.java', 'LsHRB/.../controllers/EmployeeController.java']
      },
      {
        id: 's1-06', title: 'RoleGuard — route-level access control',
        description: 'RoleGuard component wraps sensitive routes. SUPER_ADMIN-only: /org/clients, /org/users, /plans/*. CLIENT_ADMIN+: /org/roles.',
        type: 'security', priority: 'critical', status: 'done',
        files: ['LsHRF/src/common/components/RoleGuard.tsx', 'LsHRF/src/router/routes.tsx']
      },
      {
        id: 's1-07', title: 'Lazy-loaded routes + code splitting',
        description: 'All 21+ routes converted to React.lazy() + Suspense. Each page ships as its own JS chunk. PageSpinner fallback added.',
        type: 'frontend', priority: 'high', status: 'done',
        files: ['LsHRF/src/router/routes.tsx']
      },
      {
        id: 's1-08', title: 'Error boundaries — global + per-layout',
        description: 'ErrorBoundary class component wraps both AppRouter and MainLayout <Outlet>. Styled fallback with Try Again button.',
        type: 'frontend', priority: 'high', status: 'done',
        files: ['LsHRF/src/common/components/ErrorBoundary.tsx', 'LsHRF/src/common/components/layout/MainLayout.tsx']
      },
      {
        id: 's1-09', title: 'Replace alert()/prompt() with react-hot-toast',
        description: 'All browser alert() / prompt() / window.confirm() removed from AttendancePage, LeavesPage, PayrollPage, PerformancePage. Replaced with toast.success/toast.error.',
        type: 'frontend', priority: 'high', status: 'done',
        files: ['LsHRF/src/features/attendance/pages/AttendancePage.tsx', 'LsHRF/src/features/leaves/pages/LeavesPage.tsx', 'LsHRF/src/features/payroll/pages/PayrollPage.tsx', 'LsHRF/src/features/performance/pages/PerformancePage.tsx']
      },
      {
        id: 's1-10', title: 'PayrollPage period filter wired',
        description: 'filteredPayrolls was only filtering by searchTerm. Now also filters by filterPeriod.month AND filterPeriod.year.',
        type: 'fix', priority: 'high', status: 'done',
        files: ['LsHRF/src/features/payroll/pages/PayrollPage.tsx']
      },
      {
        id: 's1-11', title: 'Remove as any from applyLeave dispatch',
        description: 'dispatch(applyLeave({...formData} as any)) replaced with explicit typed object. Proper TypeScript typing restored.',
        type: 'fix', priority: 'medium', status: 'done',
        files: ['LsHRF/src/features/leaves/pages/LeavesPage.tsx']
      },
      {
        id: 's1-12', title: 'show-sql: false in production config',
        description: 'show-sql: true was leaking schema structure to logs. Set to false. format_sql also disabled.',
        type: 'security', priority: 'medium', status: 'done',
        files: ['LsHRB/src/main/resources/application.yml']
      },
      {
        id: 's1-13', title: 'Remove console.log from production code',
        description: 'Removed console.log("Client onboarded:", response) and console.log(`Logo compressed...`) from two files.',
        type: 'fix', priority: 'low', status: 'done',
        files: ['LsHRF/src/features/org/pages/ClientListPage.tsx', 'LsHRF/src/features/org/components/LogoUpload.tsx']
      },
      {
        id: 's1-14', title: 'Fix broken /logo.png on Login page',
        description: '<img src="/logo.png"> was a 404. Replaced with an inline styled "L" badge div matching the brand.',
        type: 'fix', priority: 'low', status: 'done',
        files: ['LsHRF/src/features/auth/pages/LoginPage.tsx']
      },
    ]
  },

  // ── SPRINT 2 ──────────────────────────────────────────────
  {
    id: 'sprint-2',
    name: 'Sprint 2 — Platform Stats & UX Hardening',
    version: '0.2.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'Super Admin dashboard with real platform metrics, leave balance cards, today\'s attendance widget, auth on all controllers, and centralized API error handling.',
    stats: { completed: 9, total: 9, buildStatus: 'passing', tsErrors: 0 },
    items: [
      {
        id: 's2-01', title: 'Super Admin Dashboard — Platform Command Center',
        description: 'SuperAdminController + SuperAdminService created. GET /super-admin/stats returns real DB counts: total tenants, active tenants, users, employees, MRR ($99/tenant). DashboardPage renders SuperAdminDashboard for SUPER_ADMIN role with 4 stat cards + Quick Actions.',
        type: 'feature', priority: 'critical', status: 'done',
        files: ['LsHRB/.../controllers/SuperAdminController.java', 'LsHRB/.../services/SuperAdminService.java', 'LsHRF/src/features/dashboard/components/SuperAdminDashboard.tsx']
      },
      {
        id: 's2-02', title: 'Leave Balance Cards',
        description: 'LeaveBalanceResponse DTO + getLeaveBalance() in LeaveService (ChronoUnit.DAYS counting). GET /leaves/balance endpoint added. LeavesPage shows balance cards per leave type with progress bars (allocated/used/remaining).',
        type: 'feature', priority: 'critical', status: 'done',
        files: ['LsHRB/.../services/LeaveService.java', 'LsHRF/src/features/leaves/pages/LeavesPage.tsx']
      },
      {
        id: 's2-03', title: 'Attendance — Today\'s Session Widget',
        description: 'AttendancePage now shows a "Today\'s Session" card above the analytics grid. Fetches today\'s record from /attendance/employee/{id}, displays check-in/out times, and provides context-aware Clock In / Clock Out / Shift Complete button.',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRF/src/features/attendance/pages/AttendancePage.tsx']
      },
      {
        id: 's2-04', title: 'LeaveController — role-based authorization',
        description: '@PreAuthorize added to all endpoints. Status updates (approve/reject) restricted to MANAGER/ADMIN/CLIENT_ADMIN. Regular users can apply and view their own leaves only.',
        type: 'security', priority: 'critical', status: 'done',
        files: ['LsHRB/.../controllers/LeaveController.java']
      },
      {
        id: 's2-05', title: 'PayrollController — role-based authorization + @Valid',
        description: 'processPayroll and updateStatus restricted to CLIENT_ADMIN/ADMIN only. @Valid added to processPayroll @RequestBody.',
        type: 'security', priority: 'critical', status: 'done',
        files: ['LsHRB/.../controllers/PayrollController.java']
      },
      {
        id: 's2-06', title: 'DashboardService — SUPER_ADMIN null crash fixed',
        description: 'getCurrentTenantId() returns null for SUPER_ADMIN (no tenant). Added guard: returns empty stats stub so SUPER_ADMIN hits /super-admin/stats instead.',
        type: 'fix', priority: 'critical', status: 'done',
        files: ['LsHRB/.../services/DashboardService.java']
      },
      {
        id: 's2-07', title: 'DashboardService — monthly budget year filter bug',
        description: 'Budget calculation was filtering by month only — Jan 2025 payrolls counted in Jan 2026 totals. Fixed to filter by both month AND year.',
        type: 'fix', priority: 'high', status: 'done',
        files: ['LsHRB/.../services/DashboardService.java:49']
      },
      {
        id: 's2-08', title: 'Centralized API error handling — extractErrorMessage()',
        description: 'extractErrorMessage() utility added to axiosInstance. All leaveApi and employeeApi methods now catch errors and re-throw with the backend\'s actual error.response.data.message.',
        type: 'fix', priority: 'critical', status: 'done',
        files: ['LsHRF/src/lib/api/axiosInstance.ts', 'LsHRF/src/features/leaves/api/leaveApi.ts', 'LsHRF/src/features/employees/api/employeeApi.ts']
      },
      {
        id: 's2-09', title: 'employeeApi.getMe() — self-service prep',
        description: 'Added getMe() to employeeApi calling GET /employees/me. Returns null on error (graceful degradation). Wired for ProfilePage enhancement in Sprint 3.',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRF/src/features/employees/api/employeeApi.ts']
      },
    ]
  },

  // ── SPRINT 3 ──────────────────────────────────────────────
  {
    id: 'sprint-3',
    name: 'Sprint 3 — Employee Self-Service & Navigation',
    version: '0.3.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'Employee self-service portal via GET /employees/me, enhanced ProfilePage with full HR record, and Sidebar self-service items for USER role.',
    stats: { completed: 3, total: 3, buildStatus: 'passing', tsErrors: 0 },
    items: [
      {
        id: 's3-01', title: 'GET /employees/me — Self-service endpoint',
        description: 'New endpoint resolves the currently logged-in user\'s linked employee record without requiring an explicit UUID. Accessible to all authenticated users.',
        type: 'backend', priority: 'critical', status: 'done',
        files: ['LsHRB/.../controllers/EmployeeController.java', 'LsHRB/.../services/EmployeeService.java']
      },
      {
        id: 's3-02', title: 'ProfilePage — Full employee self-service card',
        description: 'ProfilePage enhanced with employeeApi.getMe() call. Shows Employee ID, designation, department, employment type, join date, reporting manager, and salary (if PAYROLL_VIEW permission).',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRF/src/features/profile/pages/ProfilePage.tsx']
      },
      {
        id: 's3-03', title: 'Sidebar — USER role self-service navigation',
        description: 'My Profile, My Attendance, My Leaves, My Payslips added for non-admin users. Smart deduplication prevents showing items twice when user has explicit VIEW permissions. Sidebar submenu state persists on page refresh (BUG-01 fixed).',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRF/src/common/components/layout/Sidebar/Sidebar.tsx']
      },
    ]
  },

  // ── SPRINT 4 ──────────────────────────────────────────────
  {
    id: 'sprint-4',
    name: 'Sprint 4 — Manager Views & Settings',
    version: '0.4.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'Manager team attendance view (dept-scoped), pending leave approvals panel, and supporting backend endpoints with role-based authorization.',
    stats: { completed: 2, total: 2, buildStatus: 'passing', tsErrors: 0 },
    items: [
      {
        id: 's4-01', title: 'Manager Team Attendance View',
        description: 'GET /attendance/team added to AttendanceController (@PreAuthorize MANAGER/CLIENT_ADMIN). AttendanceService.getTeamAttendance() resolves manager\'s linked employee → department, returns all dept attendance. Frontend: "My Team" / "All Records" tab toggle in AttendancePage for managers.',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRB/.../controllers/AttendanceController.java', 'LsHRB/.../services/AttendanceService.java', 'LsHRB/.../repositories/AttendanceJpaRepository.java', 'LsHRF/src/features/attendance/pages/AttendancePage.tsx']
      },
      {
        id: 's4-02', title: 'Pending Leave Approvals Panel',
        description: 'GET /leaves/pending-approvals added to LeaveController (@PreAuthorize MANAGER/CLIENT_ADMIN). LeaveService.getPendingApprovals() queries by PENDING status + tenantId. Frontend: "Pending Approvals" tab in LeavesPage with badge counter, approve/reject buttons, and full leave details.',
        type: 'feature', priority: 'high', status: 'done',
        files: ['LsHRB/.../controllers/LeaveController.java', 'LsHRB/.../services/LeaveService.java', 'LsHRB/.../repositories/LeaveJpaRepository.java', 'LsHRF/src/features/leaves/pages/LeavesPage.tsx']
      },
    ]
  },

  // ── SPRINT 5 ──────────────────────────────────────────────
  {
    id: 'sprint-5',
    name: 'Sprint 5 — Production Hardening',
    version: '1.0.0',
    date: 'TBD',
    status: 'queued',
    summary: 'Docker containerization, Flyway migrations, Redis caching, rate limiting, structured logging, and final production readiness audit.',
    stats: { completed: 0, total: 6, buildStatus: 'pending', tsErrors: 0 },
    items: [
      { id: 's5-01', title: 'Docker + docker-compose', description: 'Multi-stage Dockerfile for backend + Nginx static serve for frontend. docker-compose with postgres, backend, frontend, healthchecks.', type: 'devops', priority: 'high', status: 'queued' },
      { id: 's5-02', title: 'Flyway migrations', description: 'Enable Flyway. Create V1__init_schema.sql, V2__seed_roles.sql. Set ddl-auto: validate.', type: 'devops', priority: 'high', status: 'queued' },
      { id: 's5-03', title: 'Caffeine/Redis caching', description: '@Cacheable on getTenantById, getPlanById, getActiveRoles. CaffeineCacheManager for dev profile.', type: 'backend', priority: 'medium', status: 'queued' },
      { id: 's5-04', title: 'Rate limiting on /auth/login', description: 'Bucket4j: max 5 attempts per IP per 15 minutes. Return 429 with retry-after header.', type: 'security', priority: 'medium', status: 'queued' },
      { id: 's5-05', title: 'Structured JSON logging', description: 'Logback with JSON encoder for production profile. Log request ID, tenant ID, user ID on each request.', type: 'backend', priority: 'low', status: 'queued' },
      { id: 's5-06', title: 'Spring Boot Actuator health endpoint', description: 'Expose /actuator/health in SecurityConfig permitAll. Required for load balancer health probes.', type: 'devops', priority: 'low', status: 'queued' },
    ]
  }
];

export const getSprintSummary = () => ({
  completed: changelog.filter(s => s.status === 'completed').length,
  active: changelog.filter(s => s.status === 'active').length,
  queued: changelog.filter(s => s.status === 'queued').length,
  totalItems: changelog.reduce((acc, s) => acc + s.items.length, 0),
  completedItems: changelog.reduce((acc, s) => acc + s.stats.completed, 0),
});
