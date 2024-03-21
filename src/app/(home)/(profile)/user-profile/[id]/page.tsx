'use client';

import * as React from 'react';
import ProfileBanner from '../../components/profile-banner';
import clsx from 'clsx';
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation';
import ProfileBoard1Posts from '../../components/profile-board1-posts';
import ProfileBoard2Posts from '../../components/profile-board2-posts';
import ProfileBoard3Posts from '../../components/profile-board3-posts';
import ProfileBoard4Posts from '../../components/profile-board4-posts';


interface IUserProfileProps {
  params: { id: number };
  searchParams: { page: number };
}

const UserProfile: React.FunctionComponent<IUserProfileProps> = () => {
  const [currentBoard, setCurrentBoard] = React.useState<string>('board1');

  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const userId = Number(params.id);
  const page = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPosts = () => {
    if (currentBoard === 'board1') {
      return <ProfileBoard1Posts board={currentBoard} userId={userId} page={page} />;
    } else if (currentBoard === 'board2') {
      return <ProfileBoard2Posts board={currentBoard} userId={userId} page={page} />;
    } else if (currentBoard === 'board3') {
      return <ProfileBoard3Posts board={currentBoard} userId={userId} page={page} />;
    } else if (currentBoard === 'board4') {
      return <ProfileBoard4Posts board={currentBoard} userId={userId} page={page} />;
    }
  };

  return (
    <div className='w-full'>
      {/* 프로필 배너 */}
      <ProfileBanner type='user' board={currentBoard} userId={userId} page={page} />

      
      <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-[60px] '>
        <div className='flex items-center justify-center'>
          <span className='pb-[15px] pt-[30px] text-[28px] font-bold'>작성 게시글</span>
        </div>
        <div className='mb-[30px] flex items-center gap-3 text-[18px] font-light text-[#d3d3d3]'>
          <button
            className={clsx(currentBoard === 'board1' ? 'font-bold text-[#fff]' : '')}
            onClick={() => {
              setCurrentBoard('board1');
              router.push(createPageURL(1));
            }}>
            심쩔
          </button>
          <span className='pb-[1px]'>|</span>
          <button
            className={clsx(currentBoard === 'board2' ? 'font-bold text-[#fff]' : '')}
            onClick={() => {
              setCurrentBoard('board2');
              router.push(createPageURL(1));
            }}>
            겹사
          </button>
          <span className='pb-[1px]'>|</span>
          <button
            className={clsx(currentBoard === 'board3' ? 'font-bold text-[#fff]' : '')}
            onClick={() => {
              setCurrentBoard('board3');
              router.push(createPageURL(1));
            }}>
            나무꾼
          </button>
          <span className='pb-[1px]'>|</span>
          <button
            className={clsx(currentBoard === 'board4' ? 'font-bold text-[#fff]' : '')}
            onClick={() => {
              setCurrentBoard('board4');
              router.push(createPageURL(1));
            }}>
            파티 모집
          </button>
        </div>

        {/* 게시글 */}
        {renderPosts()}
      </div>
    </div>
  );
};

export default UserProfile;
