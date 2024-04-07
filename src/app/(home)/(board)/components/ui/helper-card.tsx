'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { filterImageUrl, formatMoney } from '@/util/util';

import { IBadge, IHelperBoard } from '@/types';

import Icon from '@/components/ui/icon';
import Badge from '@/components/ui/badge';

import InlineProfile from '@/components/ui/inline-profile';
import HelperBoardModal from '@/components/modal/board/helper-board-modal';
import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';

dayjs.locale('ko');

interface IHelperCardProps extends IHelperBoard {
  badges?: IBadge[];
}

const HelperCard: React.FunctionComponent<IHelperCardProps> = ({
  complete,
  board1_id,
  discord_id,
  created_at,
  meso,
  badges,
  discord_image,
  discord_global_name,
  manner_count,
  report_count,
  title,
  user_id
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

      {complete ? (
        <BoardCardCompleate />
      ) : (
        <BoardCardHoverButtons discordId={discord_id} setIsModalOpen={onOpen} profileId={user_id} />
      )}
      <time className='text-right text-[10px] font-medium text-gray-400'>
        {dayjs(created_at).format('YYYY-MM-DD')}
      </time>

      <div className='flex w-full flex-col justify-end px-[12px] '>
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
      <div className='mb-4 mt-2 flex flex-wrap items-center gap-2 px-[12px]'>
        <Badge size='card' className='bg-lightGray '>
          <Icon src='/svgs/money.svg' size={16} alt='meso' />
          <p className='font-semibold text-main'>{meso === 0 ? '협의가능' : formatMoney(meso)}</p>
        </Badge>
        {badges?.map((el) => (
          <Badge size='card' key={el.alt} className='bg-lightGray '>
            <Icon src={el.iconSrc} size={14} alt={el.alt} />
            {el.name}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default HelperCard;
