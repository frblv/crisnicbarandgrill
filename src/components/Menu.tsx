import { Card, CardContent } from "@/components/ui/card";
import { Fish, Shell, Drumstick, Beer, GlassWater } from "lucide-react";

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
    <section id="menu" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
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
            <Card key={idx} className="overflow-hidden shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-start p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <span className="text-accent font-bold text-lg ml-4">{item.price}</span>
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
