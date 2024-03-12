import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Notification from '@/components/ui/notification';
import DiscordChannelBtn from './components/discord-channel-btn';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
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
