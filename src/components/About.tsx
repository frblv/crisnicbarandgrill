import { Waves, UtensilsCrossed, Heart } from "lucide-react";

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
    <section id="about" className="py-20 px-4 bg-gradient-ocean text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/80 font-medium tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
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
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              <div className="inline-flex p-4 rounded-full bg-white/20 mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
