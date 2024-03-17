import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Notification from '@/components/ui/notification';
import DiscordChannelBtn from './components/discord-channel-btn';
import { cookies } from 'next/headers';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export const dynamic = 'force-dynamic';

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  const cookieStore = cookies();
  const auth = cookieStore.get('Authorization');
  const user = cookieStore.get('userInfo');

  return (
    <div className='relative h-full'>
      <Navbar accessToken={auth?.value} userInfo={user?.value} />
      <Notification />
      <div className='flex min-h-[calc(100dvh-110px)] flex-col items-center justify-between pt-[100px] '>
        {children}
      </div>
      <Footer />
      <DiscordChannelBtn />
    </div>
  );
};

export default HomeLayout;
