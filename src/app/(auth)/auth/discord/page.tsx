import { discordLoginTest } from '@/actions/auth';

interface IauthPageProps {}

const authPage: React.FunctionComponent<IauthPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    code?: string;
  };
}) => {
  console.log(searchParams?.code);

  // 백엔드에 인증 코드를보내고 받아옴
  const test = await discordLoginTest(searchParams?.code || '');

  return <div>소셜 로그인 진행중 입니다.</div>;
};

export default authPage;
