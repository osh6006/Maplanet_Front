'use client';

import React from 'react';
import Icon from './icon';
import GetHomeData from '@/actions/home';
import Spinner from './spinner';

interface INotificationProps {
}

const Notification: React.FunctionComponent<INotificationProps> = () => {
  const { data, error, isLoading } = GetHomeData();

  if (isLoading) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;  
  
  console.log(`공지사항 id: ${data.noticeData.notice_id}, category: ${data.noticeData.category}`)
  return (
    <div className='fixed top-[60px] z-50 h-[40px] w-full overflow-hidden bg-[#DC86EA]'>
      <div className='flex h-[40px] animate-slide-in-left items-center justify-center space-x-4'>
        <Icon src='/svgs/snail.svg' alt='snail' size={26} />
        <div className='text-lg font-bold text-[#fff]'>
          <span className='mr-5'>[공지사항]</span>
          <span>{data.noticeData.title}</span>
        </div>
        <Icon src='/svgs/snail.svg' alt='snail' size={26} />
      </div>
    </div>
  );
};

export default Notification;
