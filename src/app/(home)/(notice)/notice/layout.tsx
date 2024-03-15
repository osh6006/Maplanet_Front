import Link from 'next/link';

import Banner from '@/components/ui/banner';
import Button from '@/components/ui/button';
import Inner from '@/components/ui/inner';

interface IHunterBoardLayoutProps {
  children: React.ReactNode;
}

const NoticeLayout: React.FunctionComponent<IHunterBoardLayoutProps> = ({ children }) => {
  return (
    <main className='space-y-5'>
      <Banner title='공지사항' />
      <Inner>
        <div className='my-6 flex w-full justify-end'>
          <Link href={'/notice-write'}>
            <Button color='main' size='sm'>
              등록하기
            </Button>
          </Link>
        </div>
        {children}
      </Inner>
    </main>
  );
};

export default NoticeLayout;
