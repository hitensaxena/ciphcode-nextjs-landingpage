import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <header id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight text-white">
              Navigating the <span className="text-primary">digital landscape</span> for success.
            </h1>
            <p className="text-base md:text-lg mb-8 text-on-surface-variant max-w-md mx-auto md:mx-0">
              We partner with businesses to solve unique challenges through bespoke software and strategic design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#contact" variant="primary">
                Get Started
              </Button>
              <Button href="#portfolio" variant="outlined-dark">
                View Projects
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/600x500/1f2937/39ff14?text=Hero+Image"
              alt="Hero illustration"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.15),transparent_50%)]"></div>
    </header>
  );
};

export default HeroSection;