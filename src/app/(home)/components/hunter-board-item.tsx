import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';

interface IHunterBoardItemProps {
  id: number;
  profileImg: string;
  profileName: string;
  manner: number;
  report: number;
  date: string;
  view: number;
  title: string;
  cost: number;
  type: string;
  nickname: string;
}

const HunterBoardItem: React.FunctionComponent<IHunterBoardItemProps> = ({
  id,
  profileImg,
  profileName,
  manner,
  report,
  date,
  view,
  title,
  cost,
  type,
  nickname
}) => {
  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  console.log('board id:', profileImg);
  // 쩔, 겹사 보드
  return (
    <li className='flex w-full list-none flex-col justify-center gap-1 rounded-xl bg-tableBackground px-4 py-4'>
      {/* 첫번째 내용 */}
      <div className='flex'>
        {/* 프로필 */}
        <InlineProfile
          imgUrl={profileImg}
          manner={manner}
          unManner={report}
          discordNickName={profileName}
        />
        {/* 날짜, 조회수 */}
        <div className='ml-2 flex flex-grow items-center justify-between text-xs text-[#aeaeae]'>
          {date.toString().split('T')[0]}
          <div className='flex items-center gap-x-1'>
            <Icon src='/svgs/eyes.svg' alt='eyes' size={12} />
            <div className='ml-[1px]'>{view}</div>
          </div>
        </div>
      </div>

      {/* 두번째 내용 */}
      <div className='my-2 text-base'>{title}</div>

      {/* 세번째 내용 */}
      <div className='flex'>
        <div className='mr-12 flex items-center gap-1'>
          <Icon src='/svgs/money.svg' alt='money' size={14} />
          <span className='text-sm text-[#ff6666]'>{addCommasToCost(cost)}</span>
        </div>
        <div className='flex items-center gap-8 text-sm text-[#cecece]'>
          <div className='flex items-center gap-1'>
            <Icon src={`/svgs/hunt.svg`} alt={type} size={12} />
            {type}
          </div>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/nickname.svg' alt='jobs' size={14} />
            {nickname}
          </div>
        </div>
      </div>
    </li>
  );
};

export default HunterBoardItem;
