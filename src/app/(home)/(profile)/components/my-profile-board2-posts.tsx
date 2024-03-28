import * as React from 'react';
import { IBoard2Data, IBoard2ProfileResponse } from '@/types/interfaces/profile';
import ProfileCard from './profile-card';
import Pagination from '../../(board)/components/ui/pagination';
import { GetMyProfileData } from '@/actions/my-profile';

interface IMyProfileBoard2PostsProps {
  boardType: string;
  page: number;
  data: IBoard2ProfileResponse;
}

const MyProfileBoard2Posts: React.FunctionComponent<IMyProfileBoard2PostsProps> = ({
  boardType,
  data
}) => {

  return (
    <div className='w-full bg-[#222]'>
      {/* 심쩔 */}
      {boardType === 'board2' && data.board2Profile.length > 0 ? (
        <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-5 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.board2Profile.map((item, id) => (
            <li key={id}>
              <ProfileCard board_id={item.board2_id} boardType={boardType} {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='my-32 text-center text-[#d3d3d3]'>작성된 게시글이 없습니다.</div>
      )}

      {/* pagination */}
      <Pagination totalPost={data.totalCount} itemsPerPage={5} pagePerItem={12} />
    </div>
  );
};

export default MyProfileBoard2Posts;
