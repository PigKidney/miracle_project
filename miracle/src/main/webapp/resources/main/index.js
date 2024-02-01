const bannerImg1 = document.getElementById('bannerImg1');
const bannerImg2 = document.getElementById('bannerImg2');
const bannerImg3 = document.getElementById('bannerImg3');
const bannerImg4 = document.getElementById('bannerImg4');
const islandDate = document.getElementById('islandDate');
const islandTime = document.getElementById('islandTime');

const tabs = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

function showTabs() {
    let i = 0;
    setInterval(() => {
        console.log(i++ % 4)
        let index = i % 4;
        for (let j = 0; j < 4; j++) {
            if (index == j) {
                tabs[j].classList.add('bannerShow')
            } else {
                tabs[j].classList.remove('bannerShow')
            }
        }
    }, 2000)
}
// showTabs();

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    islandDate.innerText = year + '년 ' + month + '월';
    islandTime.innerHTML = hour + ':' + minute + ':' + second;
}
setInterval(() => {
    showTime();
}, 1000)


window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = ['bg8O3QboII5nJmh5ISjxKywijz9Jqr', 'Bearer'];
    console.log(accessToken);

    if (!accessToken) {
        return (document.getElementById('login').style.display = 'block');
    }

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
        .then(result => result.json())
        .then(response => {
            const { username, discriminator } = response;
            document.getElementById('info').innerText += ` ${username}#${discriminator}`;
        })
        .catch(console.error);
        console.log("5 : "+response);
};


