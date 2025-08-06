import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyBottomBar = () => {
  const [timeLeft, setTimeLeft] = useState(59 * 60 + 59); // 59:59 in seconds
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show bar after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-bar p-4 animate-fade-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white font-poppins font-semibold">
            {timeLeft > 0 ? "Offer will expire in..." : "Hurry! This Offer Just Expired!"}
          </span>
          {timeLeft > 0 && (
            <div className="bg-primary text-white px-3 py-1 rounded-lg font-bebas text-xl">
              {formatTime(timeLeft)}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="btn-primary text-xs md:text-sm">
            Buy The Templates At Just ₹299 <span className="line-through opacity-60">₹9999</span>
          </button>
          
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 animate-pulse-custom"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;