import Banner from '@/components/ui/banner';
import NoticeForm from '../components/notice-form';
import Inner from '@/components/ui/inner';

interface INoticeWritePageProps {}

const NoticeWritePage: React.FunctionComponent<INoticeWritePageProps> = (props) => {
  return (
    <main className='space-y-10'>
      <Banner title='공지사항 등록' />
      <Inner>
        <NoticeForm />
      </Inner>
    </main>
  );
};

export default NoticeWritePage;
