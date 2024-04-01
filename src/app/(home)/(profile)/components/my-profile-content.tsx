'use client'
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

const MyProfileContent: React.FunctionComponent<IMyprofileContentProps> =  ({
  boardType,
  page
}) => {
  // const data = await GetMyProfileData(boardType, page);
  const [data, setData] = React.useState<any>(null); // Initialize data state

  // Fetch data on component mount and whenever boardType or page changes
  React.useEffect(() => {
    const fetchData = async () => {
      const newData = await GetMyProfileData(boardType, page);
      setData(newData);
      console.log('newData', newData);
    };

    fetchData();
  }, [boardType, page]);

  return (
    // category
    <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-[60px] '>
      {/* 게시글 */}
      {boardType === 'board1' && data && (
        <MyProfileBoard1Posts boardType={boardType} page={page} data={data} />
      )}
      {boardType === 'board2' && data && (
        <MyProfileBoard2Posts boardType={boardType} page={page} data={data} />
      )}
      {boardType === 'board3' && data && (
        <MyProfileBoard3Posts boardType={boardType} page={page} data={data} />
      )}
      {boardType === 'board4' && data && (
        <MyProfileBoard4Posts boardType={boardType} page={page} data={data} />
      )}
    </div>
  );
};

export default MyProfileContent;
