// const sheetId = '1qBYgzQkoF5q0BWKOXq0X8DJC8cohiQPsNWkF_2THWos';
// const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
// const sheetName = 'profile';
// let startRow = 0; // 시작 행
// let rowCount = 10; // 한 번에 로드할 행 수

// const characterList = document.getElementById('characterList');
// const loadMoreButton = document.getElementById('load-more');

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
//     // loadCharacters();
//     loadMoreButton.addEventListener('click', loadMoreCharacters);
// }

// function loadCharacters() {
//     const query = encodeURIComponent(`Select * limit ${rowCount} offset ${startRow}`);
//     const url = `${base}&sheet=${sheetName}&tq=${query}`;

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
//                 processCharacter(character, startRow + i); // Pass index to represent rank
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

// function processCharacter(character, rank) {
//     const listItem = document.createElement('li');



//     listItem.classList.add('list-item');
//     listItem.setAttribute('data-server', character['server-name']); // 서버 정보 추가
//     listItem.setAttribute('data-job', character['job-name']); // 직업 정보 추가

//     listItem.innerHTML = `
//         <div class="characterListContainer">
//             <p class="rank">${rank + 1}</p>
//             <a href="${character['char-img']}">${character['char-name']}</a>
//             <p class="item-level">${character['item-level']}</p>
//             <p class="class-name">${character['job-name']}</p>
//             <p class="server-name">${character['server-name']}</p>
//             <p class="guild-name">${character['guild-name']}</p>
//             <div>
//                <p id="ether"></p>
//                <p id="equip"></p>
//             </div>
//             <p class="engrave">${character['engravings']}</p>
//         </div>
//     `;

//     if (character['weapon-grade'] === '에스더') {
//         listItem.querySelector('#ether').innerHTML = `${character['weapon-name'].substring(0, 2)} + ${character['weapon-grade']}`;
//     }

//     characterList.appendChild(listItem);

//     // 캐릭터를 배열에 추가합니다.
//     characters.push(character);

//     // 이미지 설정 함수를 호출합니다.
//     setTopImages(characters);




var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

$("#slecteForm").on("change", function () {
    $("#slecteForm").submit();
});