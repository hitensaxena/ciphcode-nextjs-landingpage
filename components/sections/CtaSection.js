import Image from 'next/image';
import Button from '@/components/ui/Button';

const CtaSection = () => {
  return (
    <section className="bg-surface-light py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="https://placehold.co/80x80/ffffff/111827?text=Icon"
          alt="CTA Icon"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 section-header-light">
          Let's make things happen.
        </h2>
        <p className="text-base md:text-lg mb-8 text-on-surface-light opacity-80 max-w-xl mx-auto">
          Ready to start your next project or discuss an idea? We're here to help.
        </p>
        <Button href="#contact" variant="black">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;