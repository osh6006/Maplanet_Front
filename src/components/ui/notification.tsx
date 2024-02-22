import React from 'react';
import Icon from './icon';

interface INotificationProps {
  content: string;
}

const Notification: React.FunctionComponent<INotificationProps> = ({ content }) => {
  return (
    <div className='fixed top-[65px] w-full bg-[#CE98B1] h-[40px] overflow-hidden'>
      <div className='animate-slide-in-left h-[40px] flex items-center space-x-4 justify-center'>
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
