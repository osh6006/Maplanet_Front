import clsx from 'clsx';
import * as React from 'react';

interface IWriteTypeSelectorProps {}

const WriteTypeSelector: React.FunctionComponent<IWriteTypeSelectorProps> = (props) => {
  return (
    <div className='flex w-full items-center justify-between gap-x-8'>
      <div
        className='relative flex h-[150px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tableBackground px-4 text-2xl font-semibold
      shadow-md hover:text-main
      '>
        잠쩔 / 심쩔 신규 등록
      </div>
      <div
        className={clsx(
          'relative flex h-[150px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tableBackground px-4 text-2xl font-semibold shadow-md'
        )}>
        겹사 신규 등록
      </div>
    </div>
  );
};

export default WriteTypeSelector;
