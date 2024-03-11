import { IWoodCutterBoardDetail } from '@/types';
import * as React from 'react';
import useSWR from 'swr';
import Modal from '../modal';
import BoardModalHeader from './board-modal-header';
import { BoardDD, BoardDL, BoardDT } from './board-modal-body';
import Badge from '@/components/ui/badge';

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
  //   const { data, error, isLoading } = useSWR<IWoodCutterBoardDetail>(`/board3/detail/${boardId}`);

  //   if (isLoading) {
  //     return (
  //       <Modal isOpen={isOpen} onClose={onClose}>
  //         <Loading size={100} />
  //       </Modal>
  //     );
  //   }

  //   if (error) {
  //     return <div>서버 에러!</div>;
  //   }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className='flex flex-col gap-4'>
          <BoardModalHeader
            discord_id={'a132123'}
            discord_image={''}
            discord_global_name={'지발돈좀'}
            manner_count={13}
            report_count={44}
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
              <BoardDD>{40000}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>사냥터</BoardDT>
              <BoardDD>{'죽은 나무의 숲'}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>직업</BoardDT>
              <BoardDD>{'클레릭'}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>레벨</BoardDT>
              <BoardDD>{55}</BoardDD>
            </BoardDL>
            <BoardDL>
              <BoardDT>메이플 닉네임</BoardDT>
              <BoardDD>{'메이플 닉넴'}</BoardDD>
            </BoardDL>

            <BoardDL>
              <BoardDT>시간</BoardDT>
              <BoardDD>{'5 시간'}</BoardDD>
            </BoardDL>
          </div>
        </div>

        <div className='mt-4 rounded-lg bg-[#494949] px-5 py-5 text-base leading-7'>
          <p>
            1 시간당 메소 50만에 4시간 해드립니다. 사기 절대 없고, 매너지수 보시면 알겠지만
            메크로같은거 안돌립니다. 1 시간당 메소 150만에 4시간 해드립니다. 사기 절대 없고,{' '}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default WoodCutterBoardModal;
