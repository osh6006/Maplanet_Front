import clsx from 'clsx';
import * as React from 'react';

interface ILabelProps {
  name: string;
  label: string;
  required: boolean;
}

const Label: React.FunctionComponent<ILabelProps> = ({ required, label, name }) => {
  return (
    <>
      <label
        className={clsx(
          ' mb-1 block font-medium',
          required ? 'after:ml-1 after:text-warning after:content-["*"]' : ''
        )}
        htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default Label;
