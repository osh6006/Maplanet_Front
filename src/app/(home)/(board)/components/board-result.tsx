const BoardResult = () => {};

interface IBoardResultWrapper {
  children: React.ReactNode;
}

const BoardResultWrapper = ({ children }: IBoardResultWrapper) => {
  return (
    <ul className='mx-10 mt-12 grid grid-cols-1 place-items-center gap-7 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {children}
    </ul>
  );
};

interface IBoardListProps<T> {
  list: T[];
  render: (item: T, index: number) => JSX.Element;
}

const BoardList = <T,>({ list, render }: IBoardListProps<T>) => {
  return list.map((item, index) => render(item, index));
};

interface IBoardResultItemProps {
  children: React.ReactNode;
}

const BoardItem = ({ children }: IBoardResultItemProps) => {
  return (
    <li
      className='group relative h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#161616] p-8 transition-all sm:flex
  sm:w-[320px]'>
      {children}
    </li>
  );
};

BoardResult.List = BoardList;
BoardResult.Wrapper = BoardResultWrapper;
BoardResult.Item = BoardItem;

export default BoardResult;
