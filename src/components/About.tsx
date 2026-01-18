import { Waves, UtensilsCrossed, Heart } from "lucide-react";
import beachView from "@/assets/beach-view.jpeg";

const features = [
  {
    icon: Waves,
    title: "Beachfront Location",
    description: "Dine with your toes in the sand and the Caribbean Sea just steps away",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Daily Catch",
    description: "Our seafood comes straight from local fishermen every morning",
  },
  {
    icon: Heart,
    title: "Jamaican Hospitality",
    description: "Experience the warmth and spirit of authentic Jamaican culture",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={beachView}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--ocean-deep)/0.9)] via-[hsl(var(--ocean)/0.85)] to-[hsl(var(--cyan-light)/0.8)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--sunset)/0.3)] rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--ocean)/0.4)] rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white/80 font-medium tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Welcome to Crisnic
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Nestled on the beautiful shores of Discovery Bay, Crisnic is your home for fresh seafood, 
            cold drinks, and unforgettable sunsets. Whether you're a local or just passing through, 
            pull up a chair and let the Caribbean vibes wash over you. We're more than a restaurant — 
            we're a gathering place where friends become family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-2xl glass-card-dark hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;