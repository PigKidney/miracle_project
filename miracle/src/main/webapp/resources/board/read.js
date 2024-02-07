const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');
const modifyForm = document.getElementById('modifyForm');
const addReplyBtn = document.getElementById('addReplyBtn');
const replyForm = document.getElementById('replyForm');
const deleteReplyBtn = document.getElementById('deleteReplyBtn');
const deleteReplyForm = document.getElementById('deleteReplyForm');

modifyBtn.addEventListener('click', () => {
    location.href = '/board/modify?board_id=' + board_id;
});

deleteBtn.addEventListener('click', () => {
    location.href = '/board/delete?board_id=' + board_id;
});

addReplyBtn.addEventListener('click', () => {
    replyForm.submit();
});

deleteReplyBtn.addEventListener('click', () => {
    deleteReplyForm.submit();
})
