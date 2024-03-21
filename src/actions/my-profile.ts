'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function GetMyProfileData(board: string, page: number) {
  const cookiesList = cookies();
  const accessToken = cookiesList.get('Authorization');

  try {
    const res = await fetch(`${SERVER_URL}/myprofile/${board}?page=${page}` as string, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${accessToken?.value}`,
      },
    });
    if (!res.ok) {
      throw new Error('Failed to get user profile banner data');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error('Failed to get user profile banner data');
  }
}
