interface IFormErrorMessageProps {
  children: React.ReactNode;
}

const FormErrorMessage: React.FunctionComponent<IFormErrorMessageProps> = ({ children }) => {
  return (
    <div className='text-right text-sm text-warning'>
      <p>{children}</p>
    </div>
  );
};

export default FormErrorMessage;
