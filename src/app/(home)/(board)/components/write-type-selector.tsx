'use client';

import clsx from 'clsx';

import { TWirteType } from '../board-write/page';

interface IWriteTypeSelectorProps {
  writeType: TWirteType;
  setWriteType: (type: TWirteType) => void;
}

const WriteTypeSelector: React.FunctionComponent<IWriteTypeSelectorProps> = ({
  writeType,
  setWriteType
}) => {
  return (
    <div className='flex w-full items-center justify-between gap-x-8'>
      <div
        onClick={() => setWriteType('helperBoard')}
        className={clsx(
          `group relative flex h-[150px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tableBackground px-4 text-2xl font-semibold
        shadow-md hover:text-main`,
          writeType === 'helperBoard' ? 'text-main' : ''
        )}>
        <div
          className={clsx(
            'absolute  right-0 h-20 w-20 bg-center duration-300 ',
            writeType === 'helperBoard'
              ? 'bottom-0 right-0'
              : '-bottom-20 group-hover:bottom-0 group-hover:transition-all'
          )}
          style={{
            backgroundImage: `url(/images/horn-mushroom.webp)`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className={clsx(
            'absolute left-0 h-20 w-20 bg-center duration-300 ',
            writeType === 'helperBoard'
              ? ' top-0'
              : '-top-20 group-hover:top-0 group-hover:transition-all'
          )}
          style={{
            backgroundImage: `url(/images/maple.webp)`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        잠쩔 / 심쩔 신규 등록
      </div>

      {/*  */}

      <div
        onClick={() => setWriteType('hunterBoard')}
        className={clsx(
          `group relative flex h-[150px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tableBackground px-4 text-2xl font-semibold
        shadow-md hover:text-main`,
          writeType === 'hunterBoard' ? 'text-main' : ''
        )}>
        <div
          className={clsx(
            'absolute right-0 h-20 w-20 bg-center',
            writeType === 'hunterBoard'
              ? 'bottom-0 right-0'
              : '-bottom-20 duration-300 group-hover:bottom-0 group-hover:transition-all'
          )}
          style={{
            backgroundImage: `url(/images/horn-mushroom.webp)`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className={clsx(
            'absolute left-0 h-20 w-20 bg-center duration-300 ',
            writeType === 'hunterBoard'
              ? ' top-0'
              : '-top-20 group-hover:top-0 group-hover:transition-all'
          )}
          style={{
            backgroundImage: `url(/images/maple.webp)`,
            backgroundRepeat: 'no-repeat'
          }}
        />
        겹사 신규 등록
      </div>
    </div>
  );
};

export default WriteTypeSelector;
