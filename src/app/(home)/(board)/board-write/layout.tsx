import Inner from '@/components/ui/inner';

interface IBoardWriteLayoutProps {
  children: React.ReactNode;
}

const BoardWriteLayout: React.FunctionComponent<IBoardWriteLayoutProps> = ({ children }) => {
  return (
    <main className='w-full'>
      <Inner>{children}</Inner>
    </main>
  );
};

export default BoardWriteLayout;
