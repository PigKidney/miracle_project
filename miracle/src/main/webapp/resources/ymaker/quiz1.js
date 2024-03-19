const countryBox = document.getElementById('countryBox');
const cityBox = document.getElementById('cityBox');
const addRowFormBtn = document.getElementById('addRowFormBtn');
const readFormBtn = document.getElementById('readFormBtn');
const modifyBtn = document.getElementById('modifyBtn');
const deleteFormBtn = document.getElementById('deleteFormBtn');
const saveForm = document.getElementById('saveForm');
const datepicker1 = document.getElementById('datepicker1');
const datepicker2 = document.getElementById('datepicker2');
const yId = document.getElementById('yId');
const yName = document.getElementById('yName');
const radioMale = document.getElementById('radioMale');
const radioFemale = document.getElementById('radioFemale');

window.name = 'mainList';

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

$('#datepicker1').datepicker('setDate', 'today-5D'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            


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

$('#datepicker2').datepicker('setDate', 'today+5D');


deleteFormBtn.addEventListener('click', () => {
    if (confirm("정말 삭제하시겠습니다?")) {
        location.href = './delete';
    } else {
        alert('삭제가 취소되었습니다.')
    }
})





$("#readFormBtn").click(function () {

    var radioCheck = $("input:radio[name='sex']:checked").val();
    var cityCheck = [];

    $("input[name='city_name']").each(function () {
        if ($(this).is(":checked") == true) {
            cityCheck.push($(this).val());
        }
    });
    var parseCity = cityCheck.toString();

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            const cargo = xhttp.responseText;
            const obj = JSON.parse(cargo);
            console.log(obj);

            $.ajax({
                type: "GET",
                url: "./list",
                data: {
                    country_name: countryBox.value,
                    city_name: $("input[name='city_name']:checked").val(),
                    y_id: yId.value,
                    y_name: yName.value,
                    sex: radioCheck == '남' ? '남' : radioCheck == '여' ? '여' : 'male & female',
                    firstDate: datepicker1.value,
                    lastDate: datepicker2.value,
                },
                contentType: "application/json; charset:UTF-8",
                dataType: "text",
                success: function (data, status, xhr) {
                    console.log(data)
                    console.log('-----------')

                    //                $("#testDiv").text(data);

                },
                error: function (xhr, status, error) {
                    console.log("error", error, status);
                }
            });
            $('#selectedList').children().remove();

            for (let i = 0; i < obj.length; i++) {
                if (yId.value == obj[i].y_id && yId.value != '' && yId.value != null) {
                    const rowDiv = document.createElement('div');
                    const makeDiv1 = document.createElement('div');
                    const makeDiv2 = document.createElement('div');
                    const makeDiv3 = document.createElement('div');
                    const makeDiv4 = document.createElement('div');
                    const makeDiv5 = document.createElement('div');
                    const makeDiv6 = document.createElement('div');
                    const makeCheckBox = document.createElement('input');
                    const dblcickClass = 'plzDoubleClick-' + obj[i].y_id;

                    rowDiv.classList.add('add-grid');
                    rowDiv.classList.add(dblcickClass);
                    rowDiv.classList.add('plzDoubleClick');
                    rowDiv.value = obj[i].y_id;
                    rowDiv.name = 'y_id';

                    obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                    makeCheckBox.type = 'checkbox';
                    makeCheckBox.name = 'y_id';
                    makeCheckBox.value = obj[i].y_id;

                    makeDiv1.appendChild(makeCheckBox);
                    makeDiv2.innerText = (obj[i].y_id);
                    makeDiv3.innerText = (obj[i].y_name);
                    makeDiv4.innerText = (obj[i].sex);
                    makeDiv5.innerText = (obj[i].country_name);
                    makeDiv6.innerText = (obj[i].city_name);
                    $('#selectedList').append(rowDiv);
                    rowDiv.appendChild(makeDiv1);
                    rowDiv.appendChild(makeDiv2);
                    rowDiv.appendChild(makeDiv3);
                    rowDiv.appendChild(makeDiv4);
                    rowDiv.appendChild(makeDiv5);
                    rowDiv.appendChild(makeDiv6);

                    $('.' + dblcickClass).dblclick(function (e) {
                        window.open('./quiz2?y_id=' + makeDiv2.innerText + '&y_name=' + makeDiv3.innerText + '&sex=' + makeDiv4.innerText + '&country_name=' + makeDiv5.innerText + '&city_name=' + makeDiv6.innerText, '', "width=1200,height=800,top=200,left=200");
                    });
                    return;
                }
            }
            const start = new Date(datepicker1.value);
            const final = new Date(datepicker2.value);

            for (let i = 0; i < obj.length; i++) {
                const savedDay = new Date(obj[i].y_date);
                if (yName.value != obj[i].y_name && yName.value != '' && yName.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (countryBox.value != obj[i].country_name && countryBox.value != '' && countryBox.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (!parseCity.includes([obj[i].city_name]) && !parseCity.includes('ALL')) {
                    obj.splice(i, 1)
                    i--;
                } else if (radioCheck != obj[i].sex && radioCheck != '' && radioCheck != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (start > savedDay || final < savedDay) {
                    obj.splice(i, 1)
                    i--;
                }
            }
            for (let i = 0; i < obj.length; i++) {

                const rowDiv = document.createElement('div');
                const makeDiv1 = document.createElement('div');
                const makeDiv2 = document.createElement('div');
                const makeDiv3 = document.createElement('div');
                const makeDiv4 = document.createElement('div');
                const makeDiv5 = document.createElement('div');
                const makeDiv6 = document.createElement('div');
                const makeCheckBox = document.createElement('input');
                const dblcickClass = 'plzDoubleClick-' + obj[i].y_id;

                rowDiv.classList.add('add-grid');
                rowDiv.classList.add(dblcickClass);
                rowDiv.classList.add('plzDoubleClick');
                rowDiv.value = obj[i].y_id;
                rowDiv.name = 'y_id';

                obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                makeCheckBox.type = 'checkbox';
                makeCheckBox.name = 'y_id';
                makeCheckBox.value = obj[i].y_id;

                makeDiv1.appendChild(makeCheckBox);
                makeDiv2.innerText = (obj[i].y_id);
                makeDiv3.innerText = (obj[i].y_name);
                makeDiv4.innerText = (obj[i].sex);
                makeDiv5.innerText = (obj[i].country_name);
                makeDiv6.innerText = (obj[i].city_name);
                $('#selectedList').append(rowDiv);
                rowDiv.appendChild(makeDiv1);
                rowDiv.appendChild(makeDiv2);
                rowDiv.appendChild(makeDiv3);
                rowDiv.appendChild(makeDiv4);
                rowDiv.appendChild(makeDiv5);
                rowDiv.appendChild(makeDiv6);

                $('.' + dblcickClass).dblclick(function (e) {
                    window.open('./quiz2?y_id=' + makeDiv2.innerText + '&y_name=' + makeDiv3.innerText + '&sex=' + makeDiv4.innerText + '&country_name=' + makeDiv5.innerText + '&city_name=' + makeDiv6.innerText, '', "width=600,height=500,top=200,left=200");
                });
            }
        }
    })
    xhttp.open('GET', 'getList');
    xhttp.send();
})

$('#countryBox').click(function (e) {

    $('#cityBox').addClass('cityCheckBoxOff');

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

            $('#cityBox').children().remove();

            for (let i = 0; i < obj.length; i++) {
                if (countryBox.value == obj[i].country_name) {
                    const makeDiv = document.createElement('div');
                    const makeDivValue = document.createElement('span');
                    const makeCityOption = document.createElement('input');

                    makeCityOption.type = 'checkbox'
                    makeCityOption.value = obj[i].city_name;
                    makeCityOption.name = 'city_name';

                    makeDiv.classList.add('cityCheckBox');
                    makeDiv.appendChild(makeCityOption);
                    makeDiv.appendChild(makeDivValue);

                    makeDivValue.innerText = obj[i].city_name;

                    $('#cityBox').append(makeDiv);
                }
            }
        }
    })
    xhttp.open('GET', './getCity');
    xhttp.send();
});

$('.clickToShow').click(function (e) {
    $('#cityBox').toggleClass('cityCheckBoxOff');
    console.log('run')
});

$('.clickToShow2').click(function (e) {
    $('.cityBox').toggleClass('cityCheckBoxOff');
});

$('#addBtn').click(function (e) {
    const makeDiv1 = document.createElement('div');
    const makeDiv2 = document.createElement('div');
    const makeDiv3 = document.createElement('div');
    const makeDiv4 = document.createElement('div');
    const makeDiv5 = document.createElement('div');
    const makeDiv6 = document.createElement('div');
    const makeCheckBox = document.createElement('input');
    const makeInputId = document.createElement('input');
    const makeInputName = document.createElement('input');
    const makeInputSex = document.createElement('div');
    const makeInputMale = document.createElement('input');
    const makeInputMale2 = document.createElement('span');
    const makeInputFemale = document.createElement('input');
    const makeInputFemale2 = document.createElement('span');
    const makeInputCountry = document.createElement('select');
    const makeInputCountry2 = document.createElement('option');

    const makeDiv = document.createElement('div');
    const makeMainCity = document.createElement('div');
    const makeDivValue = document.createElement('span');
    const makeCityOption = document.createElement('input');
    $('#addDataList').children().remove();
    makeCheckBox.type = 'checkbox';

    makeInputId.type = 'text';
    makeInputId.name = 'y_id';
    makeInputId.placeholder = '    아이디';
    makeInputId.size = '6';

    makeInputName.type = 'text';
    makeInputName.name = 'y_name';
    makeInputName.placeholder = '     이 름';
    makeInputName.size = '6';

    makeInputMale.type = 'radio';
    makeInputMale.name = 'sex';
    makeInputMale.value = '남';
    makeInputMale2.innerText = '남 ';

    makeInputFemale.type = 'radio';
    makeInputFemale.name = 'sex';
    makeInputFemale.value = '여'
    makeInputFemale2.innerText = '여';

    makeInputCountry.type = 'select'
    makeInputCountry.name = 'country_name';
    makeInputCountry.classList.add('countryBox');
    makeInputCountry2.innerText = '국가';

    makeDiv.classList.add('cityBox');

    makeCityOption.type = 'checkbox'
    makeCityOption.value = 'ALL';
    makeCityOption.name = 'city_name';
    makeCityOption.textContent = '전체';

    makeDivValue.classList.add('material-symbols-outlined');
    makeDivValue.classList.add('cursor');
    makeDivValue.classList.add('arrow');
    makeDivValue.classList.add('clickToShow2');
    makeDivValue.innerText = 'keyboard_arrow_down';

    makeInputCountry.addEventListener('click', () => {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener('readystatechange', (e) => {
            if (xhttp.status == 200 && xhttp.readyState == 4) {
                const cargo = xhttp.responseText;
                const obj = JSON.parse(cargo);
                console.log(obj);

                console.log($('.countryBox').children('option'));
                if ($('.countryBox').children('option').length < obj.length) {
                    for (let i = 0; i < obj.length; i++) {
                        const makeOption = document.createElement('option');
                        makeOption.innerText = (obj[i].country_name);
                        $('.countryBox').append(makeOption);
                    }
                }
            }
        })
        xhttp.open('GET', './getCountry');
        xhttp.send();
    });

    makeInputCountry.addEventListener('change', () => {

        console.log('--------------------------')
        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener('readystatechange', (e) => {
            if (xhttp.status == 200 && xhttp.readyState == 4) {
                const cargo = xhttp.responseText;
                const obj = JSON.parse(cargo);

                $('.cityBox').children().remove();

                for (let i = 0; i < obj.length; i++) {
                    if (makeInputCountry.value == obj[i].country_name) {
                        const makeDiv = document.createElement('div');
                        const makeDivValue = document.createElement('span');
                        const makeCityOption = document.createElement('input');

                        makeCityOption.type = 'checkbox'
                        makeCityOption.value = obj[i].city_name;
                        makeCityOption.name = 'city_name';

                        makeDiv.classList.add('cityCheckBox');
                        makeDiv.appendChild(makeCityOption);
                        makeDiv.appendChild(makeDivValue);

                        makeDivValue.innerText = obj[i].city_name;

                        $('.cityBox').append(makeDiv);
                    }
                }
            }
        })
        xhttp.open('GET', './getCity');
        xhttp.send();
    })



    makeDiv1.appendChild(makeCheckBox);
    makeDiv2.appendChild(makeInputId);
    makeDiv3.appendChild(makeInputName);
    makeDiv4.appendChild(makeInputSex);
    makeInputSex.appendChild(makeInputMale);
    makeInputSex.appendChild(makeInputMale2);
    makeInputSex.appendChild(makeInputFemale);
    makeInputSex.appendChild(makeInputFemale2);
    makeInputCountry.appendChild(makeInputCountry2);
    makeDiv5.appendChild(makeInputCountry);

    const allTextDiv = document.createElement('span');
    allTextDiv.innerText = '전체'
    makeMainCity.appendChild(makeCityOption);
    makeMainCity.appendChild(allTextDiv);
    makeMainCity.appendChild(makeDivValue);



    makeDiv6.appendChild(makeMainCity);
    makeDiv6.appendChild(makeDiv);

    $('#addDataList').append(makeDiv1);
    $('#addDataList').append(makeDiv2);
    $('#addDataList').append(makeDiv3);
    $('#addDataList').append(makeDiv4);
    $('#addDataList').append(makeDiv5);
    $('#addDataList').append(makeDiv6);

});



$('#addRowFormBtn').click(function (e) {
    alert('데이터가 추가되었습니다');
    $('#addRowForm').submit();
});



function parentReload() {

    var radioCheck = $("input:radio[name='sex']:checked").val();
    var cityCheck = [];

    $("input[name='city_name']").each(function () {
        if ($(this).is(":checked") == true) {
            cityCheck.push($(this).val());
        }
    });
    var parseCity = cityCheck.toString();

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            const cargo = xhttp.responseText;
            const obj = JSON.parse(cargo);
            console.log(obj);

            $.ajax({
                type: "GET",
                url: "./list",
                data: {
                    country_name: countryBox.value,
                    city_name: cityBox.value,
                    y_id: yId.value,
                    y_name: yName.value,
                    sex: radioCheck == '남' ? '남' : radioCheck == '여' ? '여' : 'male & female',
                    firstDate: datepicker1.value,
                    lastDate: datepicker2.value,
                },
                contentType: "application/json; charset:UTF-8",
                dataType: "text",
                success: function (data, status, xhr) {
                    console.log(data)
                    console.log('-----------')
                },
                error: function (xhr, status, error) {
                    console.log("error", e, status);
                }
            });
            $('#selectedList').children().remove();

            for (let i = 0; i < obj.length; i++) {
                if (yId.value == obj[i].y_id && yId.value != '' && yId.value != null) {
                    const rowDiv = document.createElement('div');
                    const makeDiv1 = document.createElement('div');
                    const makeDiv2 = document.createElement('div');
                    const makeDiv3 = document.createElement('div');
                    const makeDiv4 = document.createElement('div');
                    const makeDiv5 = document.createElement('div');
                    const makeDiv6 = document.createElement('div');
                    const makeCheckBox = document.createElement('input');

                    rowDiv.classList.add('add-grid');
                    rowDiv.classList.add('plzDoubleClick');
                    rowDiv.value = obj[i].y_id;
                    rowDiv.name = 'y_id';

                    makeCheckBox.type = 'checkbox';
                    makeCheckBox.name = 'y_id';
                    makeCheckBox.value = obj[i].y_id;

                    obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                    makeDiv1.appendChild(makeCheckBox);
                    makeDiv2.innerText = (obj[i].y_id);
                    makeDiv3.innerText = (obj[i].y_name);
                    makeDiv4.innerText = (obj[i].sex);
                    makeDiv5.innerText = (obj[i].country_name);
                    makeDiv6.innerText = (obj[i].city_name);

                    $('#selectedList').append(rowDiv);
                    rowDiv.appendChild(makeDiv1);
                    rowDiv.appendChild(makeDiv2);
                    rowDiv.appendChild(makeDiv3);
                    rowDiv.appendChild(makeDiv4);
                    rowDiv.appendChild(makeDiv5);
                    rowDiv.appendChild(makeDiv6);
                    return;
                }
            }
            const start = new Date(datepicker1.value);
            const final = new Date(datepicker2.value);
            console.log(start + ' ~ ' + final);

            for (let i = 0; i < obj.length; i++) {
                const savedDay = new Date(obj[i].y_date);
                console.log(savedDay)
                if (yName.value != obj[i].y_name && yName.value != '' && yName.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (countryBox.value != obj[i].country_name && countryBox.value != '' && countryBox.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (!parseCity.includes([obj[i].city_name]) && !parseCity.includes('ALL')) {
                    obj.splice(i, 1)
                    i--;
                } else if (radioCheck != obj[i].sex && radioCheck != '' && radioCheck != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (start > savedDay || final < savedDay) {
                    obj.splice(i, 1)
                    i--;
                }
            }
            for (let i = 0; i < obj.length; i++) {

                const rowDiv = document.createElement('div');
                const makeDiv1 = document.createElement('div');
                const makeDiv2 = document.createElement('div');
                const makeDiv3 = document.createElement('div');
                const makeDiv4 = document.createElement('div');
                const makeDiv5 = document.createElement('div');
                const makeDiv6 = document.createElement('div');
                const makeCheckBox = document.createElement('input');
                const dblcickClass = 'plzDoubleClick-' + obj[i].y_id;
                rowDiv.classList.add('add-grid');
                rowDiv.classList.add(dblcickClass);
                rowDiv.classList.add('plzDoubleClick');
                rowDiv.value = obj[i].y_id;
                rowDiv.name = 'y_id';

                makeCheckBox.type = 'checkbox';
                makeCheckBox.name = 'y_id';
                makeCheckBox.value = obj[i].y_id;

                obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                makeDiv1.appendChild(makeCheckBox);
                makeDiv2.innerText = (obj[i].y_id);
                makeDiv3.innerText = (obj[i].y_name);
                makeDiv4.innerText = (obj[i].sex);
                makeDiv5.innerText = (obj[i].country_name);
                makeDiv6.innerText = (obj[i].city_name);
                $('#selectedList').append(rowDiv);
                rowDiv.appendChild(makeDiv1);
                rowDiv.appendChild(makeDiv2);
                rowDiv.appendChild(makeDiv3);
                rowDiv.appendChild(makeDiv4);
                rowDiv.appendChild(makeDiv5);
                rowDiv.appendChild(makeDiv6);

                $('.' + dblcickClass).dblclick(function (e) {
                    window.open('./quiz2?y_id=' + obj[i].y_id + '&y_name=' + obj[i].y_name + '&sex=' + obj[i].sex + '&country_name=' + obj[i].country_name + '&city_name=' + obj[i].city_name, '', "width=500,height=400,top=200,left=200");
                });
            }
        }
    })
    xhttp.open('GET', 'getList');
    xhttp.send();
}

function pageReload() {

    var radioCheck = $("input:radio[name='sex']:checked").val();
    var cityCheck = [];

    $("input[name='city_name']").each(function () {
        if ($(this).is(":checked") == true) {
            cityCheck.push($(this).val());
        }
    });
    var parseCity = cityCheck.toString();

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            const cargo = xhttp.responseText;
            const obj = JSON.parse(cargo);
            console.log(obj);

            $.ajax({
                type: "GET",
                url: "./list",
                data: {
                    country_name: countryBox.value,
                    city_name: cityBox.value,
                    y_id: yId.value,
                    y_name: yName.value,
                    sex: radioCheck == '남' ? '남' : radioCheck == '여' ? '여' : 'male & female',
                    firstDate: datepicker1.value,
                    lastDate: datepicker2.value,
                },
                contentType: "application/json; charset:UTF-8",
                dataType: "text",
                success: function (data, status, xhr) {
                    console.log(data)
                    console.log('-----------')
                },
                error: function (xhr, status, error) {
                    console.log("error", e, status);
                }
            });
            $('#selectedList').children().remove();

            for (let i = 0; i < obj.length; i++) {
                if (yId.value == obj[i].y_id && yId.value != '' && yId.value != null) {
                    const rowDiv = document.createElement('div');
                    const makeDiv1 = document.createElement('div');
                    const makeDiv2 = document.createElement('div');
                    const makeDiv3 = document.createElement('div');
                    const makeDiv4 = document.createElement('div');
                    const makeDiv5 = document.createElement('div');
                    const makeDiv6 = document.createElement('div');
                    const makeCheckBox = document.createElement('input');

                    rowDiv.classList.add('add-grid');
                    rowDiv.classList.add('plzDoubleClick');
                    rowDiv.value = obj[i].y_id;
                    rowDiv.name = 'y_id';

                    makeCheckBox.type = 'checkbox';
                    makeCheckBox.name = 'y_id';
                    makeCheckBox.value = obj[i].y_id;

                    obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                    makeDiv1.appendChild(makeCheckBox);
                    makeDiv2.innerText = (obj[i].y_id);
                    makeDiv3.innerText = (obj[i].y_name);
                    makeDiv4.innerText = (obj[i].sex);
                    makeDiv5.innerText = (obj[i].country_name);
                    makeDiv6.innerText = (obj[i].city_name);

                    $('#selectedList').append(rowDiv);
                    rowDiv.appendChild(makeDiv1);
                    rowDiv.appendChild(makeDiv2);
                    rowDiv.appendChild(makeDiv3);
                    rowDiv.appendChild(makeDiv4);
                    rowDiv.appendChild(makeDiv5);
                    rowDiv.appendChild(makeDiv6);
                    return;
                }
            }
            const start = new Date(datepicker1.value);
            const final = new Date(datepicker2.value);
            console.log(start + ' ~ ' + final);

            for (let i = 0; i < obj.length; i++) {
                const savedDay = new Date(obj[i].y_date);
                console.log(savedDay)
                if (yName.value != obj[i].y_name && yName.value != '' && yName.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (countryBox.value != obj[i].country_name && countryBox.value != '' && countryBox.value != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (!parseCity.includes([obj[i].city_name]) && !parseCity.includes('ALL')) {
                    obj.splice(i, 1)
                    i--;
                } else if (radioCheck != obj[i].sex && radioCheck != '' && radioCheck != null) {
                    obj.splice(i, 1)
                    i--;
                } else if (start > savedDay || final < savedDay) {
                    obj.splice(i, 1)
                    i--;
                }
            }
            for (let i = 0; i < obj.length; i++) {

                const rowDiv = document.createElement('div');
                const makeDiv1 = document.createElement('div');
                const makeDiv2 = document.createElement('div');
                const makeDiv3 = document.createElement('div');
                const makeDiv4 = document.createElement('div');
                const makeDiv5 = document.createElement('div');
                const makeDiv6 = document.createElement('div');
                const makeCheckBox = document.createElement('input');
                const dblcickClass = 'plzDoubleClick-' + obj[i].y_id;
                rowDiv.classList.add('add-grid');
                rowDiv.classList.add(dblcickClass);
                rowDiv.classList.add('plzDoubleClick');
                rowDiv.value = obj[i].y_id;
                rowDiv.name = 'y_id';

                makeCheckBox.type = 'checkbox';
                makeCheckBox.name = 'y_id';
                makeCheckBox.value = obj[i].y_id;

                obj[i].sex == '남' ? rowDiv.classList.add('male-row') : rowDiv.classList.add('female-row');

                makeDiv1.appendChild(makeCheckBox);
                makeDiv2.innerText = (obj[i].y_id);
                makeDiv3.innerText = (obj[i].y_name);
                makeDiv4.innerText = (obj[i].sex);
                makeDiv5.innerText = (obj[i].country_name);
                makeDiv6.innerText = (obj[i].city_name);
                $('#selectedList').append(rowDiv);
                rowDiv.appendChild(makeDiv1);
                rowDiv.appendChild(makeDiv2);
                rowDiv.appendChild(makeDiv3);
                rowDiv.appendChild(makeDiv4);
                rowDiv.appendChild(makeDiv5);
                rowDiv.appendChild(makeDiv6);

                $('.' + dblcickClass).dblclick(function (e) {
                    window.open('./quiz2?y_id=' + obj[i].y_id + '&y_name=' + obj[i].y_name + '&sex=' + obj[i].sex + '&country_name=' + obj[i].country_name + '&city_name=' + obj[i].city_name, '', "width=500,height=400,top=200,left=200");
                });
            }
        }
    })
    xhttp.open('GET', 'getList');
    xhttp.send();
}
