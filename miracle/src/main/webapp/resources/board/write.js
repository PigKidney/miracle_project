$('#summernote').summernote(
    {
        placeholder : 'ㅇㅅㅇ/',
        tabsize : 2,
        height : 480,
        toolbar : [ [ 'style', [ 'style' ] ],
                [ 'font', [ 'bold', 'underline', 'clear' ] ],
                [ 'color', [ 'color' ] ],
                [ 'para', [ 'ul', 'ol', 'paragraph' ] ],
                [ 'table', [ 'table' ] ],
                [ 'insert', [ 'link', 'picture', 'video' ] ],
                [ 'view', [ 'fullscreen', 'codeview', 'help' ] ] ],
        lang : 'ko-KR',
    });


// 서머노트에 text 쓰기
$('#summernote').summernote('insertText', 'ㅇㅅㅇ/');


// 서머노트 쓰기 비활성화
// $('#summernote').summernote('disable');

// 서머노트 쓰기 활성화
$('#summernote').summernote('enable');


// 서머노트 리셋
$('#summernote').summernote('reset');


// 마지막으로 한 행동 취소 ( 뒤로가기 )
$('#summernote').summernote('undo');
// 앞으로가기
$('#summernote').summernote('redo');