import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CreditCard } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-2">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Crisnic
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're right on the beach in Discovery Bay — you can't miss us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Discovery Bay Beach<br />
                St. Ann, Jamaica
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Open Daily<br />
                10:00 AM - 10:00 PM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Contact</h3>
              <p className="text-muted-foreground text-sm">
                Walk-ins Welcome<br />
                Just come by!
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Payment</h3>
              <p className="text-muted-foreground text-sm">
                Cash & Cards<br />
                Accepted
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map Embed */}
        <Card className="overflow-hidden">
          <div className="aspect-[21/9] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.2!2d-77.4!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzAwLjAiTiA3N8KwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000"
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
      </div>
    </section>
  );
};

export default Contact;
