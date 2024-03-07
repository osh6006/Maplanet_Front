'use client';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';

import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';
import Badge from '@/components/ui/badge';

import { IHelperBoard } from '@/types';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import { filterImageUrl } from '@/util/util';
import HelperBoardModal from '@/components/modal/board/helper-board-modal';

dayjs.locale('ko');

interface IHelperCardProps extends IHelperBoard {
  badges?: string[];
}

const HelperCard: React.FunctionComponent<IHelperCardProps> = ({
  board1_id,
  discord_id,
  title,
  discord_image,
  discord_global_name,
  meso,
  hunting_ground,
  manner_count,
  report_count,
  progress_kind,
  complete,
  created_at,
  badges,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <HelperBoardModal
          boardId={board1_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
      <li
        className='group relative h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#161616] p-8 transition-all sm:flex
  sm:w-[320px]'>
        {complete ? (
          <BoardCardCompleate />
        ) : (
          <BoardCardHoverButtons
            discordId={discord_id}
            profileId={props.user_id}
            setIsModalOpen={onOpen}
          />
        )}

        <div className='flex w-full items-center justify-between '>
          <Badge className={clsx(progress_kind === '잠쩔' ? 'bg-main' : 'bg-violet')} size='card'>
            {progress_kind}
          </Badge>
          <time className='font-medium text-gray-400'>
            {dayjs(created_at).format('YYYY년 MM월 DD일')}
          </time>
        </div>

        <h1 className='my-6 text-xl font-semibold'>{title}</h1>
        <div className='mb-4 mt-3 flex flex-wrap items-center gap-2'>
          <Badge size='card' className='bg-lightGray text-yellow'>
            <Icon src='/svgs/money.svg' size={20} alt='meso' />
            {meso}
          </Badge>
          {badges?.map((el) => (
            <Badge size='card' key={el} className='bg-lightGray '>
              {el}
            </Badge>
          ))}
        </div>
        <div className='mt-6 flex items-center justify-between '>
          <InlineProfile
            imgUrl={filterImageUrl(discord_image)}
            manner={manner_count}
            unManner={report_count}
            discordNickName={discord_global_name}
          />
          <div className='flex items-center gap-x-1 font-light'>
            <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
            <p className='leading-3'>{props.view_count}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default HelperCard;
