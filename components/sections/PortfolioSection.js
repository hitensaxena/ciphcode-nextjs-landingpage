"use client";

import { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

const portfolioItems = [
  {
    image: "https://placehold.co/600x400/1f2937/39ff14?text=Project+1",
    title: "Enterprise Platform",
    category: "Web Development",
    fullTitle: "Client A - Enterprise Platform",
    description: "A complex web platform...",
    rating: 5,
    review: "Ciphcode delivered a robust platform..."
  },
  {
    image: "https://placehold.co/600x400/1f2937/39ff14?text=Project+2",
    title: "Tech Startup Branding",
    category: "Brand Identity",
    fullTitle: "Client B - Tech Startup Branding",
    description: "Complete brand identity creation...",
    rating: 4,
    review: "The branding is bold..."
  },
  {
    image: "https://placehold.co/600x400/1f2937/39ff14?text=Project+3",
    title: "Consumer Mobile App",
    category: "Mobile Development",
    fullTitle: "Client C - Consumer Mobile App",
    description: "Cross-platform mobile app...",
    rating: 5,
    review: "Our users love the app!..."
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="bg-background section-padding">
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
    </section>
  );
};

export default PortfolioSection;