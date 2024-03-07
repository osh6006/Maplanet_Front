import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface IHunterMesoBoardItemProps {
  boardId: number;
  userId: number;
  discordId: string;
  profileImg: string;
  profileName: string;
  manner: number;
  cost: number;
}

const HunterMesoBoardItem: React.FunctionComponent<IHunterMesoBoardItemProps> = ({
  boardId,
  userId,
  discordId,
  profileImg,
  profileName,
  manner,
  cost
}) => {
  const router = useRouter();

  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // const wantedCost = (cost: number | undefined) => {
  //   if (cost === undefined) return 0;
  //   const dividedCost = cost / 10000;
  //   return addCommasToCost(dividedCost);
  // };

  // 쩔, 겹사 보드
  return (
    <li className='flex h-[94px] w-full list-none items-center justify-between gap-1 rounded-xl bg-tableBackground px-[17px]'>
      {/* 프로필 */}
      <InlineProfile imgUrl={''} discordNickName={profileName} />

      <div className='flex gap-2'>
        {/* 현상금 */}
        <div className='mr-5 flex items-center'>
          <span className='mr-[7px] text-xl font-bold text-[#EBFF00]'>{addCommasToCost(cost)}</span>
          <span className='text-xs'>메소</span>
        </div>
        {/* 버튼 */}
        <Button
          color='lightGray'
          size='sm'
          onClick={() => {
            console.log('userId', userId);
            router.push(`/profile/${userId}`);
          }}>
          프로필 보기
        </Button>
        <Link href={`https://discord.com/users/${discordId}`} target='_blanck'>
          <Button color='discord' size='sm' className='relative z-20 overflow-hidden'>
            <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={12} />
            1:1 대화
          </Button>
        </Link>
      </div>
    </li>
  );
};

export default HunterMesoBoardItem;
