'use client';

import { TWirteType } from '../board-write/page';
import WriteTypeWrapper from './wirte-type-wrapper';

interface IWriteTypeSelectorProps {
  writeType: TWirteType;
  setWriteType: (type: TWirteType) => void;
}

const WriteTypeSelector: React.FunctionComponent<IWriteTypeSelectorProps> = ({
  writeType,
  setWriteType
}) => {
  return (
    <div className='flex items-center gap-x-2'>
      <WriteTypeWrapper
        name='쩔'
        writeType='helperBoard'
        selectedWriteType={writeType}
        setWriteType={setWriteType}
      />
      <WriteTypeWrapper
        name='겹사 / 인기도'
        writeType='hunterBoard'
        selectedWriteType={writeType}
        setWriteType={setWriteType}
      />
      <WriteTypeWrapper
        name='파티'
        writeType='partyBoard'
        selectedWriteType={writeType}
        setWriteType={setWriteType}
      />
      <WriteTypeWrapper
        name='나무꾼'
        writeType='woodCutterBoard'
        selectedWriteType={writeType}
        setWriteType={setWriteType}
      />
    </div>
  );
};

export default WriteTypeSelector;
