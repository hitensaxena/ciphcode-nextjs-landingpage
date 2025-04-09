import { ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

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
    <section id="process" className="bg-surface-light section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <SectionHeading>Our Working Process</SectionHeading>
        <div className="space-y-0 mt-8 divide-y divide-[#e5e7eb]">
          {processSteps.map((step, index) => (
            <div key={index} className="process-item !border-b-0">
              <span className="process-title">
                <span className="process-number mr-2">{step.number}.</span>
                {step.title}
              </span>
              <ChevronRight className="text-primary text-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;