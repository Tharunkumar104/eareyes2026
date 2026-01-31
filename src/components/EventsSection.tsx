import { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard, EventModal, Event } from './EventCard';
// Import the image from the components folder (same folder as this file)
import innoventureIcon from './INOVENTURE.webp';
import technovaIcon from './Technova.webp';
import braintraceIcon from './Braintrace.webp';
import cinebuzzIcon from './Cinebuzz.webp'; // ✅ FIXED: Changed "Felx" to "Flex"
import ideathonIcon from './Ideathon.webp';
import CodecraftIcon from './Codecraft.webp';
import pickIcon from './Pickandpitch.webp';
import fixIcon from './fix.webp';

const events: Event[] = [
  // Technical Events
  {
    id: 'paper',
    title: 'TechNova ',
    type: 'technical',
    iconPath: technovaIcon,
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
    iconPath: innoventureIcon,
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
    iconPath: fixIcon,
    description: 'Test your troubleshooting skills by identifying and fixing errors in electronic circuits. Race against time to debug circuits and prove your practical expertise.',
    rules:[
      'A team should consist of a minimum of 2 members.',
      'Formation of teams from interdisciplinary departments is not allowed.',
      'The competition consists of 2 rounds only, each with varying levels of difficulty.',
      'Certificates will be provided to all participants.',
      'Any form of malpractice will lead to immediate disqualification.',
      'The jurys decisions are final.',
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
    iconPath: CodecraftIcon,
    description: 'CodeCraft is not just a coding contest, it is a battle of brains where ideas turn into efficient code. Participants are challenged to think differently, design smart solutions, and craft clean programs under time pressure. Every line of code matters as innovation, logic, and speed✨',
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
    iconPath: ideathonIcon,
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
    id: 'sherlock',
    title: 'Pick & Pitch',
    type: 'non-technical',
    iconPath: pickIcon,
    description: 'A fun two-member event where you act to find a product and promote it creatively. Quick thinking, smart acting, and teamwork will lead you to victoy.',
    rules: [
      'Each team must consist of exactly 2 members',
      'Mobile phones or external assistance are strictly prohibited during the event',
      'Participants must use only actions and expressions; words, sounds, spelling, or brand names are not allowed',
      'Teams must identify and promote the given product within the allotted time; extra time may lead to penalties',
      'Performances should focus on product usage, features, and customer appeal.',
      'The judges and organizers decisions will be final and binding.'
    ],
    coordinators: [
      { name: 'Arulventhan G M', phone: '+91 81228 15659'},
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeyljlhfbWpUGLfk1kJ-WNLqqAkMQjQ4GamiC312RxrUgBvxg/viewform?usp=publish-editor',
  },
  {
    id: 'melodia',
    title: 'Brain Trace',
    type: 'non-technical',
    iconPath: braintraceIcon,
    description: 'Team-based cognitive challenge focusing on brand recognition,observation skills and memory power.',
    rules: [
      'A team should consist of a minimum of 2 members. ',
      'Formation of teams from interdisciplinary departments is not allowed. ',
      'The competition consists of 2 rounds only, each with varying levels of difficulty. ',
      'Certificates will be provided to all participants. ',
      'The jurys decisions are final. ',
    ],
    coordinators: [
      { name: 'Subiksha R', phone: '+91 94888 07719'},
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdEQuJ0MGpkhwMECFWVZUg76wB9iiAFixCNuyBfMj5QfneImw/viewform?usp=publish-editor',
  },
  {
    id: 'campus',
    title: 'Cinebuzz',
    type: 'non-technical',
    iconPath: cinebuzzIcon,
    description: 'Test your knowledge of movies and cinema in this fun non-technical quiz event.',
    rules: [
      'Participants answer movie and character-based questions two exciting rounds.',
      'Each team can participate as per event instructions.',
      'The event will be conducted two round',
      'Sports attire recommended',
      'Round 1: Identify the movie name based on given clues.',
      'Round 2: Identify the characters using visual or textual hints.',
      'Use of unfair means or external help is not allowed.',
      'Judges decision will be final.'
    ],
    coordinators: [
      { name: 'Prabhashini P', phone: '+91 93612 89677' },
    ],
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2iDEToAGSEPqqedqB-vieV2e3Vwxs0hEV9AHx5QyRaeOoDg/viewform?usp=sharing&ouid=110279443112939828214',
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