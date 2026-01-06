interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition duration-200';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-base md:text-lg',
  };

  const variantStyles = {
    primary: 'bg-[#FFCEE9] hover:bg-[#FFB8E6] text-black',
    secondary: 'bg-[#926A63] hover:bg-[#7D5A56] text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
