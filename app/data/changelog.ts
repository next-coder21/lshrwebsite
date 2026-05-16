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
    date: '2026-05-14',
    status: 'completed',
    summary: 'Docker containerization, HikariCP connection pooling, Spring Boot Actuator, JWT security hardening, CORS parameterization, Bucket4j rate limiting, dev/prod YAML split, and PayrollService delete fix.',
    stats: { completed: 8, total: 8, buildStatus: 'passing', tsErrors: 0 },
    items: [
      { id: 's5-01', title: 'Docker + docker-compose', description: 'Dockerfile (eclipse-temurin:21-jre-alpine) + docker-compose with postgres:16-alpine, backend, healthchecks, and env-var-only secrets. .env.example template created.', type: 'devops', priority: 'high', status: 'done', files: ['LsHRB/Dockerfile', 'docker-compose.yml', '.env.example'] },
      { id: 's5-02', title: 'HikariCP connection pool config', description: 'max-pool-size 10 (dev) / 20 (prod), min-idle 3/5, connection-timeout 30s, idle-timeout 10min, max-lifetime 30min. Prevents connection exhaustion under load.', type: 'backend', priority: 'high', status: 'done', files: ['LsHRB/src/main/resources/application.yml', 'LsHRB/src/main/resources/application-prod.yml'] },
      { id: 's5-03', title: 'Spring Boot Actuator health endpoint', description: '/actuator/health and /actuator/info exposed via SecurityConfig permitAll. Required for load balancer health probes. show-details: never in production.', type: 'devops', priority: 'high', status: 'done', files: ['LsHRB/src/main/resources/application.yml', 'LsHRB/.../infrastructure/security/SecurityConfig.java'] },
      { id: 's5-04', title: 'JWT secret security hardening', description: 'Removed fallback default from application.yml. Dev fallback moved to application-dev.yml only. Production requires explicit JWT_SECRET env var — no hardcoded fallback.', type: 'security', priority: 'critical', status: 'done', files: ['LsHRB/src/main/resources/application.yml', 'LsHRB/src/main/resources/application-dev.yml', 'LsHRB/src/main/resources/application-prod.yml'] },
      { id: 's5-05', title: 'CORS parameterization', description: 'CORS allowed origin reads from ${portal.url} (defaults to localhost:5173 in dev, set from PORTAL_URL env var in prod). Eliminates hardcoded localhost in SecurityConfig.', type: 'security', priority: 'high', status: 'done', files: ['LsHRB/.../infrastructure/security/SecurityConfig.java'] },
      { id: 's5-06', title: 'Bucket4j rate limiting', description: 'RateLimitFilter (OncePerRequestFilter) with ConcurrentHashMap buckets per IP. /auth/login: 10 req/min. /auth/forgot-password: 3 req/min. Returns 429 with Retry-After header.', type: 'security', priority: 'medium', status: 'done', files: ['LsHRB/.../infrastructure/web/filter/RateLimitFilter.java'] },
      { id: 's5-07', title: 'Dev/Prod YAML profile split', description: 'application-dev.yml: Swagger enabled, JWT dev fallback. application-prod.yml: ddl-auto: validate, HikariCP max 20, only health actuator, WARN logging, seeder disabled, Swagger disabled.', type: 'devops', priority: 'medium', status: 'done', files: ['LsHRB/src/main/resources/application-dev.yml', 'LsHRB/src/main/resources/application-prod.yml'] },
      { id: 's5-08', title: 'DashboardService int→Double fix', description: 'Fixed incompatible types compile error: monthlyPayroll(0) and attendanceRate(0) changed to 0.0. PayrollService.deletePayroll now calls payrollRepository.deleteById() instead of being a no-op.', type: 'fix', priority: 'critical', status: 'done', files: ['LsHRB/.../services/DashboardService.java', 'LsHRB/.../services/PayrollService.java'] },
    ]
  },

  // ── SPRINT 6 ──────────────────────────────────────────────
  {
    id: 'sprint-6',
    name: 'Sprint 6 — Advanced Backend + Auth Features',
    version: '1.1.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'Password reset flow (forgot/reset endpoints), change password, bulk payroll processing, iText PDF payslip generation, enhanced GlobalExceptionHandler with structured error bodies, and frontend auth pages.',
    stats: { completed: 9, total: 9, buildStatus: 'passing', tsErrors: 0 },
    items: [
      { id: 's6-01', title: 'Forgot Password / Reset Password flow', description: 'POST /auth/forgot-password creates PasswordResetToken (30min TTL), sends reset email with portal link. POST /auth/reset-password validates token, updates BCrypt hash, marks token used. Flyway migration V8 for password_reset_tokens table.', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../services/PasswordResetService.java', 'LsHRB/.../controllers/AuthController.java', 'LsHRB/.../domain/auth/PasswordResetToken.java', 'LsHRB/src/main/resources/db/migration/V8__password_reset_tokens.sql'] },
      { id: 's6-02', title: 'Change Password endpoint', description: 'PATCH /api/v1/users/me/password — verifies current password with BCrypt, encodes and saves new password. @Valid + @PreAuthorize isAuthenticated().', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../services/UserService.java', 'LsHRB/.../controllers/UserController.java'] },
      { id: 's6-03', title: 'Bulk payroll processing', description: 'POST /payroll/bulk — processes payroll for multiple employees in one request. BulkPayrollRequest DTO with @NotNull month/year, @NotEmpty employeeIds list. Skips duplicates via existsByEmployeeIdAndMonthAndYear check.', type: 'feature', priority: 'medium', status: 'done', files: ['LsHRB/.../services/PayrollService.java', 'LsHRB/.../dtos/request/BulkPayrollRequest.java'] },
      { id: 's6-04', title: 'PDF payslip generation (iText 5)', description: 'GET /payroll/{id}/payslip — generates PDF payslip with employee name, period, salary breakdown table using iText 5 (itextpdf:5.5.13.3). Returns application/pdf blob. @PreAuthorize isAuthenticated().', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../services/PayslipPdfService.java'] },
      { id: 's6-05', title: 'GlobalExceptionHandler — structured error bodies', description: 'Upgraded MethodArgumentNotValidException to return {status, message, errors{}, timestamp}. Added BadCredentialsException → 401, IllegalStateException → 409. Consistent error shape across all endpoints.', type: 'fix', priority: 'high', status: 'done', files: ['LsHRB/.../web/exception/GlobalExceptionHandler.java'] },
      { id: 's6-06', title: 'ForgotPasswordPage (frontend)', description: 'Public route /forgot-password. Submits to POST /auth/forgot-password. Shows confirmation state with email address after submit. "Back to Sign In" link.', type: 'frontend', priority: 'high', status: 'done', files: ['LsHRF/src/features/auth/pages/ForgotPasswordPage.tsx'] },
      { id: 's6-07', title: 'ResetPasswordPage (frontend)', description: 'Public route /reset-password?token=<token>. Validates token param, checks passwords match + min 8 chars. On success shows confirmation and auto-redirects to /login after 3s.', type: 'frontend', priority: 'high', status: 'done', files: ['LsHRF/src/features/auth/pages/ResetPasswordPage.tsx'] },
      { id: 's6-08', title: 'Settings — Security tab (change password UI)', description: 'New "Security" tab in SettingsPage with change password form. Calls PATCH /users/me/password. Toggle show/hide passwords. Success/error feedback inline.', type: 'frontend', priority: 'medium', status: 'done', files: ['LsHRF/src/features/settings/pages/SettingsPage.tsx'] },
      { id: 's6-09', title: 'PayrollPage — Download Payslip wired', description: 'Download button on each payroll row now calls GET /payroll/{id}/payslip, receives PDF blob, and triggers browser file download as payslip-<name>.pdf.', type: 'frontend', priority: 'medium', status: 'done', files: ['LsHRF/src/features/payroll/pages/PayrollPage.tsx'] },
    ]
  },

  // ── SPRINT 7 ──────────────────────────────────────────────
  {
    id: 'sprint-7',
    name: 'Sprint 7 — Backend Features & Auth Hardening',
    version: '1.2.0',
    date: '2026-05-14',
    status: 'completed',
    summary: 'JWT token refresh with 401 retry interceptor, attendance regularization submit/approve flow, performance review MANAGER gating, frontend auth pages, 14 unit tests passing, Testcontainers integration tests, and EmptyState component across all data pages.',
    stats: { completed: 6, total: 6, buildStatus: 'passing', tsErrors: 0 },
    items: [
      { id: 's7-01', title: 'Token refresh — POST /auth/refresh + axios 401 retry', description: 'Backend: refresh_token stored on User entity (Flyway V9). POST /auth/refresh validates stored token, issues new JWT. RateLimitFilter 20/min. Frontend: authSlice stores refreshToken, axiosInstance queues concurrent 401s, retries after refresh, dispatches logout on failure.', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../controllers/AuthController.java', 'LsHRB/src/main/resources/db/migration/V9__add_refresh_token_to_users.sql', 'LsHRF/src/features/auth/store/authSlice.ts', 'LsHRF/src/lib/api/axiosInstance.ts'] },
      { id: 's7-02', title: 'Performance review create modal — MANAGER role', description: 'Added @PreAuthorize to all PerformanceReviewController endpoints. MANAGER: create only. CLIENT_ADMIN: full CRUD. Frontend canWriteReview gates the "Write Review" button. Added reviewDate field to request DTO + service.', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../controllers/PerformanceReviewController.java', 'LsHRF/src/features/performance/pages/PerformancePage.tsx'] },
      { id: 's7-03', title: 'Attendance regularization — submit & approve flow', description: 'New AttendanceRegularization entity + Flyway V10. Employees submit correction requests (date, check-in/out, reason). MANAGER/CLIENT_ADMIN view pending list and approve/reject. On APPROVE: upserts actual Attendance record. Frontend: "Request Correction" modal + "Regularizations" manager tab.', type: 'feature', priority: 'high', status: 'done', files: ['LsHRB/.../domain/attendance/AttendanceRegularization.java', 'LsHRB/.../controllers/AttendanceRegularizationController.java', 'LsHRB/src/main/resources/db/migration/V10__add_attendance_regularizations.sql', 'LsHRF/src/features/attendance/pages/AttendancePage.tsx'] },
      { id: 's7-04', title: 'Unit tests — PayrollService, LeaveService, AttendanceService', description: '14 passing JUnit 5 + Mockito unit tests. PayrollServiceTest: process, wrong-tenant, not-found, delete. LeaveServiceTest: apply, wrong-tenant, updateStatus, getAllLeaves. AttendanceServiceTest: checkIn, duplicate, checkOut, no-record. All pass with mocked SecurityUtils.', type: 'backend', priority: 'high', status: 'done', files: ['LsHRB/src/test/java/.../PayrollServiceTest.java', 'LsHRB/src/test/java/.../LeaveServiceTest.java', 'LsHRB/src/test/java/.../AttendanceServiceTest.java'] },
      { id: 's7-05', title: 'Integration tests — Testcontainers', description: 'BaseIntegrationTest + AuthControllerTest written with Testcontainers PostgreSQL. Tests: valid login 200+token, wrong password 401, missing email 400, non-existent user 401. Guarded with @EnabledIfSystemProperty — requires Docker. Run with -Dintegration.tests=true when Docker Desktop is running.', type: 'backend', priority: 'high', status: 'done', files: ['LsHRB/src/test/java/.../BaseIntegrationTest.java', 'LsHRB/src/test/java/.../AuthControllerTest.java', 'LsHRB/src/test/resources/application-test.yml'] },
      { id: 's7-06', title: 'Empty state components for all data pages', description: 'EmptyState component created with icon, title, description, optional action button. Wired into AttendancePage, LeavesPage, PayrollPage, PerformancePage, EmployeeListPage replacing ad-hoc empty divs. TypeScript 0 errors.', type: 'frontend', priority: 'low', status: 'done', files: ['LsHRF/src/common/components/EmptyState.tsx'] },
    ]
  },
  // ── SPRINT 8 (E2E Validation) ──────────────────────────────
  {
    id: 'sprint-8',
    name: 'Sprint 8 — E2E Validation & Bug Fixes',
    version: '1.2.1',
    date: '2026-05-15',
    status: 'completed',
    summary: 'Full end-to-end visual test run across all roles and modules. Fixed UserService NPE (isDeleted on non-existent field). Created Acme Corp + TechFlow tenants with CLIENT_ADMIN accounts. Verified token refresh, tenant isolation, all 9 core GET endpoints, attendance check-in, leave lifecycle, payroll processing + PDF, performance review, and regularization flows.',
    stats: { completed: 5, total: 5, buildStatus: 'passing', tsErrors: 0 },
    items: [
      { id: 's8-01', title: 'UserService NPE fix — isDeleted field not on User entity', description: 'getAllUsers(), getUserById(), and exportUsersToExcel() all called user.getIsDeleted() which caused NullPointerException. User entity has no isDeleted field (soft-delete exists only on Employee). Removed all 3 calls. GET /api/v1/users was returning 500 for SUPER_ADMIN — now returns 200.', type: 'fix', priority: 'critical', status: 'done', files: ['LsHRB/.../services/UserService.java'] },
      { id: 's8-02', title: 'CLIENT_ADMIN accounts created (Acme Corp + TechFlow)', description: 'DataSeeder skips if SUPER_ADMIN exists so new CLIENT_ADMIN seed was skipped. Used POST /onboarding/client to create Acme Corp (admin@acmecorp.com) and TechFlow Solutions (admin@techflow.io). Liji Groups CLIENT_ADMIN password reset via PUT /users/{id}. All 3 CLIENT_ADMIN accounts now login successfully.', type: 'fix', priority: 'high', status: 'done', files: [] },
      { id: 's8-03', title: 'E2E: All 9 core GET endpoints verified 200', description: 'Tested /tenants, /users, /employees, /attendance, /leaves, /payroll, /performance, /departments, /dashboard/stats, /super-admin/stats — all return 200 for both SUPER_ADMIN and CLIENT_ADMIN (with tenant isolation). Recruitment /jobs returns [] (expected, no data seeded in current DB).', type: 'fix', priority: 'high', status: 'done', files: [] },
      { id: 's8-04', title: 'E2E: Full leave + payroll + regularization lifecycle tested', description: 'Verified: leave type config create → leave apply → leave approve. Payroll process (baseSalary field) → status update (PROCESSED) → PDF download. Performance review create (feedback field required). Regularization: employee submits → admin approves → attendance upserted. All flows return correct HTTP codes.', type: 'fix', priority: 'high', status: 'done', files: [] },
      { id: 's8-05', title: 'Token refresh verified end-to-end', description: 'POST /auth/refresh with stored refreshToken → returns new JWT 200. Old token from before restart returns 401 (correct — seeder overwrites refresh_token). Frontend axiosInstance 401 interceptor wired and tested. Rate limit: 20 req/min.', type: 'fix', priority: 'high', status: 'done', files: [] },
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
