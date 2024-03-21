import type { Metadata } from 'next';

import { Noto_Sans_KR } from 'next/font/google';

import RootProvider from '../providers/root-provider';

import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: '메랜피플',
  description:
    '메이플 랜드 유저들을 위한 파티 구인구직 플랫폼입니다. 메이플 랜드에서 함께 파티를 맺거나 나무꾼 등을 찾고 싶을 때 사용할 수 있습니다.',
  icons: {
    icon: '/favicons/favicon.png'
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '메랜피플 : 메이플 랜드 파티 구인 플랫폼',
    description:
      '메이플 랜드 유저들을 위한 파티 구인구직 플랫폼입니다. 메이플 랜드에서 함께 파티를 맺거나 나무꾼 등을 찾고 싶을 때 사용할 수 있습니다.',
    url: 'https://www.maplanet.store/',
    images: [
      {
        url: '/favicons/favicon.png',
        width: 800,
        height: 600
      }
    ]
  },
  other: {
    'naver-site-verification': 'a51ae85576bbf5ec28c7d8dd3511a8e624c97cc2'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${notoSansKR.className} h-[100dvh] overflow-x-hidden overflow-y-hidden bg-background text-white`}>
        <RootProvider>{children}</RootProvider>
        <div id='modal-root' className='h-full w-full' />
      </body>
    </html>
  );
}
