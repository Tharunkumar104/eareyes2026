import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

interface ScheduleItem {
  time: string;
  event: string;
  venue?: string;
  type?: 'main' | 'break' | 'ceremony';
}

const scheduleData: ScheduleItem[] = [
  {time:'9:00 AM onwards', event:'Ideathon', venue:'Main Lobby', type:'ceremony'},
  { time: '09:00 AM - 11:00 AM', event: 'TechNova', venue: 'Seminar Hall A', type: 'main' },
  { time: '09:00 AM - 11:00 AM', event: 'Innoventure', venue: 'Seminar Hall A', type: 'main' },
  { time: '10:25 AM - 10:45 AM', event: 'Break', type: 'break' },
  { time: '10:50 AM - 12:15 PM', event: 'Fix and Flex', venue: 'Seminar Hall B', type: 'main' },
  { time: '10:50 AM - 12:15 PM', event: 'CodeCraft', venue: 'Seminar Hall B', type: 'main' },
  { time: '12:15 PM - 01:15 PM', event: 'Lunch Break', type: 'break' },
  { time: '01:20 PM - 02:00 PM', event: 'Brain Trace', venue: 'Open Stage', type: 'main' },
  { time: '02:05 PM - 02:45 PM', event: 'Pick & Pitch', venue: 'Main Block', type: 'main' },
  { time: '02:50 PM - 03:30 PM', event: 'Cinebuzz', venue: 'Campus Wide', type: 'main' },
  { time: '03:45 PM onwards ', event: 'Prize Distribution & Valedictory', venue: 'Main Auditorium', type: 'ceremony' },
];

export const ScheduleTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

      <div className="space-y-6">
        {scheduleData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, margin: '-50px' }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-4 h-4 rounded-full border-2 ${
                  item.type === 'ceremony'
                    ? 'bg-accent border-accent shadow-glow'
                    : item.type === 'break'
                    ? 'bg-muted border-muted-foreground'
                    : 'bg-primary border-primary'
                }`}
              />
            </div>

            {/* Time */}
            <div
              className={`w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0 ${
                index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}
            >
              <div className="flex items-center gap-2 md:justify-end">
                <Clock className="w-4 h-4 text-primary md:hidden" />
                <span
                  className={`font-mono text-sm font-semibold ${
                    item.type === 'ceremony' ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {item.time}
                </span>
              </div>
            </div>

            {/* Event Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0 ${
                index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'
              }`}
            >
              <div
                className={`glass-card p-4 rounded-xl ${
                  item.type === 'break'
                    ? 'opacity-60'
                    : item.type === 'ceremony'
                    ? 'border-accent/30'
                    : ''
                }`}
              >
                <h4
                  className={`font-semibold ${
                    item.type === 'ceremony'
                      ? 'text-accent'
                      : item.type === 'break'
                      ? 'text-muted-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {item.event}
                </h4>
                {item.venue && (
                  <div
                    className={`flex items-center gap-1 mt-1 text-sm text-muted-foreground ${
                      index % 2 !== 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    {item.venue}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
