import clsx from 'clsx';

interface IPaginationProps {
  totalPost: number;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({}) => {
  const handleNextPage = () => {};
  const handlePrevPage = () => {};
  const handlePageButton = () => {};
  return (
    <div className='mt-8 flex justify-between '>
      <p>
        등록된 쩔 게시글 <strong>132</strong>개
      </p>
      <div className='flex items-center gap-x-2 text-xs'>
        <button type='button' onClick={handlePrevPage}>
          이전
        </button>
        <ul className='flex items-center gap-x-4'>
          {[1, 2, 3, 4, 5].map((el) => (
            <li key={el}>
              <button
                type='button'
                onClick={handlePageButton}
                className={clsx(
                  'flex aspect-square h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full bg-main p-1 text-xs',
                  true ? 'bg-main' : ''
                )}>
                {el}
              </button>
            </li>
          ))}
        </ul>
        <button type='button' onClick={handleNextPage}>
          다음
        </button>
      </div>
      <div className='hidden sm:block'></div>
    </div>
  );
};

export default Pagination;
