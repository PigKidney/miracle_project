const userId = document.getElementById('userId');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const userNickname = document.getElementById('userNickname');
const loginForm = document.getElementById('loginForm');

const smsBtn = document.getElementById('smsBtn');
const loginTag = document.getElementById('loginTag');
const nickName = document.getElementById('nickName');
const addadd = document.getElementById('addadd');

let check = false;

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
    if (userId.value != 'undefined') {
        console.log('after : ' + userId.value);

        smsBtn.classList.remove('hide');
        nickName.classList.remove('hide');
        addadd.classList.remove('hide');

        loginTag.classList.add('hide');
        smsBtn.classList.add('show');
        nickName.classList.add('show');
        addadd.classList.add('show');

        nickName.firstChild = userNickname.value;
        console.log('first '+nickName.firstChild);

        console.log('detect')

        loginForm.submit('POST');
    } else {
        console.log('undefined instead null')
    }



}