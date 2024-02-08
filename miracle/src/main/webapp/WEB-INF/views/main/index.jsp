<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="../include/top.jsp" />

<link rel="stylesheet" href="/resources/main/index.css" />
<div class="include-top">
	<div class="w-1120px h-280px main m-div1 cursor">
		<div class="slider cursor">
			<div id="bannerImg1" class="slide"></div>
			<div id="bannerImg2" class="slide"></div>
			<div id="bannerImg3" class="slide"></div>
			<div id="bannerImg4" class="slide"></div>
		</div>
	</div>
	<div class="w-1120px h-280px main m-div2 flex justify-between">
		<div class="m-top40 island">
			<span class="island mainWhite bold font-20">현재 시간</span> 
			<span id="islandTime" class="islandTime mainPurple bold font-20"></span>
		</div>
		<div class="m-top40 island">
			<span id="islandDate" class="mainWhite bold font-20"></span>
		</div>
	</div>
	
	<div class="w-1120px h-280px main m-div3 justify-between">
			
			<div class="h-100px">
				<div id="calendarList" class="mainWhite grid-2row justify-between flex">
				</div>
				<div id="daylight"class="mainWhite grid-2row justify-between flex">
				</div>
			</div>
			<hr />
			
			<div class="flex justify-between">
			
				<div class="mainWhite">
							<div class="island-border-out grid-2row">
								<div class="grid-3col">
									<div>img</div>
									<div>필드보스</div>
									<div>시간</div>
								</div>
								<div class="grid-3col">
									<div>ㅇ</div>
									<div>ㅅ</div>
									<div>ㅇ</div>
								</div>
							</div>
				</div>
				<div class="mainWhite">
							<div class="island-border-out grid-2row">
							<div class="grid-3col">
									<div>img</div>
									<div>우렁선</div>
									<div>시간</div>
								</div>
								<div class="grid-3col">
									<div>ㅇ</div>
									<div>ㅠ</div>
									<div>ㅇ</div>
								</div>
							</div>
				</div>
				<div class="mainWhite">
							<div class="island-border-out grid-2row">
							<div class="grid-3col">
									<div>img</div>
									<div>카오스게이트</div>
									<div>시간</div>
								</div>
								<div class="grid-3col">
									<div>ㅎ</div>
									<div>ㅅ</div>
									<div>ㅎ</div>
								</div>
							</div>
				</div>
			</div>
	</div>

<form id="loginForm2"action="/main/login" method="POST">
<input type="hidden" name="user_id" value="${userId.value}" />
<input type="hidden" name="user_email" value="${userEmail.value}" />
<input type="hidden" name="user_password" value="${userPassword.value}" />
<input type="hidden" name="user_nickname" value="${userNickname.value}" />
</form>



	<div class="w-1120px h-320px main m-div5 flex justify-between">
		<div class="w-550h-280 grid m-top40">
			<div class="mainWhite">로아 공지</div>
			<div id="noticeList" class="justify-between grid-main-board">
			</div>
		</div>
		<div class="w-550h-280 grid m-top40">
			<div class="mainWhite">로고 공지</div>
			<div class="justify-between grid-main-board">
			<c:forEach begin="0" end="4" step="1" var="i">
				<div class="mainWhite">${i}</div>
				<div class="mainWhite">ㅇㅠㅇ/</div>
			</c:forEach>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="/resources/main/index.js">
</script>
<jsp:include page="../include/bot.jsp" />