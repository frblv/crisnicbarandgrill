import logo from "@/assets/logo.png";
import barEntrance from "@/assets/bar-entrance.jpeg";
import { MapPin, Phone, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header with wood texture background and logo */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={barEntrance}
            alt="Crisnic Bar & Grill - Discovery Bay, Jamaica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center py-12 md:py-20">
          <img
            src={logo}
            alt="Crisnic Bar & Grill"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-fade-in"
          />
        </div>
      </div>

      {/* Info section with cyan background */}
      <div className="flex-1 bg-[hsl(185,65%,75%)] flex flex-col items-center justify-center px-6 py-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Discovery Bay
        </h2>
        
        <div className="flex items-center gap-2 text-accent mb-1">
          <span className="text-lg md:text-xl font-medium">Fortlands Road, Discovery Bay, Jamaica</span>
        </div>
        <MapPin className="w-5 h-5 text-accent mb-6" />

        <div className="text-foreground/80 text-lg md:text-xl mb-8 space-y-1">
          <p>Open Daily: 10 a.m. to 10 p.m.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 bg-foreground text-white py-4 px-6 rounded font-semibold text-lg hover:bg-foreground/90 transition-colors"
          >
            <Navigation className="w-5 h-5" />
            VIEW MENU
          </button>
          
          <a
            href="tel:+18768541480"
            className="flex items-center justify-center gap-3 bg-accent text-white py-4 px-6 rounded font-semibold text-lg hover:bg-accent/90 transition-colors border-2 border-accent"
          >
            <Phone className="w-5 h-5" />
            876 854 1480
          </a>
          
          <a
            href="tel:+18764623310"
            className="flex items-center justify-center gap-3 bg-transparent text-foreground py-4 px-6 rounded font-semibold text-lg hover:bg-foreground/10 transition-colors border-2 border-accent"
          >
            <Phone className="w-5 h-5" />
            876 462 3310
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
