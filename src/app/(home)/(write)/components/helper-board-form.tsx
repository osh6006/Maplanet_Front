'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import BoardInput from './board-input';
import Button from '@/components/ui/button';
import BoardMesoInput from './board-meso-input';

import { IHelperPost } from '@/types';
import BoardRadio from './board-radio';
import Radio from '@/components/ui/radio';
import BoardSelect from './board-select';

interface IHelperBoardFormProps {}

const HelperBoardForm: React.FunctionComponent<IHelperBoardFormProps> = () => {
  const { control, handleSubmit, watch } = useForm<IHelperPost>();

  const onSubmit: SubmitHandler<IHelperPost> = (data) => {
    console.log(data);
  };

  const jobWatch = watch('main_job') || null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-x-8'>
      <div className='flex flex-col gap-y-8'>
        <BoardMesoInput name='meso' control={control} />
        <BoardInput
          control={control}
          name='title'
          label='제목'
          placeholder='제목을 입력해 주세요'
          rules={{
            required: '제목은 필수로 입력해야 합니다.',
            minLength: {
              message: '최소 5글자 이상 입력해야 합니다.',
              value: 5
            },
            maxLength: {
              message: '30글자 이상은 입력이 불가합니다.',
              value: 30
            }
          }}
          disabled={false}
        />
        <BoardInput
          control={control}
          name='hunting_ground'
          label='사냥터'
          placeholder='사냥터를 입력해 주세요'
          rules={{
            required: '사냥터는 필수로 입력해야 합니다.',
            minLength: {
              message: '최소 5글자 이상 입력해야 합니다.',
              value: 2
            },
            maxLength: {
              message: '20글자 이상은 입력이 불가합니다.',
              value: 12
            }
          }}
          disabled={false}
        />

        <BoardInput
          control={control}
          name='level'
          label='레벨'
          placeholder='레벨을 입력해 주세요'
          rules={{
            required: '레벨은 필수로 입력해야 합니다.',
            pattern: {
              value: /^[0-9]*$/,
              message: '숫자만 입력 가능합니다.'
            },
            max: {
              message: '200Lv 이상은 입력이 불가능 합니다.',
              value: 200
            },

            min: {
              message: '최소 10Lv 이상이어야 합니다. ',
              value: 10
            }
          }}
          icon={<span className=' items-center text-[15px] font-semibold text-black'>LV</span>}
          disabled={false}
        />
      </div>
      <div className='flex flex-col gap-y-8'>
        <BoardInput
          control={control}
          name='maple_nickname'
          label='메이플 랜드 닉네임'
          placeholder='메이플 랜드 닉네임을 입력해 주세요'
          rules={{
            required: '닉네임은 필수로 입력해야 합니다.',
            minLength: {
              message: '최소 2글자 이상 입력해야 합니다.',
              value: 2
            },
            maxLength: {
              message: '12글자 이상은 입력이 불가합니다.',
              value: 12
            }
          }}
          disabled={false}
        />
        <BoardRadio
          control={control}
          name='main_job'
          label='직업'
          rules={{ required: '직업을 선택해 주세요' }}
          options={[
            { id: '전사', label: '전사', value: '전사' },
            { id: '마법사', label: '마법사', value: '마법사' },
            { id: '도적', label: '도적', value: '도적' },
            { id: '궁수', label: '궁수', value: '궁수' }
          ]}
        />

        <BoardSelect
          control={control}
          jobWatch={jobWatch}
          label='서브 직업'
          name='sub_job'
          placeholder='서브 직업을 선택해 주세요'
          rules={{ required: '서브 직업을 선택해 주세요' }}
        />

        <BoardRadio
          control={control}
          name='progress_kind'
          label='쩔 종류'
          rules={{ required: '파티 종류를 선택해 주세요' }}
          options={[
            { id: '잠쩔', label: '잠쩔', value: '잠쩔' },
            { id: '심쩔', label: '심쩔', value: '심쩔' }
          ]}
        />

        <BoardRadio
          control={control}
          name='position'
          label='자리보유 여부'
          rules={{ required: '자리 보유 여부를 선택해 주세요' }}
          options={[
            { id: '보유', label: '보유', value: 'true' },
            { id: '미 보유', label: '미 보유', value: 'false' }
          ]}
        />
        <div className=''>
          <Button size='wide' color='main' disabled={false}>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default HelperBoardForm;
