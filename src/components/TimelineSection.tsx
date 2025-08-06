import { Clock, TrendingUp, Search, Rocket } from 'lucide-react';

const TimelineSection = () => {
  const timelineSteps = [
    {
      icon: Clock,
      title: "5-Minute Setup",
      description: "Choose your template and customize it in minutes, not hours",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Proven to Convert",
      description: "Templates designed by conversion experts with 15%+ conversion rates",
      color: "secondary"
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built-in SEO optimization to rank higher on Google searches",
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Launch & Profit",
      description: "Go live instantly and start generating leads and sales",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            Why Our <span className="text-primary">Templates</span> Work
          </h2>
          <p className="text-muted-foreground text-xl">
            The proven 4-step system that has helped 1000+ businesses grow
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden md:block"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-20">
            {timelineSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center gap-8 animate-fade-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                  <div className="bg-card p-6 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                      <div className={`p-3 rounded-xl ${step.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                        <step.icon className={`w-6 h-6 ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                      <h3 className="font-bebas text-2xl uppercase text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className="timeline-dot"></div>
                </div>
                
                {/* Spacer for desktop layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;