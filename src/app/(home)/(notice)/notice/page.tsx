import { Suspense } from 'react';
import { getNotice } from '@/actions/notice';

import Link from 'next/link';
import Inner from '@/components/ui/inner';
import Button from '@/components/ui/button';
import Banner from '@/components/ui/banner';
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
  // featch notice data
  const fetchData: INotice[] = (await getNotice(searchParams?.page || '1')).noticeData || [];
  const totalNotice = (await getNotice(searchParams?.page || '1')).totalCount || 1;

  return (
    <main className='space-y-5'>
      <Banner title='공지사항' />
      <Inner>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='mb-4 flex w-full justify-end'>
            <Link href={'/notice-write'}>
              <Button color='main' size='sm'>
                등록하기
              </Button>
            </Link>
          </div>
          <NoticeList noticeList={fetchData || []} />
          <div className='flex w-full items-center justify-center'>
            <NoticePageNation itemsPerPage={5} totalPost={totalNotice} pagePerItem={8} />
          </div>
        </Suspense>
      </Inner>
    </main>
  );
};

export default NoticePage;
