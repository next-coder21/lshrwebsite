import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Clock, Tag, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — LijiHR",
  description: "Insights on HR operations, payroll best practices, recruitment automation, and product updates from the LijiHR team.",
};

const FEATURED = {
  slug: "multi-tenant-hr-architecture",
  tag: "Engineering",
  tagColor: "bg-violet-50 text-violet-600",
  title: "How We Built Multi-Tenant HR in a Hexagonal Architecture",
  excerpt:
    "Every resource in LijiHR is scoped to a tenantId extracted from the JWT at the service layer — not the controller, not the database. Here's why that distinction matters and how it prevents cross-tenant data leakage by design.",
  readTime: "8 min read",
  date: "May 2025",
  author: "LijiHR Engineering",
};

const POSTS = [
  {
    slug: "payroll-lifecycle-draft-to-paid",
    tag: "Product",
    tagColor: "bg-green-50 text-green-600",
    title: "DRAFT → PROCESSED → PAID: The LijiHR Payroll Lifecycle",
    excerpt: "Why every payroll run goes through three stages, how each stage is enforced, and what happens when a payroll is revised after processing.",
    readTime: "5 min read",
    date: "Apr 2025",
  },
  {
    slug: "kanban-recruitment-pipeline",
    tag: "Product",
    tagColor: "bg-purple-50 text-purple-600",
    title: "From APPLIED to HIRED: Building a Visual Recruitment Pipeline",
    excerpt: "A deep dive into LijiHR's Kanban ATS — pipeline stages, interview types (PHONE, VIDEO, IN_PERSON), candidate ratings, and automated PDF offer letters.",
    readTime: "6 min read",
    date: "Apr 2025",
  },
  {
    slug: "custom-roles-30-permissions",
    tag: "Security",
    tagColor: "bg-red-50 text-red-600",
    title: "30+ Granular Permissions: Why System Roles Aren't Enough",
    excerpt: "RECRUITMENT_VIEW vs RECRUITMENT_MANAGE, LEAVE_APPROVE vs LEAVE_VIEW — how LijiHR's custom role system lets admins build the exact permission set each team needs.",
    readTime: "4 min read",
    date: "Mar 2025",
  },
  {
    slug: "pdf-generation-itext",
    tag: "Engineering",
    tagColor: "bg-violet-50 text-violet-600",
    title: "Generating PDF Offer Letters with Cover Pages and Watermarks",
    excerpt: "How LijiHR uses iText 5 to produce multi-page offer letters with branded cover pages, watermarks, and candidate-specific content — all server-side.",
    readTime: "7 min read",
    date: "Mar 2025",
  },
  {
    slug: "leave-management-approval-workflows",
    tag: "HR Ops",
    tagColor: "bg-amber-50 text-amber-600",
    title: "Leave Management That Actually Works: Approvals Without the Back-and-Forth",
    excerpt: "ANNUAL, SICK, UNPAID — and custom types. How to configure approval chains, set leave balances, and give employees full self-service visibility.",
    readTime: "5 min read",
    date: "Feb 2025",
  },
  {
    slug: "performance-reviews-draft-to-completed",
    tag: "HR Ops",
    tagColor: "bg-amber-50 text-amber-600",
    title: "Running Performance Cycles Without the Paperwork",
    excerpt: "DRAFT → IN_PROGRESS → COMPLETED. How LijiHR structures review cycles with self-assessment, manager rating, goals tracking, and historical archives per employee.",
    readTime: "5 min read",
    date: "Feb 2025",
  },
  {
    slug: "excel-exports-apache-poi",
    tag: "Engineering",
    tagColor: "bg-violet-50 text-violet-600",
    title: "Styled Excel Exports with Apache POI: Employee & User Reports",
    excerpt: "How we generate styled Excel workbooks with Slate-800 headers and data rows — and why we chose Apache POI 5 over CSV for structured HR reports.",
    readTime: "4 min read",
    date: "Jan 2025",
  },
  {
    slug: "super-admin-multi-tenant-panel",
    tag: "Product",
    tagColor: "bg-purple-50 text-purple-600",
    title: "The SUPER_ADMIN Panel: Managing Unlimited Tenants from One Interface",
    excerpt: "Per-tenant custom branding, prefix configuration, subscription plan management, and full organisation isolation — all from the Super Admin panel.",
    readTime: "6 min read",
    date: "Jan 2025",
  },
];

const TAGS = ["All", "Product", "Engineering", "HR Ops", "Security", "Updates"];

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-white text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">
            <Zap className="w-3 h-3" /> LijiHR Blog
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Insights on HR.<br />
            <span className="text-red-600">From people who build it.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto">
            Product updates, engineering deep-dives, and HR operations guides from the LijiHR team.
          </p>
        </div>
      </section>

      {/* Tag filter */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap justify-center">
          {TAGS.map((t, i) => (
            <button key={t}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${i === 0 ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gray-950 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-violet-900/60 text-violet-300`}>
                  {FEATURED.tag}
                </span>
                <span className="text-[10px] font-medium text-gray-600">Featured</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4 max-w-2xl">
                {FEATURED.title}
              </h2>
              <p className="text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
                {FEATURED.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-gray-600 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" /> {FEATURED.readTime}
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 text-xs font-medium">
                  <Tag className="w-3.5 h-3.5" /> {FEATURED.date}
                </div>
                <a href="#"
                  className="flex items-center gap-2 ml-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(({ tag, tagColor, title, excerpt, readTime, date }) => (
              <a key={title} href="#"
                className="group bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="text-sm font-black text-gray-900 leading-snug mb-3 group-hover:text-red-600 transition-colors flex-1">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-5">{excerpt}</p>
                <div className="flex items-center gap-4 text-[10px] font-medium text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
                  <span>{date}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 text-red-600 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-3">Stay in the loop.</h2>
          <p className="text-gray-500 font-medium text-sm mb-8">New articles on HR ops, product updates, and engineering — straight to your inbox.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
            <button className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-gray-400 font-medium mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
