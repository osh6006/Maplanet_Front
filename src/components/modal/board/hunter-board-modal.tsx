'use client';

import clsx from 'clsx';
import useSWR from 'swr';

import Modal from '../modal';
import Badge from '@/components/ui/badge';
import Loading from '@/components/ui/loading';

import { IHunterBoardDetail } from '@/types';
import BoardModalHeader from './board-modal-header';
import { BoardDD, BoardDL, BoardDT } from './board-modal-body';

interface IHunterBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardId: number;
}

const HunterBoardModal: React.FunctionComponent<IHunterBoardModalProps> = ({
  isOpen,
  onClose,
  boardId
}) => {
  // data fetching using swr
  const { data, error, isLoading } = useSWR<IHunterBoardDetail>(`/board2/detail/${boardId}`);

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
      <div onClick={(e) => e.stopPropagation()}>
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
              <BoardDT>퀘스트 종류</BoardDT>
              <BoardDD>
                <Badge
                  className={clsx(
                    'max-w-22',
                    data?.report_kind === '인기도 하락' ? 'bg-main' : 'bg-violet'
                  )}
                  size='card'>
                  {data?.report_kind}
                </Badge>
              </BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>메소</BoardDT>
              <BoardDD>{data?.meso}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>저격 닉네임</BoardDT>
              <BoardDD>{data?.place_theif_nickname}</BoardDD>
            </BoardDL>
          </div>
        </div>

        <div className='mt-8 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>{data?.title}</p>
        </div>
      </div>
    </Modal>
  );
};

export default HunterBoardModal;
