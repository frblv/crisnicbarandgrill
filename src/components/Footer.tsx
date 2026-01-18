import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import barNight from "@/assets/bar-night.jpeg";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={barNight}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,40%,8%)] via-[hsl(200,40%,8%)/0.95] to-[hsl(200,40%,8%)/0.9]" />
      </div>

      {/* Gradient accent line at top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--ocean))] via-[hsl(var(--cyan-light))] to-[hsl(var(--sunset))]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo with glow */}
          <ScrollReveal>
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-[hsl(var(--ocean)/0.3)] blur-2xl scale-150" />
              <img src={logo} alt="Crisnic Bar & Grill" className="relative h-20 w-auto" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-white/70 mb-8 max-w-md">
              Fresh seafood, cold drinks, and Caribbean vibes on the beautiful shores of Discovery Bay, Jamaica.
            </p>
          </ScrollReveal>
          
          {/* Social Media Links with gradient hover */}
          <ScrollReveal delay={0.2}>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://www.instagram.com/crisnicbeachbarandgrill?igsh=MWk2eGN6MGtvbGNpNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-[hsl(340,70%,50%)] hover:to-[hsl(25,90%,55%)] transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://facebook.com/crisnicbarandgrill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-[hsl(220,70%,50%)] hover:to-[hsl(200,80%,45%)] transition-all duration-300 hover:scale-110 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm mb-8">
              <span>Discovery Bay Beach</span>
              <span className="hidden sm:inline">•</span>
              <span>St. Ann, Jamaica</span>
              <span className="hidden sm:inline">•</span>
              <span>Open Daily 10am - 10pm</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="pt-8 border-t border-white/10 w-full text-center text-white/50 text-sm">
              © {new Date().getFullYear()} Crisnic Beach Restaurant. All rights reserved.
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;