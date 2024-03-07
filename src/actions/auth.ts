const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET;
const DISCORD_MOVE_PAGE_URL = process.env.NEXT_PUBLIC_DISCORD_MOVE_PAGE_URL;

export const discordLogin = async () => {
  // 사용자를 Discord 로그인 페이지로 리디렉션합니다.

  window.location.href = DISCORD_MOVE_PAGE_URL || '';

  //   URL에서 authorization code를 추출
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    const data = {
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `https://maplanet.store/discord/auth/login`,
      scope: 'identify, email'
    };

    const response = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const responseData = await response.json();
    console.log(responseData);
  }
};

export const discordLoginTest = async (code: string) => {
  try {
    const data = {
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `https://maplanet.store/discord/auth/login`,
      scope: 'identify, email'
    };

    const response = await fetch('https://maplanet.store/auth/discord', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};
