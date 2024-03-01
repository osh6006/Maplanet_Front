interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  return (
    <>
      <textarea
        {...props}
        className='w-full rounded-md focus:outline-none focus:ring-4 focus:ring-main'
        rows={10}
      />
    </>
  );
};

export default TextArea;
