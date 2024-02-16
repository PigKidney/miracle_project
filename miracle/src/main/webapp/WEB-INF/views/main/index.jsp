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
			<span class="island mainWhite bold font-20">현재 시간</span> <span
				id="islandTime" class="islandTime mainPurple bold font-20"></span>
		</div>
		<div class="m-top40 island">
			<span id="islandDate" class="mainWhite bold font-20"></span>
		</div>
	</div>

	<div
		class="w-1120px h-280px main m-div3 justify-between island-box box-background-color">

		<div id="calendarInfo" class="h-50px">
			<div id="calendarList" class="mainWhite flex aa add-cursor"></div>
		</div>
		<hr />

		<div class="flex justify-between2">

			<div class="mainWhite">
				<div class="island-border-out grid-2row">
					<div id="bossNgate-1" class="grid-3col">
						<div class="text-center"></div>
						<div class="text-center font-20 bold"></div>
						<div class="text-center font-20 bold"></div>
					</div>
					<div id="adventure-island-1" class="island-grid">
						<div class="island-img text-center2 p-t15"></div>
						<div class="grid-2row">
							<div class="text-center2 p-t10 font-16 bold"></div>
							<div class="grid-4col text-center2 p-b10"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="mainWhite">
				<div class="island-border-out grid-2row">
					<div id="bossNgate-2" class="grid-3col">
						<div class="text-center"></div>
						<div class="text-center font-20 bold"></div>
						<div class="text-center font-20 bold"></div>
					</div>
					<div id="adventure-island-2" class="island-grid">
						<div class="island-img text-center2 p-t15"></div>
						<div class="grid-2row">
							<div class="text-center2 p-t10 font-16 bold"></div>
							<div class="grid-4col text-center2 p-b10"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="mainWhite">
				<div class="island-border-out grid-2row">
					<div id="bossNgate-3" class="grid-3col">
						<div class="text-center"></div>
						<div class="text-center font-20 bold"></div>
						<div class="text-center font-20 bold"></div>
					</div>
					<div id="adventure-island-3" class="island-grid">
						<div class="island-img text-center2 p-t15"></div>
						<div class="grid-2row">
							<div class="text-center2 p-t10 font-16 bold"></div>
							<div class="grid-4col text-center2 p-b10"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<form id="loginForm2" action="/main/login" method="POST">
		<input type="hidden" name="user_id" value="${userId.value}" /> <input
			type="hidden" name="user_email" value="${userEmail.value}" /> <input
			type="hidden" name="user_password" value="${userPassword.value}" />
		<input type="hidden" name="user_nickname"
			value="${userNickname.value}" />
	</form>



	<div class="w-1120px h-320px main m-div5 flex justify-between">
		<div class="w-550h-280 grid m-top40">
			<div class="mainWhite notice-margin font-20 bold">로아 공지</div>
			<div id="noticeList"
				class="justify-between grid-main-board island-box box-background-color">
			</div>
		</div>
		<div class="w-550h-280 grid m-top40">
			<div class="mainWhite notice-margin font-20 bold">MIRACLE
				comment</div>
			<div
				class="justify-between grid-main-board island-box box-background-color ">
				<c:forEach begin="0" end="4" step="1" var="i">
					<div class="mainWhite">${i}</div>
					<div class="mainWhite">ㅇㅅㅇ/</div>
				</c:forEach>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="/resources/main/index.js">
	
</script>
<jsp:include page="../include/bot.jsp" />