<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/index.css" />
<c:url value="/resources/character/index.js" var="indexJS" />
<script src="https://kit.fontawesome.com/068a9e1e3f.js"
	crossorigin="anonymous"></script>

<div class="include-top">
	<div class="w-1120px h-280px main m-div1 cursor mainWhite bord">

		<div class="mainRankList nanum-gothic-regular">
			<div>순위</div>
			<div>아이템 레벨</div>
			<div>캐릭터명</div>
			<div>클래스</div>
			<div>서버명</div>
			<div>길드명</div>
			<div>장비</div>
			<div>직업각인</div>
		</div>

		<div class="mainRankList nanum-gothic-regular">
			<c:forEach items="${charAll}" var="charAll">
				<div>${charAll.levelrank}</div>
				<div>${charAll.char_level}</div>
				<div>${charAll.char_name}</div>
				<div>${charAll.char_class}</div>
				<div>${charAll.char_server}</div>
				<div>${charAll.char_guild}</div>
				<div>${charAll.char_equipSet}</div>
				<div>${charAll.char_classEng}</div>
			</c:forEach>

		</div>

		<form action="/character/index" method="get">
			<input type="submit" />
<div>
				<select id="slectedClass" name="char_server">
					<option value="${null}">전서버</option>
					<option value="루페온">루페온</option>
					<option value="실리안">실리안</option>
					<option value="아만">아만</option>
					<option value="아브렐슈드">아브렐슈드</option>
					<option value="카단">카단</option>
					<option value="카마인">카마인</option>
					<option value="카제로스">카제로스</option>
					<option value="니나브">니나브</option>
				</select>
</div>
<div>

				<select id="selectedClass" name="char_class">
					<option value="${null}">전체클래스</option>
					<option value="디스트로이어">디스트로이어</option>
					<option value="버서커">버서커</option>
					<option value="홀리나이트">홀리나이트</option>
					<option value="슬레이어">슬레이어</option>
					<option value="스트라이커">스트라이커</option>
					<option value="브레이커">브레이커</option>
					<option value="배틀마스터">배틀마스터</option>
					<option value="인파이터">인파이터</option>
					<option value="기공사">기공사</option>
					<option value="창술사">창술사</option>
					<option value="데빌헌터">데빌헌터</option>
					<option value="블래스터">블래스터</option>
					<option value="호크아이">호크아이</option>
					<option value="스카우터">스카우터</option>
					<option value="건슬링어">건슬링어</option>
					<option value="바드">바드</option>
					<option value="서머너">서머너</option>
					<option value="아르카나">아르카나</option>
					<option value="소서리스">소서리스</option>
					<option value="블레이드">블레이드</option>
					<option value="데모닉">데모닉</option>
					<option value="리퍼">리퍼</option>
					<option value="소울이터">소울이터</option>
					<option value="도화가">도화가</option>
					<option value="기상술사">기상술사</option>
				</select>
</div>

		</form>

		<div class="choice2">
			<input type="range" min="1300" max="1675" value="1675" class="slider"
				id="mySlider">
			<p>
				값: <span id="sliderValue">1675</span>
			</p>
		</div>

	</div>
</div>

<script src="${indexJS}"></script>

<jsp:include page="../include/bot.jsp" />