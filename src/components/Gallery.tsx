import beachView from "@/assets/beach-view.jpeg";
import barInterior from "@/assets/bar-interior.jpeg";
import barView from "@/assets/bar-view.jpeg";
import barEntrance from "@/assets/bar-entrance.jpeg";

const images = [
  { src: beachView, alt: "Ocean view from Crisnic restaurant" },
  { src: barView, alt: "Crisnic bar and seating area" },
  { src: barInterior, alt: "Inside the bar at Crisnic" },
  { src: barEntrance, alt: "Entrance to Crisnic Beach Restaurant" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
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
              className={`relative overflow-hidden rounded-xl group ${
                idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
