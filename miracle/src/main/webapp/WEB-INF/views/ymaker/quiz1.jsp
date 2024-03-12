<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/jquery/jquery-3.7.1.min.js"></script>
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
<link rel="stylesheet" href="/resources/ymaker/quiz1.css" />

</head>

<body>

	Grid그리드
	<div class="y-main-grid">
		<form id="saveForm" method="POST">
			<div class="y-tab1-grid">
				<div>
					<input type="text" placeholder="아이디" size="8" name="y_id"
						form="saveForm" />
				</div>
				<div>
					<input type="text" placeholder="이름" size="8" name="y_name"
						form="saveForm" />
				</div>
				<div></div>
				<div>
					<input type="radio" id="radioMale" name="sex" form="saveForm"
						value="male" />남 <input type="radio" id="radioFemale" name="sex"
						form="saveForm" value="female" />여
				</div>
				<div>
					<select id="countryBox" name="country_name" form="saveForm">
						<option value="">국가</option>
						<c:forEach items="${selectCountry}" var="country">
							<c:choose>
								<c:when test="${param.country_name eq country.country_name}">
									<option selected="selected">${country.country_name}</option>
								</c:when>
								<c:otherwise>
									<option>${country.country_name}</option>
								</c:otherwise>
							</c:choose>
						</c:forEach>
					</select>
				</div>
				<div>
					<select id="cityBox" name="city_name" form="saveForm">
						<option value="">도시</option>
						<c:forEach items="${selectCity}" var="city">
							<c:if test="${param.country_name eq city.country_name}">
								<c:choose>
									<c:when test="${param.city_name eq city.city_name}">
										<option selected="selected">${city.city_name}</option>
									</c:when>
									<c:otherwise>
										<option>${city.city_name}</option>
									</c:otherwise>
								</c:choose>
							</c:if>

						</c:forEach>
					</select>
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
			<button id="modifyBtn" form="saveForm" formaction="./save">수정</button>
				<button id="readFormBtn" form="saveForm" formaction="./read">조회</button>
				<button id="saveFormBtn">저장</button>
				<button id="excelDownBtn" form="saveForm" formaction="./excel">엑셀다운</button>
				<button id="deleteFormBtn" form="delForm" formaction="./delete">삭제</button>
			</div>

		<form id=delForm method="POST">
			<div class="y-tab2-grid">
				<div>선택</div>
				<div>아이디</div>
				<div>이름</div>
				<div>성별</div>
				<div>국가</div>
				<div>도시</div>
				<c:forEach items="${selectAll}" var="all">
					<div>
						<input type="checkbox" name="y_id" value="${all.y_id}" />
					</div>
					<div>${all.y_id}</div>
					<div>${all.y_name}</div>
					<div>${all.sex}</div>
					<div>${all.country_name}</div>
					<div>${all.city_name}</div>
				</c:forEach>

			</div>
		</form>

	</div>
	<script src="/resources/ymaker/quiz1.js"></script>
</body>
</html>