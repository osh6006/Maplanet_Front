import { INotice } from '@/types';
import NoticeCard from './notice-card';

interface INoticeListProps {
  noticeList: INotice[];
}

const NoticeList: React.FunctionComponent<INoticeListProps> = ({ noticeList }) => {
  return (
    <ul className='flex flex-col gap-y-2'>
      {noticeList?.map((el) => <NoticeCard {...el} key={el.notice_id} />)}
    </ul>
  );
};

export default NoticeList;
