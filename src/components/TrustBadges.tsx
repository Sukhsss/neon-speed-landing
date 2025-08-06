import { Shield, CreditCard, Headphones, Zap, Award, Lock } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SSL Secured",
      subtitle: "256-bit encryption"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Safe Payments",
      subtitle: "Razorpay protected"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      subtitle: "Instant help via WhatsApp"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Access",
      subtitle: "Download immediately"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guarantee",
      subtitle: "Professional designs"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Protected",
      subtitle: "No spam, ever"
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="font-bebas text-2xl uppercase text-muted-foreground mb-2">
          Why Choose Us
        </h3>
        <p className="text-sm text-muted-foreground">
          Trusted by thousands of entrepreneurs worldwide
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((badge, index) => (
          <div 
            key={index}
            className="bg-card/30 border border-border/10 rounded-xl p-4 text-center space-y-2 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
              <div className="text-primary">
                {badge.icon}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                {badge.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;