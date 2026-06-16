const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '12+', label: 'Services Monitored' },
  { value: '17K+', label: 'Datasets Indexed' },
  { value: '20K+', label: 'Monthly Calls Handled' },
  { value: '750%', label: 'Dataset Growth' },
  { value: '17K+', label: 'Records Migrated' },
];

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-[#222]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="text-xs text-secondary uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
