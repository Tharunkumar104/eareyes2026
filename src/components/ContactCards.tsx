import { motion } from 'framer-motion';
import { Phone, User, Briefcase } from 'lucide-react';

interface Contact {
  name: string;
  role: string;
  event?: string;
  phone: string;
}

const contacts: Contact[] = [
  { name: 'Dr. S. Lakshmi', role: 'Faculty Coordinator', phone: '+91 98765 43210' },
  { name: 'Prof. R. Kumar', role: 'Faculty Coordinator', phone: '+91 98765 43211' },
  { name: 'Arun Prakash', role: 'Student Coordinator', event: 'Overall', phone: '+91 98765 43212' },
  { name: 'Priya Sharma', role: 'Student Coordinator', event: 'Overall', phone: '+91 98765 43213' },
  { name: 'Karthik R.', role: 'Event Lead', event: 'Paper Presentation', phone: '+91 98765 43214' },
  { name: 'Divya M.', role: 'Event Lead', event: 'Project Presentation', phone: '+91 98765 43215' },
  { name: 'Suresh K.', role: 'Event Lead', event: 'Circuit Debugging', phone: '+91 98765 43216' },
  { name: 'Meena S.', role: 'Event Lead', event: 'Coding', phone: '+91 98765 43217' },
  { name: 'Rahul V.', role: 'Event Lead', event: 'Ideation in Tech', phone: '+91 98765 43218' },
  { name: 'Anitha P.', role: 'Event Lead', event: 'Melodia', phone: '+91 98765 43219' },
  { name: 'Vijay S.', role: 'Event Lead', event: 'Sherlock Sense', phone: '+91 98765 43220' },
  { name: 'Lakshmi R.', role: 'Event Lead', event: 'Campus Voyage', phone: '+91 98765 43221' },
];

export const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {contacts.map((contact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="glass-card p-4 rounded-xl"
        >
          {/* Avatar */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-primary-foreground">
                {contact.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              {/* Name */}
              <h4 className="font-semibold text-foreground truncate">
                {contact.name}
              </h4>
              {/* Role & Event */}
              <div className="flex items-center gap-1 mt-1">
                <Briefcase className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground truncate">
                  {contact.role}
                  {contact.event && ` - ${contact.event}`}
                </span>
              </div>
              {/* Phone */}
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                {contact.phone}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
