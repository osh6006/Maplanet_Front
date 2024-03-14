'use client';

import Icon from '@/components/ui/icon';
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
      <Toaster
        containerStyle={{}}
        toastOptions={{
          // Define default options
          position: 'top-right',

          // Default options for specific types
          success: {
            duration: 3000,
            icon: '😎'
          },
          error: {
            style: {
              display: 'flex',
              maxWidth: '1000px',
              alignItems: 'center'
            },
            duration: 3000
          }
        }}
      />
      <CookiesProvider defaultSetOptions={{ path: '/' }}>{children}</CookiesProvider>
    </SWRConfig>
  );
};

export default RootProvider;
