'use client';

import { useState, useOptimistic, useTransition, useEffect } from 'react';

import Icon from '../../../../components/ui/icon';
import Badge from '../../../../components/ui/badge';
import Button from '../../../../components/ui/button';
import InlineProfile from '@/components/ui/inline-profile';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import clsx from 'clsx';
import Link from 'next/link';
import PartyBoardModal from '@/components/modal/board/party-board-modal';
import HelperBoardModal from '@/components/modal/board/helper-board-modal';
import HunterBoardModal from '@/components/modal/board/hunter-board-modal';
import WoodCutterBoardModal from '@/components/modal/board/wood-cutter-board-modal';
import { usePathname } from 'next/navigation';
import { CompleteMyPost } from '@/actions/complete';
import Image from 'next/image';
dayjs.locale('ko');

interface IProfileCard {
  board_id: number;
  boardType: string;
  user_id: number;
  discord_id: string;
  meso?: number;
  title: string;
  sub_job?: string;
  discord_global_name: string;
  discord_image: string;
  view_count: number;
  complete: boolean;
  created_at: string;
  updated_at: string;
  report_count: number;
  manner_count: number;
  place_theif_nickname?: string;
  report_kind?: string;
  progress_time?: number;
  hunting_ground?: string;
  level?: number;
  recruit_people_count?: number;
}

const ProfileCard: React.FunctionComponent<IProfileCard> = ({
  board_id,
  boardType,
  user_id,
  discord_id,
  meso,
  title,
  report_kind,
  place_theif_nickname,
  sub_job,
  discord_global_name,
  discord_image,
  view_count,
  complete,
  created_at,
  updated_at,
  report_count,
  manner_count,
  progress_time,
  hunting_ground,
  level,
  recruit_people_count
}) => {
  const [completeState, setCompleteState] = useState(complete);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathName = usePathname();

  const onOpen = () => {
    setIsModalOpen(true);
  };

  console.log('pathName', pathName);

  return (
    <>
      {isModalOpen ? (
        boardType === 'board1' ? (
          <HelperBoardModal
            boardId={board_id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : boardType === 'board2' ? (
          <HunterBoardModal
            boardId={board_id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : boardType === 'board3' ? (
          <WoodCutterBoardModal
            boardId={board_id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : boardType === 'board4' ? (
          <PartyBoardModal
            boardId={board_id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        ) : null
      ) : null}

      <div
        className={`group relative h-[336px] w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#161616] p-8 transition-all sm:flex
        sm:w-[320px] ${complete && pathName.includes('/user-profile') ? 'pointer-events-none' : ''}`}>
        {/* user profile handle complete */}
        {complete && pathName.includes('/user-profile') && (
          <div className='absolute inset-0 z-[15] flex items-center justify-center backdrop-blur-sm'>
            <div className='relative flex h-full w-full items-center justify-center'>
              <h1 className='z-10 text-3xl font-semibold'>완료</h1>
              <div className='absolute inset-0 bg-black/40'></div>
            </div>
          </div>
        )}

        {!complete && pathName.includes('/user-profile') && (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-nowrap bg-black/50 px-4 opacity-0 transition
          group-hover:opacity-100 group-hover:duration-300`}>
            <Button color='lightGray' size='wide' onClick={onOpen}>
              상세보기
            </Button>
            <Button color='discord' size='wide'>
              <Link
                href={`discord://discord.com/users/${discord_id}`}
                target='_blanck'
                className='flex items-center gap-x-2'>
                <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
                1:1 대화
              </Link>
            </Button>
          </div>
        )}

        {/* my profile handle complete */}
        {completeState &&
          pathName.includes('/my-profile') && (
            <div className='absolute inset-0 z-[15] flex items-center justify-center backdrop-blur-sm'>
              <div className='relative flex h-full w-full items-center justify-center'>
                <h1 className='pointer-events-none z-10 text-3xl font-semibold'>완료</h1>
                <button
                  className='absolute right-5 top-5 z-[50] cursor-pointer text-3xl text-white'
                  onClick={() => {
                    if (window.confirm('완료 취소하시겠습니까?')) {
                      console.log(boardType, board_id);
                      CompleteMyPost(boardType, board_id);
                      setCompleteState(prev => !prev);
                    }
                  }}>
                  <Image
                    src='/svgs/plus.svg'
                    alt='x'
                    width={24}
                    height={24}
                    style={{ transform: 'rotate(45deg)' }}
                  />
                </button>
                <div className='absolute inset-0 bg-black/40'></div>
              </div>
            </div>
          )}

        {/* server rendering */}
        {!completeState &&
          pathName.includes('/my-profile') && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-nowrap bg-black/50 px-4 opacity-0 transition
group-hover:opacity-100 group-hover:duration-300`}>
              <Button
                color='lightGray'
                size='wide'
                onClick={() => {
                  if (window.confirm('완료하시겠습니까?')) {
                    console.log(boardType, board_id);
                    CompleteMyPost(boardType, board_id); // server action
                    setCompleteState(prev => !prev);
                    // handleCompleteToggle(boardType, board_id);
                  }
                }}>
                완료하기
              </Button>
            </div>
          )}

        {/* card content */}
        <div className='flex w-full items-center justify-between '>
          {/* 제목 뱃지 */}
          <Badge
            className={clsx(
              boardType === 'board1' && 'bg-violet',
              boardType === 'board2' && report_kind === '인기도 하락'
                ? 'bg-main'
                : boardType === 'board2' && report_kind === '겹사 의뢰'
                  ? 'bg-violet'
                  : null,
              boardType === 'board3' && 'bg-main',
              boardType === 'board4' && 'bg-main'
            )}
            size='card'>
            {(boardType === 'board1' && '심쩔') ||
              (boardType === 'board2' && report_kind) ||
              (boardType === 'board3' && '나무꾼') ||
              (boardType === 'board4' && '파티 모집')}
          </Badge>
          <time className='font-medium text-gray-400'>{created_at.toString().split('T')[0]}</time>
        </div>

        {/* 내용 */}
        <h1 className='my-6 text-xl font-semibold'>{title}</h1>

        {/* 서브 뱃지 */}
        <div className='mb-4 mt-3 flex flex-wrap items-center gap-2'>
          {/* 메소 */}
          {meso || meso === 0 ? (
            <Badge size='card' className='bg-lightGray text-yellow'>
              <Icon src='/svgs/money.svg' size={20} alt='meso' />
              {meso}
            </Badge>
          ) : (
            ''
          )}

          {/* 직업 */}
          {sub_job && (
            <Badge size='card' className='bg-warrior'>
              {sub_job}
            </Badge>
          )}

          {/* 진행할 시간 */}
          {progress_time && (
            <Badge size='card' className='bg-lightGray'>
              {progress_time}시간
            </Badge>
          )}

          {/* 겹사 닉네임 */}
          {place_theif_nickname && (
            <Badge size='card' className='bg-lightGray'>
              {place_theif_nickname}
            </Badge>
          )}

          {/* 사냥 장소 */}
          {hunting_ground && (
            <Badge size='card' className='bg-lightGray'>
              {hunting_ground}
            </Badge>
          )}

          {/* 레벨 */}
          {level && (
            <Badge size='card' className='bg-lightGray'>
              {level}렙
            </Badge>
          )}

          {/* 파티 모집 인원수 */}
          {recruit_people_count && (
            <Badge size='card' className='bg-lightGray'>
              {recruit_people_count}명 구인중
            </Badge>
          )}
        </div>

        <div className='mt-6 flex items-center justify-between '>
          <InlineProfile
            imgUrl={discord_image}
            manner={manner_count}
            unManner={report_count}
            discordNickName={discord_global_name!}
          />
          <div className='flex items-center gap-x-1 font-light'>
            <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
            <p className='leading-3'>{view_count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
