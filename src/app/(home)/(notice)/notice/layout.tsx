import Link from 'next/link';

import Banner from '@/components/ui/banner';
import Button from '@/components/ui/button';

interface IHunterBoardLayoutProps {
  children: React.ReactNode;
}

const NoticeLayout: React.FunctionComponent<IHunterBoardLayoutProps> = ({ children }) => {
  return (
    <main className='space-y-5'>
      <Banner title='공지사항' />
      <div className='mb-4 flex w-full justify-end'>
        <Link href={'/notice-write'}>
          <Button color='main' size='sm'>
            등록하기
          </Button>
        </Link>
      </div>
      {children}
    </main>
  );
};

export default NoticeLayout;
