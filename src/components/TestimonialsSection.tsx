const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white mb-4">
            What Our <span className="text-primary">Customers</span> Say About Us
          </h2>
          <p className="text-muted-foreground text-xl">
            Real results from real businesses using our templates
          </p>
        </div>
        
        {/* Mobile Screenshot Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }, (_, i) => (
            <div 
              key={i}
              className="animate-bounce-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative mx-auto max-w-[250px]">
                {/* iPhone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="bg-black h-6 flex justify-center items-start pt-1">
                      <div className="bg-gray-800 w-16 h-3 rounded-full"></div>
                    </div>
                    
                    {/* Screen Content - Testimonial */}
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20 p-4 flex flex-col justify-center text-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-white font-bebas text-lg">USER</span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-white text-xs font-poppins font-semibold leading-tight">
                          [[ TESTIMONIAL_SCREENSHOT ]]
                        </p>
                        <p className="text-white/60 text-xs">
                          Customer Review {i + 1}
                        </p>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center gap-1">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <div key={starIndex} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        ))}
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
        
        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-primary mb-2">1000+</div>
            <p className="text-white font-poppins font-semibold">Happy Customers</p>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-secondary mb-2">340%</div>
            <p className="text-white font-poppins font-semibold">Average Conversion Increase</p>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-primary mb-2">5 MIN</div>
            <p className="text-white font-poppins font-semibold">Average Setup Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;