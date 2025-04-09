import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const Component = href ? motion.a : motion.button;
  
  const getVariantClass = () => {
    switch (variant) {
      case 'outline':
        return 'btn-outlined-dark';
      case 'black':
        return 'btn-black';
      default:
        return 'btn-green';
    }
  };

  return (
    <Component
      href={href}
      className={`btn ${getVariantClass()} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;