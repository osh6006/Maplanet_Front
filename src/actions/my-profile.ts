'use server';

import { IBoard1ProfileResponse } from '@/types/interfaces/profile';
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
    console.log('my profile complete res status', res.status);
  }

  if (!res.ok) {
    throw new Error('Failed to get user profile data');
  }

  return res.json();
}

export async function CompleteMyPost(board: string, board_id: number) {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = cookiesList.get('Authorization');

  if (accessToken && hasTokenCookie) {
    try {
      const res = await fetch(`${SERVER_URL}/${board}/complete/${board_id}` as string, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken?.value}`
        }
      });

      if (res.ok) {
        console.log(res.status);
      }

      if (!res.ok) {
        throw new Error('Failed to complete my post');
      }
      
    } catch {
      throw new Error('Failed to complete post');
    }
  }
}
