import { Suspense } from 'react';
import { getNotice } from '@/actions/notice';

import Inner from '@/components/ui/inner';
import NoticeList from '../components/notice-list';
import NoticePageNation from '../components/notice-pagination';

import { INotice } from '@/types';

interface INoticePageProps {}

const NoticePage: React.FunctionComponent<INoticePageProps> = async ({
  searchParams
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const fetchData: INotice[] = (await getNotice(searchParams?.page || '1')).noticeData || [];
  const totalNotice = (await getNotice(searchParams?.page || '1')).totalCount || 1;

  return (
    <Inner>
      <Suspense fallback={<div>loading..</div>}>
        <NoticeList noticeList={fetchData || []} />
        <div className='flex w-full items-center justify-center'>
          <NoticePageNation itemsPerPage={5} totalPost={totalNotice} pagePerItem={8} />
        </div>
      </Suspense>
    </Inner>
  );
};

export default NoticePage;
