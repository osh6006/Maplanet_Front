import React from 'react';
import Icon from './icon';

interface INotificationProps {
  content: string;
}

const Notification: React.FunctionComponent<INotificationProps> = ({ content }) => {
  return (
    <div className='fixed top-[60px] z-50 h-[40px] w-full overflow-hidden bg-[#CE98B1]'>
      <div className='flex h-[40px] animate-slide-in-left items-center justify-center space-x-4'>
        <Icon src='/svgs/snail.svg' alt='snail' size={26} />
        {/* 디자인 폰트 사이즈가 너무 큰거 같아서 text-lg로 변경함 */}
        <div className='text-lg font-bold text-[#7C0747]'>
          <span className='mr-10'>[공지사항]</span>
          {/* 나중에 서버에서 공지사항 받아올거 고려해서 props로 남김 */}
          <span>{content}</span>
        </div>
        {/* 아이콘 사이즈가 달라서 size props를 추가 */}
        <Icon src='/svgs/snail.svg' alt='snail' size={26} />
      </div>
    </div>
  );
};

export default Notification;
