import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';

interface IHunterMesoBoardItemProps {
  id: number;
  discordId: string;
  profileImg: string;
  profileName: string;
  manner: number;
  cost: number;
}

const HunterMesoBoardItem: React.FunctionComponent<IHunterMesoBoardItemProps> = ({
  id,
  discordId,
  profileImg,
  profileName,
  manner,
  cost
}) => {
  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const wantedCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    const dividedCost = cost / 10000;
    return addCommasToCost(dividedCost);
  };

  console.log('board id:', id, 'discord id:', discordId);
  // 쩔, 겹사 보드
  return (
    <li className='flex h-[94px] w-full list-none items-center justify-between gap-1 rounded-xl bg-tableBackground px-[17px]'>
      {/* 프로필 */}
      <InlineProfile imgUrl={''} manner={manner} unManner={15} discordNickName={profileName} />

      <div className='flex gap-2'>
        {/* 현상금 */}
        <div className='flex items-center mr-2'>
          <span className='mr-[7px] text-xl text-[#ff6666]'>{wantedCost(cost)}</span>
          <span className='text-xs'>(만)메소</span>
        </div>
        {/* 버튼 */}
        <Button color='main' size='xs'>
          프로필 보기
        </Button>
        <Button color='discord' size='xs'>
          <Icon src='/svgs/discord-icon.svg' alt='discord-icon' size={12}></Icon>
          <span>1:1 대화</span>
        </Button>
      </div>
    </li>
  );
};

export default HunterMesoBoardItem;
