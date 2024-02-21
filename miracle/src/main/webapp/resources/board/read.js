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


$(document).ready(function() {
    $(".deleteTest").click(function() {
        // 현재 클릭한 요소의 data-reply-id 속성을 가져옴
        var replyId = $(this).data("reply-id");
        const realDelete = document.getElementById('realDelete');
        realDelete.value=replyId;
        
        // replyId를 사용하여 원하는 작업 수행
        console.log("Delete reply with ID: " + replyId);
        rightCheck.value == idCheck ? deleteReplyForm.submit() : alert('다른 사람의 댓글은 지울 수 없어요!')

        // 예를 들어, AJAX를 사용하여 삭제 요청 보내기
        /*
        $.ajax({
            type: "POST",
            url: "/board/deleteReply",
            data: { reply_id: replyId },
            success: function(response) {
                // 성공 시 실행할 코드
            },
            error: function(error) {
                // 오류 시 실행할 코드
            }
        });
        */
    });
});