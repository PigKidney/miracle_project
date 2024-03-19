<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="/resources/jquery/jquery-3.7.1.min.js"></script>
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/ymaker/quiz1.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
	integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
	integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
	integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

Grid그리드
	<div class="y-main-grid">
		<form id="saveForm" method="POST">
			<div class="y-tab1-grid">
				<div>
					<input type="text" placeholder="아이디" size="10" name="y_id"
						form="saveForm" id="yId" />
				</div>
				<div>
					<input type="text" placeholder="이름" size="14" name="y_name"
						form="saveForm" id="yName" />
				</div>
				<div></div>
				<div>
					<input type="radio" id="radioMale" name="sex" form="saveForm"
						value="남" />남 <input type="radio" id="radioFemale" name="sex"
						form="saveForm" value="여" />여
				</div>
				<div>
					<select id="countryBox" name="country_name" form="saveForm">
						<option value="">국가</option>
					</select>
				</div>
				<div>
					<div class="cityMainBox">
						<input type="checkbox" name="city_name" value="ALL" />전체&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
							class="material-symbols-outlined cursor clickToShow arrow">
							keyboard_arrow_down </span>
					</div>
					<div id="cityBox" class="cityCheckBoxOff"></div>
				</div>
				<div>
					<input id="datepicker1" name="firstDate" value="" form="saveForm">
				</div>
				<div>
					<input id="datepicker2" name="lastDate" value="" form="saveForm">
				</div>
			</div>
		</form>
		<div class="y-tab2-buttonList">
			<button id="readFormBtn">조회</button>
			<button id="addBtn">추가</button>
			<button id="addRowFormBtn">저장</button>
			<button id="excelDownBtn" form="saveForm" formaction="./excel">엑셀다운</button>
			<button id="deleteFormBtn" form="delForm" formaction="./delete">삭제</button>
		</div>

		<div class="y-tab2-grid">
			<div class="add-grid2 row-bar">

				<div class="row-bar-height">선택</div>
				<div class="row-bar-height">아이디</div>
				<div class="row-bar-height">이름</div>
				<div class="row-bar-height">성별</div>
				<div>
					<div>장소</div>
					<div class="ms4-grid">
						<div>국가</div>
						<div>도시</div>
					</div>
				</div>

			</div>
			<form action="./save" method="post" id="addRowForm">
				<div id="addDataList" class="add-grid add-row"></div>
			</form>
			<form id="delForm" method="POST">
				<div id="selectedList" class=""></div>
				<div class="add-grid plzDoubleClick add-row">
				<div>${selectOne.y_number}</div>
				<div>${selectOne.y_id}</div>
				<div>${selectOne.y_name}</div>
				<div>${selectOne.sex}</div>
				<div>${selectOne.country_name}</div>
				<div>${selectOne.city_name}</div>
				</div>
			</form>
		</div>


		<div id="testDiv"></div>
	</div>

	<script src="/resources/ymaker/quiz1.js"></script>

</body>
</html>