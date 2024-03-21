'use client';

import Icon from '@/components/ui/icon';
import SNSButton from '@/components/ui/sns-button';
import Link from 'next/link';

interface IDiscordChannelBtnProps {}

const KAKAO_HREF = process.env.NEXT_PUBLIC_DISCORD_CHANNEL_URL;
const DISCORD_HREF = process.env.NEXT_PUBLIC_DISCORD_CHANNEL_URL;

const DiscordChannelBtn: React.FunctionComponent<IDiscordChannelBtnProps> = ({}) => {
  return (
    <div className='fixed bottom-8 right-4 flex flex-col items-end gap-y-4'>
      <SNSButton
        alt='discord'
        href={DISCORD_HREF || '#'}
        title={'메랜 피플 채널'}
        imageUrl='/svgs/discord-icon.svg'
        color='bg-discord text-white'
      />

      <SNSButton
        alt='kakao'
        href={DISCORD_HREF || '#'}
        title={'메랜 피플 채널'}
        imageUrl='/svgs/kakao.svg'
        color='bg-kakao text-black'
      />
    </div>
  );
};

export default DiscordChannelBtn;
