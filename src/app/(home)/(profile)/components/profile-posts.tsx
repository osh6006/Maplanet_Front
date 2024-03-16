'use client';

import * as React from 'react';
import PostCard from '../../(board)/components/ui/post-card';
import Pagination from '../../(board)/components/ui/pagination';
import { useSearchParams } from 'next/navigation';

interface IProfilePostsProps {
  board: string;
  id: number;
}

const ProfilePosts: React.FunctionComponent<IProfilePostsProps> = ({ board, id }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  // TODO: fetch data using searchParams

  console.log(
    `현재 ${board} 게시판과 ${id} 유저의 게시글, searchParams: ${searchParams}, page: ${page}`
  );

  const renderPostCards = () => {
    // 잠쩔 게시판일 경우
    if (board === 'helper') {
      return [1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
        <PostCard
          type='잠쩔'
          date='2024-04-12'
          title='1시간당 메소 150만에 4시간 해드립니다.'
          meso='100,000,000'
          discordNickName='축지법 아저씨'
          id={el}
          boardType='board1'
          mapleNickName='asdfafsd'
          badges={['죽은 나무의 숲 4', '4 시간', '스피어 맨']}
          manner={44}
          unManner={2}
          view={20}
          avatarUrl=''
          completed={false}
          key={el}
        />
      ));
      // 겹사 의뢰 게시판일 경우
    } else if (board === 'hunter') {
      return [1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
        <PostCard
          type='잠쩔'
          date='2024-04-12'
          title='1시간당 메소 150만에 4시간 해드립니다.'
          meso='100,000,000'
          discordNickName='축지법 아저씨'
          id={el}
          boardType='board1'
          mapleNickName='asdfafsd'
          badges={['죽은 나무의 숲 4', '4 시간', '스피어 맨']}
          manner={44}
          unManner={2}
          view={20}
          avatarUrl=''
          completed={false}
          key={el}
        />
      ));
    }
  };
  return (
    <div className='h-screen w-full bg-[#222]'>
      <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-5 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {renderPostCards()}
      </ul>
      <Pagination totalPost={123} itemsPerPage={5} pagePerItem={12} />
    </div>
  );
};

export default ProfilePosts;
