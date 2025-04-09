import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, scaleOnHover } from '@/utils/animations';

const ProjectCard = ({ image, title, category, onClick }) => {
  return (
    <motion.div 
      className="content-card group cursor-pointer"
      onClick={onClick}
      {...fadeInUp}
      {...scaleOnHover}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-52 object-cover mb-0 rounded-b-none"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
      />
      <div className="p-4">
        <h3 className="text-md font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-on-surface-variant">{category}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;