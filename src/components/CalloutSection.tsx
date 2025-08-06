import { CheckCircle, Code, Palette } from 'lucide-react';

const CalloutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Main Question */}
        <div className="animate-fade-up">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase text-white mb-6">
            What If You Could Create A <span className="text-primary">Perfect Landing Page</span> In 5 Minutes?
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Stop wasting weeks and thousands of rupees on developers. Our templates are built by conversion experts 
            and ready to make you money from day one.
          </p>
        </div>
        
        {/* Highlight Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border/20 text-center space-y-4 hover:border-primary/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bebas text-2xl uppercase text-primary">
              Beginner Friendly
            </h3>
            <p className="text-white font-poppins font-semibold text-lg">
              No Coding Required
            </p>
            <p className="text-muted-foreground">
              Simple drag-and-drop interface. Even your grandmother can use it!
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-border/20 text-center space-y-4 hover:border-primary/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto flex items-center justify-center">
              <Palette className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bebas text-2xl uppercase text-secondary">
              100% Customizable
            </h3>
            <p className="text-white font-poppins font-semibold text-lg">
              Make It Yours
            </p>
            <p className="text-muted-foreground">
              Change colors, fonts, images, and content to match your brand perfectly.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="btn-primary text-xl px-12 py-6">
            Buy The Templates At Just ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalloutSection;