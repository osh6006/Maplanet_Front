'use client';

import Inner from '@/components/ui/inner';
import WriteTypeSelector from '../components/write-type-selector';
import { useState } from 'react';
import HelperBoardForm from '../components/helper-board/helper-board-form';
import HunterBoardForm from '../components/hunter-board/hunter-board-form';

export type TWirteType = 'helperBoard' | 'hunterBoard';

interface IWriteProps {}

const WritePage: React.FunctionComponent<IWriteProps> = ({}) => {
  const [writeType, setWriteType] = useState<TWirteType>('helperBoard');

  const handleWriteType = (type: TWirteType) => {
    setWriteType(type);
  };

  return (
    <main className='w-full py-12'>
      <Inner>
        <div className='mt-4'>
          <WriteTypeSelector writeType={writeType} setWriteType={handleWriteType} />
        </div>
        <hr className='my-14' />
        {writeType === 'helperBoard' ? <HelperBoardForm /> : null}
        {writeType === 'hunterBoard' ? <HunterBoardForm /> : null}
      </Inner>
    </main>
  );
};

export default WritePage;
