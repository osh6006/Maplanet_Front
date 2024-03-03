import Inner from '@/components/ui/inner';
import Button from '@/components/ui/button';
import NoticeList from '../components/notice-list';
import NoticePageNation from '../components/notice-pagination';
import Link from 'next/link';
import Banner from '@/components/ui/banner';
import { Suspense } from 'react';

interface INoticePageProps {}

const NoticePage: React.FunctionComponent<INoticePageProps> = ({}) => {
  // featch notice data

  return (
    <main className='space-y-5'>
      <Banner title='공지사항' />
      <Suspense>
        <Inner>
          <div className='mb-4 flex w-full justify-end'>
            <Link href={'/notice-write'}>
              <Button color='main' size='sm'>
                등록하기
              </Button>
            </Link>
          </div>
          <NoticeList />
          <div className='flex w-full items-center justify-center'>
            <NoticePageNation itemsPerPage={5} totalPost={123} />
          </div>
        </Inner>
      </Suspense>
    </main>
  );
};

export default NoticePage;
