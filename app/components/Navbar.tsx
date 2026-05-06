"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Users, Clock, CreditCard, FileText, BarChart3, Building2, Briefcase, Shield } from "lucide-react";

const FEATURES_MENU = [
  { icon: Users, label: "Employee Management", desc: "Profiles, docs, org chart", href: "/features#employees" },
  { icon: Clock, label: "Attendance & Shifts", desc: "Time tracking & scheduling", href: "/features#attendance" },
  { icon: CreditCard, label: "Payroll", desc: "Automated salary processing", href: "/features#payroll" },
  { icon: FileText, label: "Leave Management", desc: "Requests, approvals, balance", href: "/features#leaves" },
  { icon: BarChart3, label: "Reports & Analytics", desc: "Real-time HR insights", href: "/features#reports" },
  { icon: Briefcase, label: "Recruitment", desc: "Pipeline & offer automation", href: "/features#recruitment" },
];

const SOLUTIONS_MENU = [
  { icon: Building2, label: "For HR Teams", desc: "All-in-one people ops", href: "/solutions#hr-teams" },
  { icon: Users, label: "For Agencies", desc: "Multi-client management", href: "/solutions#agencies" },
  { icon: Shield, label: "For Enterprises", desc: "Scale with compliance", href: "/solutions#enterprise" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    if (!isHome) setScrolled(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(e.target as Node)) setFeaturesOpen(false);
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) setSolutionsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navText = scrolled ? "text-gray-500" : "text-gray-300";
  const navHover = "hover:text-red-500";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md group-hover:shadow-red-400/40 transition-shadow">
            L
          </div>
          <span className={`text-xl font-black tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
            Liji<span className="text-red-500">HR</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Features dropdown */}
          <div ref={featuresRef} className="relative">
            <button
              onClick={() => { setFeaturesOpen(!featuresOpen); setSolutionsOpen(false); }}
              className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-widest transition-colors ${navText} ${navHover}`}
            >
              Features <ChevronDown className={`w-3 h-3 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
            </button>
            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2">
                {FEATURES_MENU.map(({ icon: Icon, label, desc, href }) => (
                  <Link key={label} href={href} onClick={() => setFeaturesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">{label}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{desc}</p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 mt-2 pt-3 border-t border-gray-100">
                  <Link href="/features" onClick={() => setFeaturesOpen(false)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-red-500 transition-colors">
                    View all features <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div ref={solutionsRef} className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setFeaturesOpen(false); }}
              className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-widest transition-colors ${navText} ${navHover}`}
            >
              Solutions <ChevronDown className={`w-3 h-3 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1">
                {SOLUTIONS_MENU.map(({ icon: Icon, label, desc, href }) => (
                  <Link key={label} href={href} onClick={() => setSolutionsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900">{label}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${navText} ${navHover}`}>Pricing</Link>
          <Link href="/blog" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${navText} ${navHover}`}>Blog</Link>
          <Link href="/about" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${navText} ${navHover}`}>About</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.lishr.in/login"
            className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-widest transition-colors ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-300 hover:text-white"}`}>
            Sign In
          </a>
          <a href="https://app.lishr.in"
            className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20 active:scale-95">
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "hover:bg-gray-100 text-gray-700" : "text-white hover:bg-white/10"}`}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-1 shadow-xl max-h-[80vh] overflow-y-auto">
          <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 px-2 pb-2">Product</p>
          <Link href="/features" onClick={() => setMenuOpen(false)} className="block px-2 py-2.5 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors">Features</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block px-2 py-2.5 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors">Pricing</Link>
          <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 px-2 pb-2 pt-4">Company</p>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block px-2 py-2.5 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors">About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block px-2 py-2.5 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors">Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-2 py-2.5 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a href="https://app.lishr.in/login" className="w-full py-3 text-center rounded-xl border-2 border-gray-200 text-[11px] font-black uppercase tracking-widest text-gray-700 hover:border-gray-400 transition-colors">Sign In</a>
            <a href="https://app.lishr.in" className="w-full py-3 text-center bg-red-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-red-500 transition-colors">Get Started Free</a>
          </div>
        </div>
      )}
    </nav>
  );
}
