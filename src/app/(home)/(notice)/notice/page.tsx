import Inner from '@/components/ui/inner';
import Button from '@/components/ui/button';
import NoticeList from '../components/notice-list';
import NoticeHeader from '../components/notice-header';
import NoticePageNation from '../components/notice-pagination';

interface INoticePageProps {}

const NoticePage: React.FunctionComponent<INoticePageProps> = ({}) => {
  // featch notice data

  return (
    <main className='space-y-4'>
      <NoticeHeader />
      <Inner>
        <div className='mb-4 flex w-full justify-end'>
          <Button color='main' size='sm'>
            등록하기
          </Button>
        </div>
        <NoticeList />
        <div className='flex w-full items-center justify-center'>
          <NoticePageNation itemsPerPage={5} totalPost={123} />
        </div>
      </Inner>
    </main>
  );
};

export default NoticePage;
