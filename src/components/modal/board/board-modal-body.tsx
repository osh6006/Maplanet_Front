import Badge from '@/components/ui/badge';

export const BoardDL = ({ children }: { children: React.ReactNode }) => {
  return (
    <dl className='flex items-center justify-around gap-x-2 whitespace-nowrap rounded-md px-1 py-2 text-center'>
      {children}
    </dl>
  );
};
export const BoardDT = ({ children }: { children: React.ReactNode }) => {
  return (
    <dt className='flex flex-1 items-center gap-x-2 whitespace-nowrap text-sm font-semibold sm:text-lg'>
      {children}
    </dt>
  );
};

export const BoardDD = ({ children }: { children: React.ReactNode }) => {
  return (
    <dd className='flex flex-1 items-center justify-end whitespace-nowrap text-sm sm:text-lg'>
      {children}
    </dd>
  );
};

export const BoardFloors = ({ floors, floorNum }: { floors: string; floorNum: number }) => {
  return floors ? (
    <ul className='my-1 flex flex-1 items-center gap-x-2 whitespace-nowrap rounded-lg px-2 text-sm sm:text-lg'>
      <span>{floorNum + ' 층'}</span>
      {floors.split(',').map((el, i) => (
        <li key={el + '' + i}>
          <span className='whitespace-nowrap rounded-md bg-[#494949] px-2 py-1'>{el}</span>
        </li>
      ))}
    </ul>
  ) : null;
};
