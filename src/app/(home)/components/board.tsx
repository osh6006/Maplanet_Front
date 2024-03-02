'use client';

import * as React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/icon';
import BoardItem from './board-item';
import MainpageFetcher from '@/hooks/data-fetch';
import Spinner from '@/components/ui/spinner';

interface IBoardProps {
  category: string;
  bgImage: string;
}

// dummy data
// const data = [
//   {
//     category: '쩔',
//     items: [
//       {
//         id: 1,
//         profile: '쩔',
//         date: '2022-01-01',
//         title: 'title 1',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 2,
//         profile: '쩔',
//         date: '2022-01-01',
//         title: 'title 2',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 3,
//         profile: '쩔',
//         date: '2022-01-01',
//         title: 'title 3',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       }
//     ]
//   },
//   {
//     category: '겹사',
//     items: [
//       {
//         id: 1,
//         profile: '겹사',
//         date: '2022-01-01',
//         title: 'title 4',
//         cost: 1500000000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 2,
//         profile: '겹사',
//         date: '2022-01-01',
//         title: 'title 5',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 3,
//         profile: '겹사',
//         date: '2022-01-01',
//         title: 'title 6',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       }
//     ]
//   },
//   {
//     category: '쩔 매너 유저',
//     items: [
//       {
//         id: 1,
//         profile: '쩔 매너 유저',
//         date: '2022-01-01',
//         title: 'title 7',
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 2,
//         profile: '쩔 매너 유저',
//         date: '2022-01-01',
//         title: 'title 8',
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 3,
//         profile: '쩔 매너 유저',
//         date: '2022-01-01',
//         title: 'title 9',
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       }
//     ]
//   },
//   {
//     category: '현상 수배',
//     items: [
//       {
//         id: 1,
//         profile: '현상 수배',
//         date: '2022-01-01',
//         title: 'title 10',
//         cost: 15000000000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 2,
//         profile: '현상 수배',
//         date: '2022-01-01',
//         title: 'title 11',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       },
//       {
//         id: 3,
//         profile: '현상 수배',
//         date: '2022-01-01',
//         title: 'title 12',
//         cost: 1500000,
//         type: ['잠쩔', '심쩔'],
//         map: 'map'
//       }
//     ]
//   }
// ];
const Board: React.FunctionComponent<IBoardProps> = ({ category, bgImage }) => {
  // const filteredData = data.filter((item: any) => item.category === category);

  const { data, isLoading, error  } = MainpageFetcher();
  
  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {/* 카테고리 제목 컴포넌트*/}
      <div
        className={`relative flex h-[70px] w-full items-center justify-between overflow-hidden rounded-xl px-[13px] py-[22px]`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: 'auto',
          height: 'auto'
        }}>
        <span className='absolute inset-0 z-0 bg-black/60'></span>
        <span className='z-[1] text-[20px] font-bold'>{category}</span>
        <Link href='/' className='z-[1]'>
          <Icon src='/svgs/plus.svg' alt='plus' size={24} />
        </Link>
      </div>

      {/* 아이템 리스트 컴포넌트*/}
      <ul className='mt-[17px] flex  flex-col justify-around gap-[13px]'>
        {/* {filteredData[0].items.map((item) => {
          return <BoardItem key={item.id} category={category} {...item} />;
        })} */}
      </ul>
    </div>
  );
};

export default Board;
