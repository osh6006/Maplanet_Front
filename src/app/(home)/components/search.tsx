'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Filter from './filter';
import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const { replace, push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { control, handleSubmit, resetField } = useForm<{
    key: string;
    value: string;
  }>();

  const onSubmit: SubmitHandler<{
    key: string;
    value: string;
  }> = async (data) => {
    if (data.key && data.value) {
      const params = new URLSearchParams(searchParams);

      const keyArr: string[] = [];
      params.forEach((_, key) => {
        if (key !== data.key) {
          keyArr.push(key);
        }
      });

      keyArr.forEach((key) => {
        params.delete(key);
      });

      resetField('value');
      params.set('page', '1');
      params.set(data.key, data.value);
      push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center gap-x-2 gap-y-4 sm:flex-row'>
      <Controller
        name='key'
        rules={{
          required: '필터를 선택 안함'
        }}
        control={control}
        render={({ field: { value, onChange, disabled } }) => {
          return (
            <div className='flex w-full items-center justify-center sm:w-auto'>
              <Filter
                value={value}
                onChange={onChange}
                placeHolder='메소'
                options={[
                  {
                    value: 'searchMeso',
                    name: '메소',
                    imgUrl: ''
                  },
                  {
                    value: 'searchTitle',
                    name: '제목',
                    imgUrl: ''
                  },
                  {
                    value: 'searchNickname',
                    name: '닉네임',
                    imgUrl: ''
                  },
                  {
                    value: 'searchHuntingGround',
                    name: '사냥터',
                    imgUrl: ''
                  },
                  {
                    value: 'searchLevel',
                    name: '레벨',
                    imgUrl: ''
                  },
                  {
                    value: 'searchSubJob',
                    name: '서브 직업',
                    imgUrl: ''
                  },
                  {
                    value: 'searchProgressKind',
                    name: '진행 상태',
                    imgUrl: ''
                  },
                  {
                    value: 'searchProgressTime',
                    name: '진행 시간',
                    imgUrl: ''
                  },
                  {
                    value: 'searchDiscordName',
                    name: '디스코드 이름',
                    imgUrl: ''
                  }
                ]}
                disabled={disabled}
              />
            </div>
          );
        }}
      />

      <div className='flex w-full items-center gap-x-2 sm:w-auto'>
        <Controller
          name='value'
          control={control}
          rules={{
            required: '제목은 필수로 입력해야 합니다.'
          }}
          render={({ field: { value, onChange }, fieldState: { invalid } }) => {
            return (
              <div className='flex flex-1 items-center space-y-2 sm:flex-auto'>
                <Input
                  name='title'
                  type='text'
                  value={value || ''}
                  invalid={invalid}
                  onChange={onChange}
                  placeholder='제목을 입력해 주세요'
                  labelRequired
                  icon={
                    <div className='flex items-center'>
                      <Icon src='/svgs/search.svg' alt='search' size={15} />
                    </div>
                  }
                />
              </div>
            );
          }}
        />
        <Button color='main' size='md' className='' type='submit' onClick={() => {}}>
          검색
        </Button>
      </div>
    </form>
  );
};

export default Search;
