<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/jquery/jquery-3.7.1.min.js"></script>
<link rel="stylesheet" href="/resources/ymaker/quiz2.css" />
</head>
<body>
	<form id="popUpForm" action="./save2" method="post">
		<div id="popUpMain">
		<button id="linkBtn" type="button">Link</button>
			<div id="popUpGrid">
				<div>아이디</div>
				<div>
					<input type="text" size="8" name="y_id" id="popUpId"
						value="${param.y_id}" readonly="readonly" />
				</div>
				<div>이름</div>
				<div>
					<input type="text" id="popUpName" placeholder="이름" size="8"
						name="y_name" value="${param.y_name}" />
				</div>
				<div>성별</div>
				<div>
					<input type="radio" id="radioMale" name="sex" value="남"
						<c:if test="${param.sex eq '남'}">checked="checked"</c:if>>남
					<input type="radio" id="radioFemale" name="sex" value="여"
						<c:if test="${param.sex eq '여'}">checked="checked"</c:if> />여
				</div>
				<div>국가</div>

				<div>
					<select id="countryBox" name="country_name">
						<option value="${param.country_name}">${param.country_name}</option>
					</select>
				</div>
				<div>도시</div>
				<div>
					<select id="cityBox" name="city_name">
						<option value="${param.city_name}">${param.city_name}</option>
					</select>
				</div>
				<div>
					<button type="button" id="popUpFormBtn">저장</button>
				</div>
				<div>
					<button type="button" id="cancelBtn">취소</button>
				</div>
			</div>
		</div>
	</form>
	<script src="/resources/ymaker/quiz2.js"></script>
</body>
</html>