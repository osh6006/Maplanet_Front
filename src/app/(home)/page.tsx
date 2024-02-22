import Notification from '@/components/ui/notification';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div className='w-full flex flex-col items-center justify-between'>
      <Notification content={"메이플래닛 베타 서비스 중 입니다"}/>
      <div className='p-20 mt-[120px] text-white'>
        <div>Home Page</div>
        <div>Deploy Test!!</div>
      </div>
    </div>
  );
};

export default HomePage;
