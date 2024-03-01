import FormErrorMessage from '@/components/ui/form-error-message';
import Label from '@/components/ui/label';
import TextArea from '@/components/ui/textarea';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

interface INoticeTextAreaProps extends UseControllerProps<FieldValues> {
  name: string;
  label: string;
  placeholder: string;
  control: any;
}

const NoticeTextArea: React.FunctionComponent<INoticeTextAreaProps> = ({
  name,
  control,
  rules,
  placeholder,
  label
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { value, onChange, name, disabled },
          fieldState: { error, invalid }
        }) => {
          return (
            <>
              <div className='space-y-2'>
                <Label name={name} label={label} required={false} className='flex-1' />
                <div className='flex-1'>
                  <TextArea value={value} onChange={onChange} disabled={disabled} />
                </div>
              </div>
              {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
            </>
          );
        }}
      />
    </>
  );
};

export default NoticeTextArea;
