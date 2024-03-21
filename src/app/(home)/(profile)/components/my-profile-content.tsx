import * as React from 'react';
import MyProfileBoard1Posts from './my-profile-board1-posts';
import MyProfileBoard2Posts from './my-profile-board2-posts';
import MyProfileBoard3Posts from './my-profile-board3-posts';
import MyProfileBoard4Posts from './my-profile-board4-posts';

interface IMyprofileContentProps {
  boardType: string;
  page: number;
}

const MyProfileContent: React.FunctionComponent<IMyprofileContentProps> = ({ boardType, page }) => {
  const renderPosts = () => {
    if (boardType === 'board1') {
      return <MyProfileBoard1Posts board={boardType} page={page} />;
    } else if (boardType === 'board2') {
      return <MyProfileBoard2Posts board={boardType} page={page} />;
    } else if (boardType === 'board3') {
      return <MyProfileBoard3Posts board={boardType} page={page} />;
    } else if (boardType === 'board4') {
      return <MyProfileBoard4Posts board={boardType} page={page} />;
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
