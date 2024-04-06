'use client';

import clsx from 'clsx';
import { useState } from 'react';

import Link from 'next/link';
import Icon from '@/components/ui/icon';
import GetHomeData from '@/actions/home';
import { IHelperBoard, IHunterBoard } from '@/types';
import { IWoodBoard } from '@/types/interfaces/wood';
import { IPartyBoard, IPartyBoardDeatil } from '@/types/interfaces/party';

import Spinner from '@/components/ui/spinner';
import HelperCard from '../(board)/components/ui/helper-card';
import HunterCard from '../(board)/components/ui/hunter-card';
import WoodCutterCard from '../(board)/components/ui/wood-cutter-card';
import PartyCard from '../(board)/components/ui/party-card';
import BoardResult from '../(board)/components/ui/board-result';
import Loading from '@/components/ui/loading';

interface IBoardProps {
  category: string;
  // bgImage: string;
}

const Board: React.FunctionComponent<IBoardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { data, isLoading, error } = GetHomeData();

  let categoryData = [];

  if (category === '심쩔') {
    categoryData = data.board1Data;
  } else if (category === '겹사') {
    categoryData = data.board2Data;
  } else if (category === '나무꾼') {
    categoryData = data.board3Data;
  } else if (category === '파티 모집') {
    categoryData = data.board4Data;
  }

  if (isLoading) return <Loading size={55} />;

  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {/* 카테고리 제목 컴포넌트*/}
      <div
        className={clsx(
          isHovered ? 'bg-black/60' : '',
          'relative flex h-[70px] w-full max-w-[588px] items-center justify-between overflow-hidden rounded-xl bg-black px-[20px] py-[22px] transition-all duration-200'
        )}
        style={
          {
            // backgroundImage: `url(${bgImage})`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // width: 'auto',
            // height: 'auto'
          }
        }>
        {/* <span className='absolute inset-0 z-0 bg-black/60'></span> */}
        <span className='z-[1] text-[20px] font-bold'>{category}</span>
        {/* TODO: 링크 연결 */}
        <Link
          href={
            category === '심쩔'
              ? '/helper-board'
              : category === '겹사'
                ? '/hunter-board'
                : category === '나무꾼'
                  ? '/wood-cutter-board'
                  : category === '파티 모집'
                    ? '/party-board'
                    : '#'
          }
          className='z-[1]'
          style={{
            display:
              category !== '심쩔' &&
              category !== '겹사' &&
              category !== '나무꾼' &&
              category !== '파티 모집'
                ? 'none'
                : 'block'
          }}>
          <div
            className='flex h-10 w-10 items-center justify-center'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Icon
              src='/svgs/plus-large.svg'
              alt='plus'
              size={24}
              className={clsx(
                isHovered
                  ? 'scale-90 transition-all duration-200'
                  : 'scale-100 transition-all duration-200'
              )}
            />
          </div>
        </Link>
      </div>

      {/* 아이템 리스트 컴포넌트*/}
      <ul className='mt-[18px] flex items-center justify-center gap-x-[24px] '>
        {category === '심쩔' &&
          categoryData.map((item: IHelperBoard) => {
            return (
              <BoardResult.Item key={item.board1_id}>
                <HelperCard
                  {...item}
                  badges={[
                    item.sub_job,
                    item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + '시간'
                  ]}
                />
              </BoardResult.Item>
            );
          })}

        {category === '겹사' &&
          categoryData?.map((item: IHunterBoard) => {
            return (
              <BoardResult.Item key={item.board2_id}>
                <HunterCard {...item} badges={[item.place_theif_nickname]} />
              </BoardResult.Item>
            );
          })}

        {category === '나무꾼' &&
          categoryData?.map((item: IWoodBoard) => {
            return (
              <BoardResult.Item key={item.board3_id}>
                <WoodCutterCard
                  {...item}
                  badges={[
                    item.sub_job,
                    item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + '시간',
                    item.hunting_ground,
                    'Lv .' + item.level
                  ]}
                />
              </BoardResult.Item>
            );
          })}

        {category === '파티 모집' &&
          categoryData?.map((item: IPartyBoard) => {
            return (
              <BoardResult.Item key={item.board4_id}>
                <PartyCard
                  {...item}
                  badges={[
                    item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + ' 시간',
                    item.hunting_ground,
                    `${item.recruit_people_count}명 모집`
                  ]}
                />
              </BoardResult.Item>
            );
          })}
      </ul>
    </div>
  );
};

export default Board;
