const countryBox = document.getElementById('countryBox');
const cityBox = document.getElementById('cityBox');
const popUpForm = document.getElementById('popUpForm');
const popUpFormBtn = document.getElementById('popUpFormBtn');


countryBox.addEventListener('change', (e) => {
    cityBox.value='';
    location.href = '/ymaker/quiz2?country_name=' + countryBox.value;
})
cityBox.addEventListener('change', ()=>{
    location.href = '/ymaker/quiz2?country_name=' + countryBox.value + '&city_name=' + cityBox.value;
})


popUpFormBtn.addEventListener('click', ()=>{
        alert('추가되었습니다');    
})
//window.close();
$(function() {
    
    $("#popUpFormBtn").click( function() {
        
         $('#popUpForm').submit();
         setTimeout(function() {   
             window.close();

          }, 100);

      });

});