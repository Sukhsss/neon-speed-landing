import { useState, useEffect } from 'react';
import { Flame, Eye, Package } from 'lucide-react';

const UrgencyIndicators = () => {
  const [viewerCount, setViewerCount] = useState(127);
  const [stockCount, setStockCount] = useState(23);

  useEffect(() => {
    // Simulate viewer count fluctuation
    const viewerTimer = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newCount = prev + change;
        return Math.max(95, Math.min(180, newCount));
      });
    }, 8000);

    // Simulate stock countdown
    const stockTimer = setInterval(() => {
      setStockCount(prev => Math.max(15, prev - 1));
    }, 120000); // Every 2 minutes

    return () => {
      clearInterval(viewerTimer);
      clearInterval(stockTimer);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Live Viewers */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-red-500" />
          <span className="text-sm font-semibold text-red-500">
            {viewerCount} people viewing now
          </span>
        </div>
      </div>

      {/* Hot Demand */}
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-center gap-3">
        <Flame className="w-5 h-5 text-orange-500" />
        <span className="text-sm font-semibold text-orange-500">
          🔥 High demand today!
        </span>
      </div>

      {/* Limited Stock */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
        <Package className="w-5 h-5 text-primary" />
        <span className="text-sm font-semibold text-primary">
          Only {stockCount} spots left at this price
        </span>
      </div>
    </div>
  );
};

export default UrgencyIndicators;