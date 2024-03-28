'use client';

import React from 'react';
import Icon from './icon';
import GetHomeData from '@/actions/home';

interface INotificationProps {}

const Notification: React.FunctionComponent<INotificationProps> = () => {
  const { data, error, isLoading } = GetHomeData();

  return (
    <div className='fixed top-[60px] z-40 h-[40px] w-full overflow-hidden bg-[#CE98B1]'>
      <div className='flex h-[40px] animate-slide-in-left items-center justify-center space-x-4'>
        {isLoading ? (
          <div>데이터를 불러오는 중...</div>
        ) : error ? (
          <div>에러가 발생했습니다.</div>
        ) : (
          <div className='flex items-center gap-x-4'>
            <Icon src='/svgs/snail.svg' alt='snail' size={26} />
            <div className='whitespace-nowrap text-lg font-bold text-[#7C0747]'>
              <span className='mr-5'>[공지사항]</span>
              <span>{data?.noticeData?.title}</span>
            </div>
            <Icon src='/svgs/snail.svg' alt='snail' size={26} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
