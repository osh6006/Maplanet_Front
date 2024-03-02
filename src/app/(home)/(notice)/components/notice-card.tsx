'use client';

import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Badge from '@/components/ui/badge';
import clsx from 'clsx';

interface INoticeCardProps {}

const NoticeCard: React.FunctionComponent<INoticeCardProps> = () => {
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
            업데이트
          </Badge>
          <p>메이플래닛 베타 서비스 중 입니다.</p>
        </div>
        <div className='flex items-center gap-x-5'>
          <div>관리자</div>
          <time>2024-12-12</time>
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
          <p>
            안녕하세요 메이플래닛 운영진입니다 2월14일 부로 메이플래닛 베타서비스를 진행하고
            있습니다. 디스코드 건의사항 채널에 많은 의견 남겨주시면 감사하겠습니다.
          </p>
        </div>
      ) : null}
    </>
  );
};

export default NoticeCard;
