import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CreditCard } from "lucide-react";
import barView from "@/assets/bar-view.jpeg";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={barView}
          alt=""
          className="w-full h-full object-cover blur-3xl scale-110 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/85 to-secondary/90" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[hsl(var(--ocean)/0.2)] rounded-full blur-3xl floating" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[hsl(var(--sunset)/0.15)] rounded-full blur-3xl floating" style={{ animationDelay: '-2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Crisnic
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're right on the beach in Discovery Bay — you can't miss us!
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StaggerItem>
            <Card className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--ocean))] to-[hsl(var(--ocean-deep))] mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Discovery Bay Beach<br />
                  St. Ann, Jamaica
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--sunset))] to-[hsl(var(--coral))] mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Open Daily<br />
                  10:00 AM - 10:00 PM
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--palm))] to-[hsl(140,60%,25%)] mb-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                <div className="space-y-1">
                  <a href="tel:+18768541480" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                    876 854 1480
                  </a>
                  <a href="tel:+18764623310" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                    876 462 3310
                  </a>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300 h-full">
              <CardContent className="pt-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--golden))] to-[hsl(35,90%,45%)] mb-4 shadow-lg">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Payment</h3>
                <p className="text-muted-foreground text-sm">
                  Cash & Cards<br />
                  Accepted
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerReveal>

        {/* Map Embed */}
        <ScrollReveal delay={0.2}>
          <Card className="glass-card border-0 overflow-hidden shadow-2xl">
            <div className="aspect-[21/9] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d-77.4095!3d18.4668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed978a7a8b6b3a1%3A0x0!2sCrisnic%20Bar%20and%20Grill%2C%20Discovery%20Bay%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1705500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crisnic Location - Discovery Bay, Jamaica"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Card>
        </ScrollReveal>

        {/* Get Directions Button */}
        <ScrollReveal delay={0.3} className="text-center mt-8">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Crisnic+Bar+and+Grill,+Discovery+Bay,+Jamaica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--ocean-deep))] to-[hsl(var(--ocean))] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;