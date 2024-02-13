const discordLogin = document.getElementById('discordLogin');

const localURL ='https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fmain%2Findex&scope=identify+email';
const dsURL = 'https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2F118.33.154.162%3A9000%2Fmain%2Findex&scope=identify+email';
discordLogin.addEventListener('click', () => {
    const url = localURL;
    
    // 사용자를 Discord 로그인 페이지로 리디렉션합니다.
    window.location.href = url;
    
    // URL에서 authorization code를 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);
    
    const discordLogin = async () => {
    }
})
