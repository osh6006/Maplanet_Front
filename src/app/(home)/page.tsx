interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div className='flex flex-col items-center justify-between '>
      <div>Home Page</div>
      <div>Deploy Test!!</div>
    </div>
  );
};

export default HomePage;
