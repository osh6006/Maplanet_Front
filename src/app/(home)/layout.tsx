import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Notification from '@/components/ui/notification';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <Notification content={'메이플래닛 베타 서비스 중 입니다'} />
      <div className='flex flex-col items-center justify-between py-[100px]'>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
