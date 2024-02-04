<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="../include/top.jsp" />

<link rel="stylesheet" href="/resources/main/index.css" />
<div class="include-top">
	<div class="w-1120px h-280px main m-div1">
		<div class="slider">
			<div id="bannerImg1" class="slide"></div>
			<div id="bannerImg2 " class="slide"></div>
			<div id="bannerImg3" class="slide"></div>
			<div id="bannerImg4" class="slide"></div>
		</div>
	</div>
	<div class="w-1120px h-280px main m-div2 flex justify-between">
		<div class="m-top40 island">

			<span class="island mainWhite bold font-20">현재 시간</span> <span
				id="islandTime" class="islandTime mainPurple bold font-20"></span>
		</div>
		<div class="m-top40 island">
			<span id="islandDate" class="mainWhite bold font-20"></span>
		</div>

	</div>
	<div class="w-1120px h-280px main m-div3 flex justify-between">

		<div>
			<img alt="배너 이미지" height="298" data-nimg="1"
				src="https://cdn-lostark.game.onstove.com/uploadfiles/banner/c8cfe8f7128547eebf34aaba9b0696ff.jpg">
		</div>
		<div>
			<img src="https://cdn-lostark.game.onstove.com/uploadfiles/banner/e7a08f22b56549e1868cfa7bdc1b1913.jpg"
				height="298" />
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
			<div class="mainWhite">ㅇㅅㅇ</div>
		</div>
		<div class="w-550h-280 grid m-top40">
			<div class="mainWhite">로고 공지</div>
			<div class="mainWhite">ㅎㅅㅎ</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="/resources/main/index.js">
	
</script>
<jsp:include page="../include/bot.jsp" />