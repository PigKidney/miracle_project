const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');
const modifyForm = document.getElementById('modifyForm');
const addReplyBtn = document.getElementById('addReplyBtn');

modifyBtn.addEventListener('click', () => {
    location.href = '/board/modify?board_id=' + board_id;
});

deleteBtn.addEventListener('click', () => {
    location.href = '/board/delete?board_id=' + board_id;
});

addReplyBtn.addEventListener('click',()=>{
    location.href = '/board/read?board_id=' + board_id;
});