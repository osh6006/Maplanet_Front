'use client';

import Label from '@/components/ui/label';
import { useState } from 'react';
import BoardFloorInput from './board-floor-input';
import { partyFloorNames } from '@/data/board';
import Button from '@/components/ui/button';

interface IBoardFloorsProps {
  control: any;
}

const BoardFloors: React.FunctionComponent<IBoardFloorsProps> = ({ control }) => {
  const [floor, setFloor] = useState(1);
  const floorArr = Array.from({ length: floor }, (_, index) => index + 1);

  const handleIncrease = () => {
    if (floor >= 6) return;
    setFloor(floor + 1);
  };
  const handleDecrease = () => {
    if (floor === 1) return;
    setFloor(floor - 1);
  };

  return (
    <div>
      <Label name='' label='사냥 자리' required />
      <ul className='mt-10 flex flex-col-reverse gap-y-4'>
        {floorArr?.map((el) => (
          <BoardFloorInput
            control={control}
            name={partyFloorNames[el - 1]}
            label={el + '층'}
            key={partyFloorNames[el - 1]}
          />
        ))}
      </ul>
      <div className='mt-4 flex items-center justify-end gap-x-4'>
        <Button color='gray' size='md' type='button' onClick={handleIncrease}>
          + 층 추가하기
        </Button>
        <Button color='gray' size='md' type='button' onClick={handleDecrease}>
          - 층 삭제하기
        </Button>
      </div>
    </div>
  );
};

export default BoardFloors;
