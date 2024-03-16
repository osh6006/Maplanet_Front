import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Notification from '@/components/ui/notification';
import DiscordChannelBtn from './components/discord-channel-btn';

import { cookies, headers } from 'next/headers';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export const dynamic = 'force-dynamic';

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  const headersList = headers();
  const cookieStore = cookies();
  const header = headersList.get('Authorization');
  const cookie = cookieStore.get('Authorization');

  console.log('Header : ', header);
  console.log('Cookie : ', cookie);

  return (
    <div className='relative h-full'>
      <Navbar />
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
