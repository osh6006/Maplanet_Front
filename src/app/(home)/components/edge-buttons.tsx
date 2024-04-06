'use client';

import toast from 'react-hot-toast';
import SNSButton from '@/components/ui/sns-button';

interface IDiscordChannelBtnProps {
  accessToken?: string;
}

const KAKAO_HREF = process.env.NEXT_PUBLIC_KAKAO_CHATTING_LINK;
const DISCORD_HREF = process.env.NEXT_PUBLIC_DISCORD_CHANNEL_URL;

const EdgeButtons: React.FunctionComponent<IDiscordChannelBtnProps> = ({ accessToken }) => {
  return (
    <div className='fixed bottom-8 right-4 z-50 flex flex-col items-end gap-y-4 sm:right-10'>
      <div className='sm:hidden'>
        <button
          className=' relative flex items-center justify-center gap-x-2 rounded-full bg-main px-4 py-2 transition-all active:scale-95'
          onClick={() => {
            if (!accessToken) toast.error('로그인을 해주세요!');
          }}>
          + 새 글
        </button>
      </div>

      <SNSButton
        alt='discord'
        href={DISCORD_HREF || '#'}
        title={'메랜 피플 채널'}
        imageUrl='/svgs/discord-icon.svg'
        color='bg-discord text-white'
      />

      <SNSButton
        alt='kakao'
        href={KAKAO_HREF || '#'}
        title={'메랜 피플 오픈 카톡'}
        imageUrl='/svgs/kakao.svg'
        color='bg-kakao text-black'
      />
    </div>
  );
};

export default EdgeButtons;
