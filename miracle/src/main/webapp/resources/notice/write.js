$('.summernote').summernote(
    {
        placeholder: 'ㅇㅅㅇ/',
        tabsize: 2,
        height: 480,
        toolbar: [['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]],
        lang: 'ko-KR',
    }
);

// @param {String} color
$('.summernote').summernote('backColor', '#2b2d31');

// @param {String} color
$('.summernote').summernote('foreColor', 'white');
const writeConfirmBtn = document.getElementById('writeConfirmBtn');
const boardContent = document.getElementById('boardContent');
const boardTitle = document.getElementById('boardTitle');

modifyBtn.addEventListener('click', () => {
    location.href = '/board/modify?board_id=' + board_id;
});

deleteBtn.addEventListener('click', () => {
    location.href = '/board/delete?board_id=' + board_id;
});
writeConfirmBtn.addEventListener('click', (e) => {
  // console.log('ddddddd');

  console.log(boardContent);
  console.log(boardTitle);

  if (boardContent.value.trim() === '') {
    // console.log('ddddddd');
    alert('내용이 텅텅');
    e.preventDefault();
    return;
  } else if (boardTitle.value.trim() === '') {
    //  console.log('ddddddd');
    alert('제목이 텅텅');
    e.preventDefault();
    return;
  }
});
