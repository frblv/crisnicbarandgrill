import { useState, useRef } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import foodMenu from "@/assets/food-menu.png";

const MenuImage = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <section id="menu" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Taste of Jamaica
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Menu
          </h2>
        </div>

        {/* Zoom Controls */}
        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="flex items-center gap-1"
          >
            <ZoomOut className="w-4 h-4" />
            <span className="hidden sm:inline">Zoom Out</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={resetZoom}
            className="flex items-center gap-1"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={zoomIn}
            disabled={scale >= 3}
            className="flex items-center gap-1"
          >
            <ZoomIn className="w-4 h-4" />
            <span className="hidden sm:inline">Zoom In</span>
          </Button>
        </div>

        {/* Scrollable & Zoomable Menu Container */}
        <div
          ref={containerRef}
          className="relative overflow-auto bg-white rounded-xl shadow-xl border border-border max-h-[70vh] cursor-grab active:cursor-grabbing"
        >
          <img
            src={foodMenu}
            alt="Crisnic Bar & Grill Food Menu"
            className="w-full transition-transform duration-200 origin-top-left"
            style={{ transform: `scale(${scale})` }}
            draggable={false}
          />
        </div>

        <p className="text-center text-muted-foreground mt-4 text-sm">
          * Scroll to view full menu. Use zoom controls to enlarge. Prices in JMD & USD.
        </p>
      </div>
    </section>
  );
};

export default MenuImage;
