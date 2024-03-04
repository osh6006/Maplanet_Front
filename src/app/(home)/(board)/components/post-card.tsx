'use client';

import { useState } from 'react';

import Icon from '../../../../components/ui/icon';
import Badge from '../../../../components/ui/badge';
import Button from '../../../../components/ui/button';
import InlineProfile from '@/components/ui/inline-profile';
import PostCardModal from '@/components/modal/post-card-modal';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import clsx from 'clsx';
dayjs.locale('ko');

interface IPostCardProps {
  type: string;
  date: string;
  title: string;
  meso: string;
  manner: number;
  unManner: number;
  view: number;
  avatarUrl: string;
  completed: boolean;
  mapleNickName?: string;
  discordNickName?: string;
  badges?: string[];
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  type,
  date,
  title,
  meso,
  mapleNickName,
  discordNickName,
  manner,
  unManner,
  view,
  avatarUrl,
  completed,
  badges
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PostCardModal postId={123} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div
        className='group relative w-full flex-col overflow-hidden rounded-3xl bg-[#161616] p-8 transition-all sm:flex
    sm:w-[320px]
    '>
        {completed ? (
          <div className='absolute inset-0 z-30 flex items-center justify-center'>
            <div className='relative flex h-full w-full items-center justify-center'>
              <h1 className='z-10 text-3xl font-semibold'>완료</h1>
              <div className='absolute inset-0 bg-black/90 blur-sm '></div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='flex w-full items-center justify-between '>
          <Badge className={clsx(type === '잠쩔' ? 'bg-main' : 'bg-violet')} size='card'>
            {type}
          </Badge>
          <time className='font-medium text-gray-400'>
            {dayjs(date).format('YYYY년 MM월 DD일')}
          </time>
        </div>

        <h1 className='my-2 text-xl font-semibold'>{title}</h1>
        <div className='my-8 flex flex-wrap items-center gap-2'>
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

        <div
          className='absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-nowrap bg-black/50 px-4 opacity-0 transition
       group-hover:opacity-100 group-hover:duration-300'>
          <Button color='lightGray' size='wide' onClick={() => setIsModalOpen(true)}>
            상세보기
          </Button>

          <Button
            color='lightGray'
            size='wide'
            onClick={() => {
              // TODO : Move Profile
              console.log('asdf');
            }}>
            프로필 보기
          </Button>
          <Button
            color='discord'
            size='wide'
            onClick={() => {
              // TODO : Move Profile
              console.log('asdf');
            }}>
            <Icon src='/svgs/discord-icon.svg' alt='discordIcon' size={20} />
            1:1 대화
          </Button>
        </div>

        <div className='mt-6 flex items-center justify-between '>
          <InlineProfile
            imgUrl={avatarUrl}
            manner={manner}
            unManner={unManner}
            discordNickName={discordNickName!}
          />
          <div className='flex items-center gap-x-1 font-light'>
            <Icon src={'/svgs/eyes.svg'} alt='view' size={20} />
            <p className='leading-3'>{view}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
