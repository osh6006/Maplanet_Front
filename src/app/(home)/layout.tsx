import Navbar from '@/components/ui/navbar';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-between p-24'>
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
