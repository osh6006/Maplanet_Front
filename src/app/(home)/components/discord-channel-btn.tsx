import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Link from 'next/link';

interface IDiscordChannelBtnProps {}

const DiscordChannelBtn: React.FunctionComponent<IDiscordChannelBtnProps> = ({}) => {
  return (
    <Link href={'https://discord.gg/BMnenQcNff'} target='_blank'>
      <button className='fixed bottom-8 right-4 z-20 flex items-center justify-center gap-x-2 rounded-full bg-discord px-4 py-3 transition-all active:scale-95'>
        <Icon alt='discord' src='/svgs/discord-icon.svg' size={20} />
        <span>메랜 피플 채널</span>
        <Icon src={'/svgs/link.svg'} alt='link' size={15} />
      </button>
    </Link>
    // <div className='fixed bottom-2 right-2 flex items-center'>
    //   <Button size='xs' color='discord'>
    //     <Icon src={'/svgs/discord-icon.svg'} alt='discord' size={15} />
    //     <span>메이플레닛 디스코드 채널</span>
    //     <Icon src={'/svgs/link.svg'} alt='link' size={15} />
    //   </Button>
    // </div>
  );
};

export default DiscordChannelBtn;
