const writebtn = document.getElementById('writebtn');
const titleSearch = document.getElementById('titleSearch');
const search = document.getElementById('search');

writebtn.addEventListener('click', () => {
     window.location.href = '/notice/write';
});

search.addEventListener('click', () => {
  if(titleSearch.value.trim()=='' ){
    alert('검색어를 입력해 주세요!!');
  }else{
    location.href = '/notice/search?titleSearch=' + titleSearch.value ;
  }
});



titleSearch.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
      console.log(e);
      console.log(titleSearch.value);
      if(titleSearch.value.trim()=='' ){
        alert('검색어를 입력해 주세요!!');
      }else{
        location.href = '/notice/search?titleSearch=' + titleSearch.value ;
      }
    }
     
  
});
    
if (loginCheck === '1') {
  var showButtons = true;
} else {
  var showButtons = false;
}

function viewBtn() {
  if (showButtons) {
    writebtn.style.display = 'inline-block';
  } else {
    writebtn.style.display = 'none';

  }
}
viewBtn();