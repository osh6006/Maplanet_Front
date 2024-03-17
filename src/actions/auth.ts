'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function logIn() {}

export async function logOut() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const hasUserInfoCookie = cookiesList.has('userInfo');
  const accessToken = cookiesList.has('Authorization');

  const result = await fetch(`${SERVER_URL}/auth/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${accessToken}`
    },
    credentials: 'include'
  });

  console.log(await result.json());

  // if (hasTokenCookie) {
  //   cookies().delete('Authorization');
  // }

  // if (hasUserInfoCookie) {
  //   cookies().delete('userInfo');
  // }

  // redirect('/');
}
