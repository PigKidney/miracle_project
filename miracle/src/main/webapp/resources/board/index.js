const beginningToWriteBtn = document.getElementById('beginningToWriteBtn');
beginningToWriteBtn.addEventListener('click', () => {

    loginCheck === '0' || loginCheck === '1' ? window.location.href = '/board/write' : alert('로그인하세요!');
});
