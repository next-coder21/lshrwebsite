"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Globe, MessageSquare, ArrowRight, Building2, Zap, Phone } from "lucide-react";
import { useState } from "react";

const CONTACT_OPTIONS = [
  {
    icon: Zap,
    title: "General enquiries",
    desc: "Questions about LijiHR, plans, or features",
    contact: "hello@lishr.in",
    href: "mailto:hello@lishr.in",
    cta: "Email us",
  },
  {
    icon: Building2,
    title: "Sales & Enterprise",
    desc: "Multi-tenant setup, custom pricing, SLA",
    contact: "sales@lishr.in",
    href: "mailto:sales@lishr.in",
    cta: "Talk to sales",
  },
  {
    icon: MessageSquare,
    title: "Support",
    desc: "Help with your existing LijiHR account",
    contact: "support@lishr.in",
    href: "mailto:support@lishr.in",
    cta: "Get help",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-white text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 mb-6">
            <Mail className="w-3 h-3" /> Get in touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            We&apos;d love to<br />
            <span className="text-red-600">hear from you.</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto">
            Whether you&apos;re evaluating LijiHR, need help with your account, or want to discuss an enterprise deployment — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTACT_OPTIONS.map(({ icon: Icon, title, desc, contact, href, cta }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-1">{title}</h3>
              <p className="text-xs text-gray-500 font-medium mb-4">{desc}</p>
              <p className="text-xs font-bold text-gray-700 mb-4">{contact}</p>
              <a href={href}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
                {cta} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Send us a message</h2>
            <p className="text-sm text-gray-500 font-medium mb-8">We reply within one business day.</p>

            {sent ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-black text-gray-900 mb-2">Message sent!</h3>
                <p className="text-xs text-gray-500 font-medium">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      type="text" placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Email *</label>
                    <input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      type="email" placeholder="you@company.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Company</label>
                  <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                    type="text" placeholder="Your organisation name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Subject *</label>
                  <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 focus:outline-none focus:border-red-400 transition-colors bg-white">
                    <option value="">Select a subject</option>
                    <option>General enquiry</option>
                    <option>Sales / Enterprise pricing</option>
                    <option>Technical support</option>
                    <option>Bug report</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Message *</label>
                  <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5} placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/20 active:scale-95">
                  Send message <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-gray-400 font-medium text-center">
                  By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-950 rounded-3xl p-7 border border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-5">Contact details</h3>
              <div className="space-y-4">
                <a href="mailto:hello@lishr.in" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm font-bold">hello@lishr.in</span>
                </a>
                <a href="https://lishr.in" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors">
                  <Globe className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm font-bold">lishr.in</span>
                </a>
                <div className="flex items-center gap-3 text-gray-500">
                  <Building2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm font-bold">Liji Groups</span>
                </div>
              </div>
            </div>

            <div className="bg-red-600 rounded-3xl p-7">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-3">Enterprise?</h3>
              <p className="text-white font-black text-lg leading-snug mb-4">Let&apos;s talk about a custom deployment.</p>
              <p className="text-red-200 text-xs font-medium leading-relaxed mb-5">
                Multi-tenant panel, SLA uptime guarantee, on-premise deployment, custom integrations, and dedicated account management.
              </p>
              <a href="mailto:sales@lishr.in"
                className="flex items-center gap-2 px-5 py-3 bg-white text-red-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-colors">
                Contact sales <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Response times</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">General enquiries</span>
                  <span className="font-black text-gray-900">1 business day</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Sales / Enterprise</span>
                  <span className="font-black text-gray-900">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Support (Premium)</span>
                  <span className="font-black text-gray-900">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Support (Enterprise)</span>
                  <span className="font-black text-emerald-600">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
