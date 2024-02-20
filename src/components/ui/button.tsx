import DiscordIcon from './discord-icon';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className='flex-between flex items-center justify-center space-x-1 rounded-md bg-discord px-2 py-1 text-xs font-semibold text-white'>
        <DiscordIcon />
        <p className='mb-[1px]'>{text}</p>
      </button>
    </>
  );
};

export default Button;
