'use server';

import { cookies } from 'next/headers';

const SERVER_URL = process.env.SERVER_URL;

export async function MannerCount(user_id: number) {
  const cookiesList = cookies();
  const hasTokenCookie = cookiesList.has('Authorization');
  const accessToken = cookiesList.get('Authorization')?.value;

  if (hasTokenCookie && accessToken) {
    try {
      // PATCH 요청 보내기
      const res = await fetch(`${SERVER_URL}/userprofile/${user_id}/manner` as string, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`
        }
      });

      if (!res.ok) {
        throw new Error('Failed to increase manner count1');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
