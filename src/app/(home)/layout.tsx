import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Notification from '@/components/ui/notification';
import EdgeButtons from './components/edge-buttons';
import { cookies } from 'next/headers';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export const dynamic = 'force-dynamic';

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('Authorization')?.value;
  const userInfo = cookieStore.get('userInfo')?.value;

  return (
    <div className='scrollbar scrollbar-thumb-lightGray scrollbar-track-background relative h-full overflow-y-auto overflow-x-hidden'>
      <Navbar accessToken={accessToken} userInfo={userInfo} />
      <Notification />
      <div className='flex min-h-[calc(100dvh-110px)] flex-col items-center justify-between pt-[100px]'>
        {children}
      </div>
      <Footer />
      <EdgeButtons accessToken={accessToken} />
    </div>
  );
};

export default HomeLayout;
