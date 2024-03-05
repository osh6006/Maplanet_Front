import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const BoardCardCompleate = () => {
  return (
    <div className='absolute inset-0 z-[15] flex items-center justify-center backdrop-blur-sm'>
      <div className='relative flex h-full w-full items-center justify-center'>
        <h1 className='z-10 text-3xl font-semibold'>완료</h1>
        <div className='absolute inset-0 bg-black/40'></div>
      </div>
    </div>
  );
};

interface IBoardCardHoverButtonsProps {
  setIsModalOpen: () => void;
  discordId: string;
}

export const BoardCardHoverButtons = ({
  setIsModalOpen,
  discordId
}: IBoardCardHoverButtonsProps) => {
  return (
    <div
      className='absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-nowrap bg-black/50 px-4 opacity-0 transition
group-hover:opacity-100 group-hover:duration-300'>
      <Button color='lightGray' size='wide' onClick={setIsModalOpen}>
        상세보기
      </Button>

      <Button
        color='lightGray'
        size='wide'
        onClick={() => {
          // TODO : Move Profile
          console.log('asdf');
        }}>
        프로필 보기
      </Button>
      <Button
        color='discord'
        size='wide'
        onClick={() => {
          // TODO : Move Profile
          console.log('asdf');
        }}>
        <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
        1:1 대화
      </Button>
    </div>
  );
};
