import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Waves className="w-8 h-8 text-ocean" />
            <span className="text-3xl font-display font-bold">Crisnic</span>
          </div>
          <p className="text-white/70 mb-6 max-w-md">
            Fresh seafood, cold drinks, and Caribbean vibes on the beautiful shores of Discovery Bay, Jamaica.
          </p>
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
