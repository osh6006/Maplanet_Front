interface IHomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<IHomeLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>Appbar</div>
      {children}
    </div>
  );
};

export default HomeLayout;
