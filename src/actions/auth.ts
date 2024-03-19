'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function logIn() {}

export async function logOut() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const hasUserInfoCookie = cookiesList.has('userInfo');
  const accessToken = cookiesList.get('Authorization')?.value;

  console.log('현재 엑세스 토큰 : ', accessToken);

  if (hasTokenCookie) {
    console.log('asdf');

    const result = await fetch(`https://maplanet.store/auth/logout`, {
      method: 'DELETE',
      headers: {
        Authorization: `${accessToken}`
      }
    });

    console.log('요청 서버 URL : ', SERVER_URL);
    console.log('요청 결과 : ', result.headers);
    console.log('요청 후 엑세스 토큰 : ', accessToken);
  }

  if (hasTokenCookie) {
    cookies().delete('Authorization');
  }

  if (hasUserInfoCookie) {
    cookies().delete('userInfo');
  }

  // redirect('/');
}
