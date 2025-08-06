import { Clock, Star, Zap } from 'lucide-react';

const LimitedOffer = () => {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary font-poppins font-bold">LIMITED TIME OFFER</span>
          </div>
          
          <h2 className="font-bebas text-4xl md:text-6xl uppercase text-white mb-6">
            <span className="text-primary">Limited Time</span> Offer!
          </h2>
          
          <p className="text-muted-foreground text-xl leading-relaxed">
            One-time payment, lifetime updates. No monthly fees, no hidden costs.
          </p>
        </div>
        
        {/* Pricing Box */}
        <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 border border-primary/20 relative overflow-hidden animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-32 h-32 bg-primary rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary rounded-full"></div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl md:text-8xl font-bebas text-primary">₹299</span>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bebas text-muted-foreground line-through">₹9999</div>
                <div className="text-green-400 font-poppins font-bold">97% OFF</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-white">6 Premium Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-white">Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-white">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary text-xl px-12 py-6">
            Buy The Templates At Just ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;