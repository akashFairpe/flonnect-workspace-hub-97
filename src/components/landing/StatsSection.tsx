
const StatsSection = () => {
  const stats = [
    { 
      number: "25M+", 
      label: "Videos Created",
      description: "Professional videos created by users worldwide"
    },
    { 
      number: "200K+", 
      label: "Active Users Worldwide",
      description: "Growing community of content creators"
    },
    { 
      number: "170+", 
      label: "Countries Served",
      description: "Global reach across all continents"
    },
    { 
      number: "4.9/5", 
      label: "User Rating",
      description: "Average rating from thousands of reviews"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white shadow-sm" role="region" aria-label="Platform Statistics">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                {stat.label}
              </div>
              <div className="sr-only">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
