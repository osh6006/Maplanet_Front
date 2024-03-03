import NoticeCard from './notice-card';

interface INoticeListProps {}

const NoticeList: React.FunctionComponent<INoticeListProps> = ({}) => {
  return (
    <ul className='flex flex-col gap-y-2'>
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <NoticeCard key={el} />
      ))}
    </ul>
  );
};

export default NoticeList;
