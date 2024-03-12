import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import SWRProvider from './swr-provider';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: '메랜피플',
  description: '메이플랜드 커뮤니티 사이트'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${notoSansKR.className} h-[100dvh] overflow-y-auto overflow-x-hidden bg-background text-white`}>
        <SWRProvider>{children}</SWRProvider>
        <div id='modal-root'></div>
      </body>
    </html>
  );
}
