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
const characterSearch = document.getElementById('characterSearch');

const myIP = '118.33.154.162';
const local = 'localhost';

const localURL = 'https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fmain%2Findex&scope=identify+email';
const dsURL = 'https://discord.com/api/oauth2/authorize?client_id=1202415748950265966&response_type=code&redirect_uri=http%3A%2F%2F118.33.154.162%3A9000%2Fmain%2Findex&scope=identify+email';

window.onload = async () => {

    characterSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log(e);
            console.log(characterSearch.value);
            location.href = '/character/search?characterSearch=' + characterSearch.value;
        }

    })

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const url = "http://discord.com/api/oauth2/token";
    const oauthResult = await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
            client_id: '1202415748950265966',
            client_secret: 'YDQ7PiLXZ5xh5zI-h9dX43vQySk3t2wO',
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'http://' + local + ':9000/main/index',
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

    console.log('name : ' + nameCheck);
    console.log('Login Type : ' + loginCheck);

    loginTag.classList.add('show');
    loginTag.classList.remove('hide');
    if (userId.value != 'undefined') {
        console.log('loginForm submit');
        loginForm.submit('POST');
    }

    // 일반 회원으로 로그인
    if (loginCheck === '0' || loginCheck === '1') {
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

    // 로그인하면 로그인글자 없어지면서 회원 닉네임 노출
    if (nickName.value == undefined && loginCheck != '0' && loginCheck != '1') {
        nickName.innerText = '로그인';
        nickName.onclick = function () {
            location.href = localURL;
        }
    } else {
        nickName.innerText = nameCheck;
    }
}

function ourGit() {
    window.open('https://github.com/PigKidney/miracle_project');
}

