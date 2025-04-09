"use client";

import { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    title: "Enterprise Platform",
    category: "Web Development",
    fullTitle: "Client A - Enterprise Platform",
    description: "A complex web platform...",
    rating: 5,
    review: "Ciphcode delivered a robust platform..."
  },
  {
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2400&auto=format&fit=crop",
    title: "Tech Startup Branding",
    category: "Brand Identity",
    fullTitle: "Client B - Tech Startup Branding",
    description: "Complete brand identity creation...",
    rating: 4,
    review: "The branding is bold..."
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2374&auto=format&fit=crop",
    title: "Consumer Mobile App",
    category: "Mobile Development",
    fullTitle: "Client C - Consumer Mobile App",
    description: "Cross-platform mobile app...",
    rating: 5,
    review: "Our users love the app!..."
  }
];

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="portfolio"
      className="section-padding"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Case Studies</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="black">View All Projects</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;