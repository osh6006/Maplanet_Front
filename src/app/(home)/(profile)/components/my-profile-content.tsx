import * as React from 'react';
import MyProfileBoard1Posts from './my-profile-board1-posts';
import MyProfileBoard2Posts from './my-profile-board2-posts';
import MyProfileBoard3Posts from './my-profile-board3-posts';
import MyProfileBoard4Posts from './my-profile-board4-posts';
import { GetMyProfileData } from '@/actions/my-profile';

interface IMyprofileContentProps {
  boardType: string;
  page: number;
}

const MyProfileContent: React.FunctionComponent<IMyprofileContentProps> = async ({ boardType, page }) => {
  const data = (await GetMyProfileData(boardType, page));

  const renderPosts = () => {
    if (boardType === 'board1') {
      return <MyProfileBoard1Posts boardType={boardType} page={page} data={data} />;
    } else if (boardType === 'board2') {
      return <MyProfileBoard2Posts boardType={boardType} page={page} data={data} />;
    } else if (boardType === 'board3') {
      return <MyProfileBoard3Posts boardType={boardType} page={page} data={data} />;
    } else if (boardType === 'board4') {
      return <MyProfileBoard4Posts boardType={boardType} page={page} data={data} />;
    }
  };

  return (
    // category
    <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-[60px] '>
      {/* 게시글 */}
      {renderPosts()}
    </div>
  );
};

export default MyProfileContent;
