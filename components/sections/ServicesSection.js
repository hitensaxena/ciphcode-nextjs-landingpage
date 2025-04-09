import React from 'react';
import { MonitorSmartphone, Palette, Smartphone, Briefcase, Box, Brain } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';

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
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Our Services</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;