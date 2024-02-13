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

console.log(user_id == idCheck)

goodBtn.addEventListener('click', () => {
    loginCheck === '0' || loginCheck === '1' ? location.href = '/board/good?board_id=' + board_id : alert('로그인하세요!');
});
modifyBtn.addEventListener('click', () => {
    loginCheck === '0' || loginCheck === '1' ? user_id == idCheck ? location.href = '/board/modify?board_id=' + board_id : alert('다른 사람의 글은 수정할 수 없어요!') : alert('로그인하세요!');
});

deleteBtn.addEventListener('click', () => {
    loginCheck === '0' || loginCheck === '1' ? user_id == idCheck ? location.href = '/board/delete?board_id=' + board_id : alert('다른 사람의 글은 삭제할 수 없어요!') : alert('로그인하세요!');
});

addReplyBtn.addEventListener('click', () => {
    loginCheck === '0' || loginCheck === '1' ? replyTextBox.value.trim() != '' ? replyForm.submit() : alert('내용이 없어요!') : alert('로그인하세요!');
});

if (deleteReplyBtn != null) {
    deleteReplyBtn.addEventListener('click', () => {
        rightCheck.textContent == idCheck ? deleteReplyForm.submit() : alert('다른 사람의 댓글은 지울 수 없어요!')
    });
}
