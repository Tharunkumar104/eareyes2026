import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
  variant?: 'default' | 'compact';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate, variant = 'default' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex gap-3">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-1">
            <motion.span
              key={unit.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-lg font-bold text-primary"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            <span className="text-xs text-muted-foreground">{unit.label[0]}</span>
            {index < timeUnits.length - 1 && (
              <span className="text-muted-foreground ml-1">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <motion.div
              className="glass-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-xl animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl md:text-4xl font-bold gradient-text"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.span>
            </motion.div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-glow opacity-50 blur-xl -z-10" />
          </div>
          <span className="mt-2 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
