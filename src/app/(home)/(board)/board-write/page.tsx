'use client';

import Inner from '@/components/ui/inner';
import WriteTypeSelector from '../components/write-type-selector';
import { useState } from 'react';
import HelperBoardForm from '../components/helper-board/helper-board-form';
import HunterBoardForm from '../components/hunter-board/hunter-board-form';
import PartyBoardForm from '../components/party-board/party-board-form';
import WoodCutterBoardForm from '../components/wood-cutter-board/wood-cutter-board-form';

export type TWirteType = 'helperBoard' | 'hunterBoard' | 'woodCutterBoard' | 'partyBoard';

interface IWriteProps {}

const WritePage: React.FunctionComponent<IWriteProps> = ({}) => {
  const [writeType, setWriteType] = useState<TWirteType>('helperBoard');

  const handleWriteType = (type: TWirteType) => {
    setWriteType(type);
  };

  return (
    <main className='w-full'>
      <Inner>
        <div className='mt-8'>
          <WriteTypeSelector writeType={writeType} setWriteType={handleWriteType} />
        </div>
        <hr className='my-12' />
        {writeType === 'helperBoard' ? <HelperBoardForm /> : null}
        {writeType === 'hunterBoard' ? <HunterBoardForm /> : null}
        {writeType === 'partyBoard' ? <PartyBoardForm /> : null}
        {writeType === 'woodCutterBoard' ? <WoodCutterBoardForm /> : null}
      </Inner>
    </main>
  );
};

export default WritePage;
