import { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard, EventModal, Event } from './EventCard';

const events: Event[] = [
  // Technical Events
  {
    id: 'paper',
    title: 'TechNova ',
    type: 'technical',
    icon: 'paper',
    description: 'TechNova is an exciting Paper Presentation event where you can present your ideas and research.',
    rules:[
      'Maximum 3 members per team',
      'Presentation duration: 5 minutes + 2 minutes Q&A',
      'PPT format from any domain is permitted to present. ',
      'PPT should contain maximum of 8-10 slides.',
      'After registration, team leaders must join the WhatsApp group (Link in G-form)',
      'Participants are asked to be in their respected venue before 10 minutes. ',
      'Certificates will be given to all the participants.'
    ],
    coordinators: [
      { name: 'Madhavan K', phone: '+91 90428 46606' }
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc6u16Ummw_3Wvwn3fsq1rbRMMN_URZemRjq36rCKuheD5v5A/viewform?usp=dialog',
  },
  {
    id: 'project',
    title: 'Innoventure',
    type: 'technical',
    icon: 'project',
    description: 'Innoventure is a dynamic Project Expo showcasing innovative ideas and creations by talented individuals. It provides a platform for participants to present their work, inspire others, and spark collaboration✨',
    rules: [
      'Team size: Minimum 2 and Maximum 3 members',
      'Projects can be presented from any domain ',
      'Abstract must be submitted in the G-form itself ',
      'After registration, team leaders must join the WhatsApp group (Link in G-form) ',
      'Each team get 7 minutes (5 min presentation + 2 min Q/A)',
      'Prototype is mandatory on the event day',
      'Certificates will be given to all the participants'
    ],
    coordinators: [
      { name: 'Tharunkumar D', phone: '+91 9047323169' },
    ],
     registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNp4uz1fie8V38JeqLNXkQ5mDBlaYUDkGzVkq12vUS_6UX6Q/viewform?usp=header',
  },
  {
    id: 'circuit',
    title: 'Fix and Flex',
    type: 'technical',
    icon: 'circuit',
    description: 'Test your troubleshooting skills by identifying and fixing errors in electronic circuits. Race against time to debug circuits and prove your practical expertise.',
    rules:[
      'A team should consist of a minimum of 2 members.',
      'Formation of teams from interdisciplinary departments is not allowed.',
      'The competition consists of 2 rounds only, each with varying levels of difficulty.',
      'Certificates will be provided to all participants.',
      'Any form of malpractice will lead to immediate disqualification.',
      'The jury’s decisions are final.',
    ],
    coordinators: [
      { name: 'Thamaraiselvan K', phone: '+91 90254 76154' },
    ],
    registerLink: 'https://forms.gle/f4bzoKRytfaryiUB9',
  },
  {
    id: 'coding',
    title: 'CodeCraft',
    type: 'technical',
    icon: 'coding',
    description: 'CodeCraft is not just a coding contest, it’s a battle of brains where ideas turn into efficient code. Participants are challenged to think differently, design smart solutions, and craft clean programs under time pressure. Every line of code matters as innovation, logic, and speed✨',
    rules:[
      'Each team must have 3 members: Coder, Debugger, and Algorithm Designer.',
      'Work individually; members can help others only after finishing their own task',
      'Allowed tools: laptops, IDEs, pen & paper; no phones or internet.',
      'Roles: a.Coder: Write the full program. b. Debugger: Find and fix errors. c. Algorithm Designer: Prepare pseudo-code/algorithm on paper. ',
      'Evaluation: Based on correctness, efficiency, clarity, teamwork; final submission includes all three roles',
    ],
    coordinators: [
      { name: 'Shifana K', phone: '+91 93457 14478'},
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe65cu2Wgko10KXuBlTc8Te91ew39jy1BsWr-HdtQQcb0QD9A/viewform?usp=publish-editor',
  },
  {
    id: 'ideathon',
    title: 'Ideathon',
    type: 'technical',
    icon: 'ideation',
    description: 'Present innovative tech ideas and solutions. This is a prerequisite for the 24-Hour Hackathon - shortlisting will be done through this event.',
    rules: [
      'The Ideathon is conducted as a preliminary round to shortlist teams for the upcoming Hackathon.',
      'A total of 50 teams will participate in the Ideathon.',
      'Each team can consist of maximum 4 members for the Ideathon round.',
      'Based on evaluation, 30 teams will be shortlisted for the Hackathon.',
      'Teams selected from the ideathon are allowed to participate in hackathon with their team , maximum of 4 members',
      'The idea presented in the Ideathon must be continued in the Hackathon without major changes.',
      'Prizes will be awarded to the Top 3 teams in the Ideathon.',
      'Cash prizes will be awarded to the Top 3 teams in the Hackathon.',
      'Ideas will be evaluated based on: Innovation and originality,Problem relevance,Feasibility,Impact,Presentation clarity',
      'The decision of the judges and organizers will be final and binding.',
      'Important dates: Ideathon - 17.02.2026,Hackathon - 27 , 28.02.2026.',
    ],
    coordinators: [
      { name: 'Rishikeshwaran M', phone: '+91 97157 08810' },
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSesmZzOQ1_ERvgS5baic7KMZd_gcJRtJy88166HrKN-Vri4xw/viewform?usp=publish-editor',
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
      { name: 'Anitha P', phone: '+91 98765 43219' },
      { name: 'Ravi M', phone: '+91 98765 43227' }
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNp4uz1fie8V38JeqLNXkQ5mDBlaYUDkGzVkq12vUS_6UX6Q/viewform?usp=header',
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
      { name: 'Vijay S', phone: '+91 98765 43220' },
      { name: 'Deepa K', phone: '+91 98765 43228' }
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNp4uz1fie8V38JeqLNXkQ5mDBlaYUDkGzVkq12vUS_6UX6Q/viewform?usp=header',
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
      { name: 'Lakshmi R', phone: '+91 98765 43221' },
      { name: 'Sathish M', phone: '+91 98765 43229' }
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNp4uz1fie8V38JeqLNXkQ5mDBlaYUDkGzVkq12vUS_6UX6Q/viewform?usp=header',
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
