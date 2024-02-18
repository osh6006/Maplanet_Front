interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>Home Page</div>
      <div>Deploy Test!!</div>
    </div>
  );
};

export default HomePage;
