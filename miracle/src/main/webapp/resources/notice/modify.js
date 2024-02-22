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
    }
);

const categorySelect = document.getElementById('categorySelect');
const sel1 = document.getElementById('sel1');
const sel2 = document.getElementById('sel2');
const sel3 = document.getElementById('sel3');
const selectedCategory = document.getElementById('selectedCategory');
const rewriteBtn = document.getElementById('rewriteBtn');
const modifyForm = document.getElementById('modifyForm');
const noteContent = document.getElementById('noteContent');
const noteTitle = document.getElementById('noteTitle');

selectedCategory.value==sel1.value ? sel1.classList.add('categoryShow') : sel1.classList.remove('categoryShow');
selectedCategory.value==sel2.value ? sel2.classList.add('categoryShow') : sel2.classList.remove('categoryShow');
selectedCategory.value==sel3.value ? sel3.classList.add('categoryShow') : sel3.classList.remove('categoryShow');


rewriteBtn.addEventListener('click', () => {
    if(noteContent.value.trim()=='' || noteTitle.value.trim()==''){
        alert('제목 또는 내용을 입력해주세요');
        return;
    }
    modifyForm.submit();
});