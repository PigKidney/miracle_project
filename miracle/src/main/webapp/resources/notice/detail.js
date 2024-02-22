const arrowu = document.getElementById('arrowu');
const arrowd = document.getElementById('arrowd');
const goodBtn = document.getElementById('goodBtn');
const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');


goodBtn.addEventListener('click', () => {
    loginCheck === '0' || loginCheck === '1' ? location.href = '/notice/good?board_id=' + board_id : alert('로그인하세요!');
 
});

modifyBtn.addEventListener('click', () => {
	// console.log("수정버튼");
     location.href = '/notice/modify?board_id=' + board_id;
   
});

deleteBtn.addEventListener('click', () => {
  location.href = '/notice/delete?board_id=' + board_id;
});




if (loginCheck === '1') {
  var shouldShowButtons = true;
} else {
  var shouldShowButtons = false;
}

function toggleButtonsVisibility() {
  if (shouldShowButtons) {
      modifyBtn.style.display = 'inline-block';
      deleteBtn.style.display = 'inline-block';
  } else {
      modifyBtn.style.display = 'none';
      deleteBtn.style.display = 'none';
  }
}
toggleButtonsVisibility();