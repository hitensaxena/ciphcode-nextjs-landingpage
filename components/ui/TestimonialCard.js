import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role, image, rating = 5 }) => {
  return (
    <motion.div 
      className="content-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-primary fill-primary" size={16} />
        ))}
      </div>
      <blockquote className="text-lg mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <Image
          src={image}
          alt={author}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-on-surface-variant">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;