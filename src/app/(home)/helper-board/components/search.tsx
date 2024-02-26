'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Filter from './filter';
import Input from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Button from '@/components/ui/button';

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const { control, handleSubmit, watch } = useForm<{
    filter: string;
    contents: string;
  }>();

  const onSubmit: SubmitHandler<{
    filter: string;
    contents: string;
  }> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-x-2'>
      <Controller
        name='filter'
        control={control}
        rules={{ required: '서브 직업을 선택해 주세요' }}
        render={({ field: { value, onChange, disabled } }) => {
          return (
            <>
              <div className='flex items-center justify-center'>
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
                      value: 'searchNickname',
                      name: '닉네임',
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
            </>
          );
        }}
      />

      <Controller
        name='contents'
        control={control}
        rules={{
          required: '제목은 필수로 입력해야 합니다.'
        }}
        render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
          return (
            <div className='flex items-center space-y-2'>
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
      <Button color='main' size='sm' className='ml-2'>
        등록하기
      </Button>
    </form>
  );
};

export default Search;
