const writebtn = document.getElementById('writebtn');
const titleSearch = document.getElementById('titleSearch');
writebtn.addEventListener('click', () => {

   window.location.href = '/notice/write';
});

/*
titleSearch.addEventListener('keydown', (e)=>{
        if(e.key==='Enter'){
            console.log(e);
            console.log(titleSearch.value);
            location.href = '/notice/index?titleSearch=' + titleSearch.value ;
        }
        
    });
    */
    
 