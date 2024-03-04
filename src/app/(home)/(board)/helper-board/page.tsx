import Sort from '../components/sort';
import Banner from '@/components/ui/banner';
import Search from '../components/search';
import PostCard from '@/app/(home)/(board)/components/post-card';
import Pagination from '../components/pagination';
import { helperBoardFilters, sortOptions } from '@/data/board';
import { Suspense } from 'react';
import { getHelperBoardData } from '@/actions/helper-board';
import { IHelperBoard } from '@/types';

interface IHelperBoardPageProps {}

const HelperBoardPage: React.FunctionComponent<IHelperBoardPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  // TODO : fetch data using searchParams
  const fetchData = await getHelperBoardData(searchParams?.page || '1');
  const helperBoardData: IHelperBoard[] = fetchData.board1Data;
  const totalBoardCount = fetchData.getBoardCount;

  return (
    <main>
      <Banner title='쩔 게시판' imgUrl='/images/banner.png' />
      <Suspense>
        <div className='mx-auto max-w-[500px] sm:max-w-[670px] lg:max-w-[1000px] xl:max-w-[1440px] xl:px-20'>
          <div className='mt-8 flex w-full flex-col justify-between gap-y-4 px-10 sm:flex-row sm:px-0'>
            <Sort options={sortOptions} />
            <Search filters={helperBoardFilters} />
          </div>

          <ul className='mx-10 mt-4 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {helperBoardData?.map((el) => (
              <PostCard
                type={'잠쩔'}
                date={el.created_at}
                title={el.title}
                meso={el.meso + ''}
                discordNickName={el.discord_global_name}
                badges={[el.hunting_ground, el.progress_time + ' 시간', el.sub_job]}
                manner={el.manner_count}
                unManner={el.report_count}
                view={el.view_count}
                avatarUrl={''}
                completed={el.complete}
                key={el.board1_id}
              />
            ))}
          </ul>
          <Pagination totalPost={totalBoardCount || 0} itemsPerPage={5} />
        </div>
      </Suspense>
    </main>
  );
};

export default HelperBoardPage;
