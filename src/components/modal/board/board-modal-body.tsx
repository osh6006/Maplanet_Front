export const BoardDL = ({ children }: { children: React.ReactNode }) => {
  return (
    <dl className='flex items-center justify-around gap-x-2 whitespace-nowrap rounded-md px-1 py-2 text-center'>
      {children}
    </dl>
  );
};
export const BoardDT = ({ children }: { children: React.ReactNode }) => {
  return (
    <dt className='flex flex-1 items-center gap-x-2 whitespace-nowrap text-lg font-semibold'>
      {children}
    </dt>
  );
};

export const BoardDD = ({ children }: { children: React.ReactNode }) => {
  return (
    <dd className='flex flex-1 items-center justify-end whitespace-nowrap text-lg'>{children}</dd>
  );
};

interface IBoardModalBodyProps {}

const BoardModalBody: React.FunctionComponent<IBoardModalBodyProps> = (props) => {
  return <div></div>;
};

export default BoardModalBody;
