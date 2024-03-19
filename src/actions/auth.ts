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

  try {
    if (hasTokenCookie) {
      const result = await fetch(`https://maplanet.store/auth/logout`, {
        method: 'POST',
        headers: {
          Authorization: `${accessToken}`
        }
      });

      if (result.status === 201) {
        cookies().set({
          name: 'Authorization',
          maxAge: 0,
          path: '/',
          domain: 'maplanet.store',
          sameSite: 'none',
          secure: true,
          value: ''
        });

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
    }

    redirect('/');
  } catch (error) {
    console.log(error);
    throw new Error('Log Out Error!' + error);
  }
};
