import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ScheduleTimeline } from './ScheduleTimeline';

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Event Agenda
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>17th February 2026</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <ScheduleTimeline />
      </div>
    </section>
  );
};
