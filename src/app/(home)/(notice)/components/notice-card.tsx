'use client';

import dayjs from 'dayjs';
import { useState } from 'react';

import Icon from '@/components/ui/icon';
import Badge from '@/components/ui/badge';
import clsx from 'clsx';
import { INotice } from '@/types';

dayjs.locale('ko');

interface INoticeCardProps extends INotice {}

const NoticeCard: React.FunctionComponent<INoticeCardProps> = ({
  category,
  title,
  writer,
  content,
  created_at
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        onClick={handleToggleOpen}
        className='flex w-full cursor-pointer items-center justify-between rounded-md bg-tableBackground px-4 py-5 hover:bg-tableBackground/80 '>
        <div className='flex items-center gap-x-5'>
          <Badge size='card' className='bg-emerald-800'>
            {category}
          </Badge>
          <p>{title}</p>
        </div>
        <div className='flex items-center gap-x-5'>
          <div>{writer}</div>
          <time>{dayjs(created_at).format('YYYY년 MM월 DD일')}</time>
          <Icon
            size={15}
            src='/svgs/triangle.svg'
            alt='dropdown'
            className={clsx(isOpen ? 'rotate-[180deg]' : '')}
          />
        </div>
      </li>
      {isOpen ? (
        <div className='w-1/2 px-10 py-10 leading-10'>
          <p>{content}</p>
        </div>
      ) : null}
    </>
  );
};

export default NoticeCard;
