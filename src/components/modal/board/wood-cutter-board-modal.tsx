import { IWoodCutterBoardDetail } from '@/types';
import * as React from 'react';
import useSWR from 'swr';
import Modal from '../modal';
import BoardModalHeader from './board-modal-header';
import { BoardDD, BoardDL, BoardDT } from './board-modal-body';
import Badge from '@/components/ui/badge';
import Loading from '@/components/ui/loading';

interface IWoodCutterBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardId: number;
}

const WoodCutterBoardModal: React.FunctionComponent<IWoodCutterBoardModalProps> = ({
  isOpen,
  onClose,
  boardId
}) => {
  // data fetching using swr
  const { data, error, isLoading } = useSWR<IWoodCutterBoardDetail>(`/board3/detail/${boardId}`);

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
      <div onClick={(e) => e.stopPropagation()} className=''>
        {/* Header */}
        <div className='flex flex-col gap-4'>
          <BoardModalHeader
            discord_id={data?.discord_id!}
            discord_image={data?.discord_image!}
            discord_global_name={data?.discord_global_name!}
            manner_count={data?.manner_count!}
            report_count={data?.report_count!}
          />

          <hr className='my-5' />

          {/* BODY */}
          <div className='grid flex-1 grid-cols-2 gap-x-4 '>
            <BoardDL>
              <BoardDT>구인 종류</BoardDT>
              <BoardDD>
                <Badge className={'max-w-14 bg-violet'} size='card'>
                  나무꾼
                </Badge>
              </BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>메소</BoardDT>
              <BoardDD>{data?.meso}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>사냥터</BoardDT>
              <BoardDD>{data?.hunting_ground}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>직업</BoardDT>
              <BoardDD>{data?.sub_job}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>레벨</BoardDT>
              <BoardDD>{data?.level}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>메이플 닉네임</BoardDT>
              <BoardDD>{data?.maple_nickname}</BoardDD>
            </BoardDL>

            <BoardDL>
              <BoardDT>시간</BoardDT>
              <BoardDD>{data?.progress_time}</BoardDD>
            </BoardDL>
          </div>
        </div>

        <div className='mt-4 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>{data?.title}</p>
        </div>
      </div>
    </Modal>
  );
};

export default WoodCutterBoardModal;
