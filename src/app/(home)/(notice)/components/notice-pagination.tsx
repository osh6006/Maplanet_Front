'use client';

import clsx from 'clsx';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface INoticePageNationProps {
  totalPost: number;
  itemsPerPage: number;
}

const NoticePageNation: React.FunctionComponent<INoticePageNationProps> = ({
  totalPost,
  itemsPerPage
}) => {
  // TODO : query string 으로 NoticePageNation

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalPost / 5);
  const currentPage = Number(searchParams.get('page')) || 1;

  let firstNum = Math.max(1, currentPage - Math.floor(itemsPerPage / 2));
  let lastNum = Math.min(totalPages, firstNum + itemsPerPage - 1);

  let pageArr = Array.from({ length: lastNum - firstNum + 1 }, (_, index) => firstNum + index);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePrevPage = () => {
    if (currentPage - 5 <= 1) return;
    router.push(createPageURL(currentPage - 5));
  };

  const handleNextPage = () => {
    if (currentPage + 5 >= totalPages) return;
    router.push(createPageURL(currentPage + 5));
  };

  const handlePageButton = (page: number) => {
    router.push(createPageURL(page));
  };

  return (
    <div className='mt-8 flex justify-between '>
      <div className='flex items-center gap-x-2 text-xs'>
        <button type='button' onClick={() => handlePrevPage()} disabled={currentPage <= 1}>
          이전
        </button>
        <ul className='flex items-center gap-x-4'>
          {pageArr.map((el, i) => (
            <li key={i}>
              <button
                type='button'
                onClick={() => handlePageButton(el)}
                className={clsx(
                  'flex aspect-square h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full  p-1 text-xs',
                  currentPage === el ? 'bg-main' : ''
                )}>
                {el}
              </button>
            </li>
          ))}
        </ul>
        <button type='button' disabled={currentPage >= totalPages} onClick={() => handleNextPage()}>
          다음
        </button>
      </div>
      <div className='hidden sm:block'></div>
    </div>
  );
};

export default NoticePageNation;
