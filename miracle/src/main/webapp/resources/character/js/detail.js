const APIkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNDE1ODYifQ.Bn7XzBd0CuG5V_hWQu9YImuuc1gch1jTfj4Cu7-lkZE6sI7IWhrf9jpJyBm6e3XuHjOethwA8T3ZJnUqmztITYEjBNQjEAX2SIdtTK_HM0AkwEaIziHLOQuE9372Sf55NzK6yv5eM74EJmHR8X8D8C9lLxmkvc4lyPBRH3icmAIZFhTJiIxWskUzPsqXXT5mmmibvfX52eBW3XHdMqe3--6iOHTv50BrPfYV0MqglDLh_XOZUYJAdHiG3J1PzCiQyprHbAEAjwiYlh1k6PveX6ZYCSnFOlaFSmCaLWxbwe1XIXgSFBtsfpwabXjDPNqyTc-pds76WZKacYjIY2dbCQ';
const exbtn = document.getElementById('exbtn'); // 임시버튼
const btn = document.getElementById('btn'); // 임시버튼

// 정보창
const chImage = document.querySelector("#chImage");
const image = document.querySelector("#chImage > img");

// 장비창
const l1 = document.getElementById('l1'); //머리
const l1Image = document.querySelector("#l1Image > img");
const l1ImageP = document.querySelector("#l1Image");
const l1Tooltip = document.getElementById('l1Tooltip');

const l2 = document.getElementById('l2'); //견갑
const l2Image = document.querySelector("#l2Image > img");
const l2ImageP = document.querySelector("#l2Image");
const l2Tooltip = document.getElementById('l2Tooltip');

const l3 = document.getElementById('l3'); //상의
const l3Image = document.querySelector("#l3 > img");

const l4 = document.getElementById('l4'); //바지
const l4Image = document.querySelector("#l4 > img");

const l5 = document.getElementById('l5'); //장갑
const l5Image = document.querySelector("#l5 > img");

const l6 = document.getElementById('l6'); //무기
const l6Image = document.querySelector("#l6 > img");

const l7 = document.getElementById('l7'); //각인
const l7Image = document.querySelector("#l7 > img");


const r1 = document.getElementById('r1'); //목걸이
const r2 = document.getElementById('r2'); //귀걸이1
const r3 = document.getElementById('r3'); //귀걸이2
const r4 = document.getElementById('r4'); //반지1
const r5 = document.getElementById('r5'); //반지2
const r6 = document.getElementById('r6'); //팔찌
const r7 = document.getElementById('r7'); //스톤


function addSpan(text) {
    const span = document.createElement('sapn');
    span.classList.add('image-box-text');
    span.innerText = text;
    return span;
}
function addSpanWhite(text) {
    const span = document.createElement('sapn');
    span.classList.add('white_text');
    span.innerText = text;
    return span;
}

exbtn.addEventListener('click', (e) => {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener ('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            console.log(xmlHttpRequest.responseText);
            const chInfo = JSON.parse(xmlHttpRequest.responseText);
            console.dir(chInfo);
            // lv 클래스 이름 서버이름
            const h5 = document.createElement('h4');
            h5.classList.add('white_text');
            h5.innerText = 'LV. '+chInfo.ArmoryProfile.CharacterLevel + ' ' + chInfo.ArmoryProfile.CharacterClassName + ' @'+chInfo.ArmoryProfile.ServerName;
            chImage.appendChild(h5);

            // 캐릭터 이름
            const h3 = document.createElement('h3');
            h3.classList.add('white_text');
            h3.innerText = chInfo.ArmoryProfile.CharacterName;
            chImage.appendChild(h3);

            
            // 캐릭터 최고 아이탬 레벨
            const h1 = document.createElement('h1');
            h1.classList.add('white_text');
            h1.innerText = chInfo.ArmoryProfile.ItemMaxLevel;
            chImage.appendChild(h1);
            
            
            // 원정대
            const exDiv = document.createElement('div');
            chImage.appendChild(exDiv);
            exDiv.appendChild(addSpan(' 원정대 '));
            exDiv.appendChild(addSpanWhite(' '+chInfo.ArmoryProfile.ExpeditionLevel));
            
            // 칭호
            const titleDiv = document.createElement('div');
            chImage.appendChild(titleDiv);
            titleDiv.appendChild(addSpan(' 칭호 '));
            titleDiv.appendChild(addSpanWhite(' '+chInfo.ArmoryProfile.Title));
            
            
            // pvp
            const pvpDiv = document.createElement('div');
            chImage.appendChild(pvpDiv);
            pvpDiv.appendChild(addSpan(' PVP '));
            pvpDiv.appendChild(addSpanWhite(' '+chInfo.ArmoryProfile.PvpGradeName));
            
            
            // 영지
            const townDiv = document.createElement('div');
            chImage.appendChild(townDiv);
            townDiv.appendChild(addSpan(' 영지 '));
            townDiv.appendChild(addSpanWhite(' '+'Lv.'+chInfo.ArmoryProfile.TownLevel+' '+ chInfo.ArmoryProfile.TownName));
            const chEq_h = JSON.parse(chInfo.ArmoryEquipment[1].Tooltip);
            console.dir(chEq_h);
            // 머리
            l1Image.src = chInfo.ArmoryEquipment[1].Icon;
            l1Image.alt = chInfo.ArmoryEquipment[1].Name;
            l1Image.title = chInfo.ArmoryEquipment[1].Type;
            
            const l1ImageDiv = document.createElement('div');
            l1ImageDiv.innerText = chEq_h.Element_001.value.qualityValue;
            l1ImageDiv.classList.add('eimg-div');
            console.log(chEq_h.Element_001.value.qualityValue);
            l1ImageP.appendChild(l1ImageDiv);
            
            const l1TooltipSpan = document.createElement('span');
            l1TooltipSpan.innerHTML = chEq_h.Element_007.value.Element_000.topStr;
            l1Tooltip.appendChild(l1TooltipSpan);

            const l1TooltipName = document.createElement('h4');
            l1TooltipName.classList.add('p-m0');
            l1TooltipName.innerText = chInfo.ArmoryEquipment[1].Name;
            l1Tooltip.appendChild(l1TooltipName);

            const l1TooltipSet = document.createElement('span');
            l1TooltipSet.innerHTML = chEq_h.Element_011.value.firstMsg+" "+chEq_h.Element_011.value.itemData.Element_001.label+" ";
            l1Tooltip.appendChild(l1TooltipSet);

            const elixir1 = chEq_h.Element_008.value.Element_000.contentStr.Element_000.contentStr.split("<br>");
            console.log(elixir1[0]);

            const elixir2 = chEq_h.Element_008.value.Element_000.contentStr.Element_001.contentStr.split("<br>");
            console.log(elixir2[0]);

            const l1TooltipElixir = document.createElement('span');
            l1TooltipElixir.innerHTML = elixir1[0]+" "+elixir2[0];
            l1Tooltip.appendChild(l1TooltipElixir);

             // 어깨
             l2Image.src = chInfo.ArmoryEquipment[5].Icon;
             l2Image.alt = chInfo.ArmoryEquipment[5].Name;
             l2Image.title = chInfo.ArmoryEquipment[5].Type;
             
             const chEq_s = JSON.parse(chInfo.ArmoryEquipment[5].Tooltip);
            console.dir(chEq_s);

             const l2ImageDiv = document.createElement('div');
             l2ImageDiv.innerText = chEq_s.Element_001.value.qualityValue;
             l2ImageDiv.classList.add('eimg-div');

             console.log(chEq_s.Element_005.value.qualityValue);
             l2ImageP.appendChild(l2ImageDiv);
             
             const l2TooltipSpan = document.createElement('span');
             l2TooltipSpan.innerHTML = chEq_s.Element_007.value.Element_000.topStr;
             l2Tooltip.appendChild(l2TooltipSpan);
 
             const l2TooltipName = document.createElement('h4');
             l2TooltipName.classList.add('p-m0');
             l2TooltipName.innerText = chInfo.ArmoryEquipment[5].Name;
             l2Tooltip.appendChild(l2TooltipName);
 
             const l2TooltipSet = document.createElement('span');
             l2TooltipSet.innerHTML = chEq_s.Element_010.value.firstMsg+" "+chEq_s.Element_010.value.itemData.Element_001.label+" ";
             l2Tooltip.appendChild(l2TooltipSet);
 
             const l2elixir1 = chEq_s.Element_008.value.Element_000.contentStr.Element_000.contentStr.split("<br>");
             console.log(elixir1[0]);
 
             const l2elixir2 = chEq_s.Element_008.value.Element_000.contentStr.Element_001.contentStr.split("<br>");
             console.log(elixir2[0]);
 
             const l2TooltipElixir = document.createElement('span');
             l2TooltipElixir.innerHTML = l2elixir1[0]+" "+l2elixir2[0];
             l2Tooltip.appendChild(l2TooltipElixir);
     
            // 캐릭터 사진
            image.src = chInfo.ArmoryProfile.CharacterImage;
            
            
        }
        
    });
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/characters/주다영", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
    
});

btn.addEventListener('click', (e) => {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener ('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            console.log(xmlHttpRequest.responseText);
            const chInfo = JSON.parse(xmlHttpRequest.responseText);
            console.dir(chInfo);
            
        }
        
    });
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/보라다육", true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
    
});

