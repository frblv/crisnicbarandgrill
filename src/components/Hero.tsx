import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import barEntrance from "@/assets/bar-entrance.jpeg";
import beachView from "@/assets/beach-view.jpeg";
import { MapPin, Phone, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={beachView}
          alt=""
          className="w-full h-full object-cover scale-110 blur-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* Header with image and logo */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={barEntrance}
            alt="Crisnic Bar & Grill - Discovery Bay, Jamaica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center py-16 md:py-24">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ocean))] via-[hsl(var(--cyan-light))] to-[hsl(var(--sunset))] blur-3xl opacity-40 scale-150 animate-gradient" />
            <img
              src={logo}
              alt="Crisnic Bar & Grill"
              className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Info section with glass morphism */}
      <div className="flex-1 relative flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        
        {/* Glass panel */}
        <motion.div 
          className="relative z-10 glass-card rounded-3xl p-8 md:p-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] as const }}
        >
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discovery Bay
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-2 text-accent mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-lg md:text-xl font-medium">Fortlands Road, Discovery Bay, Jamaica</span>
          </motion.div>
          <MapPin className="w-5 h-5 text-accent mx-auto mb-6" />

          <motion.div 
            className="text-foreground/80 text-lg md:text-xl mb-8 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p>Open Daily: 10 a.m. to 10 p.m.</p>
          </motion.div>

          {/* Action Buttons with gradients */}
          <motion.div 
            className="flex flex-col gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(var(--ocean-deep))] to-[hsl(var(--ocean))] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg"
            >
              <Navigation className="w-5 h-5" />
              VIEW MENU
            </button>
            
            <a
              href="tel:+18768541480"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[hsl(var(--sunset))] to-[hsl(var(--coral))] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg"
            >
              <Phone className="w-5 h-5" />
              876 854 1480
            </a>
            
            <a
              href="tel:+18764623310"
              className="flex items-center justify-center gap-3 glass-card-dark text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-black/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              876 462 3310
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;