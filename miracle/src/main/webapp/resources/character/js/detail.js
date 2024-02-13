const APIkey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNDE1ODYifQ.Bn7XzBd0CuG5V_hWQu9YImuuc1gch1jTfj4Cu7-lkZE6sI7IWhrf9jpJyBm6e3XuHjOethwA8T3ZJnUqmztITYEjBNQjEAX2SIdtTK_HM0AkwEaIziHLOQuE9372Sf55NzK6yv5eM74EJmHR8X8D8C9lLxmkvc4lyPBRH3icmAIZFhTJiIxWskUzPsqXXT5mmmibvfX52eBW3XHdMqe3--6iOHTv50BrPfYV0MqglDLh_XOZUYJAdHiG3J1PzCiQyprHbAEAjwiYlh1k6PveX6ZYCSnFOlaFSmCaLWxbwe1XIXgSFBtsfpwabXjDPNqyTc-pds76WZKacYjIY2dbCQ';
const exbtn = document.getElementById('exbtn'); // 임시버튼
const btn = document.getElementById('btn'); // 임시버튼
const URLforParameter = new URL(window.location.href);
const getParam = URLforParameter.searchParams;
const getName = getParam.get('search');

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
const l3Image = document.querySelector("#l3Image > img");
const l3ImageP = document.querySelector("#l3Image");
const l3Tooltip = document.getElementById('l3Tooltip');

const l4 = document.getElementById('l4'); //바지
const l4Image = document.querySelector("#l4Image > img");
const l4ImageP = document.querySelector("#l4Image");
const l4Tooltip = document.getElementById('l4Tooltip');

const l5 = document.getElementById('l5'); //장갑
const l5Image = document.querySelector("#l5Image > img");
const l5ImageP = document.querySelector("#l5Image");
const l5Tooltip = document.getElementById('l5Tooltip');

const l6 = document.getElementById('l6'); //무기
const l6Image = document.querySelector("#l6Image > img");
const l6ImageP = document.querySelector("#l6Image");
const l6Tooltip = document.getElementById('l6Tooltip');

const l7 = document.getElementById('l7'); //각인
const l7Image = document.querySelector("#l7 > img");


const r1 = document.getElementById('r1'); //목걸이
const r1Image = document.querySelector("#r1Image > img");
const r1ImageP = document.querySelector("#r1Image");
const r1Tooltip = document.getElementById('r1Tooltip');

const r2 = document.getElementById('r2'); //귀걸이1
const r2Image = document.querySelector("#r2Image > img");
const r2ImageP = document.querySelector("#r2Image");
const r2Tooltip = document.getElementById('r2Tooltip');

const r3 = document.getElementById('r3'); //귀걸이2
const r3Image = document.querySelector("#r3Image > img");
const r3ImageP = document.querySelector("#r3Image");
const r3Tooltip = document.getElementById('r3Tooltip');

const r4 = document.getElementById('r4'); //반지1
const r4Image = document.querySelector("#r4Image > img");
const r4ImageP = document.querySelector("#r4Image");
const r4Tooltip = document.getElementById('r4Tooltip');

const r5 = document.getElementById('r5'); //반지2
const r5Image = document.querySelector("#r5Image > img");
const r5ImageP = document.querySelector("#r5Image");
const r5Tooltip = document.getElementById('r5Tooltip');

const r6 = document.getElementById('r6'); //팔찌
const r6Image = document.querySelector("#r6Image > img");
const r6ImageP = document.querySelector("#r6Image");
const r6Tooltip = document.getElementById('r6Tooltip');

const r7 = document.getElementById('r7'); //스톤
const r7Image = document.querySelector("#r7Image > img");
const r7ImageP = document.querySelector("#r7Image");
const r7Tooltip = document.getElementById('r7Tooltip');

const g1 = document.getElementById('g1'); //보석
const g1Image = document.querySelector("#g1Image > img");

const g2 = document.getElementById('g2'); //보석
const g2Image = document.querySelector("#g2Image > img");

const g3 = document.getElementById('g3'); //보석
const g3Image = document.querySelector("#g3Image > img");

const g4 = document.getElementById('g4'); //보석
const g4Image = document.querySelector("#g4Image > img");

const g5 = document.getElementById('g5'); //보석
const g5Image = document.querySelector("#g5Image > img");

const g6 = document.getElementById('g6'); //보석
const g6Image = document.querySelector("#g6Image > img");

const g7 = document.getElementById('g7'); //보석
const g7Image = document.querySelector("#g7Image > img");

const g8 = document.getElementById('g8'); //보석
const g8Image = document.querySelector("#g8Image > img");

const g9 = document.getElementById('g9'); //보석
const g9Image = document.querySelector("#g9Image > img");

const g10 = document.getElementById('g10'); //보석
const g10Image = document.querySelector("#g10Image > img");

const g11 = document.getElementById('g11'); //보석
const g11Image = document.querySelector("#g11Image > img");

const l7_1 = document.querySelector('#l7-1  > img');
const l7_1Tooltip = document.getElementById('l7-1Tooltip');

const l7_2 = document.querySelector('#l7-2  > img');
const l7_2Tooltip = document.getElementById('l7-2Tooltip');

const gemEffectDiv = document.querySelector("#gem-effects");

const engrave = document.querySelector('#engrave');
const states = document.querySelector("#states");
const states_etc = document.querySelector("#states-etc");
const tendencies = document.querySelector('#tendencies');

const cards = document.querySelector('#cards');
const cardsStates = document.querySelector('#cards-states');

const ststes = ['치명','특화','신속','제압','인내','숙련'];
const img_g_uri = 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_card_grade.png?f9e0ffc8a709611354db408dd0e7a7bb';



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
            addEqui(chInfo, 1, l1Image, l1ImageP , l1Tooltip);
            // 어깨
            addEqui(chInfo, 5, l2Image, l2ImageP , l2Tooltip);
            // 상의
            addEqui(chInfo, 2, l3Image, l3ImageP , l3Tooltip);
            // 하의
            addEqui(chInfo, 3, l4Image, l4ImageP , l4Tooltip);
            // 장갑
            addEqui(chInfo, 4, l5Image, l5ImageP , l5Tooltip);
            // 무기
            addEqui(chInfo, 0, l6Image, l6ImageP , l6Tooltip);
            if(searchTotailTranscendence(chInfo.ArmoryEquipment[1]) != undefined){
                const eq_img = document.createElement('img');
                eq_img.classList.add('w-h20');
                eq_img.classList.add('trans-img-pos');
                eq_img.src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
                l6Tooltip.appendChild(eq_img);
                const eq_lv = document.createElement('span');
                eq_lv.classList.add('eqi-EngravePoint');
                eq_lv.classList.add('magin-r10');
                eq_lv.innerText = searchTotailTranscendence(chInfo.ArmoryEquipment[1]);
                l6Tooltip.appendChild(eq_lv);
            }
            // 목걸이
            addEqui(chInfo, 6, r1Image, r1ImageP , r1Tooltip);
            // 귀걸이
            addEqui(chInfo, 7, r2Image, r2ImageP , r2Tooltip);
            // 귀걸이
            addEqui(chInfo, 8, r3Image, r3ImageP , r3Tooltip);
            // 반지
            addEqui(chInfo, 9, r4Image, r4ImageP , r4Tooltip);
            // 반지
            addEqui(chInfo, 10, r5Image, r5ImageP , r5Tooltip);
            // 팔찌
            addEqui(chInfo, 12, r6Image, r6ImageP , r6Tooltip);
            
            addEqui(chInfo, 11, r7Image, r7ImageP , r7Tooltip);
            
            // const trans_img = document.querySelectorAll('#trans > img');
            // for(let i=0;i<trans_img.length;i++){
            //     trans_img[i].src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
            // }
            // 장착 각인
            l7_1.src = chInfo.ArmoryEngraving.Engravings[0].Icon;
            const l7_1_h4 = document.createElement('h4');
            l7_1_h4.classList.add('eqi-EngraveName');
            l7_1_h4.innerText = chInfo.ArmoryEngraving.Engravings[0].Name;
            l7_1Tooltip.appendChild(l7_1_h4);
            const l7_1_span = document.createElement('span');
            l7_1_span.classList.add('eqi-EngravePoint');
            l7_1_span.innerText = searchEngravePoint(chInfo.ArmoryEngraving.Engravings[0]);
            l7_1Tooltip.appendChild(l7_1_span);




            l7_2.src = chInfo.ArmoryEngraving.Engravings[1].Icon;
            const l7_2_h4 = document.createElement('h4');
            l7_2_h4.classList.add('eqi-EngraveName');
            l7_2_h4.innerText = chInfo.ArmoryEngraving.Engravings[1].Name;
            l7_2Tooltip.appendChild(l7_2_h4);
            const l7_2_span = document.createElement('span');
            l7_2_span.classList.add('eqi-EngravePoint');
            l7_2_span.innerText = searchEngravePoint(chInfo.ArmoryEngraving.Engravings[1]);
            l7_2Tooltip.appendChild(l7_2_span);

            // 캐릭터 사진
            image.src = chInfo.ArmoryProfile.CharacterImage;
            
            // 보석
            if(chInfo.ArmoryGem != null){
                addGem(chInfo, 0 , g1, g1Image);
                addGem(chInfo, 1 , g2, g2Image);
                addGem(chInfo, 2 , g3, g3Image);
                addGem(chInfo, 3 , g4, g4Image);
                addGem(chInfo, 4 , g5, g5Image);
                addGem(chInfo, 5 , g6, g6Image);
                addGem(chInfo, 6 , g7, g7Image);
                addGem(chInfo, 7 , g8, g8Image);
                addGem(chInfo, 8 , g9, g9Image);
                addGem(chInfo, 9 , g10, g10Image);
                addGem(chInfo, 10 , g11, g11Image);
                
                
                // 보석 마우스 이벤트 등록
                const gems = document.querySelectorAll('#gem-over');
                let gemList = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11];
                let gemImageList = [g1Image, g2Image, g3Image, g4Image, g5Image, g6Image, g7Image, g8Image, g9Image, g10Image, g11Image];
    
                for(let i=0;i<gems.length;i++){
                    gemList[i].addEventListener('mouseover', (e) => {
                        gems[i].classList.remove("gem-hidden");
                        gemImageList[i].classList.add('gem-select');
                    });
                    gemList[i].addEventListener('mouseout', (e) => {
                        gems[i].classList.add("gem-hidden");
                        gemImageList[i].classList.remove('gem-select');
                    });
                }
            }
            
            // 각인
            for(let i=0;i<chInfo.ArmoryEngraving.Effects.length;i++){
                const div = document.createElement('div');
                div.classList.add('flex-dir-c');
                if(i!=chInfo.ArmoryEngraving.Effects.length){
                    div.classList.add('pd-b-10');
                }
                engrave.appendChild(div);
                addEngrave(chInfo, div, i);
            }

            // 특성값
            for(let i=0;i<ststes.length;i++){
                addState(chInfo, states , ststes[i]);
            }

            let etc = ['공격력' , '최대 생명력'];
            for(let i=0;i<etc.length;i++){
                addState(chInfo, states_etc , etc[i]);
            }

            let tendent = ['지성', '담력', '매력', '친절'];
            addTendencies(chInfo, tendencies);
            

            //카드 

            addCards(chInfo, cards);
            addCardEffects(chInfo, cardsStates);
        }
        
    });
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/characters/"+getName, true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
    
});

// 장비
function addEqui(ch , num , image , imageP ,  tooltip){
    coloerFilter(ch.ArmoryEquipment[num], image)
    image.src = ch.ArmoryEquipment[num].Icon;
    image.alt = ch.ArmoryEquipment[num].Name;
    image.title = ch.ArmoryEquipment[num].Type;
    
    const chEq_a = JSON.parse(ch.ArmoryEquipment[num].Tooltip);

    if(num != 11 && num != 12 ){
        const imageDiv = document.createElement('div');
        imageDiv.innerText = chEq_a.Element_001.value.qualityValue;
        coloerFilterP(chEq_a.Element_001.value.qualityValue,imageP);
        imageDiv.classList.add('eimg-div');
        imageP.appendChild(imageDiv);
    }

    if(searchTranscendence(ch.ArmoryEquipment[num]) != undefined){
        const eq_img = document.createElement('img');
        eq_img.classList.add('w-h20');
        eq_img.classList.add('trans-img-pos');
        eq_img.src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
        tooltip.appendChild(eq_img);
        const eq_lv = document.createElement('span');
        eq_lv.classList.add('eqi-EngravePoint');
        eq_lv.innerHTML = searchTranscendence(ch.ArmoryEquipment[num]);
        tooltip.appendChild(eq_lv);
    }
    
    const tooltipName = document.createElement('h4');
    tooltipName.classList.add('p-m0');
    tooltipName.classList.add('white_text');
    if(num<=12 && num>=6 || num ==0){
        tooltipName.classList.add('magin-t6');
    }
    tooltipName.innerText = ch.ArmoryEquipment[num].Name;
    tooltip.appendChild(tooltipName);
    
    if(searchEqiStatePoint(ch.ArmoryEquipment[num]) != undefined && num != 12 || num == 11){
        if(num != 11){
            const eq_lv = document.createElement('div');
            // eq_lv.classList.add('white_text');
            eq_lv.classList.add('eqi-StatePoint');
            eq_lv.innerText = searchEqiStatePoint(ch.ArmoryEquipment[num]);
            tooltip.appendChild(eq_lv);
        }
        
        
        searchEqiEngravePoint(ch.ArmoryEquipment[num], tooltip);
        
    }
    
    if(searchFunction(ch.ArmoryEquipment[num], setValue) != undefined){
        const eq_lv = document.createElement('span');
        eq_lv.classList.add('eqi-EngravePoint');
        eq_lv.classList.add('magin-r10');
        eq_lv.innerHTML = searchFunction(ch.ArmoryEquipment[num], setValue);
        tooltip.appendChild(eq_lv);
        
        searchTranscendence(ch.ArmoryEquipment[num])
    }
    if(num<6){
        searchElixirPoint(ch.ArmoryEquipment[num],tooltip);
    }
    if(num == 12){
        searchBraceletEP(ch.ArmoryEquipment[num], tooltip);
    }

}

// 장비등급
function coloerFilter(ch, image){
    if(ch.Grade == '에스더'){
        image.classList.add('item-coloer-7');
    } else if(ch.Grade == '유물'){
        image.classList.add('item-coloer-1');
    } else if(ch.Grade == '전설'){
        image.classList.add('item-coloer-2');
    } else if(ch.Grade == '영웅'){
        image.classList.add('item-coloer-3');
    } else if(ch.Grade == '희귀'){
        image.classList.add('item-coloer-4');
    } else if(ch.Grade == '고급'){
        image.classList.add('item-coloer-5');
    } else if(ch.Grade == '일반'){
        image.classList.add('item-coloer-6');
    }
}

// 품질
function coloerFilterP(percent, image){
    if(percent == 100){
        image.classList.add('item-coloer-1-p');
    } else if(percent < 100 && percent >= 90){
        image.classList.add('item-coloer-2-p');
    } else if(percent < 90 && percent >= 70){
        image.classList.add('item-coloer-3-p');
    } else if(percent < 70 && percent >= 40){
        image.classList.add('item-coloer-4-p');
    } else if(percent < 40 && percent >= 10){
        image.classList.add('item-coloer-5-p');
    } else {
        image.classList.add('item-coloer-6-p');
    } 
}

// 카드 테두리
function cardGrade(grade, image){
    if(grade == '유물'){
        image.classList.add('card-pos-6');
    } else if(grade == '전설'){
        image.classList.add('card-pos-5');
    } else if(grade == '영웅'){
        image.classList.add('card-pos-4');
    } else if(grade == '희귀'){
        image.classList.add('card-pos-3');
    } else if(grade == '고급'){
        image.classList.add('card-pos-2');
    } else if(grade == '일반'){
        image.classList.add('card-pos-1');
    } 
}

function cardAwake(awake, div){
    if(awake == '5'){
        div.style.width = '100px';
    } else if(awake == 4){
        div.style.width = '75px';
    } else if(awake == 3){
        div.style.width = '58px';
    } else if(awake == 2){
        div.style.width = '40px';
    } else if(awake == 1){
        div.style.width = '20px';
    } else if(awake == 0){
        div.style.width = '0px';
    } 
}


function cardNameColoer(grade, image){
    if(grade == '유물'){
        image.classList.add('card-name-g-5');
    } else if(grade == '전설'){
        image.classList.add('card-name-g-1');
    } else if(grade == '영웅'){
        image.classList.add('card-name-g-2');
    } else if(grade == '희귀'){
        image.classList.add('card-name-g-3');
    } else if(grade == '고급'){
        image.classList.add('card-name-g-4');
    } 
}

// 보석
function addGem(ch , num , imageP , image) {

    coloerFilter(ch.ArmoryGem.Gems[num], image)
    // imageP.classList.add('overflow-h');
    image.src = ch.ArmoryGem.Gems[num].Icon;
    image.alt = ch.ArmoryGem.Gems[num].Name;
    image.classList.add('w-h44');
    image.classList.add('gem-radius');

    
    const gemEffect = document.createElement('span');
    gemEffect.classList.add('white_text');
    gemEffect.classList.add('gem-font');
    // gemEffect.innerHTML = ch.ArmoryGem.Gems[num].Name;
    if(ch.ArmoryGem.Gems[num].Name.search('홍염')){
        gemEffect.innerText = 'Lv.'+ch.ArmoryGem.Gems[num].Level+' 홍염';
    } else if (ch.ArmoryGem.Gems[num].Name.search('멸화')) {
        gemEffect.innerText = 'Lv.'+ch.ArmoryGem.Gems[num].Level+' 멸화';
    }
    imageP.appendChild(gemEffect);
    
    
    
    
    // 보석 효과
    for(let i=0; i<ch.ArmoryGem.Effects.length; i++){
        if(ch.ArmoryGem.Gems[num].Slot == ch.ArmoryGem.Effects[i].GemSlot){
            
            const gemEffect = document.createElement('h2');
            gemEffect.id = 'gem-over';
            gemEffect.classList.add('white_text');
            gemEffect.classList.add('gem-hidden');
            gemEffect.classList.add('gem-radius');
            gemEffect.classList.add('coloer-select');
            gemEffect.innerText = ch.ArmoryGem.Effects[i].Name + ch.ArmoryGem.Effects[i].Description;
            gemEffectDiv.appendChild(gemEffect);
            
            const image = document.createElement('img');
            image.classList.add('radius100');
            image.classList.add('w-h44');
            image.src=ch.ArmoryGem.Effects[i].Icon;
            gemEffect.appendChild(image);
        }
    }
    
    
}

// 각인
function addEngrave(ch, div , num){
    let image = document.createElement('img');
    image.src = ch.ArmoryEngraving.Effects[num].Icon;
    image.alt = ch.ArmoryEngraving.Effects[num].Name;
    image.title = ch.ArmoryEngraving.Effects[num].Description;
    image.classList.add('radius100');
    image.classList.add('w-h33');
    image.classList.add('dis-block');
    div.appendChild(image);

    let name = document.createElement('span');
    name.classList.add('white_text');
    name.classList.add('t-indent');
    name.innerText = ch.ArmoryEngraving.Effects[num].Name;
    div.appendChild(name);

}

// 장착각인활성포인트
function searchEngravePoint(json){
    var tooltip = JSON.parse(json.Tooltip);
    console.dir(tooltip);
    for (const type in tooltip) {
        if(tooltip[type].type == "EngraveSkillTitle"){
            return tooltip[type].value.leftText.substring(tooltip[type].value.leftText.search('각인 활성 포인트'),tooltip[type].value.leftText.indexOf('</FONT>'));
        }
    }
}

// 특성
function addState(ch, div , name){
   for(let i=0; i<ch.ArmoryProfile.Stats.length;i++){
       if(ch.ArmoryProfile.Stats[i].Type == name){
            const column = document.createElement('div');
            column.classList.add('dis-flex');
            column.classList.add('jc-sb');
            column.classList.add('magin-b10');
            div.appendChild(column);
            let type = document.createElement('span');
            type.classList.add('white_text');
            type.classList.add('bold700');
            type.innerText = ch.ArmoryProfile.Stats[i].Type;
            column.appendChild(type);
        
            let value = document.createElement('span');
            value.classList.add('white_text');
            value.classList.add('align-right');
            value.innerText = ch.ArmoryProfile.Stats[i].Value;
            column.appendChild(value);

        }
   }
}

// 성향
function addTendencies(ch, div){
    for(let i=0; i<ch.ArmoryProfile.Tendencies.length;i++){
        const column = document.createElement('div');
        column.classList.add('dis-flex');
        column.classList.add('jc-sb');
        column.classList.add('magin-b10');
        div.appendChild(column);

        let type = document.createElement('span');
        type.classList.add('white_text');
        type.classList.add('bold700');
        type.innerText = ch.ArmoryProfile.Tendencies[i].Type;
        column.appendChild(type);
    
        let value = document.createElement('span');
        value.classList.add('white_text');
        value.classList.add('align-right');
        value.innerText = ch.ArmoryProfile.Tendencies[i].Point;
        column.appendChild(value);

        const bar = document.createElement('div');
        bar.classList.add('progress-bar');
        column.appendChild(bar);
        
        const bar_p = document.createElement('div');
        bar_p.classList.add('progress');
        bar.appendChild(bar_p);
        let p = ch.ArmoryProfile.Tendencies[i].Point*(0.1);
        bar_p.style.width = p+'%';
    }
 }


// 카드
function addCards(ch, div){
    for(let i=0; i<ch.ArmoryCard.Cards.length;i++){
        const column = document.createElement('div');
        // column.classList.add('flex-dir-c');
        column.classList.add('jc-sb');
        column.classList.add('magin-b10');
        div.appendChild(column);
        
        // 카드 이미지
        let img = document.createElement('img');
        img.classList.add('cards-size');
        img.src = ch.ArmoryCard.Cards[i].Icon;
        column.appendChild(img);
        
        // 테두리
        let img_g = document.createElement('img');
        img_g.src = img_g_uri;
        cardGrade(ch.ArmoryCard.Cards[i].Grade, img_g);
        column.appendChild(img_g);
        
        
        // 카드이름
        let value = document.createElement('div');
        cardNameColoer(ch.ArmoryCard.Cards[i].Grade, value);
        value.classList.add('white_text');
        value.classList.add('al-center');
        value.classList.add('dis-block');
        value.classList.add('card-name');
        value.innerText = ch.ArmoryCard.Cards[i].Name;
        column.appendChild(value);
        
        // 카드 각성단계
        let awake_b = document.createElement('div');
        awake_b.classList.add('awake-back');
        column.appendChild(awake_b);
        cardAwake(ch.ArmoryCard.Cards[i].AwakeTotal,awake_b);
        
        let awake = document.createElement('div');
        awake.classList.add('awake-front');
        column.appendChild(awake);
        cardAwake(ch.ArmoryCard.Cards[i].AwakeCount,awake);
    }
}

// 카드 효과
function addCardEffects(ch, div){
    const cardEffectsBack = document.createElement('div');
    cardEffectsBack.classList.add('card-states-back');
    div.appendChild(cardEffectsBack);
    cardEffectsBack.style.gridTemplateColumns=`repeat(${ch.ArmoryCard.Effects.length},minmax(0,1fr))`;
    for(let i=0; i<ch.ArmoryCard.Effects.length;i++){
        const cardEffects = document.createElement('div');
        cardEffects.classList.add('radius');
        cardEffects.classList.add('magin-b10');
        cardEffects.classList.add('card-states');
        
        cardEffectsBack.appendChild(cardEffects);

        for(let j=0; j<ch.ArmoryCard.Effects[i].Items.length;j++){
            const column = document.createElement('div');
            column.classList.add('jc-sb');
            column.classList.add('magin-b10');
            column.classList.add('white_text');
            column.classList.add('al-center');
            column.classList.add('dis-block');
            column.innerText = ch.ArmoryCard.Effects[i].Items[j].Name;
            column.style.marginLeft = '1rem';
            column.style.marginTop = '15px';
            cardEffects.appendChild(column);

            let value = document.createElement('ul');
            column.appendChild(value);

            let effects = document.createElement('li');
            effects.classList.add('white_text');
            effects.classList.add('al-center');
            effects.classList.add('dis-block');
            effects.innerText = ch.ArmoryCard.Effects[i].Items[j].Description;
            effects.style.marginTop = ' -0.6rem';
            value.appendChild(effects);
        }

    }
}



let setValue = ['사멸','갈망','배신','지배',"환각",'파괴','악몽'];
// 세트효과
function searchFunction( json , arr){
    var tooltip = JSON.parse(json.Tooltip);
    
    for (const type in tooltip) {
        if(tooltip[type].type == "ItemPartBox"){
            for (const value in tooltip[type]) {
                if(value == 'value'){
                    for(const a in tooltip[type][value]){
                        for(let i=0; i<arr.length ; i++){
                            if(tooltip[type][value][a].includes(arr[i])){
                                let lv = tooltip[type][value][a].substring(tooltip[type][value][a].indexOf('Lv.'),tooltip[type][value][a].indexOf('Lv.')+4);
                                return arr[i]+' '+lv;
                            }
                        }
                        
                    }
                }
            }
        }
    }
}
// 초월
function searchTranscendence(json){
    var tooltip = JSON.parse(json.Tooltip);
    for (const type in tooltip) {
        if(tooltip[type].type == "IndentStringGroup"){
            for (const value in tooltip[type]) {
                if(value == 'value'){
                    for(const a in tooltip[type][value]){
                        for(const t in tooltip[type][value][a]){
                            if(t == 'topStr'){
                                if(tooltip[type][value][a][t].includes('초월')){
                                    let index = tooltip[type][value][a][t].search('</FONT>단계');
                                    let point =tooltip[type][value][a][t].substring(tooltip[type][value][a][t].length,tooltip[type][value][a][t].length-2);
                                    let step = tooltip[type][value][a][t].substring(index-1,index)+'단계';
                                    console.log(point + ' ' + step);
                                    return point + ' ' + step ;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// 초월 총단계
function searchTotailTranscendence(json){
    var tooltip = JSON.parse(json.Tooltip);
    for (const type in tooltip) {
        if(tooltip[type].type == "IndentStringGroup"){
            for (const value in tooltip[type]) {
                if(value == 'value'){
                    for(const a in tooltip[type][value]){
                        for(const t in tooltip[type][value][a]){
                            for(const total in tooltip[type][value][a][t]){
                                if(tooltip[type][value][a][t][total].contentStr.includes('모든 방어구에 적용된 총')){
                                        console.log(tooltip[type][value][a][t][total].contentStr);
                                        let start = tooltip[type][value][a][t][total].contentStr.search('</img>')+6;
                                        let index = tooltip[type][value][a][t][total].contentStr.search('개</FONT>');
                                        let step = '총 '+tooltip[type][value][a][t][total].contentStr.substring(start,index)+'단계';
                                        return step ;
                                    }
                                
                            }
                            
                        }
                    }
                }
            }
        }
    }
}

// 엘릭서
function searchElixirPoint(ch,div){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "IndentStringGroup"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        if(json[type][value][a].topStr.includes('엘릭서 효과')){
                            for(const p in json[type][value][a]){
                                if(p == 'contentStr'){
                                    for(const lv in json[type][value][a][p]){
                                        if(p == 'contentStr'){
                                            // console.log(json[type][value][a][p][lv].contentStr.substring(
                                            //     json[type][value][a][p][lv].contentStr.indexOf(']')+8,
                                            //     json[type][value][a][p][lv].contentStr.indexOf('</FONT><br>')
                                            // ).replace('<FONT color=\'#FFD200\'>',' '));
                                            let point = json[type][value][a][p][lv].contentStr.substring(
                                                json[type][value][a][p][lv].contentStr.indexOf(']')+8,
                                                json[type][value][a][p][lv].contentStr.indexOf('</FONT><br>')
                                            ).replace('<FONT color=\'#FFD200\'>',' ');
                                            const el_p = document.createElement('span');
                                            el_p.classList.add('eqi-EngravePoint');
                                            el_p.classList.add('magin-r10');
                                            el_p.innerText = point;
                                            div.appendChild(el_p);
                                        }
                                    }
                                }
                            }
                        } 
                    }
                }
            }
        }
    }
};

// 악세서리 특성
function searchEqiStatePoint(ch){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "ItemPartBox"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        for(let i=0; i<ststes.length ; i++){
                            if(json[type][value][a].includes(ststes[i])){
                                return json[type][value][a].replace('<BR>', ' ');
                            }
                            
                        }
                    }
                }
            }
        }
    }
};

// 악세서리 각인
function searchEqiEngravePoint(ch , div){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "IndentStringGroup"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        for(const t in json[type][value][a]){
                            if(t == 'contentStr'){
                                for(const p in json[type][value][a][t]){
                                    const point = json[type][value][a][t][p].contentStr.substring(23, 
                                        json[type][value][a][t][p].contentStr.search('</FONT>'))
                                    +' '+ json[type][value][a][t][p].contentStr.substring(
                                        json[type][value][a][t][p].contentStr.indexOf('+')+1, 
                                    json[type][value][a][t][p].contentStr.search('<BR>'));
                                    const eq_p = document.createElement('span');
                                    eq_p.classList.add('eqi-EngravePoint');
                                    eq_p.classList.add('magin-r10');
                                    if(point.includes('감소')){
                                        eq_p.classList.add('minus-color');
                                    }
                                    eq_p.innerText = point;
                                    div.appendChild(eq_p);
                                }
                            }
                            
                        }
                    }
                }
            }
        }
    }
};

// 팔찌 특성
function searchBraceletEP(ch , div){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "ItemPartBox"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        for(let i=0; i<ststes.length ; i++){ 
                            if(json[type][value][a].includes(`${ststes[i]} +`)){
                                // console.log(json[type][value][a]);
                                // console.log(json[type][value][a].search(`${ststes[i]} +`));
                                // console.log(json[type][value][a].substring(
                                //     json[type][value][a].search(`${ststes[i]} +`),json[type][value][a].search(`${ststes[i]} +`)+7));
                                const point = json[type][value][a].substring(
                                    json[type][value][a].search(`${ststes[i]} +`),json[type][value][a].search(`${ststes[i]} +`)+7);

                                const eq_p = document.createElement('span');
                                eq_p.classList.add('eqi-StatePoint');
                                eq_p.classList.add('magin-r10');
                                eq_p.innerText = point;
                                div.appendChild(eq_p);
                            } 
                            
                        }
                    }
                }
            }
        }
    }
};

// test
function test(ch){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "IndentStringGroup"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        for(const t in json[type][value][a]){
                            if(t == 'contentStr'){
                                for(const p in json[type][value][a][t]){
                                    const point = json[type][value][a][t][p].contentStr.substring(23, 
                                        json[type][value][a][t][p].contentStr.search('</FONT>'))
                                    +' '+ json[type][value][a][t][p].contentStr.substring(
                                        json[type][value][a][t][p].contentStr.indexOf('+')+1, 
                                    json[type][value][a][t][p].contentStr.search('<BR>'));
                                    console.log(point);
                                }
                            }
                            
                        }
                    }
                }
            }
        }
    }
};

function test2(ch ){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "ItemPartBox"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        for(let i=0; i<ststes.length ; i++){ 
                            if(json[type][value][a].includes(`${ststes[i]} +`)){
                                console.log(json[type][value][a]);
                                console.log(json[type][value][a].search(`${ststes[i]} +`));
                                console.log(json[type][value][a].substring(
                                    json[type][value][a].search(`${ststes[i]} +`),json[type][value][a].search(`${ststes[i]} +`)+7));

                            }
                            
                        }
                    }
                }
            }
        }
    }
};

// 엘릭서 테스트
function test3(ch){
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if(json[type].type == "IndentStringGroup"){
            for (const value in json[type]) {
                if(value == 'value'){
                    for(const a in json[type][value]){
                        if(json[type][value][a].topStr.includes('엘릭서 효과')){
                            for(const p in json[type][value][a]){
                                if(p == 'contentStr'){
                                    for(const lv in json[type][value][a][p]){
                                        if(p == 'contentStr'){
                                            console.log(json[type][value][a][p][lv].contentStr.substring(
                                                json[type][value][a][p][lv].contentStr.indexOf(']')+8,
                                                json[type][value][a][p][lv].contentStr.indexOf('</FONT><br>')
                                            ).replace('<FONT color=\'#FFD200\'>',' '));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

btn.addEventListener('click', ()=>{

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener ('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            console.log(xmlHttpRequest.responseText);
            const chInfo = JSON.parse(xmlHttpRequest.responseText);
            console.dir(JSON.parse(chInfo.ArmoryEquipment[1].Tooltip));
            // for(let i=0; i<chInfo.ArmoryEquipment.length ; i++){
                //     console.log(searchFunction(chInfo.ArmoryEquipment[i], setValue));
                // }
                
                // console.log(test2(chInfo.ArmoryEquipment[12]));
                // test(chInfo.ArmoryEquipment[11]);
                // test3(chInfo.ArmoryEquipment[4]);
                console.log(searchTotailTranscendence(chInfo.ArmoryEquipment[4]));
                // for (const type in chEq_h) {
                    
                    //     if(chEq_h[type].type =="IndentStringGroup"){
                        
                        //         for (const value in chEq_h[type]) {
                            
                            //             console.log(chEq_h[type][value]); 
                            
                            //         }
                            //     }
                            // }
                            
                            
                        }
                        
                    });
                    
                    xmlHttpRequest.open("GET", 'https://developer-lostark.game.onstove.com/armories/characters/' + getName, true);
                    xmlHttpRequest.setRequestHeader('accept', 'application/json');
                    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
                    xmlHttpRequest.onreadystatechange = () => { };
                    xmlHttpRequest.send();
                })
                    