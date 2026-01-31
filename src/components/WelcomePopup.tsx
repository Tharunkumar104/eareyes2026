import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  targetDate: Date;
}

export const WelcomePopup = ({ isOpen, onClose, targetDate }: WelcomePopupProps) => {
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
            className="relative w-full max-w-lg glass-card rounded-2xl p-6 md:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full hover:bg-primary/10"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                >
                  <Calendar className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  EAREYES 2K26
                </h2>
                <p className="text-muted-foreground">
                  Inter Department Technical Symposium
                </p>
              </div>

              {/* Countdown */}
              <div className="mb-6">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Event starts in
                </p>
                <CountdownTimer targetDate={targetDate} />
              </div>

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Important Notice
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Participants can only join the <span className="font-semibold text-accent">24 Hours Hackathon</span> if they have registered for <span className="font-semibold text-accent">Ideathon</span> in EAREYES 2K26.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      <span className="font-semibold">Shortlisting</span> for 24 Hours Hackathon will be done through the Ideathon.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action Button */}
              <Button
                onClick={onClose}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all hover:shadow-glow"
              >
                Explore Events
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
