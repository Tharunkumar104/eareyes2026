import { motion } from 'framer-motion';
import { Phone, User, Briefcase } from 'lucide-react';

interface Contact {
  name: string;
  role: string;
  event?: string;
  phone: string;
}

const contacts: Contact[] = [
  { name: 'Dr.K.N.Baluprithviraj', role: 'Faculty Coordinator', phone: '+91 93630 67473' },
  { name: 'N.Indhu', role: 'Faculty Coordinator', phone: '+91 94894 65312' },
  { name: 'Madhavan K', role: 'Student Coordinator', event: 'Overall', phone: '+91 90428 46606' },
  { name: 'Shafeek A', role: 'Student Coordinator', event: 'Overall', phone: '+91 93423 93529' },
  { name: 'Abisha Carin D', role: 'Event Lead', event: 'Technova', phone: '+91 94860 67288' },
  { name: 'Tharunkumar D', role: 'Event Lead', event: 'Innoventure', phone: '+91 90473 23169' },
  { name: 'Thamaraiselvan K', role: 'Event Lead', event: 'Fix and Flex', phone: '+91 90254 76154' },
  { name: 'Shifana K', role: 'Event Lead', event: 'CodeCraft', phone: '+91 93457 14478' },
  { name: 'Rishikeshwaran M', role: 'Event Lead', event: 'Ideathon', phone: '+91 97157 08810' },
  { name: 'Subiksha R', role: 'Event Lead', event: 'Brain Trace', phone: '+91 94888 07719' },
  { name: 'Arulventhan G M', role: 'Event Lead', event: 'Pick & Pitch', phone: '+91 81228 15659' },
  { name: 'Prabhashini P', role: 'Event Lead', event: 'Cinebuzz', phone: '+91 93612 89677' },
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
