import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-4xl">
        <SectionHeading>Testimonials</SectionHeading>
        <div className="content-card text-center">
          <Image
            src="https://placehold.co/80x80/1f2937/9ca3af?text=Client"
            alt="Client Photo"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-outline"
          />
          <p className="text-lg italic mb-6 leading-relaxed text-on-surface">
            "Quote from a happy client goes here. They were professional, creative, and delivered outstanding results on time and budget."
          </p>
          <p className="font-semibold text-on-surface">Client Name</p>
          <p className="text-sm text-on-surface-variant">Company Position</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;