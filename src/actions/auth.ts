'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logIn() {}

export async function logOut() {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const hasUserInfoCookie = cookiesList.has('userInfo');

  if (hasTokenCookie) {
    cookies().delete('Authorization');
  }

  if (hasUserInfoCookie) {
    cookies().delete('userInfo');
  }

  redirect('/');
}
