import { useState, useEffect } from 'react';
import { Users, Download, Star, TrendingUp } from 'lucide-react';

interface CounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ icon, value, label, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center space-y-2">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
        {icon}
      </div>
      <div className="text-2xl font-bebas text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const SocialProofCounters = () => {
  return (
    <div className="bg-card/50 border border-border/20 rounded-2xl p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatedCounter
          icon={<Download className="w-6 h-6 text-primary" />}
          value={2847}
          label="Templates Sold"
        />
        <AnimatedCounter
          icon={<Users className="w-6 h-6 text-secondary" />}
          value={1247}
          label="Active Users"
        />
        <AnimatedCounter
          icon={<Star className="w-6 h-6 text-primary" />}
          value={48}
          label="5-Star Reviews"
          suffix="+"
        />
        <AnimatedCounter
          icon={<TrendingUp className="w-6 h-6 text-secondary" />}
          value={97}
          label="Success Rate"
          suffix="%"
        />
      </div>
    </div>
  );
};

export default SocialProofCounters;