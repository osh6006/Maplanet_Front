import clsx from 'clsx';

interface IBadgeProps {
  children: React.ReactNode;
  color: string;
  size?: 'basic' | 'select' | 'card';
}

const sizes = {
  basic: 'px-[24px] py-[4px] rounded-xl',
  select: 'px-2 py-[1px]',
  card: 'px-[12px] py-[4px] rounded-xl'
};

const Badge: React.FunctionComponent<IBadgeProps> = ({ color, size = 'basic', children }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center text-sm font-semibold text-white',
        color ? color : 'bg-[#44444]',
        size ? sizes[size] : ''
      )}>
      {children}
    </div>
  );
};

export default Badge;
