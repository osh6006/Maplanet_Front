import * as React from 'react';
import { IBoard4ProfileResponse } from '@/types/interfaces/profile';
import ProfileCard from './profile-card';
import Pagination from '../../(board)/components/ui/pagination';
import { GetMyProfileData } from '@/actions/my-profile';

interface IMyProfileBoard4PostsProps {
  board: string;
  page: number;
}

const MyProfileBoard4Posts: React.FunctionComponent<IMyProfileBoard4PostsProps> = async ({
  board,
  page
}) => {
  const data = (await GetMyProfileData(board, page)) as IBoard4ProfileResponse;

  return (
    <div className='w-full bg-[#222]'>
      {/* 심쩔 */}
      {board === 'board4' && data.board4Profile.length > 0 ? (
        <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-5 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.board4Profile.map((item, id) => (
            <li key={id}>
              <ProfileCard board_id={item.board4_id} boardType={board} {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='my-32 text-center text-[#d4d4d4]'>작성된 게시글이 없습니다.</div>
      )}

      {/* pagination */}
      <Pagination totalPost={data.totalCount} itemsPerPage={5} pagePerItem={12} />
    </div>
  );
};

export default MyProfileBoard4Posts;
