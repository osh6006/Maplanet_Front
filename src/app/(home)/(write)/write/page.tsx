'use client';

import Inner from '@/components/ui/inner';
import WriteTypeSelector from '../components/write-type-selector';
import { useState } from 'react';

interface IWriteProps {}

const Write: React.FunctionComponent<IWriteProps> = ({}) => {
  const [] = useState();

  return (
    <main className='w-full py-12'>
      <Inner>
        <div className='mt-4'>
          <WriteTypeSelector />
        </div>
        <hr className='my-14' />
      </Inner>
    </main>
  );
};

export default Write;
