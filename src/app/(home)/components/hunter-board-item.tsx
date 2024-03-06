import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';

interface IHunterBoardItemProps {
  boardId: number;
  discordId: string;
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
  boardId,
  discordId,
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  console.log('hunter board:', 'board id:', boardId, 'discord id:', discordId);

  return (
    <li className='group relative flex w-full list-none flex-col justify-center gap-1 rounded-xl bg-tableBackground px-4 py-4'>

      {/* mouse hover content */}
      <div className='absolute inset-0 flex items-center justify-center gap-x-2 rounded-xl bg-black/60 px-4 opacity-0 transition-all duration-300 group-hover:opacity-100'>
        <Button color='lightGray' size='sm' onClick={() => console.log('helper board:', 'board id:', boardId, 'discord id:', discordId)}>
          상세보기
        </Button>
        <Button
          color='lightGray'
          size='sm'
          onClick={() => {
            // TODO : Move Profile
            console.log('helper board:', 'board id:', boardId, 'discord id:', discordId);
          }}>
          프로필 보기
        </Button>
        <Button
          color='discord'
          size='sm'
          onClick={() => {
            // TODO : Discord Chat
            console.log('helper board:', 'board id:', boardId, 'discord id:', discordId);
          }}>
          <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
          1:1 대화
        </Button>
      </div>

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
        <div className='flex flex-grow items-center justify-end text-xs text-[#aeaeae] gap-3'>
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
      <div className='flex gap-[5px]'>
        <Badge size='card' className='bg-lightGray'>
          <Icon src='/svgs/money.svg' alt='money' size={14} />
          <span className='text-[12px] text-[#EBFF00]'>{addCommasToCost(cost)}</span>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/hunt.svg' alt='map' size={12} />
            <span className='text-[12px]'>{type}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/nickname.svg' alt='map' size={12} />
            <span className='text-[12px]'>{nickname}</span>
          </div>
        </Badge>
      </div>
    </li>
  );
};

export default HunterBoardItem;
