import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  color: 'main' | 'discord' | 'gray' | 'lightGray';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'wide';
}

const sizes = {
  xs: 'text-xs px-3 py-2',
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-4 py-2',
  xl: 'text-xl px-4 py-2',
  wide: 'w-full px-1 py-2'
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
  return (
    <button
      className={clsx(
        'flex transform select-none items-center justify-center gap-2 rounded-md text-lg font-semibold transition-all active:scale-95',
        disabled ? 'pointer-events-none border-transparent bg-slate-500 text-white' : '',
        color ? colors[color] : '',
        size ? sizes[size] : '',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
