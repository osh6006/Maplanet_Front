'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Filter from './filter';
import Icon from '@/components/ui/icon';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Link from 'next/link';

interface IFilter {
  name: string;
  value: string;
  imgUrl: string;
}

interface ISearchProps {
  filters: IFilter[];
}

const Search: React.FunctionComponent<ISearchProps> = ({ filters }) => {
  const { replace } = useRouter();
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
      replace(`${pathname}?${params.toString()}`);
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
                placeHolder={filters[0].name}
                options={filters}
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
            required: '내용은 필수로 입력해야 합니다.'
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
                      <Icon src='/svgs/search.svg' alt='search' size={20} />
                    </div>
                  }
                />
              </div>
            );
          }}
        />
        <Button color='main' size='md' className='' type='submit'>
          검색
        </Button>
        {/* <Link href={'/write'}>
          <Button color='main' size='md' className='text-white' type='button'>
            새 글
          </Button>
        </Link> */}
      </div>
    </form>
  );
};

export default Search;
