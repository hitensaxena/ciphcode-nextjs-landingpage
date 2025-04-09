import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  onClick 
}) => {
  const baseStyles = 'btn';
  const variants = {
    primary: 'btn-green',
    black: 'btn-black',
    'outlined-dark': 'btn-outlined-dark'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;