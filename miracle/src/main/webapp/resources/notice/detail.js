const arrowu = document.getElementById('arrowu');
const arrowd = document.getElementById('arrowd');
const goodBtn = document.getElementById('goodBtn');
const modifyBtn = document.getElementById('modifyBtn');
const deleteBtn = document.getElementById('deleteBtn');


goodBtn.addEventListener('click', () => {
   location.href = '/notice/good?board_id=' + board_id;
});

modifyBtn.addEventListener('click', () => {
	console.log("수정버튼");
   location.href = '/notice/modify?board_id=' + board_id;
});

deleteBtn.addEventListener('click', () => {
   location.href = '/notice/delete?board_id=' + board_id;
});

arrowu.addEventListener('click', () => {
    board_id+=1;
    while(board_show === 0 || board_id==null){
        board_id+=1;
        console.log("수정전"+board_id)
        //마지막번호 막기
        // if(){ 
        // }
        // while문돌리다 1있으면 멈추고 링크로 보내기
        // if(board_id==){
            // location.href = `/notice/detail?board_id=${board_id }`;
        // }
        // break;
    }
   
    location.href = `/notice/detail?board_id=${board_id }`;
    console.log("수정후"+board_id)
    
});

arrowd.addEventListener('click', () => {
    board_id-=1;
    while(board_show === 0 || board_id==null){
        board_id-=1;
        console.log("while문"+board_id)
        // if(board_id==){

        // }
        // break;
    }
    //location.href = `/notice/detail?board_id=${board_id }`;
    console.log("수정후"+board_id)
    
   
});

