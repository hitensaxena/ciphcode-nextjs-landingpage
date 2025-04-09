import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <header id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crafting Digital Excellence with Innovation
            </h1>
            <p className="text-on-surface-variant text-lg mb-8">
              We transform ideas into powerful digital solutions that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="#contact" variant="primary">Get Started</Button>
              <Button href="#portfolio" variant="outline">View Portfolio</Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Hero Image"
              width={600}
              height={400}
              className="w-full rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;