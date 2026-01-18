import { Card, CardContent } from "@/components/ui/card";
import { Fish, Shell, Drumstick, Beer, GlassWater } from "lucide-react";
import barInterior from "@/assets/bar-interior.jpeg";

const menuCategories = [
  {
    name: "Fresh Catch",
    icon: Fish,
    items: [
      { name: "Escovitch Fish", description: "Fried fish with spicy pickled vegetables", price: "$15" },
      { name: "Grilled Red Snapper", description: "Whole fish seasoned & grilled to perfection", price: "$18" },
      { name: "Steamed Fish", description: "Fish steamed with okra, bammy & festival", price: "$16" },
      { name: "Fish & Festival", description: "Fried fish served with sweet festival bread", price: "$14" },
    ],
  },
  {
    name: "From the Sea",
    icon: Shell,
    items: [
      { name: "Garlic Butter Lobster", description: "Fresh lobster tail with garlic butter", price: "$35" },
      { name: "Pepper Shrimp", description: "Spicy peppered shrimp, Discovery Bay style", price: "$16" },
      { name: "Conch Soup", description: "Traditional Jamaican conch soup", price: "$12" },
      { name: "Seafood Platter", description: "Lobster, shrimp, fish & festival", price: "$45" },
    ],
  },
  {
    name: "Land Vibes",
    icon: Drumstick,
    items: [
      { name: "Jerk Chicken", description: "Authentic jerk seasoned & grilled", price: "$12" },
      { name: "Curry Goat", description: "Slow-cooked with Jamaican curry spices", price: "$14" },
      { name: "Brown Stew Chicken", description: "Tender chicken in rich brown gravy", price: "$11" },
      { name: "Oxtail", description: "Braised oxtail with butter beans", price: "$16" },
    ],
  },
  {
    name: "Cold Drinks",
    icon: Beer,
    items: [
      { name: "Red Stripe", description: "Jamaica's famous lager", price: "$4" },
      { name: "Dragon Stout", description: "Rich & smooth Jamaican stout", price: "$5" },
      { name: "Rum Punch", description: "House blend with Jamaican rum", price: "$8" },
      { name: "Appleton Rum", description: "Premium Jamaican rum, neat or mixed", price: "$7" },
    ],
  },
  {
    name: "Refreshments",
    icon: GlassWater,
    items: [
      { name: "Fresh Coconut Water", description: "Straight from the coconut", price: "$3" },
      { name: "Ting", description: "Jamaican grapefruit soda", price: "$2" },
      { name: "Natural Juices", description: "Mango, pineapple, or sorrel", price: "$4" },
      { name: "Irish Moss", description: "Traditional Jamaican seaweed drink", price: "$5" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 relative overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={barInterior}
          alt=""
          className="w-full h-full object-cover blur-3xl scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--ocean)/0.15)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(var(--sunset)/0.1)] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Taste of Jamaica
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh seafood caught daily, served with stunning ocean views and true Jamaican hospitality
          </p>
        </div>

        <div className="grid gap-8 md:gap-10">
          {menuCategories.map((category, idx) => (
            <Card key={idx} className="glass-card border-0 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--ocean))] to-[hsl(var(--ocean-deep))] shadow-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-start p-4 rounded-xl hover:bg-white/50 transition-colors group"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <span className="text-transparent bg-gradient-to-r from-[hsl(var(--sunset))] to-[hsl(var(--coral))] bg-clip-text font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Prices subject to change. Fresh catch availability varies daily.
        </p>
      </div>
    </section>
  );
};

export default Menu;