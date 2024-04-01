'use client';

import * as React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import clsx from 'clsx';

interface IMyProfileCategoryProps {}

const MyProfileCategory: React.FunctionComponent<IMyProfileCategoryProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const board = searchParams.get('board');

  const createPageURL = (boardType: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('board', boardType);
    return `${pathname}?${params.toString()}`;
  };
                    
  return (
    <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-[60px]'>
      <div className='flex items-center justify-center'>
        <span className='pb-[15px] pt-[30px] text-[28px] font-bold'>작성 게시글</span>
      </div>
      <div className='mb-[30px] flex items-center gap-3 text-[18px] font-light text-[#d3d3d3]'>
        <button
          className={clsx(board === 'board1' ? 'font-bold text-[#fff]' : '')}
          onClick={() => {
            router.push(createPageURL('board1'));
          }}>
          심쩔
        </button>
        <span className='pb-[1px]'>|</span>
        <button
          className={clsx(board === 'board2' ? 'font-bold text-[#fff]' : '')}
          onClick={() => {
            router.push(createPageURL('board2'));
          }}>
          겹사
        </button>
        <span className='pb-[1px]'>|</span>
        <button
          className={clsx(board === 'board3' ? 'font-bold text-[#fff]' : '')}
          onClick={() => {
            router.push(createPageURL('board3'));
          }}>
          나무꾼
        </button>
        <span className='pb-[1px]'>|</span>
        <button
          className={clsx(board === 'board4' ? 'font-bold text-[#fff]' : '')}
          onClick={() => {
            router.push(createPageURL('board4'));
          }}>
          파티 모집
        </button>
      </div>
    </div>
  );
};

export default MyProfileCategory;
