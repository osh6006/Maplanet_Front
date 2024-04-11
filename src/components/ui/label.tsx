import clsx from 'clsx';

interface ILabelProps {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}

const Label: React.FunctionComponent<ILabelProps> = ({ required, label, name, className }) => {
  return (
    <>
      <label
        className={clsx(
          ' mb-1 block font-medium',
          required ? 'after:ml-1 after:text-warning after:content-["*"]' : '',
          className ? className : ''
        )}
        htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default Label;
