'use client';

import * as React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/icon';
import Spinner from '@/components/ui/spinner';
import GetHomeData from '@/actions/home';
import HelperBoardItem from './helper-board-item';
import HunterBoardItem from './hunter-board-item';
import HelperMannerBoardItem from './helper-manner-board-item';
import HunterMesoBoardItem from './hunter-meso-board-item';
import clsx from 'clsx';

interface IBoardProps {
  category: string;
  // bgImage: string;
}

const Board: React.FunctionComponent<IBoardProps> = ({ category }) => {
  const { data, isLoading, error } = GetHomeData();

  console.log(data);

  let categoryData = [];

  if (category === '쩔') {
    categoryData = data.board1Data;
  } else if (category === '겹사') {
    categoryData = data.board2Data;
  } else if (category === '쩔 매너 유저') {
    categoryData = data.board1MannerData;
  } else if (category === '현상 수배') {
    categoryData = data.board2HighMesoData;
  }

  if (isLoading) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {/* 카테고리 제목 컴포넌트*/}
      <div
        className={`relative flex h-[70px] w-full items-center justify-between overflow-hidden rounded-xl px-[13px] py-[22px]`}
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
        <span className='absolute inset-0 z-0 bg-black/60'></span>
        <span className='z-[1] text-[20px] font-bold'>{category}</span>
        <Link
          href={category === '쩔' ? '/helper-board' : category === '겹사' ? '/hunter-board' : '#'}
          className='z-[1]'
          style={{ display: category !== '쩔' && category !== '겹사' ? 'none' : 'block' }}>
          <Icon src='/svgs/plus.svg' alt='plus' size={24} />
        </Link>
      </div>

      {/* 아이템 리스트 컴포넌트*/}
      <ul className='mt-[17px] flex  flex-col justify-around gap-[13px]'>
        {category === '쩔' &&
          categoryData?.map((item: any, index: any) => {
            return (
              <HelperBoardItem
                key={index}
                id={item.board1_id}
                profileImg={item.discord_image}
                profileName={item.discord_global_name}
                manner={item.manner_count}
                report={item.report_count}
                date={item.created_at}
                view={item.view_count}
                title={item.title}
                cost={item.meso}
                type={item.progress_kind}
                map={item.hunting_ground}
                time={item.progress_time}
                job={item.sub_job}
                complete={item.complete}
                {...item}
              />
            );
          })}

        {category === '겹사' &&
          categoryData?.map((item: any, index: any) => {
            return (
              <HunterBoardItem
                key={index}
                id={item.board2_id}
                profileImg={item.discord_image}
                profileName={item.discord_global_name}
                manner={item.manner_count}
                report={item.report_count}
                date={item.created_at}
                view={item.view_count}
                title={item.title}
                cost={item.meso}
                type={item.report_kind}
                nickname={item.place_theif_nickname}
                complete={item.complete}
                {...item}
              />
            );
          })}

        {category === '쩔 매너 유저' &&
          categoryData?.map((item: any, index: any) => {
            return (
              <HelperMannerBoardItem
                key={index}
                id={item.board1_id}
                discordId={item.discord_id}
                profileImg={item.discord_image}
                profileName={item.discord_global_name}
                manner={item.manner_count}
                {...item}
              />
            );
          })}

        {category === '현상 수배' &&
          categoryData?.map((item: any, index: any) => {
            return (
              <HunterMesoBoardItem
                key={index}
                id={item.board2_id}
                discordId={item.discord_id}
                profileImg={item.discord_image}
                profileName={item.discord_global_name}
                manner={item.manner_count}
                cost={item.meso}
                {...item}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Board;
