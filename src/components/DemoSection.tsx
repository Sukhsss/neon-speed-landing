const DemoSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-8 animate-fade-up">
          Some Landing Page Demos
        </h2>
        
        {/* Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <button className="px-6 py-3 bg-primary text-white rounded-full font-poppins font-semibold hover-scale">
            E-commerce
          </button>
          <button className="px-6 py-3 bg-card border border-border text-white rounded-full font-poppins font-semibold hover-scale">
            Services
          </button>
          <button className="px-6 py-3 bg-card border border-border text-white rounded-full font-poppins font-semibold hover-scale">
            SaaS
          </button>
        </div>
        
        {/* Mobile Mockups Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative mx-auto max-w-[200px]">
                {/* iPhone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="bg-black h-6 flex justify-center items-start pt-1">
                      <div className="bg-gray-800 w-16 h-3 rounded-full"></div>
                    </div>
                    
                    {/* Screen Content */}
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto"></div>
                        <p className="text-white text-xs font-poppins">
                          [[ IMAGE_PLACEHOLDER ]]
                        </p>
                        <p className="text-muted-foreground text-xs">
                          Demo {i + 1}
                        </p>
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="bg-black h-6 flex justify-center items-end pb-1">
                      <div className="bg-white w-32 h-1 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;