'use client';
import { useState } from 'react';
import TagsInput from 'react-tagsinput';
import './board-floor.css';
import { Controller } from 'react-hook-form';
import Label from '@/components/ui/label';
import FormErrorMessage from '@/components/ui/form-error-message';

interface IBoardFloorInputProps {
  control: any;
  name: string;
  label: string;
}

const BoardFloorInput: React.FunctionComponent<IBoardFloorInputProps> = ({
  control,
  name,
  label
}) => {
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (tags: string[]) => {
    setTags(tags);
  };

  const isHidden = `${tags.length === 3 ? 'react-tagsinput-hidden' : 'react-tagsinput-input'}`;

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: '층수가 있으면 필수로 입력해야 합니다'
        }}
        // disabled={disabled}
        render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
          return (
            <div className='flex justify-between gap-x-4'>
              <Label name={name} label={label} required className='' />
              <div className='flex-1 space-y-2'>
                <TagsInput
                  value={tags}
                  onChange={(tags: string[]) => {
                    setTags(tags);
                    onChange(tags.join(','));
                  }}
                  maxTags={3}
                  inputProps={{
                    placeholder: '자리 이름 입력 후 Enter',
                    className: isHidden
                  }}
                  addKeys={[9, 13]}
                />
                {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default BoardFloorInput;
