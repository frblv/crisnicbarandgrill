import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src={logo} alt="Crisnic Bar & Grill" className="h-16 w-auto" />
          </div>
          <p className="text-white/70 mb-6 max-w-md">
            Fresh seafood, cold drinks, and Caribbean vibes on the beautiful shores of Discovery Bay, Jamaica.
          </p>
          
          {/* Social Media Links */}
          <div className="flex gap-4 mb-6">
            <a 
              href="https://instagram.com/crisnicbarandgrill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/crisnicbarandgrill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-4 text-white/60 text-sm">
            <span>Discovery Bay Beach</span>
            <span>•</span>
            <span>St. Ann, Jamaica</span>
            <span>•</span>
            <span>Open Daily 10am - 10pm</span>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 w-full text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Crisnic Beach Restaurant. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
