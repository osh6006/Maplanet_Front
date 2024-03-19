'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SERVER_URL = process.env.SERVER_URL;

export async function logIn() {}

export const logOut = async () => {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const hasUserInfoCookie = cookiesList.has('userInfo');
  const accessToken = cookiesList.get('Authorization')?.value;

  console.log('현재 엑세스 토큰 : ', accessToken);

  // if (hasTokenCookie) {
  //   console.log('asdf');

  //   const result = await fetch(`https://maplanet.store/auth/logout`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `${accessToken}`
  //     }
  //   });

  //   console.log('요청 서버 URL : ', SERVER_URL);
  //   console.log('요청 결과 : ', await result.json());
  //   console.log('요청 후 엑세스 토큰 : ', accessToken);
  // }

  if (hasTokenCookie) {
    cookies().set({
      name: 'Authorization',
      maxAge: 0,
      path: '/',
      domain: 'maplanet.store',
      sameSite: 'none',
      secure: true,
      value: ''
    });
  }

  if (hasUserInfoCookie) {
    cookies().set({
      name: 'userInfo',
      maxAge: 0,
      path: '/',
      domain: 'maplanet.store',
      sameSite: 'none',
      secure: true,
      value: ''
    });
  }

  console.log('삭제 후 엑세스 토큰 : ', accessToken);
  redirect('/');
};
