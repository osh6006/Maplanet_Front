import * as React from 'react';
import MyProfileBanner from '../components/my-profile-banner';
import MyProfileCategory from '../components/my-profile-category';
import MyProfileContent from '../components/my-profile-content';

interface IMyProfileProps {
  params: { id: number };
  searchParams: { page: number, board: string };
}

const MyProfile: React.FunctionComponent<IMyProfileProps> = ({ params, searchParams }) => {

  // category에서 선택한 게시판과 페이지를 url에서 가져와서 content에 전달하는 방식
  const page = Number(searchParams.page) || 1;
  const board = searchParams.board;
  
  console.log(page, board)
  return (
    <div className='w-full'>
      {/* 프로필 배너 */}
      <MyProfileBanner board='board1' page={1} />
      <MyProfileCategory />
      <MyProfileContent boardType={board} page={page}/>
    </div>
  );
};

export default MyProfile;
