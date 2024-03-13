'use client';

import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';

interface IProvidersProps {
  children: React.ReactNode;
}

const RootProvider: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  const fetcher = (path: string) => fetch(`${url}${path}`).then((res) => res.json());

  return (
    <SWRConfig value={{ fetcher }}>
      <Toaster />
      <CookiesProvider defaultSetOptions={{ path: '/' }}>{children}</CookiesProvider>
    </SWRConfig>
  );
};

export default RootProvider;
