'use client';

import * as React from 'react';
import ProfileBanner from '../../components/profile-banner';
import ProfilePosts from '../../components/profile-posts';
import Inner from '@/components/ui/inner';
import clsx from 'clsx';

interface IProfileProps {
  params: { id: number };
}

const Profile: React.FunctionComponent<IProfileProps> = ({ params: { id } }) => {
  const [currentBoard, setCurrentBoard] = React.useState<string>('helper');
  
  return (
    <div className='w-full'>
      {/* 프로필 배너 */}
      <ProfileBanner />
      <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-[60px]'>
        <div className='flex items-center justify-center'>
          <span className='pb-[15px] pt-[30px] text-[28px] font-bold'>작성 게시글</span>
        </div>
        <div className='mb-[30px] flex items-center gap-3 text-[18px] font-light text-[#d3d3d3]'>
          <button
            className={clsx(currentBoard === 'helper' ? 'font-bold text-[#fff]' : '')}
            onClick={() => setCurrentBoard('helper')}>
            쩔
          </button>
          <span className='pb-[1px]'>|</span>
          <button
            className={clsx(currentBoard === 'hunter' ? 'font-bold text-[#fff]' : '')}
            onClick={() => setCurrentBoard('hunter')}>
            겹사
          </button>
        </div>

        {/* 프로필 게시글 */}
        <ProfilePosts board={currentBoard} id={id} />
      </div>
    </div>
  );
};

export default Profile;
