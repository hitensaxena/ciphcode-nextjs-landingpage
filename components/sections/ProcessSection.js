import { ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const processSteps = [
  { number: '01', title: 'Discovery & Planning' },
  { number: '02', title: 'Design & Prototyping' },
  { number: '03', title: 'Development & Testing' },
  { number: '04', title: 'Deployment & Support' },
  { number: '05', title: 'Analytics & Optimization' },
  { number: '06', title: 'Handover & Documentation' }
];

const ProcessSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-surface"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Our Process</SectionHeading>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              className="content-card flex items-center justify-between group hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="process-number">{step.number}</span>
                <span className="text-white font-medium">{step.title}</span>
              </div>
              <ChevronRight className="text-primary w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;