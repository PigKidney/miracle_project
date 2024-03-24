<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/jquery/jquery-3.7.1.min.js"></script>
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
<link rel="stylesheet" href="/resources/ymaker/quiz1.css" />

</head>

<body>

	Grid그리드
	<div class="y-main-grid">
		<form id="saveForm" method="GET" action="./quiz1">
			<div class="y-tab1-grid">
				<div>
					<input type="text" placeholder="<spring:message code="boxid"></spring:message>" size="10" name="y_id"
						form="saveForm" id="yId" />
				</div>
				<div>
					<input type="text" placeholder="<spring:message code="boxname"></spring:message>" size="14" name="y_name"
						form="saveForm" id="yName" />
				</div>
				<div>
					<input type="radio" id="radioMale" name="sex" form="saveForm"
						value="남" /><spring:message code="male"></spring:message> <input type="radio" id="radioFemale" name="sex"
						form="saveForm" value="여" /> <spring:message code="female"></spring:message> 
				</div>
				<div>
					<input type="radio" name="lang" class="langko" value="ko" checked="checked"
					<c:if test="${param.lang eq 'ko'}">checked="checked" </c:if>
					/>한국어 
					<input type="radio" name="lang" class="langen" value="en"
					<c:if test="${param.lang eq 'en'}">checked="checked" </c:if>
					/>English
				</div>
				<div>
					<select id="countryBox" name="country_name" form="saveForm">
						<option value=""><spring:message code="country"></spring:message></option>
					</select>
				</div>
				<div>
					<div class="cityMainBox">
						<input type="checkbox" name="city_name" value="ALL" /><spring:message code="cityall"></spring:message>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
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
			<button id="readFormBtn" type="button"><spring:message code="search"></spring:message></button>
			<button id="addBtn"><spring:message code="insert"></spring:message></button>
			<button id="addRowFormBtn"><spring:message code="save"></spring:message></button>
			<button id="excelDownBtn" form="saveForm" formaction="./excel"><spring:message code="excel"></spring:message></button>
			<button id="deleteFormBtn" form="delForm" formaction="./delete"><spring:message code="delete"></spring:message></button>
		</div>

		<div class="y-tab2-grid">
			<div class="add-grid2 row-bar">

				<div class="row-bar-height"><spring:message code="select"></spring:message></div>
				<div class="row-bar-height"><spring:message code="id"></spring:message></div>
				<div class="row-bar-height"><spring:message code="name"></spring:message></div>
				<div class="row-bar-height"><spring:message code="sex"></spring:message></div>
				<div>
					<div><spring:message code="location"></spring:message></div>
					<div class="ms4-grid">
						<div><spring:message code="country"></spring:message></div>
						<div><spring:message code="city"></spring:message></div>
					</div>
				</div>

			</div>
			<form action="./save" method="post" id="addRowForm">
				<div id="addDataList" class="add-grid add-row"></div>
			</form>
			<form id="delForm" method="POST">
				<div id="selectedList" class="">
				</div>
				
				<!-- 
					<div class="dbcBox">
						<c:forEach items="${ylist}" var="list" begin="0" end="4">
							<c:choose>
								<c:when test="${list.sex eq '남'}">
									<div class="test-color add-grid plzDoubleClick add-row male-row dbcEvent" 
									ondblclick="window.open('./quiz2?y_id=${list.y_id}&y_name=${y_name}&sex=${list.sex}&country_name=${list.country_name}&city_name=${list.city_name}','','width=1200,height=800,top=200,left=200')">
										<div>
											<input type="checkbox" />
										</div>
										<div>${list.y_id}</div>
										<div>${list.y_name}</div>
										<div>${list.sex}</div>
										<div>${list.country_name}</div>
										<div>${list.city_name}</div>
									</div>
								</c:when>

								<c:otherwise>
									<div
										class="test-color add-grid plzDoubleClick add-row female-row dbcEvent" ondblclick="window.open('./quiz2?y_id=${list.y_id}&y_name=${y_name}&sex=${list.sex}&country_name=${list.country_name}&city_name=${list.city_name}','','width=1200,height=800,top=200,left=200')">
										<div>
											<input type="checkbox" />
										</div>
										<div>${list.y_id}</div>
										<div>${list.y_name}</div>
										<div>${list.sex}</div>
										<div>${list.country_name}</div>
										<div>${list.city_name}</div>
									</div>

								</c:otherwise>
							</c:choose>
						</c:forEach>
					</div>
				 -->
					
<!-- 
					<c:choose>
						<c:when test="${ypage.startPage != 1}">
							&lt;
						</c:when>
						<c:otherwise>&lt;</c:otherwise>
					</c:choose>

					<c:forEach begin="${ypage.startPage}" end="${ypage.endPage}" var="p">
						<c:choose>
							<c:when test="${p == ypage.nowPage}">
								<b class="nowSelectedPage">${p}</b>
							</c:when>
							<c:when test="${p != ypage.nowPage}">
								${p}
							</c:when>
						</c:choose>
					</c:forEach>

					<c:choose>
						<c:when test="${ypage.endPage != ypage.lastPage}">
							&gt;
						</c:when>
						<c:otherwise>&gt;</c:otherwise>
					</c:choose>
 -->
 <div id="pageDiv">
 
 </div>
 
					
			</form>
			<div class="pageDiv"></div>
		</div>
		<div id="testDiv"></div>
	</div>

	<script src="/resources/ymaker/quiz1.js"></script>
</body>
</html>