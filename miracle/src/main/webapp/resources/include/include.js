const userId = document.getElementById('userId');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const userNickname = document.getElementById('userNickname');
const loginForm = document.getElementById('loginForm');
const showbox = document.getElementById('showbox');

const smsBtn = document.getElementById('smsBtn');
const loginTag = document.getElementById('loginTag');
const nickName = document.getElementById('nickName');
const addadd = document.getElementById('addadd');

window.onload = async () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);

    const url = "http://discord.com/api/oauth2/token";
    const oauthResult = await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
            client_id: '1202415748950265966',
            client_secret: 'YDQ7PiLXZ5xh5zI-h9dX43vQySk3t2wO',
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'http://localhost:9000/main/index',
            scope: 'identify, email',
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    console.log("result : ", oauthResult);

    const oauthData = await oauthResult.json();
    console.log("oauthData : ", oauthData);

    const userReslut = await fetch("https://discord.com/api/users/@me", {
        headers: {
            authorization: `${oauthData.token_type} ${oauthData.access_token}`,
        },
    });

    const userData = await userReslut.json();
    console.log("userResult : ", userData);
    console.log("id : ", userData.id);
    console.log("email : ", userData.email);
    console.log("global_name : ", userData.global_name);
    console.log("username : ", userData.username);

    userId.value = userData.id;
    userEmail.value = userData.email;
    userNickname.value = userData.global_name;
    userPassword.value = userData.username;

    console.log('userId : ' + userId);
    console.log('before : ' + userId.value);
    console.log('Login Type : ' + loginCheck);
    
    loginTag.classList.add('show');
    loginTag.classList.remove('hide');
    if (userId.value != 'undefined') {
        console.log('loginForm submit');
        loginForm.submit('POST');
    }

    // 일반 회원으로 로그인
    if (loginCheck === '0') {
        console.log('이프문3')
        smsBtn.classList.remove('hide');
        smsBtn.classList.add('show');

        nickName.classList.remove('hide');
        nickName.classList.add('show');

        loginTag.classList.remove('show');
        loginTag.classList.add('hide');

        addadd.classList.remove('hide');
        addadd.classList.add('show');

        showbox.classList.add('dropdown');
    }
}


