interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between'>
      <div className=' text-white'>
        <div>Home Page</div>
        <div>Deploy Test!!</div>
      </div>
    </div>
  );
};

export default HomePage;
