// const sheetId = '1qBYgzQkoF5q0BWKOXq0X8DJC8cohiQPsNWkF_2THWos';
// const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
// const sheetName = 'profile';
let startRow = 0; // 시작 행
let rowCount = 10; // 한 번에 로드할 행 수

const characterList = document.querySelector('.rank-board');
const loadMoreButton = document.getElementById('load-more');

// document.addEventListener('DOMContentLoaded', init);
// const select = document.querySelectorAll('#selectedClass');



// document.getElementById('serverSelect').addEventListener('change', function() {
//     const selectedServer = this.value; // 선택된 서버

//     // 모든 캐릭터 항목을 숨김
//     const characterItems = document.querySelectorAll('.list-item');
//     characterItems.forEach(function(item) {
//         item.style.display = 'none';
//     });

//     if (selectedServer === "전서버") {
//         // 전서버를 선택했을 때 모든 캐릭터를 보여줌
//         characterItems.forEach(function(item) {
//             item.style.display = 'block';
//         });
//     } else {
//         // 선택된 서버에 해당하는 캐릭터만 표시하고 순위를 다시 계산
//         let rank = 0;
//         const charactersToShow = document.querySelectorAll('.list-item[data-server="' + selectedServer + '"]');
//         charactersToShow.forEach(function(item) {
//             item.style.display = 'block';
//             item.querySelector('.rank').textContent = ++rank; // 순위를 증가하면서 갱신
//         });
//     }
// });

// let characters = []; // 캐릭터 데이터를 저장할 배열을 정의합니다.


// // 이미지 URL을 가져와서 각 순위에 맞게 설정
// const top1Image = document.getElementById('top1');
// const top2Image = document.getElementById('top2');
// const top3Image = document.getElementById('top3');

// // 각 순위에 맞게 이미지를 설정하는 함수
// function setTopImage(imageElement, characterData) {
//     imageElement.src = characterData['char-img'];
// }

// // 각 순위에 맞게 이미지 설정
// function setTopImages(characters) {
//     for (let i = 0; i < characters.length; i++) {
//         const character = characters[i];
//         const rank = i + 1;
//         if (rank === 1 || rank === 2 || rank === 3) {
//             // 순위가 1, 2, 3일 때만 해당 순위에 맞게 이미지를 설정합니다.
//             if (rank === 1) {
//                 setTopImage(top1Image, character);
//             } else if (rank === 2) {
//                 setTopImage(top2Image, character);
//             } else if (rank === 3) {
//                 setTopImage(top3Image, character);
//             }
//         }
//     }
// }




// document.getElementById('jobClassSelect').addEventListener('change', function() {
//     const selectedJobClass = this.value; // 선택된 직업

//     // 모든 캐릭터 항목을 숨김
//     const characterItems = document.querySelectorAll('.list-item');
//     characterItems.forEach(function(item) {
//         item.style.display = 'none';
//     });

//     // 선택된 직업에 해당하는 캐릭터만 표시
//     let rank = 0;
//     const charactersToShow = document.querySelectorAll('.list-item[data-job="' + selectedJobClass + '"]');
//     charactersToShow.forEach(function(item) {
//         item.style.display = 'block';
//         item.querySelector('.rank').textContent = ++rank; // 순위를 증가하면서 갱신
//     });
// });



// function init() {
//     loadCharacters();
//     loadMoreButton.addEventListener('click', loadMoreCharacters);
// }

// function loadCharacters() {
//     const query = encodeURIComponent(`Select * limit ${rowCount} offset ${startRow}`);
//     const url = `${base}&sheet=${sheetName}&tq=${query}`;
// `?char_server=${char_server}&char_class=${char_class}&levelBar=${levelBar}`
//     fetch(url)
//         .then(res => res.text())
//         .then(rep => {
//             //Remove additional text and extract only JSON:
//             const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
//             const colz = [];
//             //Extract column labels
//             jsonData.table.cols.forEach((heading) => {
//                 if (heading.label) {
//                     colz.push(heading.label);
//                 }
//             });
//             //Extract row data
//             for (let i = 0; i < jsonData.table.rows.length; i++) {
//                 const rowData = jsonData.table.rows[i];
//                 const character = {};
//                 colz.forEach((ele, ind) => {
//                     character[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
//                 });
//                 processCharacter(character); // Pass index to represent rank
//             }
//             startRow += jsonData.table.rows.length;
//             if (jsonData.table.rows.length < rowCount) {
//                 loadMoreButton.style.display = 'none'; // 더 이상 로드할 데이터가 없으면 버튼 숨기기
//             }
//         });
// }



// function loadMoreCharacters() {
//     loadCharacters();
// }

// function processCharacter(charAll) {
//     const listItem = document.createElement('li');



//     listItem.classList.add('list-item');
//     // listItem.setAttribute('data-server', character['server-name']); // 서버 정보 추가
//     // listItem.setAttribute('data-job', character['job-name']); // 직업 정보 추가

//     listItem.innerHTML = `
//         <div>${charAll.levelrank}</div>
//         <div id="level-value">${charAll.char_level}</div>
//         <a href="/character/detail?search=${charAll.char_name}"
//             class="display-contents">${charAll.char_name}</a>
//         <div>${charAll.char_class}</div>
//         <div>${charAll.char_server}</div>
//         <div>${charAll.char_guild}</div>
//         <div>${charAll.char_equipSet}</div>
//         <div>${charAll.char_classEng}</div>
//     `;
// }
//     if (character['weapon-grade'] === '에스더') {
//         listItem.querySelector('#ether').innerHTML = `${character['weapon-name'].substring(0, 2)} + ${character['weapon-grade']}`;
//     }

//     characterList.appendChild(listItem);

//     // 캐릭터를 배열에 추가합니다.
//     characters.push(character);

//     // 이미지 설정 함수를 호출합니다.
//     setTopImages(characters);


// let levelParam = new URLSearchParams(window.location.search)
//let levelValue = levelParam.get('levelBar');



var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
var rankListCut = document.getElementById('rankListCut');
var level_value = document.getElementById('level-value');

console.dir(rankListCut);

if (levelValue == null) {
    levelValue = 1675
}
for (let i = 1; i < rankListCut.children.length; i = i + 2) {
    console.log('널체크 : ' + levelValue + ' : ' + i);

    if (rankListCut.children[i].children[1].innerText > levelValue) {
        rankListCut.children[i].classList.add('hide');
        i--;
    }
}


if (levelValue == null || levelValue == '') {
    output.innerHTML = 1675;
} else {
    output.innerHTML = levelValue;
}

slider.oninput = function () {
    output.innerHTML = slider.value;
}
console.dir(slider);

$("#slecteForm").on("change", function () {
    $("#slecteForm").submit();
});
const chrList = document.querySelectorAll('#level-cut');

console.dir(chrList);

for(let i=0 ; i < 20 ; i++){
    console.log('클릭');
    chrList[i].classList.remove("disply-none");
}

const btn = document.getElementById('load-more');

let count = 20;
loadMoreButton.addEventListener('click', (e) =>  {
    if(chrList != undefined){
        if(chrList.length <= count+20){
            count = chrList.length;
            for(let i=0 ; i < chrList.length ; i++){
                chrList[i].classList.remove("disply-none");
                loadMoreButton.classList.add("disply-none");
            }
            
        } else{
            for(let i=count ; i < count + 20 ; i++){
                chrList[i].classList.remove("disply-none");
            }
            count = count + 20;
        }

    } else{
        chrList[i].classList.remove("disply-none");
    }
   
    console.log(count);
});

// function moreList() {
//     $.ajax({
//         url: "add",
//         type: "POST",
//         cache: false,
//         dataType: 'json',
//         contentType: "application/json; charset=UTF-8",
//         data: charAll = {'char_name' : char_name , 'char_level' : char_level , 'char_class' : char_class , 'char_guild' : char_guild, 
//             'char_equipSet' : char_equipSet , 'char_classEng' : char_classEng } ,
//         success: function (data) {
//             console.log(data);
        

//             var content = "";
//             for (var i = 0; i < 20 ; i++) {
//                 content +=
//                     `<div id="level-cut"
// 					class="mainRankList nanum-gothic-bold rank-board">
// 					<div>${charAll.levelrank}</div>
// 					<div id="level-value">${charAll.char_level}</div>
// 					<a href="/character/detail?search=${charAll.char_name}"
// 						class="display-contents">${charAll.char_name}</a>
// 					<div>${charAll.char_class}</div>
// 					<div>${charAll.char_server}</div>
// 					<div>${charAll.char_guild}</div>
// 					<div>${charAll.char_equipSet}</div>
// 					<div>${charAll.char_classEng}</div>
// 				</div>`
//             }
//             content += "<button id=\"load-more\"></button>";
//             $('#addbtn').remove();//remove btn
//             $(content).appendTo("#rankListCut");
//         }, error: function (request, status, error) {
//             alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
//         }
//     });
// };

// function moreList(data) {    
//     const charAll = JSON.parse(data.value);
//     console.dir(charAll);
//     for (var i = 0; i < 20 ; i++) {
//         const temp = document.createElement("div");
// 	        temp.id = "level-cut";
// 	        temp.classList.add('mainRankList');
// 	        temp.classList.add('nanum-gothic-bold');
// 	        temp.classList.add('rank-board');
// 	        temp.innerHTML = 
// 	        	 "<div id=\"level-cut\"" +
// 					"class=\"mainRankList nanum-gothic-bold rank-board\">" +
// 		            "<div>"+ charAll[i].levelrank+ "</div>" +
// 		            "<div id=\"level-value\">" + charAll[i].char_level + "</div>" + 
// 		            "<a href=\"/character/detail?search="+ charAll[i].char_name  +
// 		                "class=\"display-contents\">"+ charAll[i].char_name + "</a>" +
// 		            "<div>" + charAll[i].char_class + "</div>" +
// 		            "<div>" + charAll[i].char_server+ "</div>" +
// 		            "<div>" + charAll[i].char_guild+ "</div>" +
// 		            "<div>" + charAll[i].char_equipSet+ "</div>" +
// 		            "<div>" + charAll[i].char_classEng+ "</div>" +
// 				"</div>" ;
	       
// 	        $('#rankListCut').append(temp);
//     }
// };