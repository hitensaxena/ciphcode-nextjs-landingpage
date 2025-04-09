import { motion } from 'framer-motion';
import { scaleOnHover } from '@/utils/animations';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="content-card p-6 text-center"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="inline-block p-3 mb-4 rounded-full bg-primary-15">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          {icon}
        </motion.div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-on-surface-variant">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;