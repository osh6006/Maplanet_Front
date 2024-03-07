import clsx from 'clsx';
import { ButtonHTMLAttributes, useState } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  color: 'main' | 'discord' | 'gray' | 'lightGray';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'wide' | 'card';
}

const sizes = {
  xs: 'text-xs px-2 py-2',
  sm: 'text-sm px-3 py-2',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-2',
  xl: 'text-xl px-4 py-2',
  wide: 'w-full px-1 py-2',
  card: 'w-full text-sm px-2 py-2 sm:text-xs'
};

const colors = {
  main: 'bg-main text-White',
  discord: 'bg-discord ',
  gray: 'bg-tableBackground border',
  lightGray: 'bg-lightGray'
};

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  color,
  size,
  disabled,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={clsx(
        'shadow-[inset_0_0_20px_rgba(255,255,255,0)] duration-200 hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]',
        'relative z-20 overflow-hidden flex transform select-none items-center justify-center gap-2 rounded-md text-lg font-semibold transition-all active:scale-95',
        disabled ? 'pointer-events-none border-transparent bg-slate-500 text-white' : '',
        color ? colors[color] : '',
        size ? sizes[size] : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}>
      {children}
      {/* hover after content */}
      <div className={clsx(isHovered ? 'animate-button-hover' : '', 'absolute left-[-55px] top-[-50px] h-[155px] w-[50px] origin-top rotate-[35deg] bg-white blur-md opacity-20 transition-all duration-[400ms] ease-in-out after:content-[""]')}></div>
    </button>
  );
};

export default Button;
