import React from 'react';
import { MonitorSmartphone, Palette, Smartphone, Briefcase, Box, Brain } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const services = [
  {
    icon: <MonitorSmartphone />,
    title: 'Web Development',
    description: 'Crafting high-performance, scalable websites and web applications.'
  },
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-centered interfaces that engage and convert.'
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile apps for iOS and Android.'
  },
  {
    icon: <Briefcase />,
    title: 'Brand Strategy',
    description: 'Developing unique brand identities and market positioning.'
  },
  {
    icon: <Box />,
    title: 'Digital Products',
    description: 'Creating high-quality UI kits, templates, and tools.'
  },
  {
    icon: <Brain />,
    title: 'AI Integration',
    description: 'Leveraging AI tools to enhance creative workflows and build smart solutions.'
  }
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section 
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      exit="exit"
      variants={staggerContainer}
      id="services" 
      className="section-padding"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp}>
          <SectionHeading>Our Services</SectionHeading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;