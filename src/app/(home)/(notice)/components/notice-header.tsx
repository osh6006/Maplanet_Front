import Inner from '@/components/ui/inner';

interface INoticeHeaderProps {}

const NoticeHeader: React.FunctionComponent<INoticeHeaderProps> = ({}) => {
  return (
    <section className='flex h-[200px]  w-screen items-center justify-center bg-black'>
      <Inner>
        <div className='flex items-center justify-center text-4xl font-semibold'>공지사항</div>
      </Inner>
    </section>
  );
};

export default NoticeHeader;
