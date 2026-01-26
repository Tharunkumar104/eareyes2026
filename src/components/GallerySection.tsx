import { motion } from 'framer-motion';
import { GalleryGrid } from './GalleryGrid';

export const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding water-bg">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Memories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses from previous EAREYES editions - moments of innovation, collaboration, and celebration
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
    </section>
  );
};
