import { motion } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import foodMenu from "@/assets/food-menu.png";

interface MenuItem {
  name: string;
  description?: string;
  priceJMD: string;
  priceUSD?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Main Dishes",
    items: [
      { name: "Fish", description: "Steam / Fry / Brown Stew / Curry / Jerk", priceJMD: "$3,500", priceUSD: "$25" },
      { name: "Shrimp", description: "Garlic Butter / Fry / Curry / Run Dung", priceJMD: "$3,500", priceUSD: "$25" },
      { name: "Lobster", description: "Deep Fried / Garlic Butter / Curry / Grilled", priceJMD: "$5,500", priceUSD: "$40" },
      { name: "Conch", description: "Garlic Butter / Curry / Run Dung / Fry", priceJMD: "$3,500", priceUSD: "$25" },
    ],
  },
  {
    title: "Crisnic Specials",
    items: [
      { name: "Shrimp, Lobster, Octopus & Conch", description: "Garlic Butter / Curry / Run Dung", priceJMD: "$7,000", priceUSD: "$50" },
      { name: "Octopus & Conch", description: "Garlic Butter / Curry / Run Dung", priceJMD: "$5,000", priceUSD: "$35" },
    ],
  },
  {
    title: "Soups",
    items: [
      { name: "Fish Soup", priceJMD: "$250", priceUSD: "$2" },
      { name: "Conch Soup", priceJMD: "$250", priceUSD: "$2" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Festival", priceJMD: "$300" },
      { name: "Bammy", priceJMD: "$300" },
      { name: "Sweet Potato", priceJMD: "$400" },
      { name: "Fries", priceJMD: "$300" },
      { name: "Rice", priceJMD: "$400" },
      { name: "Mash Potatoes", priceJMD: "$400" },
      { name: "Green Plantain", priceJMD: "$400" },
      { name: "Ripe Plantain", priceJMD: "$400" },
    ],
  },
];

const MenuSection = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Taste of Jamaica
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Menu
          </h2>
          <p className="text-muted-foreground mt-4">
            Fresh seafood prepared with authentic Jamaican flavors
          </p>
        </motion.div>

        {/* Text Menu */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {menuData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-6 pb-3 border-b border-primary/30">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-primary">
                          {item.priceJMD}
                        </span>
                        {item.priceUSD && (
                          <span className="text-muted-foreground text-sm ml-2">
                            / {item.priceUSD} USD
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-border/50 to-transparent mt-3" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Menu Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
            Full Menu
          </h3>
          
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
        </motion.div>

        <motion.p 
          className="text-center text-muted-foreground mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          * Prices listed in JMD (Jamaican Dollars) and USD where applicable
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
