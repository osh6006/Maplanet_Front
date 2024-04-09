'use client';

import { useState } from 'react';
import { IBadge, IWoodCutterBoard } from '@/types';
import { BoardCardCompleate, BoardCardHoverButtons } from './board-card-wrappers';
import Badge from '@/components/ui/badge';
import dayjs from 'dayjs';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import { filterImageUrl, formatMoney } from '@/util/util';
import WoodCutterBoardModal from '@/components/modal/board/wood-cutter-board-modal';
dayjs.locale('ko');

interface IWoodCutterCardProps extends IWoodCutterBoard {
  badges?: IBadge[];
}

const WoodCutterCard: React.FunctionComponent<IWoodCutterCardProps> = ({
  complete,
  discord_id,
  created_at,
  meso,
  badges,
  title,
  discord_image,
  manner_count,
  report_count,
  discord_global_name,
  board3_id,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <WoodCutterBoardModal
          boardId={board3_id}
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
          <Icon src='/svgs/money.svg' width={16} height={16} alt='meso' />
          <p className='font-semibold text-main'>{meso === 0 ? '협의가능' : formatMoney(+meso)}</p>
        </Badge>
        {badges?.map((el) => (
          <Badge size='card' key={el.alt} className='bg-lightGray '>
            <Icon src={el.iconSrc} height={el.height} width={el.width} alt={el.alt} />
            {el.name}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default WoodCutterCard;
