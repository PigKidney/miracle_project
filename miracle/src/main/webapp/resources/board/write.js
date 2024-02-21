$('.summernote').summernote(
    {
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

        styleTags: [
            'p',  // 일반 문단 스타일 옵션
            {
                title: 'Blockquote',
                tag: 'blockquote',
                className: 'blockquote',
                value: 'blockquote',
            },  // 인용구 스타일 옵션
            'pre',  // 코드 단락 스타일 옵션
            {
                title: 'code_light',
                tag: 'pre',
                className: 'code_light',
                value: 'pre',
            }]
        
    }
);

// @param {String} color
//$('.summernote').summernote('backColor', 'white');

// @param {String} color
//$('.summernote').summernote('foreColor', 'white');

const writeBtn = document.getElementById('writeBtn');
const writeForm = document.getElementById('writeForm');
const noteContent = document.getElementById('noteContent');
const noteTitle = document.getElementById('noteTitle');
const userId1 = document.getElementById('userId1');
console.dir('밸류  : ' + userId1.value);


writeBtn.addEventListener('click', () => {
    if (noteContent.value.trim() == '' || noteTitle.value.trim() == '') {
        alert('제목 또는 내용을 입력해주세요');
        return;
    }
    writeForm.submit();
});



// 서머노트에 text 쓰기
// $('#summernote').summernote('insertText', 'ㅇㅅㅇ/');


// 서머노트 쓰기 비활성화
// $('#summernote').summernote('disable');

// 서머노트 쓰기 활성화
// $('#summernote').summernote('enable');


// 서머노트 리셋
// $('#summernote').summernote('reset');


// 마지막으로 한 행동 취소 ( 뒤로가기 )
// $('#summernote').summernote('undo');
// 앞으로가기
// $('#summernote').summernote('redo');