const countryBox = document.getElementById('countryBox');
const cityBox = document.getElementById('cityBox');
const popUpForm = document.getElementById('popUpForm');
const popUpFormBtn = document.getElementById('popUpFormBtn');
const popUpName = document.getElementById('popUpName');
const linkBtn = document.getElementById('linkBtn');

$("#popUpFormBtn").click(function () {
    var radioCheck = $("input:radio[name='sex']:checked").val();
    if (popUpName.value === '' || (popUpName.value == null)) {
        alert('데이터를 입력해주세요');
    } else {
        alert('데이터가 수정되었습니다');

        $.ajax({
            type: "GET",
            url: "./modifiedPopUp",
            data: {
                y_id: $('#popUpId').val(),
                y_name: $('#popUpName').val(),
                sex: radioCheck == '남' ? '남' : radioCheck == '여' ? '여' : -1,
                country_name: $('#countryBox').val(),
                city_name: $('#cityBox').val(),
            },
            dataType: "text",
            success: function (response) {
            }
        });
        
        location.reload(); // 없으면 데이터 최신화가 되지 않음
        opener.parent.parentReload(); // 2. 부모창에서 데이터를 다시 조회하는 함수
        window.close(); // 3. 팝업창 종료
    
    }
});


$('#countryBox').click(function (e) {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', (e) => {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            const cargo = xhttp.responseText;
            const obj = JSON.parse(cargo);
            console.log(obj);

            console.log($('#countryBox').children('option'));
            if ($('#countryBox').children('option').length < obj.length) {
                for (let i = 0; i < obj.length; i++) {
                    const makeOption = document.createElement('option');
                    makeOption.innerText = (obj[i].country_name);
                    $('#countryBox').append(makeOption);
                }
            }
        }
    })
    xhttp.open('GET', './getCountry');
    xhttp.send();
});

$('#countryBox').change(function (e) {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', (e) => {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            const cargo = xhttp.responseText;
            const obj = JSON.parse(cargo);
            $('#cityBox').children('option').remove();
            const makeCityOption = document.createElement('option');
            makeCityOption.innerText = ('도시');
            $('#cityBox').append(makeCityOption);
            for (let i = 0; i < obj.length; i++) {
                if (countryBox.value == obj[i].country_name) {
                    const makeCityOption = document.createElement('option');
                    makeCityOption.innerText = (obj[i].city_name);
                    $('#cityBox').append(makeCityOption);
                }
            }
        }
    })
    xhttp.open('GET', './getCity');
    xhttp.send();
});

$('#linkBtn').click(function (e) { 
    location.href ='./quiz3?y_id='+ popUpId.value;
});