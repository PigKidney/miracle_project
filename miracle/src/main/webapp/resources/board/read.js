const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');
const modifyForm = document.getElementById('modifyForm');
const addReplyBtn = document.getElementById('addReplyBtn');
const replyForm = document.getElementById('replyForm');
const deleteReplyBtn = document.getElementById('deleteReplyBtn');
const deleteReplyForm = document.getElementById('deleteReplyForm');
const rightCheck = document.getElementById('rightCheck');
const replyTextBox = document.getElementById('replyTextBox');
const goodBtn = document.getElementById('goodBtn');

modifyBtn.addEventListener('click', () => {
    location.href = '/board/modify?board_id=' + board_id;
});

deleteBtn.addEventListener('click', () => {
    location.href = '/board/delete?board_id=' + board_id;
});

addReplyBtn.addEventListener('click', () => {
    replyTextBox.value.trim() != '' ? replyForm.submit() : alert('내용이 없어요!')
});

deleteReplyBtn.addEventListener('click', () => {
    rightCheck.textContent == idCheck ? deleteReplyForm.submit() : alert('다른 사람의 댓글은 지울 수 없어요!')
})

goodBtn.addEventListener('click', () => {
    location.href = '/board/good?board_id=' + board_id;
})