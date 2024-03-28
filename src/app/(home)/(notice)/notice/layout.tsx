'use client';

import Banner from '@/components/ui/banner';
import Button from '@/components/ui/button';
import Inner from '@/components/ui/inner';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface IHunterBoardLayoutProps {
  children: React.ReactNode;
}

const NoticeLayout: React.FunctionComponent<IHunterBoardLayoutProps> = ({ children }) => {
  const router = useRouter();
  const handleAccessToken = () => {
    if (true) {
      toast.error('권한이 없는 사용자 입니다.');
      return;
    }

    router.push('/notice-write');
  };

  return (
    <main className='space-y-5'>
      <Banner title='공지사항' />
      <Inner>
        <div className='my-6 flex w-full justify-end'>
          <Button color='main' size='sm' onClick={handleAccessToken}>
            등록하기
          </Button>
        </div>
        {children}
      </Inner>
    </main>
  );
};

export default NoticeLayout;
