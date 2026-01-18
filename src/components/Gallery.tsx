import beachView from "@/assets/beach-view.jpeg";
import barInterior from "@/assets/bar-interior.jpeg";
import barView from "@/assets/bar-view.jpeg";
import barEntrance from "@/assets/bar-entrance.jpeg";
import barNight from "@/assets/bar-night.jpeg";

const images = [
  { src: beachView, alt: "Ocean view from Crisnic restaurant" },
  { src: barNight, alt: "Crisnic Bar & Grill at night with ocean view" },
  { src: barView, alt: "Crisnic bar and seating area" },
  { src: barInterior, alt: "Inside the bar at Crisnic" },
  { src: barEntrance, alt: "Entrance to Crisnic Beach Restaurant" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={barNight}
          alt=""
          className="w-full h-full object-cover blur-3xl scale-125 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-[hsl(var(--ocean)/0.1)]" />
      </div>

      {/* Decorative gradient elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-gradient-to-br from-[hsl(var(--ocean)/0.2)] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[hsl(var(--sunset)/0.15)] to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            The Vibes
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Beach Life
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Relax beachside with cold drinks, fresh food, and the best views in Discovery Bay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group ${
                idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(59, 178, 184, 0.3), 0 0 40px rgba(59, 178, 184, 0.2)'
                }}
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-medium text-sm md:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;