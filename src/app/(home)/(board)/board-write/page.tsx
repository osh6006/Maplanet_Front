import PartyBoardForm from './components/party-board-form';
import HelperBoardForm from './components/helper-board-form';
import HunterBoardForm from './components/hunter-board-form';
import WriteTypeWrapper from './components/wirte-type-wrapper';
import WoodCutterBoardForm from './components/wood-cutter-board-form';

export type TWirteType = 'helperBoard' | 'hunterBoard' | 'woodCutterBoard' | 'partyBoard';

interface IWriteProps {
  searchParams: {
    writeType?: TWirteType;
  };
}

const WritePage: React.FunctionComponent<IWriteProps> = ({ searchParams }) => {
  const writeType = searchParams.writeType || 'helperBoard';

  return (
    <>
      <div className='mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4'>
        <WriteTypeWrapper name='심알바' writeType='helperBoard' selectedWriteType={writeType} />
        <WriteTypeWrapper
          name='겹사 / 인기도'
          writeType='hunterBoard'
          selectedWriteType={writeType}
        />
        <WriteTypeWrapper name='파티' writeType='partyBoard' selectedWriteType={writeType} />
        <WriteTypeWrapper name='나무꾼' writeType='woodCutterBoard' selectedWriteType={writeType} />
      </div>
      <hr className='my-12' />
      {writeType === 'helperBoard' ? <HelperBoardForm /> : null}
      {writeType === 'hunterBoard' ? <HunterBoardForm /> : null}
      {writeType === 'partyBoard' ? <PartyBoardForm /> : null}
      {writeType === 'woodCutterBoard' ? <WoodCutterBoardForm /> : null}
    </>
  );
};

export default WritePage;
