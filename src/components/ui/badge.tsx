import clsx from 'clsx';

interface IBadgeProps {
  color: string;
  children: React.ReactNode;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({ color, children }) => {
  return (
    <span className={clsx('rounded-sm px-2 py-[1px] text-sm text-white', color)}>{children}</span>
  );
};

export default Badge;
