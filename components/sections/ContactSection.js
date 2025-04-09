import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-surface-light section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Contact Us</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-on-surface-light">
              Let's discuss your project
            </h3>
            <p className="text-on-surface-light opacity-80">
              Fill out the form or reach out via email. We're excited to hear about your project.
            </p>
            <Image
              src="https://placehold.co/100x100/ffffff/111827?text=Shape"
              alt="Decorative shape"
              width={100}
              height={100}
              className="mt-8 opacity-80"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;