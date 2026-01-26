import { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard, EventModal, Event } from './EventCard';

const events: Event[] = [
  // Technical Events
  {
    id: 'paper',
    title: 'Paper Presentation',
    type: 'technical',
    icon: 'paper',
    description: 'Present your research and innovative ideas in front of expert panels. Showcase your technical knowledge and communication skills through well-structured presentations on cutting-edge topics in Electronics and Instrumentation Engineering.',
    rules: [
      'Maximum 3 members per team',
      'Presentation duration: 8-10 minutes + 3 minutes Q&A',
      'Topics must be relevant to EIE domain',
      'PPT should have maximum 15 slides',
      'Abstract submission deadline: Feb 10, 2026',
      'Plagiarism must be below 20%'
    ],
    coordinators: [
      { name: 'Karthik R.', phone: '+91 98765 43214' },
      { name: 'Sneha M.', phone: '+91 98765 43222' }
    ]
  },
  {
    id: 'project',
    title: 'Project Presentation',
    type: 'technical',
    icon: 'project',
    description: 'Demonstrate your working project models and prototypes. This is your chance to showcase hands-on engineering skills and innovative solutions to real-world problems.',
    rules: [
      'Maximum 4 members per team',
      'Working model is mandatory',
      'Presentation duration: 10 minutes + 5 minutes demo',
      'Power supply will be provided (230V AC)',
      'Abstract with block diagram required',
      'Projects must be original work'
    ],
    coordinators: [
      { name: 'Divya M.', phone: '+91 98765 43215' },
      { name: 'Arun K.', phone: '+91 98765 43223' }
    ]
  },
  {
    id: 'circuit',
    title: 'Circuit Debugging',
    type: 'technical',
    icon: 'circuit',
    description: 'Test your troubleshooting skills by identifying and fixing errors in electronic circuits. Race against time to debug circuits and prove your practical expertise.',
    rules: [
      'Individual participation only',
      'Two rounds: Preliminary (30 min) and Finals (45 min)',
      'Basic and advanced circuit debugging',
      'No electronic gadgets allowed',
      'Components and tools will be provided',
      'Fastest correct solution wins'
    ],
    coordinators: [
      { name: 'Suresh K.', phone: '+91 98765 43216' },
      { name: 'Priya R.', phone: '+91 98765 43224' }
    ]
  },
  {
    id: 'coding',
    title: 'Coding Challenge',
    type: 'technical',
    icon: 'coding',
    description: 'Put your programming skills to the test in this competitive coding challenge. Solve algorithmic problems and optimize your solutions under time pressure.',
    rules: [
      'Individual or team of 2 members',
      'Languages: C, C++, Python, Java',
      'Duration: 2 hours',
      'Internet access restricted to IDE only',
      'Multiple problem statements with varying difficulty',
      'Partial marking available'
    ],
    coordinators: [
      { name: 'Meena S.', phone: '+91 98765 43217' },
      { name: 'Vijay N.', phone: '+91 98765 43225' }
    ]
  },
  {
    id: 'ideation',
    title: 'Ideation in Tech',
    type: 'technical',
    icon: 'ideation',
    description: 'Present innovative tech ideas and solutions. This is a prerequisite for the 24-Hour Hackathon - shortlisting will be done through this event.',
    rules: [
      'Team of 2-4 members mandatory',
      'Idea must address a real-world problem',
      'Business model canvas required',
      'Presentation: 5 minutes pitch + 3 minutes Q&A',
      'Prototype/mockup encouraged but not mandatory',
      'Top teams qualify for 24-Hour Hackathon'
    ],
    coordinators: [
      { name: 'Rahul V.', phone: '+91 98765 43218' },
      { name: 'Anitha S.', phone: '+91 98765 43226' }
    ]
  },
  // Non-Technical Events
  {
    id: 'melodia',
    title: 'Melodia',
    type: 'non-technical',
    icon: 'melodia',
    description: 'Showcase your musical talents in this singing competition. Whether solo or duet, let your voice captivate the audience and judges alike.',
    rules: [
      'Solo or duet performance',
      'Song duration: 3-5 minutes',
      'Karaoke track must be submitted beforehand',
      'Any language allowed',
      'No vulgarity in lyrics',
      'Own instruments allowed'
    ],
    coordinators: [
      { name: 'Anitha P.', phone: '+91 98765 43219' },
      { name: 'Ravi M.', phone: '+91 98765 43227' }
    ]
  },
  {
    id: 'sherlock',
    title: 'Sherlock Sense',
    type: 'non-technical',
    icon: 'sherlock',
    description: 'Put your detective skills to the test! Solve puzzles, decode clues, and unravel mysteries in this exciting treasure hunt across the campus.',
    rules: [
      'Team of 3-4 members',
      'Multiple rounds with increasing difficulty',
      'Clues scattered across designated areas',
      'Time-based scoring',
      'No mobile phones during hunt',
      'Physical fitness required for outdoor challenges'
    ],
    coordinators: [
      { name: 'Vijay S.', phone: '+91 98765 43220' },
      { name: 'Deepa K.', phone: '+91 98765 43228' }
    ]
  },
  {
    id: 'campus',
    title: 'Campus Voyage',
    type: 'non-technical',
    icon: 'campus',
    description: 'An adventurous journey through various fun-filled games and activities. Experience a mix of physical challenges, quizzes, and creative tasks.',
    rules: [
      'Team of 4 members',
      'Multiple checkpoint-based activities',
      'Points awarded at each station',
      'Time penalties for rule violations',
      'Sports attire recommended',
      'Team coordination is key'
    ],
    coordinators: [
      { name: 'Lakshmi R.', phone: '+91 98765 43221' },
      { name: 'Sathish M.', phone: '+91 98765 43229' }
    ]
  }
];

export const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const technicalEvents = events.filter(e => e.type === 'technical');
  const nonTechnicalEvents = events.filter(e => e.type === 'non-technical');

  return (
    <section id="events" className="section-padding water-bg">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Explore Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Awaits You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From technical challenges that test your engineering prowess to creative competitions that showcase your talents
          </p>
        </motion.div>

        {/* Technical Events */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
          >
            <span className="w-8 h-1 bg-primary rounded-full" />
            Technical Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onSelect={setSelectedEvent}
              />
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
          >
            <span className="w-8 h-1 bg-accent rounded-full" />
            Non-Technical Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onSelect={setSelectedEvent}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};
