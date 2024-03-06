import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import clsx from 'clsx';
import * as React from 'react';

interface IHelperBoardItemProps {
  boardId: number;
  userId: number;
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
  map: string;
  time: number;
  job: string;
}

const HelperBoardItem: React.FunctionComponent<IHelperBoardItemProps> = ({
  boardId,
  userId,
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
  map,
  time,
  job
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  console.log('helper board:', 'board id:', boardId, 'user id:', userId, 'discord id:', discordId);

  return (
    <li
      className={clsx(
        'group relative flex w-full list-none flex-col justify-center gap-1 rounded-xl bg-tableBackground px-4 py-4'
      )}>
      {/* mouse hover content */}
      <div className='absolute inset-0 flex items-center justify-center gap-x-2 rounded-xl bg-black/60 px-4 opacity-0 transition-all duration-300 group-hover:opacity-100'>
        <Button color='lightGray' size='sm' onClick={() => console.log('helper board:', 'board id:', boardId, 'user id:', userId, 'discord id:', discordId)}>
          상세보기
        </Button>
        <Button
          color='lightGray'
          size='sm'
          onClick={() => {
            // TODO : Move Profile
            console.log('helper board:', 'board id:', boardId, 'user id:', userId, 'discord id:', discordId);
          }}
          className={clsx(
            'button relative overflow-hidden  '
          )}>
          프로필 보기
        </Button>
        <Button
          color='discord'
          size='sm'
          onClick={() => {
            // TODO : Discord Chat
            console.log('helper board:', 'board id:', boardId, 'user id:', userId, 'discord id:', discordId);
          }}
          className='relative z-20 overflow-hidden'>
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
        <div className='ml-2 flex flex-grow items-center justify-end gap-3 text-xs text-[#aeaeae]'>
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
        <Badge size='card' className={clsx(type === '잠쩔' ? 'bg-main' : 'bg-[#6E58F2]')}>
          <div className='flex items-center gap-1'>
            <Icon src={`/svgs/hunt.svg`} alt={type} size={12} />
            <span className='text-[12px]'>{type}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/map.svg' alt='map' size={12} />
            <span className='text-[12px]'>{map}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/time.svg' alt='time' size={12} />
            <span className='text-[12px]'>{time}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/jobs.svg' alt='jobs' size={12} />
            <span className='text-[12px]'>{job}</span>
          </div>
        </Badge>
      </div>
    </li>
  );
};

export default HelperBoardItem;
