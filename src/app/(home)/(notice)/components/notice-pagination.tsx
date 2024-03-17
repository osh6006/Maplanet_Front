'use client';

import clsx from 'clsx';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface INoticePageNationProps {
  totalPost: number;
  itemsPerPage: number;
  pagePerItem: number;
}

const NoticePageNation: React.FunctionComponent<INoticePageNationProps> = ({
  totalPost,
  itemsPerPage,
  pagePerItem
}) => {
  // TODO : query string 으로 pagination

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalPost / pagePerItem);
  const currentPage = Number(searchParams.get('page')) || 1;
  const pageGroup = Math.ceil(currentPage / itemsPerPage);

  let lastNumber = pageGroup * itemsPerPage;

  if (lastNumber > totalPages) {
    lastNumber = totalPages;
  }

  let firstNumber = (pageGroup - 1) * itemsPerPage + 1;

  let pageArr = Array.from({ length: lastNumber - firstNumber + 1 }, (_, index) => {
    if (firstNumber + index > 0) return firstNumber + index;
  });

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
    <div className='relative mt-8 flex items-center'>
      <div className='mx-auto flex items-center gap-x-2 text-xs'>
        <button type='button' onClick={() => handlePrevPage()} disabled={currentPage <= 1}>
          이전
        </button>
        <ul className='flex items-center gap-x-4'>
          {pageArr.map((el, i) => (
            <li key={i}>
              <button
                type='button'
                onClick={() => handlePageButton(el!)}
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
