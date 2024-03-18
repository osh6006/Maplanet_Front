'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function logIn() {}

export async function logOut() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = cookiesList.get('Authorization');

  if (hasTokenCookie) {
    const result = await fetch(`https://maplanet.store/auth/logout`, {
      method: 'DELETE',
      headers: {
        Authorization: `${accessToken}`
      }
    });

    console.log(SERVER_URL);
    console.log(await result.json());
  }

  // if (hasTokenCookie) {
  //   cookies().delete('Authorization');
  // }

  // if (hasUserInfoCookie) {
  //   cookies().delete('userInfo');
  // }

  // redirect('/');
}
