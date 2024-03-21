'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// const SERVER_URL = process.env.SERVER_URL;
const SERVER_URL = 'http://13.209.210.215:3000';

export default async function MannerCount(user_id: number) {
  const cookiesList = cookies();
  const accessToken = cookiesList.get('Authorization');
  try {
    // PATCH 요청 보내기
    const res = await fetch(`${SERVER_URL}/userprofile/${user_id}/manner` as string, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${accessToken?.value}`,
      } 
    });

    if (!res.ok) {
      throw new Error('Failed to increase manner count1');
    }

    console.log('Manner count increased');
  } catch {
    throw new Error('Failed to increase manner count2');
  }
}

