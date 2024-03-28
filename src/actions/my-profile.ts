'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function GetMyProfileData(board: string, page: number) {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = cookiesList.get('Authorization');

  console.log('My profile data', hasTokenCookie, accessToken);

  const res = await fetch(`${SERVER_URL}/myprofile/${board}?page=${page}` as string, {
    method: 'GET',
    headers: {
      Authorization: `${accessToken?.value}`
    }
  });

  if (res.ok) {
    console.log('my profile data res status', res.status);
  }

  if (!res.ok) {
    throw new Error('Failed to get user profile data');
  }

  return res.json();
}

