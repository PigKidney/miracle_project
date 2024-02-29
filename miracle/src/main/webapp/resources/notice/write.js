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


writeConfirmBtn.addEventListener('click', (e) => {
  if (boardContent.value.trim() === '') {
    alert('내용이 텅텅');
    e.preventDefault();
    return;
  } else if (boardTitle.value.trim() === '') {
    alert('제목이 텅텅');
    e.preventDefault();
    return;
  }
});
