import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import InlineProfile from '@/components/ui/inline-profile';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/badge';
import HelperBoardModal from '@/components/modal/board/helper-board-modal';
import clsx from 'clsx';
import { IPartyBoard } from '@/types/interfaces/party';

interface IBoard4ItemProps extends IPartyBoard {}

const Board4Item: React.FunctionComponent<IBoard4ItemProps> = ({
    board4_id,
    user_id,
    discord_id,
    title,
    hunting_ground,
    recruit_people_count,
    progress_time,
    discord_global_name,
    discord_image,
    view_count,
    complete,
    created_at,
    updated_at,
    manner_count,
    report_count,
}) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onOpen = () => {
    setIsModalOpen(true);
  };

  const addCommasToCost = (cost: number | undefined) => {
    if (cost === undefined) return 0;
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 쩔, 겹사 보드
  return (
    <>
    {isModalOpen ? (
      <HelperBoardModal
        boardId={board4_id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    ) : null}
    <li
      className={clsx(
        'group relative flex w-full list-none flex-col justify-center gap-1 rounded-xl bg-tableBackground px-4 py-4'
      )}>
      {/* if complete */}
      {complete && (
        <div className='absolute inset-0 z-[30] flex items-center justify-center bg-black/60 text-2xl font-bold text-white'>
          완료
        </div>
      )}

      {/* mouse hover content */}
      <div
        className={clsx(
          complete ? 'disabled' : 'group-hover:opacity-100',
          'absolute inset-0 flex items-center justify-center gap-x-2 rounded-xl bg-black/60 px-4 opacity-0 transition-all duration-300 '
        )}>
        <Button color='lightGray' size='sm' onClick={onOpen}>
          상세보기
        </Button>
        <Button
          color='lightGray'
          size='sm'
          onClick={() => {
            // TODO : Move Profile
            console.log('user id:', user_id);
            router.push(`/user-profile/${user_id}?page=1`);
          }}
          className={clsx('button relative overflow-hidden')}>
          프로필 보기
        </Button>
        <Link href={`discord://discord.com/users/${discord_id}`} target='_blanck'>
          <Button color='discord' size='sm' className='relative z-20 overflow-hidden'>
            <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
            1:1 대화
          </Button>
        </Link>
      </div>

      {/* 첫번째 내용 */}
      <div className='flex'>
        {/* 프로필 */}
        <InlineProfile
          imgUrl={discord_image}
          manner={manner_count}
          unManner={report_count}
          discordNickName={discord_global_name}
        />
        {/* 날짜, 조회수 */}
        <div className='ml-2 flex flex-grow items-center justify-end gap-3 text-xs text-[#aeaeae]'>
          {created_at.toString().split('T')[0]}
          <div className='flex items-center gap-x-1'>
            <Icon src='/svgs/eyes.svg' alt='eyes' size={12} />
            <div className='ml-[1px]'>{view_count}</div>
          </div>
        </div>
      </div>

      {/* 두번째 내용 */}
      <div className='my-2 text-base'>{title}</div>

      {/* 세번째 내용 */}
      <div className='flex gap-[5px]'>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/map.svg' alt='time' size={12} />
            <span className='text-[12px]  pb-[1px]'>{hunting_ground}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/time.svg' alt='time' size={12} />
            <span className='text-[12px]  pb-[1px]'>{progress_time}</span>
          </div>
        </Badge>
        <Badge size='card' className='bg-lightGray text-[12px]'>
          <div className='flex items-center gap-1'>
            <Icon src='/svgs/nickname.svg' alt='time' size={12} />
            <span className='text-[12px]  pb-[1px]'>{recruit_people_count} 명 모집</span>
          </div>
        </Badge>
      </div>
    </li>
    </>
    
  );
};

export default Board4Item;
