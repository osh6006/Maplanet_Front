import { IPartyBoardDeatil } from '@/types';
import useSWR from 'swr';
import Modal from '../modal';
import Loading from '@/components/ui/loading';
import BoardModalHeader from './board-modal-header';
import { BoardDD, BoardDL, BoardDT, BoardFloors } from './board-modal-body';
import Badge from '@/components/ui/badge';

interface IPartyBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardId: number;
}

const PartyBoardModal: React.FunctionComponent<IPartyBoardModalProps> = ({
  isOpen,
  onClose,
  boardId
}) => {
  // data fetching using swr
  const { data, error, isLoading } = useSWR<IPartyBoardDeatil>(`/board4/detail/${boardId}`);

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Loading size={100} />
      </Modal>
    );
  }

  if (error) {
    return <div>서버 에러!</div>;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='scrollbar-thin scrollbar-thumb-lightGray scrollbar-track-background flex max-h-[600px] flex-col overflow-y-auto px-10'>
        {/* Header */}
        <div className='flex flex-col gap-4 '>
          <BoardModalHeader
            discord_id={data?.discord_id!}
            discord_image={data?.discord_image!}
            discord_global_name={data?.discord_global_name!}
            manner_count={data?.manner_count!}
            report_count={data?.report_count!}
            user_id={data?.user_id!}
          />

          <hr className='my-5' />

          {/* BODY */}
          <div className='grid w-full flex-1 grid-cols-1  gap-x-4 sm:grid-cols-2  '>
            <BoardDL>
              <BoardDT>종류</BoardDT>
              <BoardDD>
                <Badge className={'bg-main'} size='card'>
                  파티 구인
                </Badge>
              </BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>사냥터</BoardDT>
              <BoardDD>{data?.hunting_ground}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>사냥터</BoardDT>
              <BoardDD>{data?.hunting_ground}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>모집 인원</BoardDT>
              <BoardDD>{data?.recruit_people_count}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>메이플 닉네임</BoardDT>
              <BoardDD>{data?.maple_nickname}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>주차</BoardDT>
              <BoardDD>{data?.parking ? '있음' : '없음'}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>시간</BoardDT>
              <BoardDD>{data?.progress_time || 0}</BoardDD>
            </BoardDL>
          </div>
        </div>

        <div className='mt-4 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>{data?.title}</p>
        </div>

        <div className='mt-4 flex flex-col gap-y-2 rounded-lg px-2 py-3 text-base leading-7'>
          <strong className='text-lg'>사냥 자리</strong>
          <BoardFloors floors={data?.sixth_floor || ''} floorNum={6} />
          <BoardFloors floors={data?.fifth_floor || ''} floorNum={5} />
          <BoardFloors floors={data?.fourth_floor || ''} floorNum={4} />
          <BoardFloors floors={data?.third_floor || ''} floorNum={3} />
          <BoardFloors floors={data?.second_floor || ''} floorNum={2} />
          <BoardFloors floors={data?.first_floor || ''} floorNum={1} />
        </div>
      </div>
    </Modal>
  );
};

export default PartyBoardModal;
