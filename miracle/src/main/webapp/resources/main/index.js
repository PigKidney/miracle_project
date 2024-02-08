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

console.dir(bannerImg1);
// 배너 클릭 > 에키드나로 이동
bannerImg1.addEventListener('click', () => {
    window.open('https://lostark.game.onstove.com/Promotion/Update/240131/Echidna');
})
// 배너 클릭 > 카멘으로 이동
bannerImg2.addEventListener('click', () => {
    window.open('https://lostark.game.onstove.com/Promotion/Update/230913');
})
// 배너 클릭 > 상아탑으로 이동
bannerImg3.addEventListener('click', () => {
    window.open('https://lostark.game.onstove.com/Promotion/Update/230222/Ivorytower');
})
// 배너 클릭 > 두꺼비로 이동
bannerImg4.addEventListener('click', () => {
    window.open('https://lostark.game.onstove.com/Promotion/Update/230222/Gargadis');
})

const APIkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMjYzNTcifQ.ea4LxCxsouQnuP614kmuimHkWite6cVt-gpN-HAeNgT7NeJm7Nje6nlxom_8wICkv7zqWlvO1D8C70IscZticqgL1B-06UXe3Fp6OGn4iU8SpTl1TFCJ4j-W03DsXtekHFSbDf85kxXNraYpwZBD34bv-wvfd8K5Rt_-pAWG_cYV3Z5dpMPC_L4530LIi-w1NwuDS9CxniruRuPeWdxaEwFaVI4somz30gXh72jMsuW2ljf_fHmB9uOgnWSVNQNwXqV0CiuOHrFjgKfQVvUP_vETppsDIE1iFbfp58KNPT-r1-8MtF90Tbg_dLiOb0PJdc_q5DLL6scJVUDxfqTeMA';


const calendarList = document.getElementById('calendarList');
const daylight = document.getElementById('daylight');

function island() {

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            console.log(JSON.parse(xmlHttpRequest.responseText));
            let allInfo = JSON.parse(xmlHttpRequest.responseText);
            console.log(Object.keys(allInfo).length);

            let today = new Date();
            const dayList = ['일', '월', '화', '수', '목', '금', '토'];

            for (let i = 7; i > -8; i--) {
                let dayOfPast = new Date(today - (3600000 * 24 * i));
                console.log(dayOfPast.getDate());
                console.log(dayList[dayOfPast.getDay()]);
                daylight.appendChild(document.createElement('div')).innerText = dayList[dayOfPast.getDay()];
                calendarList.appendChild(document.createElement('div')).innerText = dayOfPast.getDate();
            }

            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                if (allInfo[i].CategoryName == '모험 섬') {
                    console.log(allInfo[i].ContentsName);
                }
            }
        }
    })
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/gamecontents/calendar", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
}

let noticeList = document.getElementById('noticeList');

function official() {

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            console.log(JSON.parse(xmlHttpRequest.responseText));
            let allInfo = JSON.parse(xmlHttpRequest.responseText);

            for (let i = 0; i < 5; i++) {
                noticeList.appendChild(document.createElement('div')).innerText = allInfo[i].Type;
                noticeList.appendChild(document.createElement('div')).innerText = allInfo[i].Title;
                noticeList.lastChild.classList.add('cursor');
                noticeList.lastChild.addEventListener('click', (e) => {
                    window.open(allInfo[i].Link);
                })
            }
            for (let i = 0; i < noticeList.childElementCount; i++) {
                noticeList.children[i].classList.add('mainWhite');
            }
        }
    })
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/news/notices", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
}

function adventureIsland() {
    let today = new Date();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 7; i > -8; i--) {
        let dayOfPast = new Date(today - (3600000 * 24 * i));
        console.log(dayOfPast.getDate());
        console.log(dayList[dayOfPast.getDay()]);
    }
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

}
adventureIsland();
island();
official();


