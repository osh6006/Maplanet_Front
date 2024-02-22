import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-between'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
