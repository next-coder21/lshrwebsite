import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "L'sHR cut our payroll processing time by 80%. The automation is genuinely remarkable — what used to take 3 days now takes 20 minutes.",
    name: "Priya Nair",
    role: "Head of HR, TechVentures",
    initials: "PN",
    color: "from-red-500 to-orange-500",
  },
  {
    quote:
      "Finally an HR platform that thinks about user experience. Our team adopted it in a single day. The onboarding emails alone saved us hours of manual work.",
    name: "Marcus Chen",
    role: "COO, BuildRight Inc.",
    initials: "MC",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Managing 12 client organisations used to be a nightmare. L'sHR's multi-tenancy changed everything. One dashboard, full isolation, zero confusion.",
    name: "Fatima Al-Hassan",
    role: "Director, PeopleFirst Agency",
    initials: "FH",
    color: "from-purple-500 to-violet-500",
  },
  {
    quote:
      "The recruitment pipeline and offer letter automation are best-in-class. We closed 40 hires last quarter with a team of two. Unbelievable.",
    name: "Rohan Pillai",
    role: "Talent Lead, NovaSoft",
    initials: "RP",
    color: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Approval workflows are exactly what we needed. Custom chains, real-time tracking, no more chasing people on WhatsApp for leave approvals.",
    name: "Amara Osei",
    role: "HR Manager, CloudBase Africa",
    initials: "AO",
    color: "from-amber-500 to-yellow-500",
  },
  {
    quote:
      "The employee auto-provisioning is magic. The moment we add a new hire, they get a portal account and two professional welcome emails. Zero manual work.",
    name: "Shreya Kapoor",
    role: "Operations, ScaleStack",
    initials: "SK",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-18" style={{ marginBottom: "4.5rem" }}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Loved by <span className="text-red-600">HR Teams</span>
            <br />Around the World.
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Real teams. Real results. See what people say about L&apos;sHR.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="group bg-white rounded-3xl border border-gray-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gray-100 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 font-medium leading-relaxed mb-7">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white font-black text-xs shadow-sm`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900 uppercase tracking-tight">
                    {name}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
