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
  iconPath: string;
  registerLink: string; 
}

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

export const EventCard = ({ event, index, onSelect }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(event)}
      className="glass-card rounded-2xl p-6 cursor-pointer card-hover group relative overflow-hidden"
    >
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
        <img 
          src={event.iconPath} 
          alt=""
          className="w-full h-full object-cover blur-2xl scale-150"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Image Container - INCREASED SIZE */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 group-hover:scale-105 transition-all duration-300 shadow-xl border border-white/10">
          <img 
            src={event.iconPath} 
            alt={`${event.title} icon`}
            className="w-full h-full object-contain drop-shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300/1a1a2e/ffffff?text=Event';
            }}
          />
        </div>

        {/* Type Badge */}
        <div className="flex justify-center mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              event.type === 'technical'
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'bg-accent/10 text-accent border border-accent/20'
            }`}
          >
            {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center line-clamp-2">
          {event.title}
        </h3>

        {/* Description Preview */}
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 text-center">
          {event.description}
        </p>

        {/* View Details */}
        <div className="flex justify-center items-center text-sm font-medium text-primary">
          <span>View Details</span>
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

// OPTION 2: Alternative with Top Banner Image
export const EventCardBanner = ({ event, index, onSelect }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onSelect(event)}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer card-hover group"
    >
      {/* Banner Image - INCREASED SIZE */}
      <div className="relative w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <img 
          src={event.iconPath} 
          alt={`${event.title} banner`}
          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Type Badge on Image */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
            event.type === 'technical'
              ? 'bg-primary/20 text-primary border border-primary/30'
              : 'bg-accent/20 text-accent border border-accent/30'
          }`}
        >
          {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Description Preview */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {event.description}
        </p>

        {/* View Details */}
        <div className="flex items-center text-sm font-medium text-primary">
          <span>View Details</span>
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
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

            {/* Header with Image */}
            <div className="mb-6">
              {/* Event Image in Modal - INCREASED SIZE */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-5 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={event.iconPath} 
                  alt={`${event.title} logo`}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              <div className="text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    event.type === 'technical'
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}
                >
                  {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {event.title}
                </h2>
              </div>
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
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="flex-1">{rule}</span>
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
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">
                        {coordinator.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">
                        {coordinator.name}
                      </p>
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Phone className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{coordinator.phone}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Register Button */}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all hover:shadow-glow"
              onClick={() => window.open(event.registerLink, '_blank')}
            >
              Register Now
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};