'use server';

import { IBoard1Data, IBoard1ProfileResponse } from '@/types/interfaces/profile';
import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

async function GetMyProfileData(board: string, page: number): Promise<IBoard1ProfileResponse> {
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
    console.log(res.status);
  }

  if (!res.ok) {
    throw new Error('Failed to get user profile data');
  }

  return res.json();
}

export default GetMyProfileData;
