'use server';

import { cookies } from 'next/headers';

const cookieStore = cookies();

export function getUserInfo() {
  const cookie = cookieStore.get('userInfo');
  console.log(cookie);

  const [nickName, avaterUrl] = cookie?.value.split(' ') || [];
  return { nickName, avaterUrl };
}
