
const StatsSection = () => {
  const stats = [
    { number: "25M+", label: "Videos Created" },
    { number: "200K+", label: "Active Users Worldwide" },
    { number: "170+", label: "Countries Served" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-16 bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
