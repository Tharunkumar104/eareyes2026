import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { ContactCards } from './ContactCards';

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to our coordinators or visit us at Kongu Engineering College
          </p>
        </motion.div>

        {/* Venue Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Venue</h3>
                <p className="text-sm text-muted-foreground">
                  Depatment of Electronics and Instrumentation<br />
                  Kongu Engineering College<br />
                  Perundurai, Erode - 638 060<br />
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:eareyes@kongu.edu"
                  className="text-sm text-primary hover:underline"
                >
                  eareyes2026@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  For general inquiries
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+91 93423 93529,+91 94860 67288"
                  className="text-sm text-primary hover:underline"
                >
                  +91 93423 93529,+91 94860 67288
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  EIE Department
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Event Coordinators
          </h3>
          <ContactCards />
        </motion.div>
      </div>
    </section>
  );
};
