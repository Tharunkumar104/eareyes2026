import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-width px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-1">
              EAREYES 2K26
            </h3>
            <p className="text-sm text-muted-foreground">
              Inter-College Technical Symposium
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {['Home', 'Events', 'Schedule', 'Gallery', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive" /> by EIE Association
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Kongu Engineering College
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
