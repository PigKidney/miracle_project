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

bannerImg2.addEventListener('click',()=>{
    console.log('ㅎ2');
    location.href='https://lostark.game.onstove.com/Promotion/Update/230913';
})
function moving(){
    location.href='https://lostark.game.onstove.com/Promotion/Update/230913';
}
const APIkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxMjYzNTcifQ.ea4LxCxsouQnuP614kmuimHkWite6cVt-gpN-HAeNgT7NeJm7Nje6nlxom_8wICkv7zqWlvO1D8C70IscZticqgL1B-06UXe3Fp6OGn4iU8SpTl1TFCJ4j-W03DsXtekHFSbDf85kxXNraYpwZBD34bv-wvfd8K5Rt_-pAWG_cYV3Z5dpMPC_L4530LIi-w1NwuDS9CxniruRuPeWdxaEwFaVI4somz30gXh72jMsuW2ljf_fHmB9uOgnWSVNQNwXqV0CiuOHrFjgKfQVvUP_vETppsDIE1iFbfp58KNPT-r1-8MtF90Tbg_dLiOb0PJdc_q5DLL6scJVUDxfqTeMA';

var xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.addEventListener('readystatechange', (e) => {
    if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
        console.log(JSON.parse(xmlHttpRequest.responseText));
        let allInfo = JSON.parse(xmlHttpRequest.responseText);
        console.log(allInfo[1]);
        console.log('true ? ' + (allInfo[1].CategoryName == '로웬'));
        console.log(Object.keys(allInfo).length);

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
