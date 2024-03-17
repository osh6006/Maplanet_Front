'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SERVER_URL = process.env.SERVER_URL;

export async function logIn() {}

export async function logOut() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const hasUserInfoCookie = cookiesList.has('userInfo');
  const accessToken = cookiesList.has('Authorization');

  await fetch(`${SERVER_URL}/auth/logout` as string, {
    method: 'DELETE',
    headers: {
      Authorization: `${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: '',
    credentials: 'include'
  });

  // if (hasTokenCookie) {
  //   cookies().delete('Authorization');
  // }

  // if (hasUserInfoCookie) {
  //   cookies().delete('userInfo');
  // }

  // redirect('/');
}
