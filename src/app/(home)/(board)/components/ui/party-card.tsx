'use client';

import { useState } from 'react';
import { IBadge, IPartyBoard } from '@/types';
import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';
import Badge from '@/components/ui/badge';
import dayjs from 'dayjs';
import InlineProfile from '@/components/ui/inline-profile';
import { filterImageUrl } from '@/util/util';
import PartyBoardModal from '@/components/modal/board/party-board-modal';
import Icon from '@/components/ui/icon';

interface IPartyCardProps extends IPartyBoard {
  badges?: IBadge[];
}

const PartyCard: React.FunctionComponent<IPartyCardProps> = ({
  complete,
  discord_id,
  created_at,
  badges,
  title,
  discord_image,
  manner_count,
  report_count,
  discord_global_name,
  board4_id,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <PartyBoardModal
          boardId={board4_id}
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
        {badges?.map((el) => (
          <Badge size='card' key={el.iconSrc} className='bg-lightGray '>
            <Icon src={el.iconSrc} width={el.width} height={el.height} alt={el.alt} />
            {el.name}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default PartyCard;
