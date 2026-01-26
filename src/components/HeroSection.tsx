import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import poster from '@/assets/eareyes-poster.jpg';

interface HeroSectionProps {
  targetDate: Date;
}

export const HeroSection = ({ targetDate }: HeroSectionProps) => {
  const scrollToEvents = () => {
    const element = document.querySelector('#events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen water-bg overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-40 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow opacity-30 blur-3xl" />
      </div>

      <div className="container-width section-padding pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Inter-College Technical Symposium
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">EAREYES</span>
              <span className="text-foreground"> 2K26</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0"
            >
              Organized by the EIE Association of Kongu Engineering College
            </motion.p>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>February 17, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kongu Engineering College</span>
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm text-muted-foreground mb-4">Event starts in</p>
              <CountdownTimer targetDate={targetDate} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToEvents}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-xl shadow-glow hover:shadow-lg transition-all"
              >
                Explore Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/30 text-primary hover:bg-primary/5 rounded-xl"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src={poster}
                  alt="EAREYES 2K26 Event Poster"
                  className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg"
                />
              </motion.div>
              {/* Glow behind poster */}
              <div className="absolute inset-0 bg-gradient-glow opacity-60 blur-3xl scale-110" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToEvents}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
