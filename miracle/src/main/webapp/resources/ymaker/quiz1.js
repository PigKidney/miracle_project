const countryBox = document.getElementById('countryBox');
const cityBox = document.getElementById('cityBox');
const saveFormBtn = document.getElementById('saveFormBtn');
const readFormBtn = document.getElementById('readFormBtn');
const deleteFormBtn = document.getElementById('deleteFormBtn');
const saveForm = document.getElementById('saveForm');
const datepicker1 = document.getElementById('datepicker1');
const datepicker2 = document.getElementById('datepicker2');

$("#datepicker1").datepicker({
    dateFormat: 'yy-mm-dd' //달력 날짜 형태
    , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
    , changeYear: true //option값 년 선택 가능
    , changeMonth: true //option값  월 선택 가능                
    , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
    , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
    , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
    , buttonText: "선택" //버튼 호버 텍스트              
    , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
    , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
    , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
    , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
    , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
    , minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
});

$('#datepicker1').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            


$("#datepicker2").datepicker({
    dateFormat: 'yy-mm-dd' //달력 날짜 형태
    , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
    , changeYear: true //option값 년 선택 가능
    , changeMonth: true //option값  월 선택 가능                
    , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
    , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
    , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
    , buttonText: "선택" //버튼 호버 텍스트              
    , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
    , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
    , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
    , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
    , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
    , minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
});

$('#datepicker2').datepicker('setDate', 'today');  


console.dir(datepicker1);
console.dir(datepicker2);

deleteFormBtn.addEventListener('click', () => {
    if (confirm("정말 삭제하시겠습니다?")) {
        location.href = './delete';
    } else {
        alert('삭제가 취소되었습니다.')
    }

})

saveFormBtn.addEventListener('click', ()=>{

    console.log('올레')
    window.open('./quiz2','' ,"width=500,height=400,top=200,left=200")

})
/*
$.ajax({
    type: "PUT", 			//1.서버에 요청하는 방식(get/post) 
    url: "./ymaker/quiz1", 		//2.서버에 요청되는 주소 
    data: {					//3.클라이언트가 서버에 전달할 데이터 
        country_name: countryBox.value, 
        city_name: cityBox.value
    },
     dataType: "text", 		//4.서버로부터 받아온 응답 데이터의 타입
     success: function (data, status, xhr) { //5-1.요청에 대한 응답이 성공했을때 동작할 함수
         $("#result").text(data);			//data변수: 응답으로 비동기 전송된 data
    },
    error: function (xhr, status, error) { //5-2.요청에 대한 응답이 실패했을때 동작할 함수
         console.log("error", e, status);
    }
 });

countryBox.addEventListener('change', (e) => {
    const xhttp = new XMLHttpRequest();
    var countryBoxValue = countryBox.value;
    console.dir(countryBox);
    console.log(countryBox.value);
    console.log(countryBoxValue);
    const userData = {
        country_name: countryBox.value
    };
    xhttp.open('PUT', './rest1');
    xhttp.setRequestHeader('content-type', 'application/json');
    xhttp.send(JSON.stringify(userData));
 //   location.href = '/ymaker/quiz1?country_name=' + countryBox.value;
});
*/
countryBox.addEventListener('change', (e) => {
    cityBox.value='';
    location.href = '/ymaker/quiz1?country_name=' + countryBox.value;
})
cityBox.addEventListener('change', ()=>{
    location.href = '/ymaker/quiz1?country_name=' + countryBox.value + '&city_name=' + cityBox.value;
})



