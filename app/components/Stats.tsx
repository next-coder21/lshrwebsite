const STATS = [
  { value: "10K+", label: "Employees Managed", sub: "across all clients" },
  { value: "500+", label: "Organisations", sub: "trust L'sHR" },
  { value: "99.9%", label: "Uptime SLA", sub: "guaranteed" },
  { value: "< 2s", label: "Response Time", sub: "average API latency" },
];

export default function Stats() {
  return (
    <section className="bg-gray-950 border-y border-white/5 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ value, label, sub }) => (
          <div key={label} className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
              {value}
            </div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              {label}
            </div>
            <div className="text-[9px] font-medium text-gray-700 uppercase tracking-widest">
              {sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
