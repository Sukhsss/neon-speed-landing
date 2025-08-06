const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <h1 className="font-bebas text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide leading-tight">
            <span className="text-primary">Your Dream</span>{" "}
            <span className="text-white">Landing Page—</span>
            <br />
            <span className="text-white">Live in Just</span>{" "}
            <span className="text-primary">5 Minutes!</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Create stunning, conversion-focused landing pages without any coding knowledge. 
            Our templates are designed to convert visitors into customers instantly.
          </p>
          
          <div className="pt-4">
            <button className="btn-primary text-lg px-10 py-5">
              Buy Now For Just ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
            </button>
          </div>
        </div>
        
        {/* Right Video Placeholder */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-video bg-card rounded-2xl border border-border/20 overflow-hidden relative">
            {/* Video Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-0 h-0 border-l-[12px] border-r-0 border-b-[8px] border-t-[8px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                </div>
                <p className="text-white font-poppins font-semibold">
                  [[ VIDEO_PLACEHOLDER ]]
                </p>
                <p className="text-muted-foreground text-sm">
                  Watch how to create your landing page in 5 minutes
                </p>
              </div>
            </div>
            
            {/* Glass overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;