import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';

const images = [
  { src: gallery1, alt: 'Technical workshop session' },
  { src: gallery2, alt: 'Circuit debugging competition' },
  { src: gallery3, alt: 'Keynote presentation' },
  { src: gallery4, alt: 'Winners celebration' },
  { src: gallery5, alt: 'Robotics project showcase' },
  { src: gallery6, alt: 'Musical performance' },
];

export const GalleryGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-primary-foreground text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10 rounded-full z-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-primary-foreground text-sm">
                {images[selectedIndex].alt}
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
