import Icon from '@/components/ui/icon';
import Inner from '@/components/ui/inner';
import Board from '@/app/(home)/components/board';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    // 헤더와 푸터를 제외한 메인
    <Inner>
      <main className='flex w-full flex-col items-center justify-between text-white'>
        {/* 로고 배너와 방문자수 부분 */}
        <div className='my-[40px] flex flex-col items-center gap-4'>
          <Icon src='/images/pig.png' alt='logo' size={150} />
          <div>
            <span className='mr-5 tracking-widest text-[#d6d6d6]'>메 이 플 랜 드</span>
            <span className='tracking-widest text-[#d6d6d6]'>커 뮤 니 티</span>
          </div>
          <Icon src='/images/logo.png' alt='logo-large' size={318} />
        </div>

        {/* 메인 컨텐츠 부분 */}
        <div className='grid w-full grid-cols-2 grid-rows-2 gap-10'>
          <Board category='쩔' bgImage={'/images/option-bg-1.png'} />
          <Board category='겹사' bgImage={'/images/option-bg-3.png'} />
          <Board category="쩔 매너 유저" bgImage={"/images/option-bg-1.png"}/>
          <Board category="현상 수배" bgImage={"/images/option-bg-3.png"}/>
        </div>
      </main>
    </Inner>
  );
};

export default HomePage;
