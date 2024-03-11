'use client';

import { CookiesProvider } from 'react-cookie';
import { SWRConfig } from 'swr';

interface IProvidersProps {
  children: React.ReactNode;
}

const SWRProvider: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const fetcher = (path: string) => fetch(`${url}${path}`).then((res) => res.json());

  return (
    <SWRConfig value={{ fetcher }}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>{children}</CookiesProvider>
    </SWRConfig>
  );
};

export default SWRProvider;
