import Image from 'next/image';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, image, rating = 5 }) => {
  return (
    <div className="content-card">
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