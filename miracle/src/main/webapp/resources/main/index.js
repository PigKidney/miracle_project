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


function island() {

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            let allInfo = JSON.parse(xmlHttpRequest.responseText);
            let today = new Date();
            const dayList = ['일', '월', '화', '수', '목', '금', '토'];
            console.log(allInfo);

            for (let i = 7; i > -8; i--) {
                let dayOfPast = new Date(today - (3600000 * 24 * i));
                daylight.appendChild(document.createElement('div')).innerText = dayList[dayOfPast.getDay()];
                calendarList.appendChild(document.createElement('div')).innerText = dayOfPast.getDate();
            }

            // 7번자리가 오늘에 해당하는 중앙자리임
            // 요일
            let daylight7 = daylight.children[7].textContent
            // 날짜
            let calendarList7 = calendarList.children[7].textContent
            let islandList = [];
            let fieldBossList = [];
            let chaosGateList = [];
            let voyageList = [];


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
                            console.log('add2')
                        }
                    }
                }
            }

            for (let i = 0; i < Object.keys(islandList).length; i++) {
                switch (i) {
                    case 0:

                        adventure_island_1.firstElementChild.innerHTML = '<img style="border-radius: 10px;" src="' + islandList[i].ContentsIcon + '"></img>';
                        adventure_island_1.children[1].children[0].textContent = islandList[i].ContentsName;

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
            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                    let centerDay = new Date(allInfo[i].StartTimes[j]);
                    if (allInfo[i].CategoryName == '필드보스' && centerDay.getDate() == calendarList7) {
                        fieldBossList.push(allInfo[i])
                    }
                }
            }
            bossNgate_1.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="' + fieldBossList[fieldBossList.length - 1].ContentsIcon + '"></img>';
            bossNgate_1.children[1].innerHTML = fieldBossList[fieldBossList.length - 1].CategoryName;



            // 카오스게이트

            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                    let centerDay = new Date(allInfo[i].StartTimes[j]);
                    if (allInfo[i].CategoryName == '카오스게이트' && centerDay.getDate() == calendarList7) {
                        chaosGateList.push(allInfo[i])
                    }
                }
            }
            bossNgate_3.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="' + chaosGateList[chaosGateList.length - 1].ContentsIcon + '"></img>';
            bossNgate_3.children[1].innerHTML = chaosGateList[chaosGateList.length - 1].CategoryName;

            // 항해
            for (let i = 0; i < Object.keys(allInfo).length; i++) {
                for (let j = 0; j < Object.keys(allInfo[i].StartTimes).length; j++) {
                    let centerDay = new Date(allInfo[i].StartTimes[j]);
                    if (allInfo[i].CategoryName == '항해' && centerDay.getDate() == calendarList7) {
                        voyageList.push(allInfo[i])
                    }
                }
            }
            bossNgate_2.children[0].innerHTML = '<img style="border-radius: 5px;" height="40px" width="40px" src="' + voyageList[voyageList.length - 1].ContentsIcon + '"></img>';
    //      bossNgate_2.children[1].innerHTML = voyageList[voyageList.length - 1].CategoryName;
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
    let hour = today.getHours();
    let sec = parseInt(today.getSeconds());

    let eventTimeMin = 59 - min;
    let eventTimeSec = 60 - sec;

    if (eventTimeMin < 10) {
        eventTimeMin = '0' + eventTimeMin;
    } else if (eventTimeMin == 59) {
        eventTimeMin = '00';
    }

    if (eventTimeSec < 10) {
        eventTimeSec = '0' + eventTimeSec;
    } else if (eventTimeSec == 60) {
        eventTimeSec = '00';
        eventTimeMin += 1;
    }

    let eventTable = today.getDay();

    switch (eventTable) {
        case 0:
            bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            bossNgate_2.children[2].innerHTML = '<div class="maybe">출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
        case 1:
            bossNgate_1.children[2].innerHTML = '<div class="maybe">출현 예정</div>';
            bossNgate_2.children[2].innerHTML = '<div class="maybe">출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
        case 2:
            bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            bossNgate_2.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>출현 예정</div>';
        case 3:
            bossNgate_1.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_2.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>출현 예정</div>';
        case 4:
            bossNgate_1.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_2.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
        case 5:
            bossNgate_1.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
            bossNgate_2.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>출현 예정</div>';
        case 6:
            bossNgate_1.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_2.children[2].innerHTML = '<div>출현 예정</div>';
            bossNgate_3.children[2].innerHTML = '<div>' + (eventTimeMin) + ' : ' + (eventTimeSec) + '</div>';
    }
}

setInterval(() => { adventureTimer() }, 1000);
island();
official();


