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
			<div id="popUpGrid">
				<div>아이디</div>
				<div>
					<input type="text" size="8" name="y_id" value="${param.y_id}"
						readonly="readonly" />
				</div>
				<div>이름</div>
				<div>
					<input type="text" placeholder="이름" size="8" name="y_name" />
				</div>
				<div>성별</div>
				<div>
					<input type="radio" id="radioMale" name="sex" value="male" />남 <input
						type="radio" id="radioFemale" name="sex" value="female" />여
				</div>
				<div>국가</div>
				<div>
					<select id="countryBox" name="country_name">
						<option value="">국가</option>
					</select>
				</div>
				<div>도시</div>
				<div>
					<select id="cityBox" name="city_name">
						<option value="">도시</option>
					</select>
				</div>
				<div>
					<button id="popUpFormBtn">저장</button>
				</div>
				<div>
					<button id="cancelBtn">취소</button>
				</div>
			</div>
		</div>
	</form>
	<script src="/resources/ymaker/quiz2.js"></script>
</body>
</html>