'use client';

import * as React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/icon';
import Spinner from '@/components/ui/spinner';
import GetHomeData from '@/actions/home';
import clsx from 'clsx';
import { IHelperBoard, IHunterBoard } from '@/types';
import { IWoodBoard } from '@/types/interfaces/wood';
import { IPartyBoard } from '@/types/interfaces/party';
import Board1Item from './board1-item';
import Board2Item from './board2-item';
import Board3Item from './board3-item';
import Board4Item from './board4-item';

interface IBoardProps {
  category: string;
  // bgImage: string;
}

const Board: React.FunctionComponent<IBoardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const { data, isLoading, error } = GetHomeData();

  console.log(data);

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

  if (isLoading) return <Spinner />;

  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {/* 카테고리 제목 컴포넌트*/}
      <div
        className={clsx(  
          isHovered ? 'bg-black/60' : '',
          'relative flex h-[70px] w-full items-center justify-between overflow-hidden rounded-xl bg-black px-[20px] py-[22px] transition-all duration-200'
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
          href={category === '심쩔' ? '/helper-board' : category === '겹사' ? '/hunter-board' : category === '나무꾼' ? '/wood-cutter-board' : category === '파티 모집' ? '/party-board' : '#'}
          className='z-[1]'
          style={{ display: category !== '심쩔' && category !== '겹사' && category !== '나무꾼' && category !== '파티 모집' ? 'none' : 'block' }}>
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
      <ul className='mt-[17px] flex  flex-col justify-around gap-[13px]'>
        {category === '심쩔' &&
          categoryData.map((item: IHelperBoard, index: number) => {
            return (
              <Board1Item
                key={index}
                {...item}
              />
            );
          })}

        {category === '겹사' &&
          categoryData?.map((item: IHunterBoard, index: number) => {
            return (
              <Board2Item
                key={index}
                {...item}
              />
            );
          })}

        {category === '나무꾼' &&
          categoryData?.map((item: IWoodBoard, index: number) => {
            return (
              <Board3Item
                key={index}
                {...item}
              />
            );
          })}

        {category === '파티 모집' &&
          categoryData?.map((item: IPartyBoard, index: number) => {
            return (
              <Board4Item
                key={index}
                {...item}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Board;
