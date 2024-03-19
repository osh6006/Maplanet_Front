'use client';

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

          // Default options for specific types
          success: {
            style: {
              display: 'flex',
              maxWidth: '1000px',
              alignItems: 'center'
            },
            duration: 3000
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
      {children}
    </SWRConfig>
  );
};

export default RootProvider;
