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
const adventure_island_1 = document.getElementById('adventure-island-1');
const adventure_island_2 = document.getElementById('adventure-island-2');
const adventure_island_3 = document.getElementById('adventure-island-3');
const bossNgate_1 = document.getElementById('bossNgate-1');
const bossNgate_2 = document.getElementById('bossNgate-2');
const bossNgate_3 = document.getElementById('bossNgate-3');
const calendarInfo = document.getElementById('calendarInfo');
let todayStar = '<span class="material-symbols-outlined twinkle-star">kid_star</span>';

let today = new Date();
let eventDayCheck = today.getDate();
const dayList = ['일', '월', '화', '수', '목', '금', '토'];

function colorOfSelectedDay(e) {
    // 만들어야댐
}

for (let i = 2; i > -8; i--) {
    let dayOfPast = new Date(today - (3600000 * 24 * i));
    if (dayOfPast.getDay() == 0) {
        calendarList.appendChild(document.createElement('div')).innerText = dayOfPast.getDate() + '(' + dayList[dayOfPast.getDay()] + ')';
        calendarList.lastChild.classList.add('sundayRed');
    } else if (dayOfPast.getDay() == 6) {
        calendarList.appendChild(document.createElement('div')).innerText = dayOfPast.getDate() + '(' + dayList[dayOfPast.getDay()] + ')';
        calendarList.lastChild.classList.add('saturdayBlue');
    } else {
        calendarList.appendChild(document.createElement('div')).innerText = dayOfPast.getDate() + '(' + dayList[dayOfPast.getDay()] + ')';
        calendarList.lastChild.classList.add('weekdayWhite');
    }
}
// 날짜
let calendarList7 = calendarList.children[2].textContent.substring(0, calendarList.children[0].textContent.length - 3).replace('(','');
let islandList = [];
let fieldBossList = [];
let chaosGateList = [];
let voyageList = [];
calendarList.children[2].innerHTML += todayStar;
console.log(calendarList7)

for (let i = 2; i < 8; i++) {
    calendarInfo.children[0].children[i].addEventListener('click', () => {

        calendarList7 = calendarList.children[i].textContent.substring(0, calendarList.children[0].textContent.length - 3).replace('(','');
<<<<<<< HEAD
        console.log('ddd : ' + calendarList7)
=======
>>>>>>> branch 'ds' of https://github.com/PigKidney/miracle_project.git
        for (let j = 2; j < 8; j++) {
            if (calendarList.children[j].children[0] != null) {
                calendarList.children[j].children[0].remove();
            }
        }
        calendarList.children[i].innerHTML += todayStar;
        islandList = [];
        fieldBossList = [];
        chaosGateList = [];
        voyageList = [];
        island();
        return;
    })
}
function island() {

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            let allInfo = JSON.parse(xmlHttpRequest.responseText);
            console.log(allInfo);

            // 모험섬
            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                    let centerDay = new Date(allInfo[i].StartTimes[j]);
                    if (allInfo[i].CategoryName == '모험 섬' && centerDay.getDate() == calendarList7) {
                        if (i >= 1 && allInfo[i - 1].ContentsName != allInfo[i].ContentsName) {
                            islandList.push(allInfo[i])
                            break;

                        } else if (i == 0) {
                            islandList.push(allInfo[i])
                        }
                    }
                }
            }

            for (let i = 0; i < Object.keys(islandList).length; i++) {
                switch (i) {
                    case 0:
                        adventure_island_1.firstElementChild.innerHTML = '<img style="border-radius: 10px;" src="' + islandList[i].ContentsIcon + '"></img>';
                        adventure_island_1.children[1].children[0].textContent = islandList[i].ContentsName;

                        adventure_island_1.children[1].children[1].innerHTML = '';
                        if (islandList[i].RewardItems[0].Name.substring(islandList[i].RewardItems[0].Name.length - 2, islandList[i].RewardItems[0].Name.length) == '마음') {
                            adventure_island_1.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="https://cdn.korlark.com/lostark/icons/island/ico_island_simbol.png"></img>';
                        }
                        for (let j = 1; j < 4; j++) {
                            adventure_island_1.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="' + islandList[i].RewardItems[j].Icon + '"></img>';
                        }
                        break;

                    case 1:
                        adventure_island_2.firstElementChild.innerHTML = '<img style="border-radius: 10px;" src="' + islandList[i].ContentsIcon + '"></img>';
                        adventure_island_2.children[1].children[0].textContent = islandList[i].ContentsName;

                        adventure_island_2.children[1].children[1].innerHTML = '';
                        if (islandList[i].RewardItems[0].Name.substring(islandList[i].RewardItems[0].Name.length - 2, islandList[i].RewardItems[0].Name.length) == '마음') {
                            adventure_island_2.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="https://cdn.korlark.com/lostark/icons/island/ico_island_simbol.png"></img>';
                        }
                        for (let j = 1; j < 4; j++) {
                            adventure_island_2.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="' + islandList[i].RewardItems[j].Icon + '"></img>';
                        }
                        break;

                    case 2:
                        adventure_island_3.firstElementChild.innerHTML = '<img style="border-radius: 10px;" src="' + islandList[i].ContentsIcon + '"></img>';
                        adventure_island_3.children[1].children[0].textContent = islandList[i].ContentsName;

                        adventure_island_3.children[1].children[1].innerHTML = '';
                        if (islandList[i].RewardItems[0].Name.substring(islandList[i].RewardItems[0].Name.length - 2, islandList[i].RewardItems[0].Name.length) == '마음') {
                            adventure_island_3.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="https://cdn.korlark.com/lostark/icons/island/ico_island_simbol.png"></img>';
                        }
                        for (let j = 1; j < 4; j++) {
                            adventure_island_3.children[1].children[1].innerHTML += '<img style="border-radius: 5px;" height="36px" width="36px" src="' + islandList[i].RewardItems[j].Icon + '"></img>';
                        }
                        break;
                }
            }

            // 필드보스
            if (eventDayCheck == 0 || eventDayCheck == 2 || eventDayCheck == 5) {
                for (let i = 0; i < Object.keys(allInfo).length; i++) {
                    for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                        let centerDay = new Date(allInfo[i].StartTimes[j]);
                        if (allInfo[i].CategoryName == '필드보스' && centerDay.getDate() == calendarList7) {
                            fieldBossList.push(allInfo[i])
                        }
                    }
                }
            }
            bossNgate_1.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="/resources/img/fieldboss.png"></img>';
            bossNgate_1.children[1].innerHTML = '필드보스'

            // 카오스게이트
            if (eventDayCheck == 0 || eventDayCheck == 1 || eventDayCheck == 4 || eventDayCheck == 6)
                for (let i = 0; i < Object.keys(allInfo).length; i++) {
                    for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                        let centerDay = new Date(allInfo[i].StartTimes[j]);
                        if (allInfo[i].CategoryName == '카오스게이트' && centerDay.getDate() == calendarList7) {
                            chaosGateList.push(allInfo[i])
                        }

                    }
                }
            bossNgate_3.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="/resources/img/chaosgate.png"></img>';
            bossNgate_3.children[1].innerHTML = '카오스게이트';

            // 항해
            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                    let centerDay = new Date(allInfo[i].StartTimes[j]);
                    if (allInfo[i].CategoryName == '항해' && centerDay.getDate() == calendarList7) {
                        voyageList.push(allInfo[i])
                    }
                }
            }
            bossNgate_2.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="/resources/img/voyage.png"></img>';
            bossNgate_2.children[1].innerHTML = '유령선';
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

function adventureTimer() {
    let setDay = new Date()
    let today = new Date(setDay + 60000);
    let min = parseInt(today.getMinutes());
    let hour = setDay.getHours();
    let sec = parseInt(today.getSeconds());
    let eventTimeMin = 59 - min;
    let eventTimeSec = 60 - sec;

    if (eventTimeMin < 10) {
        eventTimeMin = '0' + eventTimeMin;
    }
    if (eventTimeSec < 10) {
        eventTimeSec = '0' + eventTimeSec;
    } else if (eventTimeSec == 60) {
        eventTimeSec = '00';
        eventTimeMin = parseInt(eventTimeMin);
        eventTimeMin++;
    }
    let eventTable = setDay.getDay();
    if (hour >= 10 && hour < 23) {
        switch (eventTable) {
            case 0:
                bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            case 1:
                bossNgate_1.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            case 2:
                bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
            case 3:
                bossNgate_1.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div style="font-size:12px>출현 예정</div>';
            case 4:
                bossNgate_1.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            case 5:
                bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
            case 6:
                bossNgate_1.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_2.children[2].innerHTML = '<div style="font-size:12px">출현 예정</div>';
                bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
        }
    }
}

setInterval(() => { adventureTimer() }, 1000);
island();
official();


