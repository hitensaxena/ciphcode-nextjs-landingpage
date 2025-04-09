import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Jane Smith',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Mike Johnson',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2370&auto=format&fit=crop'
  }
];

const TeamSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-padding"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-on-surface-variant">Meet the talented people behind our success</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-on-surface-variant">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;