import { Mail, Globe, Shield } from "lucide-react";

const LINKS = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "For HR Teams", href: "/solutions#hr-teams" },
      { label: "For Agencies", href: "/solutions#agencies" },
      { label: "For Enterprises", href: "/solutions#enterprise" },
      { label: "Multi-Tenant", href: "/solutions#agencies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
                L
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Liji<span className="text-red-500">HR</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-xs mb-2">
              A production-grade, multi-tenant HR platform built on hexagonal architecture. Handles everything from recruitment to payroll.
            </p>
            <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-4">
              A Liji Groups Product
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href="mailto:hello@lishr.in"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-400 text-xs font-bold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                hello@lishr.in
              </a>
              <a
                href="https://lishr.in"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-400 text-xs font-bold transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-red-500" />
                lishr.in
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex gap-3 mt-8">
              {["GDPR", "ISO 27001", "SOC 2"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1 px-2.5 py-1.5 border border-white/10 rounded-lg"
                >
                  <Shield className="w-2.5 h-2.5 text-red-500" />
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map(({ title, items }) => (
            <div key={title}>
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm font-medium text-gray-600 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-[11px] font-black uppercase tracking-widest">
            Copyright © {new Date().getFullYear()} Liji Groups. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-gray-700 text-[11px] font-black uppercase tracking-widest">
              A part of <span className="text-gray-500">LIJI GROUPS</span> project
            </p>
            <a
              href="https://app.lishr.in"
              className="text-[11px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
            >
              Launch App →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
