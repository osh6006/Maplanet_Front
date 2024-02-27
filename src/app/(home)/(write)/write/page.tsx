'use client';

import Inner from '@/components/ui/inner';
import WriteTypeSelector from '../components/write-type-selector';
import { useState } from 'react';

export type TWirteType = 'helperBoard' | 'hunterBoard';

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = ({}) => {
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
      </Inner>
    </main>
  );
};

export default Write;
