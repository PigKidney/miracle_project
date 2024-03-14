const countryBox = document.getElementById('countryBox');
const cityBox = document.getElementById('cityBox');
const popUpForm = document.getElementById('popUpForm');
const popUpFormBtn = document.getElementById('popUpFormBtn');

$("#popUpFormBtn").click(function () {
    alert('추가되었습니다');
    $('#popUpForm').submit();
    setTimeout(function () {
        window.close();
    }, 100);
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