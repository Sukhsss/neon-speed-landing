import { useState, useEffect } from 'react';
import { X, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-card p-8 rounded-2xl border border-border/20 max-w-md w-full animate-scale-in relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div>
              <h3 className="font-bebas text-3xl uppercase text-primary mb-2">
                Wait! Don't Leave Empty-Handed
              </h3>
              <p className="text-muted-foreground">
                Get your dream landing page templates at an exclusive price before you go!
              </p>
            </div>
            
            <div className="bg-primary/10 p-4 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground font-semibold">
                Join 2,847+ Happy Customers
              </p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={() => setIsVisible(false)}
                className="w-full btn-primary text-lg py-6"
              >
                Get Templates For ₹299 <span className="line-through opacity-60 ml-2">₹9999</span>
              </Button>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I'll create from scratch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;