'use client';

import clsx from 'clsx';
import { useState } from 'react';

import Link from 'next/link';
import Icon from '@/components/ui/icon';
import GetHomeData from '@/actions/home';
import Loading from '@/components/ui/loading';
import HelperCard from '../(board)/components/ui/helper-card';
import HunterCard from '../(board)/components/ui/hunter-card';
import WoodCutterCard from '../(board)/components/ui/wood-cutter-card';
import PartyCard from '../(board)/components/ui/party-card';
import BoardResult from '../(board)/components/ui/board-result';

import { IWoodBoard } from '@/types/interfaces/wood';
import { IPartyBoard } from '@/types/interfaces/party';
import { IHelperBoard, IHunterBoard } from '@/types';

interface IBoardProps {
  category: string;
  // bgImage: string;
}

const Board: React.FunctionComponent<IBoardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

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
              width={24}
              height={24}
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
            console.log(item);

            return (
              <BoardResult.Item key={item.board1_id}>
                <HelperCard
                  {...item}
                  badges={[
                    {
                      name: item.sub_job,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name:
                        item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + '시간',
                      iconSrc: '/svgs/time.svg',
                      alt: 'time_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name: item.hunting_ground || '전 구역 가능',
                      iconSrc: '/svgs/map.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    }
                  ]}
                />
              </BoardResult.Item>
            );
          })}

        {category === '겹사' &&
          categoryData?.map((item: IHunterBoard) => {
            return (
              <BoardResult.Item key={item.board2_id}>
                <HunterCard
                  {...item}
                  badges={[
                    {
                      name: item.place_theif_nickname,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    }
                  ]}
                />
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
                    {
                      name: item.sub_job,
                      iconSrc: '/svgs/sword.svg',
                      alt: 'sub_job_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name:
                        item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + '시간',
                      iconSrc: '/svgs/time.svg',
                      alt: 'time_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name: item.hunting_ground,
                      iconSrc: '/svgs/map.svg',
                      alt: 'hunting_ground_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name: 'Lv .' + item.level,
                      iconSrc: '/svgs/LV.svg',
                      alt: 'level_icon',
                      width: 14,
                      height: 14
                    }
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
                    {
                      name:
                        item.progress_time === 0 ? '시간 협의 가능' : item.progress_time + '시간',
                      iconSrc: '/svgs/time.svg',
                      alt: 'time_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name: item.hunting_ground,
                      iconSrc: '/svgs/map.svg',
                      alt: 'hunting_ground_icon',
                      width: 14,
                      height: 14
                    },
                    {
                      name: `${item.recruit_people_count}명 모집`,
                      iconSrc: '/svgs/Profile.svg',
                      alt: 'recruit_icon',
                      width: 14,
                      height: 14
                    }
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
