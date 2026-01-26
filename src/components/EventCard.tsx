import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Phone, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Event {
  id: string;
  title: string;
  type: 'technical' | 'non-technical';
  description: string;
  rules: string[];
  coordinators: { name: string; phone: string }[];
  icon: string;
}

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

export const EventCard = ({ event, index, onSelect }: EventCardProps) => {
  const iconMap: { [key: string]: string } = {
    paper: '📄',
    project: '🔧',
    circuit: '⚡',
    coding: '💻',
    ideation: '💡',
    melodia: '🎵',
    sherlock: '🔍',
    campus: '🎯',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(event)}
      className="glass-card rounded-2xl p-6 cursor-pointer card-hover group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
        {iconMap[event.icon] || '🎯'}
      </div>

      {/* Type Badge */}
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
          event.type === 'technical'
            ? 'bg-primary/10 text-primary'
            : 'bg-accent/10 text-accent'
        }`}
      >
        {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>

      {/* Description Preview */}
      <p className="text-sm text-muted-foreground line-clamp-2">
        {event.description}
      </p>

      {/* View Details */}
      <div className="mt-4 flex items-center text-sm font-medium text-primary">
        <span>View Details</span>
        <motion.span
          className="ml-1"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
};

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full hover:bg-primary/10 z-10"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Header */}
            <div className="mb-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  event.type === 'technical'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {event.title}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">About the Event</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Rules */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Rules & Guidelines</h3>
              </div>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                      {index + 1}
                    </span>
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Coordinators */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Event Coordinators</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.coordinators.map((coordinator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {coordinator.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {coordinator.name}
                      </p>
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Phone className="w-3 h-3" />
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Register Button */}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all hover:shadow-glow"
              onClick={() => window.open('#', '_blank')}
            >
              Register Now
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
