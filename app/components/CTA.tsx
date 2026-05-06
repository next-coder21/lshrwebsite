import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#0F172A] overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/15 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          Join 500+ Organisations Already Live
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
          Ready to Transform
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
            Your Workforce?
          </span>
        </h2>

        <p className="text-gray-400 font-medium text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Setup takes less than 5 minutes. Your first employees can be onboarded
          today — with portal accounts and welcome emails sent automatically.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://app.lishr.in"
            className="flex items-center gap-3 px-10 py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-red-600/30 active:scale-95"
          >
            Start for Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:sales@lishr.in"
            className="flex items-center gap-3 px-8 py-4 bg-white/8 hover:bg-white/14 text-white border border-white/15 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Demo
          </a>
        </div>

        <p className="text-gray-700 text-[11px] font-black uppercase tracking-widest">
          No credit card required &nbsp;·&nbsp; GDPR compliant &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  );
}
