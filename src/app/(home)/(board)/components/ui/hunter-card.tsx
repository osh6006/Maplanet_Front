'use client';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';
import { filterImageUrl } from '@/util/util';

import Icon from '@/components/ui/icon';
import Badge from '@/components/ui/badge';
import InlineProfile from '@/components/ui/inline-profile';
import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';
import HunterBoardModal from '@/components/modal/board/hunter-board-modal';

import { IHunterBoard } from '@/types';

dayjs.locale('ko');

interface IHelperCardProps extends IHunterBoard {
  badges?: string[];
}

const HunterCard: React.FunctionComponent<IHelperCardProps> = ({
  board2_id,
  discord_id,
  title,
  discord_image,
  discord_global_name,
  meso,
  place_theif_nickname,
  manner_count,
  report_count,
  report_kind,
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
        <HunterBoardModal
          boardId={board2_id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}

      {complete ? (
        <BoardCardCompleate />
      ) : (
        <BoardCardHoverButtons
          discordId={discord_id}
          profileId={props.user_id}
          setIsModalOpen={onOpen}
        />
      )}

      <time className='text-right text-[10px] font-medium text-gray-400'>
        {dayjs(created_at).format('YYYY-MM-DD')}
      </time>

      <div className='flex w-full flex-col justify-end px-[12px]'>
        <InlineProfile
          imgUrl={filterImageUrl(discord_image)}
          manner={manner_count}
          unManner={report_count}
          discordNickName={discord_global_name}
        />
      </div>

      <div className='mt-2 h-[122px] w-full break-words px-[12px] text-xl font-semibold'>
        {title}
      </div>
      <div className='mb-4 mt-3 flex flex-wrap items-center gap-2'>
        <Badge size='card' className='bg-lightGray text-yellow'>
          <Icon src='/svgs/money.svg' size={20} alt='meso' />
          {meso === 0 ? '협의 가능' : meso}
        </Badge>
        {badges?.map((el) => (
          <Badge size='card' key={el} className='bg-lightGray '>
            {el}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default HunterCard;
