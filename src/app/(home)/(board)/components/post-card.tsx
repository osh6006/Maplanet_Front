'use client';

import { useState } from 'react';

import Icon from '../../../../components/ui/icon';
import Badge from '../../../../components/ui/badge';
import Button from '../../../../components/ui/button';
import InlineProfile from '@/components/ui/inline-profile';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import clsx from 'clsx';
import { BoardType } from '@/types';
dayjs.locale('ko');

interface IPostCardProps {
  id: number;
  type: string;
  date: string;
  title: string;
  meso: string | number;
  manner: number;
  unManner: number;
  view: number;
  avatarUrl: string;
  completed: boolean;
  boardType: BoardType | string;
  mapleNickName?: string;
  discordNickName?: string;
  badges?: string[];
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  id,
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
  badges,
  boardType
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className='group relative h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#161616] p-8 transition-all sm:flex
    sm:w-[320px]
    '>
        {completed ? (
          <div className='absolute inset-0 z-[15] flex items-center justify-center backdrop-blur-sm'>
            <div className='relative flex h-full w-full items-center justify-center'>
              <h1 className='z-10 text-3xl font-semibold'>완료</h1>
              <div className='absolute inset-0 bg-black/40'></div>
            </div>
          </div>
        ) : (
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
        )}
        <div className='flex w-full items-center justify-between '>
          <Badge className={clsx(type === '잠쩔' ? 'bg-main' : 'bg-violet')} size='card'>
            {type}
          </Badge>
          <time className='font-medium text-gray-400'>
            {dayjs(date).format('YYYY년 MM월 DD일')}
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
