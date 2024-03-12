<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form id="popUpForm" action="./save2" method="post">
		<div>
			<select id="countryBox" name="country_name">
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
			<select id="cityBox" name="city_name">
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
			<input type="text" placeholder="아이디" size="8" name="y_id"
				/>
		</div>
		<div>
			<input type="text" placeholder="이름" size="8" name="y_name"
				/>
		</div>
		<div></div>
		<div>
			<input type="radio" id="radioMale" name="sex" value="male" />남 
			<input type="radio" id="radioFemale" name="sex" value="female" />여
		</div>
		<button id="popUpFormBtn">저장</button>
	</form>
	<script src="/resources/ymaker/quiz2.js"></script>
</body>
</html>