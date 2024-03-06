import { discordLoginTest } from '@/actions/auth';

interface IauthPageProps {}

const authPage: React.FunctionComponent<IauthPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    code?: string;
  };
}) => {
  const test = await discordLoginTest(searchParams?.code || '');

  return <div>소셜 로그인 진행중 입니다.</div>;
};

export default authPage;
