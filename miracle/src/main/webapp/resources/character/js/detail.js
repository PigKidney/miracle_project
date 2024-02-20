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

const collections = document.getElementById('collection_title');

const ststes = ['치명', '특화', '신속', '제압', '인내', '숙련'];
const elixirs = ['강맹', '달인', '선각자', '선봉대', '신념', '진군', '칼날 방패', '행운', '회심'];
const setValue = ['사멸', '갈망', '배신', '지배', "환각", '파괴', '악몽'];

const img_g_uri = 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_card_grade.png?f9e0ffc8a709611354db408dd0e7a7bb';
const collections_img = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/sprite/sprite_profile.png?84b2cecac8652fc498fbe05c5df2d4f3";

const etc = document.getElementById('etc');
const etcBtnList = document.getElementById('etc_btns');
const cardEffectsDiv = document.getElementById('card-effect-div');

const collectionPoints = document.getElementById('collectionPoints');
const collectionPopup = document.getElementById('collectionPopup');

const collectionBar = document.getElementById('collectionBar');
const equiDiv = document.getElementById('equi');
const gemDiv = document.getElementById('gem');
const propertyDiv = document.getElementById('property');
const collectionList = document.getElementById('collectionList');

// 수집완료 미완료 색상
const CompleteColor = '#72f400';
const unCompleteColor = '#2626267f';

// 수집완료 아이콘
const complitIcon = "<span class=\"material-symbols-rounded\">new_releases</span>";

var isClick = false;
var collectIsClick = false;

const skillPopup = document.getElementById('skillPopup');
const avatarPopup = document.getElementById('avatarPopup');
const ownedCharactersPopup = document.getElementById('ownedCharactersPopup');
const guildPopup = document.getElementById('guildPopup');
const pvpRankPopup = document.getElementById('pvpRankPopup');

const avatarBar = document.getElementById('avatarPopupBar');
const skillBar = document.getElementById('skillPopupBar');
const ownedCharactersBar = document.getElementById('ownedCharactersPopupBar');


let popupBar = [skillPopup, avatarPopup, ownedCharactersPopup, guildPopup, pvpRankPopup];

let classeng = ['분노의 망치', '중력 수련', '고독한 기사', '전투 태세' , '광기', '광전사의 비기', '축복의 오라', '심판자', '처단자' , '포식자', 
            '오의난무', '일격필살', '권왕파천무', '수라의 길' , '오의 강화', '초심','극의:체술','충격 단련','세맥타통','역천지체','절정','절제',
            '강화무기','핸드거너','포격 강화','화력 강화','두 번째 동료','죽음의 습격','아르데타인의 기술','진화의 유산','사냥의 시간','피스메이커',
            '절실한 구원', '진실된 용맹','넘치는 교감','상급 소환사','황제의 칙령','황후의 은총', '점화','환류',
            '버스트','잔재된 기운','멈출 수 없는 충동','완벽한 억제','갈증','달의 소리','만월의 집행자','그믐의 경계',
            '만개','회귀','이슬비','질풍노도'];

document.addEventListener('DOMContentLoaded', (e) => {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            const chInfo = JSON.parse(xmlHttpRequest.responseText);



            console.dir(chInfo);
            // lv 클래스 이름 서버이름
            const h5 = document.createElement('h4');
            h5.classList.add('white_text');
            h5.innerText = 'LV. ' + chInfo.ArmoryProfile.CharacterLevel + ' ' + chInfo.ArmoryProfile.CharacterClassName + ' @' + chInfo.ArmoryProfile.ServerName;
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
            exDiv.appendChild(addSpanWhite(' ' + chInfo.ArmoryProfile.ExpeditionLevel));

            // 칭호
            const titleDiv = document.createElement('div');
            chImage.appendChild(titleDiv);
            titleDiv.appendChild(addSpan(' 칭호 '));
            if (chInfo.ArmoryProfile.Title == null) {
                titleDiv.appendChild(addSpanWhite(' 미장착'));
            } else {
                titleDiv.appendChild(addSpanWhite(' ' + chInfo.ArmoryProfile.Title));
            }


            // pvp
            const pvpDiv = document.createElement('div');
            chImage.appendChild(pvpDiv);
            pvpDiv.appendChild(addSpan(' PVP '));
            pvpDiv.appendChild(addSpanWhite(' ' + chInfo.ArmoryProfile.PvpGradeName));


            // 영지
            const townDiv = document.createElement('div');
            chImage.appendChild(townDiv);
            townDiv.appendChild(addSpan(' 영지 '));
            townDiv.appendChild(addSpanWhite(' ' + 'Lv.' + chInfo.ArmoryProfile.TownLevel + ' ' + chInfo.ArmoryProfile.TownName));

            // 장비 정보
            if (chInfo.ArmoryEquipment != null) {
                var earring = false;
                var ring = false;
                for (let i = 0; i < chInfo.ArmoryEquipment.length; i++) {
                    let type = chInfo.ArmoryEquipment[i].Type;
                    if (type == '무기') {
                        addEqui(chInfo, i, l6Image, l6ImageP, l6Tooltip);
                    } else if (type == '투구') {
                        addEqui(chInfo, i, l1Image, l1ImageP, l1Tooltip);
                        // 초월 총 합산
                        if (searchTotailTranscendence(chInfo.ArmoryEquipment[i]) != undefined) {
                            const eq_img = document.createElement('img');
                            eq_img.classList.add('w-h20');
                            eq_img.classList.add('trans-img-pos');
                            eq_img.src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
                            l6Tooltip.appendChild(eq_img);
                            const eq_lv = document.createElement('span');
                            eq_lv.classList.add('eqi-EngravePoint');
                            eq_lv.classList.add('magin-r10');
                            eq_lv.innerText = searchTotailTranscendence(chInfo.ArmoryEquipment[i]);
                            l6Tooltip.appendChild(eq_lv);
                        }
                        // 엘릭서 활성 단계
                        if (searchElixirTotailPoint(chInfo.ArmoryEquipment[i]) != undefined) {
                            const eq_lv = document.createElement('span');
                            eq_lv.classList.add('eqi-EngravePoint');
                            eq_lv.classList.add('magin-r10');
                            eq_lv.innerText = searchElixirTotailPoint(chInfo.ArmoryEquipment[i]);
                            l6Tooltip.appendChild(eq_lv);
                        }
                    } else if (type == '상의') {
                        addEqui(chInfo, i, l3Image, l3ImageP, l3Tooltip);
                    } else if (type == '하의') {
                        addEqui(chInfo, i, l4Image, l4ImageP, l4Tooltip);
                    } else if (type == '장갑') {
                        addEqui(chInfo, i, l5Image, l5ImageP, l5Tooltip);
                    } else if (type == '어깨') {
                        addEqui(chInfo, i, l2Image, l2ImageP, l2Tooltip);
                    } else if (type == '목걸이') {
                        addEqui(chInfo, i, r1Image, r1ImageP, r1Tooltip);
                    } else if (type == '귀걸이' && !earring) {
                        earring = true;
                        addEqui(chInfo, i, r2Image, r2ImageP, r2Tooltip);
                    } else if (type == '귀걸이' && earring) {
                        addEqui(chInfo, i, r3Image, r3ImageP, r3Tooltip);
                    } else if (type == '반지' && !ring) {
                        ring = true;
                        addEqui(chInfo, i, r4Image, r4ImageP, r4Tooltip);
                    } else if (type == '반지' && ring) {
                        addEqui(chInfo, i, r5Image, r5ImageP, r5Tooltip);
                    } else if (type == '팔찌') {
                        addEqui(chInfo, i, r6Image, r6ImageP, r6Tooltip);
                    } else if (type == '어빌리티 스톤') {
                        addEqui(chInfo, i, r7Image, r7ImageP, r7Tooltip);
                    }
                }

                // 장착 각인
                if (chInfo.ArmoryEngraving != null) {
                    var used = false;
                    if (chInfo.ArmoryEngraving.Engravings != null) {
                        for (let i = 0; i < chInfo.ArmoryEngraving.Engravings.length; i++) {
                            if (!used) {
                                addEquiEngrave(chInfo.ArmoryEngraving.Engravings[i], l7_1, l7_1Tooltip);
                                used = true;
                            } else {
                                addEquiEngrave(chInfo.ArmoryEngraving.Engravings[i], l7_2, l7_2Tooltip);
                            }
                        }
                    }

                    // 활성 각인
                    for (let i = 0; i < chInfo.ArmoryEngraving.Effects.length; i++) {
                        const div = document.createElement('div');
                        div.classList.add('flex-dir-r');
                        div.classList.add('magin-l15');
                        if (i != chInfo.ArmoryEngraving.Effects.length - 1) {
                            div.classList.add('pd-b-10');
                        }
                        engrave.appendChild(div);
                        addEngrave(chInfo, div, i);
                    }
                }

                // 보석
                if (chInfo.ArmoryGem != null) {
                    addGem(chInfo, 0, g1, g1Image);
                    addGem(chInfo, 1, g2, g2Image);
                    addGem(chInfo, 2, g3, g3Image);
                    addGem(chInfo, 3, g4, g4Image);
                    addGem(chInfo, 4, g5, g5Image);
                    addGem(chInfo, 5, g6, g6Image);
                    addGem(chInfo, 6, g7, g7Image);
                    addGem(chInfo, 7, g8, g8Image);
                    addGem(chInfo, 8, g9, g9Image);
                    addGem(chInfo, 9, g10, g10Image);
                    addGem(chInfo, 10, g11, g11Image);


                    // 보석 마우스 이벤트 등록
                    const gems = document.querySelectorAll('#gem-over');
                    let gemList = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11];
                    let gemImageList = [g1Image, g2Image, g3Image, g4Image, g5Image, g6Image, g7Image, g8Image, g9Image, g10Image, g11Image];

                    for (let i = 0; i < gems.length; i++) {
                        gemList[i].addEventListener('mouseover', (e) => {
                            gems[i].classList.remove("hidden");
                            gemImageList[i].classList.add('gem-select');
                        });
                        gemList[i].addEventListener('mouseout', (e) => {
                            gems[i].classList.add("hidden");
                            gemImageList[i].classList.remove('gem-select');
                        });
                    }
                }




                // 특성값
                for (let i = 0; i < ststes.length; i++) {
                    addState(chInfo, states, ststes[i]);
                }

                let etc = ['공격력', '최대 생명력'];
                for (let i = 0; i < etc.length; i++) {
                    addState(chInfo, states_etc, etc[i]);
                }

                let tendent = ['지성', '담력', '매력', '친절'];
                addTendencies(chInfo, tendencies);


                //카드 
                if (chInfo.ArmoryCard != null) {
                    addCards(chInfo, cards);
                    addCardEffects(chInfo, cardEffectsDiv);
                    cardEffectsDiv.classList.add('hidden');
                }
            }

            searchCollectionPoint(chInfo, collections);

            // 캐릭터 사진 -> 로딩 후 최종적으로 캐릭터 사진 나오면 문제 X
            image.src = chInfo.ArmoryProfile.CharacterImage;
            if (chInfo.ArmoryProfile.CharacterClassName == '기상술사' || chInfo.ArmoryProfile.CharacterClassName == '도화가') {
                image.style.top = '-60px';
            }

            addCollectibles(chInfo, collectionBar, collectionList);

            const collectBars = document.querySelectorAll('#collectBars');
            const collectBoard = document.querySelectorAll('#collectionList > div');
            for (let i = 0; i < collectBars.length; i++) {
                collectBars[i].addEventListener('click', (e) => {
                    for (let i = 0; i < collectBars.length; i++) {
                        collectBoard[i].classList.add("unactive");
                        collectBars[i].classList.remove("collection-select");
                    }
                    if (e.currentTarget == collectBars[i]) {
                        collectBoard[i].classList.remove("unactive");
                        collectBars[i].classList.add("collection-select");
                    }

                });
            }
            collectBoard[0].classList.remove("unactive");
            collectBars[0].classList.add("collection-select");

            const etcBtns = document.querySelectorAll('#etc_btns > h3');
            for (let i = 0; i < etcBtns.length; i++) {
                etcBtns[i].addEventListener('click', (e) => {
                    for (let i = 0; i < etcBtns.length; i++) {
                        popupBar[i].classList.add("hidden");
                        // collectBoard[i].classList.add("unactive");
                        etcBtns[i].classList.remove("collection-select");
                    }
                    // isClick=false;
                    if (e.currentTarget == etcBtns[i]) {
                        isClick = true;
                        popupBar[i].classList.remove("hidden");
                        // collectBoard[i].classList.remove("unactive");
                        etcBtns[i].classList.toggle("collection-select");
                    }
                    if (collectIsClick) {
                        collectionPopup.classList.add("hidden");
                        collectionPoints.classList.remove("gem-select");
                        collectIsClick = false;
                    }

                });
            }

            addAvatar(chInfo, avatarBar);
            addSkill(chInfo, skillBar);
            
            // 랭킹페이지 보여주기위해 db보내줄 dto 입력값들
            var logo_char = new Object();
            logo_char.char_level = parseFloat(chInfo.ArmoryProfile.ItemMaxLevel);
            logo_char.char_name = chInfo.ArmoryProfile.CharacterName;
            logo_char.char_class = chInfo.ArmoryProfile.CharacterClassName;
            logo_char.char_server = chInfo.ArmoryProfile.ServerName;
            logo_char.char_guild = chInfo.ArmoryProfile.GuildName;
            logo_char.char_equipset = '';
            setValue.forEach(set => {
                let count = chInfo.ArmoryEquipment.reduce((cnt, element) => element.Name.includes(set) == true ? cnt + 1 : cnt, 0);
                if(count>0){
                    chInfo.ArmoryEquipment.forEach(equi => {
                        if(equi.Grade.includes('에스더') && count%2 !=0){
                            count++;
                        }
                    });
                    console.log(set + count);
                    logo_char.char_equipset += set + count + ' ';
                }
            });
            logo_char.char_classeng = '';
            chInfo.ArmoryEngraving.Effects.forEach(effect => {
                classeng.forEach(chrClass => {
                    if(effect.Name.includes(chrClass)){

                        logo_char.char_classeng += effect.Name+' ';
                    }
                });
            });

            $.ajax({
                url: "insert",
                type: "POST",
                dataType : "json",
                processData : true,
                contentType : "application/json; charset=UTF-8",
                data: JSON.stringify(logo_char),
                success: function(data) {
                    if (data == 1) {
                        alert("성공");
                    } else {
                        alert("실패");
                    }
                }
            });
            
        }
    });
    
    xmlHttpRequest.open("GET", "https://developer-lostark.game.onstove.com/armories/characters/" + getName, true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
});

const serverName = ['루페온', '실리안', '니나브', '아브렐슈드', '아만', '카마인', '카제로스', '카단'];
document.addEventListener('DOMContentLoaded', (e) => {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.addEventListener('readystatechange', (e) => {
        if (xmlHttpRequest.status == 200 && xmlHttpRequest.readyState == 4) {
            const chList = JSON.parse(xmlHttpRequest.responseText);
            console.dir(chList);
            serverName.forEach(server => {
                let serverDiv = document.createElement('div');
                serverDiv.classList.add('magin-l15');
                serverDiv.classList.add('magin-r10');
                let serverName = document.createElement('h3');
                serverName.classList.add('white_text');
                serverName.innerText = server;
                serverDiv.appendChild(serverName);

                let chListDiv = document.createElement('div');
                chListDiv.classList.add('chList');
                serverDiv.appendChild(chListDiv);


                chList.forEach(Character => {
                    if (Character.ServerName == server) {

                        let chDiv = document.createElement('div');
                        chDiv.classList.add('flex-dir-c');
                        chDiv.classList.add('magin-l15');
                        chDiv.classList.add('b-1p');
                        chDiv.classList.add('radius15');
                        chDiv.classList.add('pd-15');
                        chDiv.classList.add('magin-r10');
                        chDiv.classList.add('color-back');



                        let chInfo = document.createElement('span');
                        chInfo.classList.add('white_text');
                        chInfo.innerText = " Lv." + Character.CharacterLevel + ' ' + Character.CharacterClassName;

                        let chName = document.createElement('span');
                        chName.classList.add('white_text');
                        chName.innerText = Character.ItemMaxLevel + ' ' + Character.CharacterName;

                        // serverDiv.appendChild(serverName);
                        chDiv.appendChild(chInfo);
                        chDiv.appendChild(chName);
                        chListDiv.appendChild(chDiv);
                        chDiv.addEventListener('click', (e) => {
                            window.location.href = URLforParameter.pathname + '?search=' + Character.CharacterName;
                        });
                        ownedCharactersBar.appendChild(serverDiv);
                    } else {
                        // serverDiv.classList.add('hidden');
                    }

                });


            });

        }
    });

    xmlHttpRequest.open("GET", `https://developer-lostark.game.onstove.com/characters/${getName}/siblings`, true);
    xmlHttpRequest.setRequestHeader('accept', 'application/json');
    xmlHttpRequest.setRequestHeader('authorization', 'bearer ' + APIkey);
    xmlHttpRequest.onreadystatechange = () => { };
    xmlHttpRequest.send();
});






window.addEventListener('click', function (e) {
    if (isClick == true) {
        let tgEl = e.target;
        let header = tgEl.parentNode;
        if (header.id != 'etc_btns') {
            // console.log(header.id);
            let etcBtns = document.querySelectorAll('#etc_btns > h3');
            for (let i = 0; i < etcBtns.length; i++) {
                popupBar[i].classList.add("hidden");
                // collectBoard[i].classList.add("unactive");
                etcBtns[i].classList.remove("collection-select");
            }
            etcBtnList.classList.add('hidden');
            return isClick = false;

        }

    }
});
// 기타 버튼
etc.addEventListener('mouseover', (e) => {
    if (!isClick) {
        etcBtnList.classList.remove("hidden");
    }
});

etc.addEventListener('mouseout', (e) => {
    if (!isClick) {
        etcBtnList.classList.add('hidden');
    }
});

// 카드 상세내용
cardsStates.addEventListener('mouseout', (e) => {
    cardEffectsDiv.classList.add('hidden');
});

cardsStates.addEventListener('mouseover', (e) => {
    cardEffectsDiv.classList.remove("hidden");
});

// 수집품 내용
collectionPoints.addEventListener('click', (e) => {
    collectionPopup.classList.toggle("hidden");
    collectionPoints.classList.toggle("gem-select");
    if (collectIsClick) {
        collectIsClick = false;
    } else if (!collectIsClick) {
        collectIsClick = true;
    }
    // collectIsClick = true ? false : true;
    // console.log(collectIsClick);
});




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
// 장비
function addEqui(ch, num, image, imageP, tooltip) {
    if (ch.ArmoryEquipment[num] != undefined) {
        coloerFilter(ch.ArmoryEquipment[num], image)
    }
    image.src = ch.ArmoryEquipment[num].Icon;
    image.alt = ch.ArmoryEquipment[num].Name;
    image.title = ch.ArmoryEquipment[num].Type;
    image.classList.add('w-h50');
    const chEq_a = JSON.parse(ch.ArmoryEquipment[num].Tooltip);

    if (num != 11 && num != 12) {
        const imageDiv = document.createElement('div');
        imageDiv.innerText = chEq_a.Element_001.value.qualityValue;
        coloerFilterP(chEq_a.Element_001.value.qualityValue, imageP);
        imageDiv.classList.add('eimg-div');
        imageP.appendChild(imageDiv);
    }

    if (searchTranscendence(ch.ArmoryEquipment[num]) != undefined) {
        const eq_img = document.createElement('img');
        eq_img.classList.add('w-h20');
        eq_img.classList.add('trans-img-pos');
        eq_img.src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
        tooltip.appendChild(eq_img);
        const eq_lv = document.createElement('span');
        eq_lv.classList.add('eqi-EngravePoint');
        eq_lv.innerText = searchTranscendence(ch.ArmoryEquipment[num]);
        tooltip.appendChild(eq_lv);
    } else if (num > 0 && num < 6 && searchTranscendence(ch.ArmoryEquipment[num]) == undefined) {
        const eq_img = document.createElement('img');
        eq_img.classList.add('w-h20');
        eq_img.classList.add('trans-img-pos');
        eq_img.src = "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png";
        tooltip.appendChild(eq_img);
        const eq_lv = document.createElement('span');
        eq_lv.classList.add('eqi-EngravePoint');
        eq_lv.innerText = '미개방';
        tooltip.appendChild(eq_lv);
    }

    const tooltipName = document.createElement('h4');
    tooltipName.classList.add('p-m0');
    tooltipName.classList.add('white_text');
    if (num <= 12 && num >= 6 || num == 0) {
        tooltipName.classList.add('magin-t6');
    }
    tooltipName.innerText = ch.ArmoryEquipment[num].Name;
    tooltip.appendChild(tooltipName);

    if (searchEqiStatePoint(ch.ArmoryEquipment[num]) != undefined && num != 12 || num == 11) {
        if (num != 11) {
            const eq_lv = document.createElement('div');
            // eq_lv.classList.add('white_text');
            eq_lv.classList.add('eqi-StatePoint');
            eq_lv.innerText = searchEqiStatePoint(ch.ArmoryEquipment[num]);
            tooltip.appendChild(eq_lv);
        }


        searchEqiEngravePoint(ch.ArmoryEquipment[num], tooltip);

    }

    if (searchFunction(ch.ArmoryEquipment[num], setValue) != undefined) {
        const eq_lv = document.createElement('span');
        eq_lv.classList.add('eqi-EngravePoint');
        eq_lv.id = 'char_equipset';
        eq_lv.classList.add('magin-r10');
        eq_lv.innerHTML = searchFunction(ch.ArmoryEquipment[num], setValue);
        tooltip.appendChild(eq_lv);

        searchTranscendence(ch.ArmoryEquipment[num])
    }
    if (num < 6) {
        searchElixirPoint(ch.ArmoryEquipment[num], tooltip);
    }
    if (num == 12) {
        searchBraceletEP(ch.ArmoryEquipment[num], tooltip);
    }

}

// 장착 각인
function addEquiEngrave(ch, img, div) {
    img.src = ch.Icon;
    img.classList.add('w-h44');

    const h4 = document.createElement('h4');
    h4.classList.add('eqi-EngraveName');
    h4.innerText = ch.Name;
    div.appendChild(h4);

    const span = document.createElement('span');
    span.classList.add('eqi-EngravePoint');
    span.innerText = searchEngravePoint(ch);
    div.appendChild(span);
}

// 장비등급
function coloerFilter(ch, image) {
    if (ch.Grade == '유물') {
        image.classList.add('item-coloer-1');
    } else if (ch.Grade == '전설') {
        image.classList.add('item-coloer-2');
    } else if (ch.Grade == '영웅') {
        image.classList.add('item-coloer-3');
    } else if (ch.Grade == '희귀') {
        image.classList.add('item-coloer-4');
    } else if (ch.Grade == '고급') {
        image.classList.add('item-coloer-5');
    } else if (ch.Grade == '일반') {
        image.classList.add('item-coloer-6');
    } else if (ch.Grade == '에스더') {
        image.classList.add('item-coloer-7');
    } else if (ch.Grade == '고대') {
        image.classList.add('item-coloer-8');
    }
}

// 품질
function coloerFilterP(percent, image) {
    if (percent == 100) {
        image.classList.add('item-coloer-1-p');
    } else if (percent < 100 && percent >= 90) {
        image.classList.add('item-coloer-2-p');
    } else if (percent < 90 && percent >= 70) {
        image.classList.add('item-coloer-3-p');
    } else if (percent < 70 && percent >= 40) {
        image.classList.add('item-coloer-4-p');
    } else if (percent < 40 && percent >= 10) {
        image.classList.add('item-coloer-5-p');
    } else {
        image.classList.add('item-coloer-6-p');
    }
}

// 카드 테두리
function cardGrade(grade, image) {
    if (grade == '유물') {
        image.classList.add('card-pos-6');
    } else if (grade == '전설') {
        image.classList.add('card-pos-5');
    } else if (grade == '영웅') {
        image.classList.add('card-pos-4');
    } else if (grade == '희귀') {
        image.classList.add('card-pos-3');
    } else if (grade == '고급') {
        image.classList.add('card-pos-2');
    } else if (grade == '일반') {
        image.classList.add('card-pos-1');
    }
}

// 카드 각성단계
function cardAwake(awake, div) {
    if (awake == '5') {
        div.style.width = '100px';
    } else if (awake == 4) {
        div.style.width = '75px';
    } else if (awake == 3) {
        div.style.width = '58px';
    } else if (awake == 2) {
        div.style.width = '40px';
    } else if (awake == 1) {
        div.style.width = '20px';
    } else if (awake == 0) {
        div.style.width = '0px';
    }
}

// 카드 이름 색상
function cardNameColoer(grade, image) {
    if (grade == '유물') {
        image.classList.add('card-name-g-5');
    } else if (grade == '전설') {
        image.classList.add('card-name-g-1');
    } else if (grade == '영웅') {
        image.classList.add('card-name-g-2');
    } else if (grade == '희귀') {
        image.classList.add('card-name-g-3');
    } else if (grade == '고급') {
        image.classList.add('card-name-g-4');
    }
}

// 보석
function addGem(ch, num, imageP, image) {
    if (ch.ArmoryGem.Gems[num] != undefined) {
        coloerFilter(ch.ArmoryGem.Gems[num], image)
        image.src = ch.ArmoryGem.Gems[num].Icon;
        image.alt = ch.ArmoryGem.Gems[num].Name.substring(
            ch.ArmoryGem.Gems[num].Name.search('레벨') - 2, ch.ArmoryGem.Gems[num].Name.length
        ).replace("</FONT></P>", '').replace(">", '');
        image.classList.add('w-h50');
        image.classList.add('radius10');

        const gemEffect = document.createElement('span');
        gemEffect.classList.add('white_text');
        gemEffect.classList.add('font10');

        if (ch.ArmoryGem.Gems[num].Name.includes('홍염')) {
            gemEffect.innerText = 'Lv.' + ch.ArmoryGem.Gems[num].Level + ' 홍염';
        } else if (ch.ArmoryGem.Gems[num].Name.includes('멸화')) {
            gemEffect.innerText = 'Lv.' + ch.ArmoryGem.Gems[num].Level + ' 멸화';
        } else if (ch.ArmoryGem.Gems[num].Name.includes('청명')) {
            gemEffect.innerText = 'Lv.' + ch.ArmoryGem.Gems[num].Level + ' 청명';
        } else if (ch.ArmoryGem.Gems[num].Name.includes('원해')) {
            gemEffect.innerText = 'Lv.' + ch.ArmoryGem.Gems[num].Level + ' 원해';
        }
        imageP.appendChild(gemEffect);


        // 보석 효과
        for (let i = 0; i < ch.ArmoryGem.Effects.length; i++) {
            if (ch.ArmoryGem.Gems[num].Slot == ch.ArmoryGem.Effects[i].GemSlot) {

                const gemEffect = document.createElement('div');
                gemEffect.id = 'gem-over';
                gemEffect.classList.add('white_text');
                gemEffect.classList.add('hidden');
                gemEffect.classList.add('all-center');
                gemEffect.classList.add('radius10');
                gemEffect.classList.add('coloer-select');
                gemEffect.innerText = ch.ArmoryGem.Effects[i].Name + ' - [ ' + ch.ArmoryGem.Effects[i].Description + ' ]';
                gemEffectDiv.appendChild(gemEffect);

                const image = document.createElement('img');
                image.classList.add('radius100');
                image.classList.add('all-center');
                image.classList.add('w-h44');
                image.src = ch.ArmoryGem.Effects[i].Icon;
                gemEffect.appendChild(image);
            }
        }
    }


}

// 각인
function addEngrave(ch, div, num) {
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
function searchEngravePoint(json) {
    var tooltip = JSON.parse(json.Tooltip);
    for (const type in tooltip) {
        if (tooltip[type].type == "EngraveSkillTitle") {
            return tooltip[type].value.leftText.substring(tooltip[type].value.leftText.search('각인 활성 포인트'), tooltip[type].value.leftText.indexOf('</FONT>'));
        }
    }
}

// 특성
function addState(ch, div, name) {
    for (let i = 0; i < ch.ArmoryProfile.Stats.length; i++) {
        if (ch.ArmoryProfile.Stats[i].Type == name) {
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
function addTendencies(ch, div) {
    for (let i = 0; i < ch.ArmoryProfile.Tendencies.length; i++) {
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
        let p = ch.ArmoryProfile.Tendencies[i].Point * (0.1);
        bar_p.style.width = p + '%';
    }
}


// 카드
function addCards(ch, div) {
    for (let i = 0; i < ch.ArmoryCard.Cards.length; i++) {
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
        cardAwake(ch.ArmoryCard.Cards[i].AwakeTotal, awake_b);

        let awake = document.createElement('div');
        awake.classList.add('awake-front');
        column.appendChild(awake);
        cardAwake(ch.ArmoryCard.Cards[i].AwakeCount, awake);
    }
}

// 카드 효과
function addCardEffects(ch, div) {
    const cardEffectsBack = document.createElement('div');
    cardEffectsBack.classList.add('card-states-back');
    // cardEffectsBack.classList.add('hidden');
    div.appendChild(cardEffectsBack);
    cardEffectsBack.style.gridTemplateColumns = `repeat(${ch.ArmoryCard.Effects.length},minmax(0,1fr))`;
    for (let i = 0; i < ch.ArmoryCard.Effects.length; i++) {
        const cardEffects = document.createElement('div');
        cardEffects.classList.add('radius15');
        // cardEffects.classList.add('magin-b10');
        cardEffects.classList.add('card-states');

        cardEffectsBack.appendChild(cardEffects);

        for (let j = 0; j < ch.ArmoryCard.Effects[i].Items.length; j++) {
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

// 세트효과
function searchFunction(json, arr) {
    var tooltip = JSON.parse(json.Tooltip);

    for (const type in tooltip) {
        if (tooltip[type].type == "ItemPartBox") {
            for (const value in tooltip[type]) {
                if (value == 'value') {
                    for (const a in tooltip[type][value]) {
                        for (let i = 0; i < arr.length; i++) {
                            if (tooltip[type][value][a].includes(arr[i])) {
                                let lv = tooltip[type][value][a].substring(tooltip[type][value][a].indexOf('Lv.'), tooltip[type][value][a].indexOf('Lv.') + 4);
                                return arr[i] + ' ' + lv;
                            }
                        }

                    }
                }
            }
        }
    }
}
// 초월
function searchTranscendence(json) {
    var tooltip = JSON.parse(json.Tooltip);
    for (const type in tooltip) {
        if (tooltip[type].type == "IndentStringGroup") {
            for (const value in tooltip[type]) {
                if (value == 'value') {
                    for (const a in tooltip[type][value]) {
                        for (const t in tooltip[type][value][a]) {
                            if (t == 'topStr') {
                                if (tooltip[type][value][a][t].includes('초월')) {
                                    let index = tooltip[type][value][a][t].search('</FONT>단계');
                                    let point = tooltip[type][value][a][t].substring(tooltip[type][value][a][t].length, tooltip[type][value][a][t].length - 2).replace('>', '');;
                                    let step = tooltip[type][value][a][t].substring(index - 1, index) + '단계';
                                    return point + ' ' + step;
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
function searchTotailTranscendence(json) {
    var tooltip = JSON.parse(json.Tooltip);
    for (const type in tooltip) {
        if (tooltip[type].type == "IndentStringGroup") {
            for (const value in tooltip[type]) {
                if (value == 'value') {
                    for (const a in tooltip[type][value]) {
                        for (const t in tooltip[type][value][a]) {
                            for (const total in tooltip[type][value][a][t]) {
                                let str = tooltip[type][value][a][t][total].contentStr;
                                if (str != undefined) {
                                    if (str.includes('모든 방어구에 적용된 총')) {
                                        let start = tooltip[type][value][a][t][total].contentStr.search('</img>') + 6;
                                        let index = tooltip[type][value][a][t][total].contentStr.search('개</FONT>');
                                        let step = '총 ' + tooltip[type][value][a][t][total].contentStr.substring(start, index) + '단계';
                                        return step;
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

// 엘릭서
function searchElixirPoint(ch, div) {
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if (json[type].type == "IndentStringGroup") {
            for (const value in json[type]) {
                if (value == 'value') {
                    for (const a in json[type][value]) {
                        if (json[type][value][a].topStr.includes('엘릭서 효과')) {
                            for (const p in json[type][value][a]) {
                                if (p == 'contentStr') {
                                    for (const lv in json[type][value][a][p]) {
                                        if (p == 'contentStr') {
                                            // console.log(json[type][value][a][p][lv].contentStr.substring(
                                            //     json[type][value][a][p][lv].contentStr.indexOf(']')+8,
                                            //     json[type][value][a][p][lv].contentStr.indexOf('</FONT><br>')
                                            // ).replace('<FONT color=\'#FFD200\'>',' '));
                                            let point = json[type][value][a][p][lv].contentStr.substring(
                                                json[type][value][a][p][lv].contentStr.indexOf(']') + 8,
                                                json[type][value][a][p][lv].contentStr.indexOf('</FONT><br>')
                                            ).replace('<FONT color=\'#FFD200\'>', ' ');
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

// 엘릭서 활성단계
function searchElixirTotailPoint(ch) {
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if (json[type].type == "IndentStringGroup") {
            for (const value in json[type]) {
                if (value == 'value') {
                    for (const a in json[type][value]) {
                        if (json[type][value][a].topStr.includes('연성 추가 효과')) {
                            let str = json[type][value][a].topStr;
                            for (let i = 0; i < elixirs.length; i++) {
                                if (str.includes(elixirs[i])) {
                                    let index = str.indexOf(elixirs[i]);
                                    return str.substring(index, str.length - 7).replace('(', '').replace(')', '');
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
function searchEqiStatePoint(ch) {
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if (json[type].type == "ItemPartBox") {
            for (const value in json[type]) {
                if (value == 'value') {
                    for (const a in json[type][value]) {
                        for (let i = 0; i < ststes.length; i++) {
                            if (json[type][value][a].includes(ststes[i])) {
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
function searchEqiEngravePoint(ch, div) {
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if (json[type].type == "IndentStringGroup") {
            for (const value in json[type]) {
                if (value == 'value') {
                    for (const a in json[type][value]) {
                        for (const t in json[type][value][a]) {
                            if (t == 'contentStr') {
                                for (const p in json[type][value][a][t]) {
                                    const point = json[type][value][a][t][p].contentStr.substring(23,
                                        json[type][value][a][t][p].contentStr.search('</FONT>'))
                                        + ' ' + json[type][value][a][t][p].contentStr.substring(
                                            json[type][value][a][t][p].contentStr.indexOf('+') + 1,
                                            json[type][value][a][t][p].contentStr.search('<BR>'));
                                    const eq_p = document.createElement('span');
                                    eq_p.classList.add('eqi-EngravePoint');
                                    eq_p.classList.add('magin-r10');
                                    if (point.includes('감소')) {
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
function searchBraceletEP(ch, div) {
    const json = JSON.parse(ch.Tooltip);
    for (const type in json) {
        if (json[type].type == "ItemPartBox") {
            for (const value in json[type]) {
                if (value == 'value') {
                    for (const a in json[type][value]) {
                        for (let i = 0; i < ststes.length; i++) {
                            if (json[type][value][a].includes(`${ststes[i]} +`)) {
                                // console.log(json[type][value][a]);
                                // console.log(json[type][value][a].search(`${ststes[i]} +`));
                                // console.log(json[type][value][a].substring(
                                //     json[type][value][a].search(`${ststes[i]} +`),json[type][value][a].search(`${ststes[i]} +`)+7));
                                const point = json[type][value][a].substring(
                                    json[type][value][a].search(`${ststes[i]} +`), json[type][value][a].search(`${ststes[i]} +`) + 7)
                                    .replace('<', '').replace('>', '');

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

// 수집품 사진 위치
function collectFilter(ch, img) {
    if (ch.Type == "거인의 심장") {
        img.classList.add('collection-1');
    } else if (ch.Type == "섬의 마음") {
        img.classList.add('collection-2');
    } else if (ch.Type == "모코코 씨앗") {
        img.classList.add('collection-3');
    } else if (ch.Type == "위대한 미술품") {
        img.classList.add('collection-4');
    } else if (ch.Type == "항해 모험물") {
        img.classList.add('collection-5');
    } else if (ch.Type == "세계수의 잎") {
        img.classList.add('collection-6');
    } else if (ch.Type == "이그네아의 징표") {
        img.classList.add('collection-7');
    } else if (ch.Type == "오르페우스의 별") {
        img.classList.add('collection-8');
    } else if (ch.Type == "기억의 오르골") {
        img.classList.add('collection-9');
    }
}
// 수집품
function searchCollectionPoint(ch, div) {
    const collection = ch.Collectibles
    for (let i = 0; i < collection.length; i++) {
        let collect = document.createElement('div');
        collect.classList.add('collection-div');
        let img = document.createElement('div');
        img.classList.add('collection');
        collectFilter(collection[i], img);
        collect.appendChild(img);

        let point = document.createElement('div');
        point.innerText = collection[i].Point;
        point.classList.add('white_text');
        point.classList.add('magin-t6');
        collect.appendChild(point);
        div.appendChild(collect);

    }

}

// 수집품 상세보기
function addCollectibles(ch, div, table) {
    const collection = ch.Collectibles
    for (let i = 0; i < ch.Collectibles.length; i++) {

        const column = document.createElement('div');
        column.classList.add('dis-flex');
        column.classList.add('jc-sb');
        column.classList.add('magin-b10');
        div.appendChild(column);

        const bar = document.createElement('div');
        bar.classList.add('c-progress-bar');
        bar.id = 'collectBars';
        column.appendChild(bar);

        const bar_p = document.createElement('div');
        bar_p.classList.add('c-progress');
        bar.appendChild(bar_p);
        let p = ((collection[i].Point / collection[i].MaxPoint) * 100).toFixed(2);
        bar_p.style.width = p + '%';

        let collect = document.createElement('div');
        collect.classList.add('collection-pop-div');
        collect.classList.add('jc-sb');

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('collection-pop-div');

        let img = document.createElement('div');
        img.classList.add('collection');
        img.classList.add('collection-pop');
        img.classList.add('margin-l10');
        collectFilter(collection[i], img);
        imgDiv.appendChild(img);

        let name = document.createElement('span');
        name.classList.add('collection-pop');
        name.classList.add('eqi-EngravePoint');
        name.classList.add('margin-l10');
        name.innerText = collection[i].Type;
        imgDiv.appendChild(name);
        collect.appendChild(imgDiv);

        let parsent = document.createElement('div');
        parsent.classList.add('collection-div');
        parsent.classList.add('collection-pop');
        parsent.classList.add('eqi-EngravePoint');
        parsent.classList.add('magin-r10');
        parsent.innerText = p + '%';
        collect.appendChild(parsent);

        let check = document.createElement('span');
        name.classList.add('eqi-EngravePoint');
        check.innerText = collection[i].Point + '/' + collection[i].MaxPoint;
        parsent.appendChild(check);

        bar.appendChild(collect);

        if (collection[i].Type == '모코코 씨앗') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '섬의 마음') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '위대한 미술품') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '거인의 심장') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '이그네아의 징표') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '항해 모험물') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '세계수의 잎') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '오르페우스의 별') {
            addCollectionList(collection[i], bar, table)
        } else if (collection[i].Type == '기억의 오르골') {
            addCollectionList(collection[i], bar, table)
        }
    }
}

function addCollectionList(ch, bar, table) {
    let listDiv = document.createElement('div');
    // listDiv.id = 'colloction-list';
    listDiv.classList.add("collection-grid");

    for (let j = 0; j < ch.CollectiblePoints.length; j++) {
        let list = document.createElement('li');
        list.classList.add('collection-div');
        list.classList.add('stretch');

        let ColletTitle = document.createElement('div');
        ColletTitle.classList.add('collection-flex-center');
        list.appendChild(ColletTitle);

        let ColletNum = document.createElement('div');
        ColletNum.innerText = (j + 1);
        ColletNum.classList.add('ColletNum');
        ColletTitle.appendChild(ColletNum);

        let info = document.createElement('div');
        info.innerText = ch.CollectiblePoints[j].PointName;
        info.classList.add('white_text');
        info.classList.add('all-center');
        ColletTitle.appendChild(info);

        if (ch.Type == '모코코 씨앗') {
            let point = document.createElement('div');
            point.innerText = '[' + ch.CollectiblePoints[j].Point + ' / ' + ch.CollectiblePoints[j].MaxPoint + ']';
            point.classList.add('white_text');
            point.classList.add('magin-l15');
            info.appendChild(point);
        }

        let check = document.createElement('div');
        check.innerHTML = complitIcon;
        check.classList.add('all-center');
        ColletTitle.appendChild(check);
        if (ch.CollectiblePoints[j].Point == ch.CollectiblePoints[j].MaxPoint) {
            check.style.color = CompleteColor;
        } else {
            check.style.color = unCompleteColor;
        }
        listDiv.appendChild(list);
        table.appendChild(listDiv);
    }
    listDiv.classList.add("unactive");

}

// 아바타 UI 
function addAvatar(ch, div) {
    let avatar = ch.ArmoryAvatars;
    let chImage = document.createElement('img');
    chImage.classList.add('avatarImg');
    chImage.src = ch.ArmoryProfile.CharacterImage;
    div.appendChild(chImage);
    let names = [['머리', '전설'], ['머리', '영웅'], ['상의', '전설'], ['상의', '영웅'], ['하의', '전설'], ['하의', '영웅'],
    ['무기', '전설'], ['무기', '영웅'], ['악기', '영웅'], ['얼굴1', '영웅'], ['얼굴2', '영웅'], ['이동', ''], ['변신', '']];
    let avatarBoard = document.createElement('div');
    avatarBoard.classList.add('avatarBoard');
    div.appendChild(avatarBoard);
    for (let i = 0; i < names.length; i++) {
        let avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avtarDiv');
        avatarDiv.classList.add(`avatar-${i + 1}`);
        avatarBoard.appendChild(avatarDiv);

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('w-h50');
        imgDiv.classList.add('radius10');
        imgDiv.classList.add('overflow-h');

        let img = document.createElement('img');

        let nameDiv = document.createElement('Div');
        let name = document.createElement('span');

        let type = document.createElement('span');

        var find = false;
        for (let j = 0; j < avatar.length; j++) {
            if (avatar[j].Type.includes(names[i][0]) && names[i][1] == avatar[j].Grade) {
                coloerFilter(avatar[j], imgDiv);
                img.src = avatar[j].Icon;
                name.innerText = avatar[j].Name;
                cardNameColoer(avatar[j].Grade, name);
                type.innerText = avatar[j].Type;

                find = true;
            } else if (avatar[j].Type.includes(names[i][0]) && i > 10) {
                coloerFilter(avatar[j], imgDiv);
                img.src = avatar[j].Icon;
                name.innerText = avatar[j].Name;
                cardNameColoer(avatar[j].Grade, name);
                type.innerText = avatar[j].Type;

                find = true;
            }

        }
        if (!find) {
            imgDiv.classList.add('item-coloer-6');
            img.classList.add('hidden');
            name.innerText = '미장착';
            name.classList.add('white_text');
            type.innerText = names[i][0] + '아바타';
        }

        img.classList.add('w-h50');
        nameDiv.classList.add('flex-dir-c');
        type.classList.add('white_text');
        type.classList.add('font10');

        if (i < 6) {
            nameDiv.appendChild(name);
            nameDiv.appendChild(type);
            imgDiv.appendChild(img);
            avatarDiv.appendChild(imgDiv);
            avatarDiv.appendChild(nameDiv);
        } else {
            imgDiv.appendChild(img);
            avatarDiv.appendChild(nameDiv);
            avatarDiv.appendChild(imgDiv);
            nameDiv.appendChild(name);
            nameDiv.appendChild(type);
        }
    }
}


// 스킬 UI 
function addSkill(ch, div) {
    let skills = ch.ArmorySkills;
    let gems = ch.ArmoryGem;
    let skillBoard = document.createElement('div');
    skillBoard.classList.add('skillBoard');
    skillBoard.classList.add('magin-20');
    div.appendChild(skillBoard);
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].Level >= 4) {
            let skillDiv = document.createElement('div');
            skillDiv.classList.add('skillDiv');
            skillDiv.classList.add('skillLine');
            skillBoard.appendChild(skillDiv);

            let imgDiv = document.createElement('div');
            imgDiv.classList.add('w-h50');
            imgDiv.classList.add('radius10');
            imgDiv.classList.add('overflow-h');

            let img = document.createElement('img');
            img.src = skills[i].Icon;

            let nameDiv = document.createElement('Div');
            let name = document.createElement('span');
            name.classList.add('bold700');
            name.classList.add('white_text');
            name.innerText = skills[i].Name;

            let level = document.createElement('span');
            level.innerText = skills[i].Level + '레벨';

            img.classList.add('w-h50');
            nameDiv.classList.add('flex-dir-c');
            level.classList.add('white_text');
            level.classList.add('font13');

            imgDiv.appendChild(img);
            skillDiv.appendChild(imgDiv);
            skillDiv.appendChild(nameDiv);
            nameDiv.appendChild(level);
            nameDiv.appendChild(name);

            addTripods(skills[i], skillDiv, gems);
        }
    }
}

function addTripods(ch, div, gems) {
    let tripods = ch.Tripods;
    let Runes = ch.Rune;
    let push = 0;

    for (let i = 0; i < tripods.length; i++) {
        if (tripods[i].IsSelected == true) {
            let tripodsDiv = document.createElement('div');
            tripodsDiv.classList.add('flex-dir-r');
            tripodsDiv.classList.add('chid-al-center');
            div.appendChild(tripodsDiv);

            let imgDiv = document.createElement('div');
            imgDiv.classList.add('w-h44');
            imgDiv.classList.add('radius10');
            imgDiv.classList.add('overflow-h');

            let img = document.createElement('img');
            img.src = tripods[i].Icon;

            let nameDiv = document.createElement('Div');
            let name = document.createElement('span');
            nameDiv.classList.add('margin-l10');

            name.classList.add('bold700');
            name.classList.add('white_text');
            name.classList.add('font13');
            name.innerText = tripods[i].Name;

            let tripodNum = document.createElement('span');
            tripodNum.innerText = tripods[i].Slot;
            tripodNum.classList.add('tripodNum');
            if (tripods[i].Tier == 0) {
                tripodNum.classList.add('tripodColor-1');
            } else if (tripods[i].Tier == 1) {
                tripodNum.classList.add('tripodColor-2');
            } else if (tripods[i].Tier == 2) {
                tripodNum.classList.add('tripodColor-3');
            }

            let level = document.createElement('span');
            level.innerText = 'Lv. ' + tripods[i].Level;

            img.classList.add('w-h44');
            nameDiv.classList.add('flex-dir-c');
            level.classList.add('white_text');
            level.classList.add('font13');


            imgDiv.appendChild(img);
            nameDiv.appendChild(level);
            nameDiv.appendChild(tripodNum);
            nameDiv.appendChild(name);
            tripodsDiv.appendChild(imgDiv);
            tripodsDiv.appendChild(nameDiv);
            push++;
        }
    }
    if (ch.Level < 7) {
        fackdiv(div)
        fackdiv(div)
    } else if (ch.Level < 10) {
        fackdiv(div)
    }

    let etc = document.createElement('div');
    etc.classList.add('white_text');
    etc.classList.add('flex-dir-r');
    let rune = document.createElement('div');

    let runeImg = document.createElement('img');
    let runeName = document.createElement('span');

    runeImg.classList.add('w-h20');
    runeImg.classList.add('radius100');
    if (Runes != null) {
        coloerFilter(Runes, runeImg);
        runeImg.src = Runes.Icon;
        runeName.innerText = Runes.Name;

    } else {
        runeImg.classList.add('item-coloer-6');
        runeImg.classList.add('hidden');
    }
    // addSkillEtc(div , item , icon , gems);
    rune.appendChild(runeImg);
    rune.appendChild(runeName);
    etc.appendChild(rune);
    div.appendChild(etc);
}

// 트라이포드 3단계까지 안될때 빈공간 채우기용
function fackdiv(div) {
    let tripodsDiv = document.createElement('div');
    tripodsDiv.classList.add('flex-dir-r');
    tripodsDiv.classList.add('chid-al-center');
    div.appendChild(tripodsDiv);
}
$.ajax({
    url: URLforParameter.pathname,
    method: 'post',
    dataType: 'text',

    success: function (data) {
        console.log(data);
    }
});
