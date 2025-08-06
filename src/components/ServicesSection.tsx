import { Bot, CreditCard, Headphones, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Bot, title: "WhatsApp Bot Integration", description: "Automated customer support and lead capture" },
    { icon: CreditCard, title: "Payment Gateway Setup", description: "Secure payment processing with multiple options" },
    { icon: Headphones, title: "24/7 Technical Support", description: "Round-the-clock assistance for all your needs" },
    { icon: Target, title: "Lead Generation System", description: "Convert visitors into qualified leads automatically" },
    { icon: Zap, title: "Lightning Fast Loading", description: "Optimized for speed and performance" },
    { icon: Shield, title: "SSL Security Included", description: "Bank-level security for your website" },
    { icon: Globe, title: "Mobile Responsive Design", description: "Perfect display on all devices" },
    { icon: TrendingUp, title: "SEO Optimization", description: "Built-in SEO to rank higher on Google" }
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-bebas text-4xl md:text-5xl uppercase text-white animate-fade-up">
              We Offer <span className="text-primary">More Services</span> To Help Grow Your Business
            </h2>
            
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-card/40 rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Testimonial/Badge Placeholder */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-2xl p-8 border border-border/20 text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                <p className="text-white font-bebas text-2xl">[[ LOGO ]]</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-white font-poppins font-semibold text-xl">
                  "Increased our conversions by 340% in just 2 weeks!"
                </p>
                <p className="text-muted-foreground">
                  [[ TESTIMONIAL_PLACEHOLDER ]]
                </p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="w-5 h-5 bg-primary rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;