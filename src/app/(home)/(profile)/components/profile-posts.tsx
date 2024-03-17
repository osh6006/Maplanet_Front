'use client';

import * as React from 'react';
import { IBoard1Data, IBoard2Data, IBoard3Data, IBoard4Data } from '@/types/interfaces/profile';
import ProfileCard from './profile-card';
import GetProfileData from '@/actions/profile';
import Spinner from '@/components/ui/spinner';
import Pagination from '../../(board)/components/ui/pagination';

interface IProfilePostsProps {
  board: string;
  userId: number;
  page: number;
}

const ProfilePosts: React.FunctionComponent<IProfilePostsProps> = ({ board, userId, page }) => {
  const { data, isLoading, error } = GetProfileData(board, userId, page) as {
    data: {
      board1Profile: IBoard1Data[];
      board2Profile: IBoard2Data[];
      board3Profile: IBoard3Data[];
      board4Profile: IBoard4Data[];
      totalCount: number;
    };
    isLoading: boolean;
    error: any;
  };

  if (isLoading) return <Spinner />;

  if (error) return <div>에러가 발생했습니다.</div>;


  return (
    <div className='w-full bg-[#222]'>
      {/* 심쩔 */}
      {board === 'board1' && data.board1Profile.length > 0 ? (
        <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-5 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.board1Profile.map((item, id) => (
            <li key={id}>
              <ProfileCard id={item.board1_id} type={board} {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='mt-20 text-center text-[#d3d3d3]'>작성된 게시글이 없습니다.</div>
      )}

      <Pagination totalPost={data.totalCount} itemsPerPage={5} pagePerItem={12} />
    </div>
  );
};

export default ProfilePosts;
