const discordLogin = document.getElementById('discordLogin');
/*
discordLogin.addEventListener('click', () => {
    const discordLogin = async () => {
        const url = `https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fmain%2Findex&scope=identify+email`;
        // 사용자를 Discord 로그인 페이지로 리디렉션합니다.
        window.location.href = url;

        // URL에서 authorization code를 추출
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code);

        if (code) {
            const data = {
                client_id: '1202415748950265966',
                client_secret: 'YDQ7PiLXZ5xh5zI-h9dX43vQySk3t2wO',
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'http://localhost:9000/main/index',
                scope: 'identify, email',
            }

            const response = await fetch('https://discord.com/api/users/@me', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const responseData = await response.json();
            console.log(responseData.access_token); // Here is your access token
        };
    };
    discordLogin();
});
*/

discordLogin.addEventListener('click',()=> {
    const discordLogin = async () => {
        const url = `https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fmain%2Findex&scope=identify+email`;
        // 사용자를 Discord 로그인 페이지로 리디렉션합니다.
        window.location.href = url;
        
        // URL에서 authorization code를 추출
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code);
        
        if (code) {
            const data = {
                client_id: '1202415748950265966',
                client_secret: 'YDQ7PiLXZ5xh5zI-h9dX43vQySk3t2wO',
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'http://localhost:9000/main/index',
                scope: 'identify, email',
            }

            const response = await fetch('https://discord.com/api/users/@me', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const responseData = await response.json();
            console.log(responseData.access_token); // Here is your access token
        }
    };
    discordLogin();
});
/*
import requests

API_ENDPOINT = 'https://discord.com/api/users/@me'
CLIENT_ID = '1202415748950265966'
CLIENT_SECRET = 'YDQ7PiLXZ5xh5zI-h9dX43vQySk3t2wO'
REDIRECT_URI = 'http://localhost:9000/main/index'

def exchange_code(code):
  data = {
    'grant_type': 'authorization_code',
    'code': code,
    'redirect_uri': REDIRECT_URI
  }
  headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  r = requests.post('%s/oauth2/token' % API_ENDPOINT, data=data, headers=headers, auth=(CLIENT_ID, CLIENT_SECRET))
  r.raise_for_status()
  return r.json()
  */