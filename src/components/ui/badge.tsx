import clsx from 'clsx';

interface IBadgeProps {
  children: React.ReactNode;
  size?: 'basic' | 'select' | 'card';
  className?: string;
}

const sizes = {
  basic: 'px-[24px] py-[4px] rounded-xl',
  select: 'px-2 py-[1px]',
  card: 'px-[12px] py-[4px] rounded-xl'
};

const Badge: React.FunctionComponent<IBadgeProps> = ({ size = 'basic', children, className }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-x-2 rounded-sm text-sm text-white',
        size ? sizes[size] : '',
        className
      )}>
      {children}
    </div>
  );
};

export default Badge;
