import Icon from '@/components/ui/icon';

interface IBoardErrorProps {
  reset: () => void;
}

const BoardError: React.FunctionComponent<IBoardErrorProps> = ({ reset }) => {
  return (
    <div className='flex h-full min-h-[500px] flex-col items-center justify-center gap-y-4'>
      <Icon alt='bug' width={160} height={150} src='/images/bug_pig.webp' />
      <div className='text-center'>
        <h1 className='mb-4 text-3xl font-bold'>데이터를 불러오는 중 에러가 발생하였습니다!</h1>
        <p className='mb-8 text-lg text-gray-300'>다시 한번 시도해 주세요!</p>
      </div>
      <button className='rounded bg-main px-4 py-2 text-white hover:bg-blue-600' onClick={reset}>
        Retry
      </button>
    </div>
  );
};

export default BoardError;
