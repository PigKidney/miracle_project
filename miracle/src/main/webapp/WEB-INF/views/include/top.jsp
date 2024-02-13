<%@page import="oracle.jdbc.internal.XSSessionNamespace"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8" name='view-transition'>
<title></title>
<script src="/resources/jquery/jquery-3.7.1.min.js"></script>
<link rel="stylesheet" href="/resources/button/button.css" />
<link rel="stylesheet" href="/resources/board/index.css" />
<link rel="stylesheet" href="/resources/board/read.css" />
<link rel="stylesheet" href="/resources/summernote/summernote-lite.css">
<script src="/resources/summernote/summernote-lite.js"></script>
<script src="/resources/summernote/lang/summernote-ko-KR.js"></script>
<link rel="stylesheet" href="/resources/include/include.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<%

Long user_id = (Long) session.getAttribute("login_id");
String user_nickname = (String) session.getAttribute("login_nickname");
String user_password = (String) session.getAttribute("login_password");
String user_email = (String) session.getAttribute("login_email");
Object isAdmin = session.getAttribute("login_admin");
String characterSearch = request.getParameter("characterSearch");
%>
</head>
<body>
<script>
const loginCheck = '${login_admin}';
const idCheck = '${login_id}';
const nameCheck = '${login_nickname}';
console.log("loginCheck : " + loginCheck);
console.log("user_id : " + idCheck);
</script>

	<div id="topfix" class="flex-test">
		<div id="top-tab1" class="item-center">
			<div>
				<a class="mainWhite bold underline-none" href="/main/index">LOGO</a>

			</div>
		</div>
		<!-- 올리면 글자색깔바뀌면서 밑줄생기는 이벤트리스너 추가 -->
		<div id="top-tab2" class="item-center">
			<div class="item-center tab2">
				<div>
					<a class="mainWhite bold underline-none" href="/notice/index">공지사항</a>
				</div>
				<div>
					<a class="mainWhite bold underline-none" href="/character/index">전투정보실</a>
				</div>
				<div>
					<a class="mainWhite bold underline-none" href="/board/index">게시판</a>
				</div>

			</div>
			<div class="top-text">
				<span class="material-symbols-outlined search"> search </span> 
				<input class="top-box" type="text" maxlength="12" spellcheck="false"
					id="characterSearch" name="characterSearch" placeholder="캐릭터명을 입력해주세요" />
			</div>
		</div>

		<div id="top-tab3" class="item-center login tab3">

			<!-- dark, light 클래스 활용해서 일단 뭐 만들어야함 -->
			<div class="dark">
				<span class="material-symbols-outlined cursor"> dark_mode </span>
			</div>
			<div class="dark light">
				<span class="material-symbols-outlined cursor"> light_mode </span>
			</div>
			<div id="smsBtn" class="hide">
				<span class="mainWhite material-symbols-outlined cursor">sms</span>
			</div>
		
		<div id="showbox" class="">
					<div class="item-center justify-between cursor">
			
						<div class="">
							<a id="loginTag" class="mainWhite underline-none" href="/login/index">
							
							</a>
						</div>
						<div id="nickName" class="mainWhite">
							
						</div>
						<div id="addadd" class="hide">
							<span class="material-symbols-outlined">expand_more</span>
						</div>
					</div>
				<div class="dropdown-content">
						<a href="">MY PAGE </a>
						<a href="">ㅇㅅㅇ</a>
						<a href="/main/logout">LOG OUT</a>
				</div>
		</div>

		</div>
	</div>


	<form id="loginForm" action="/main/index" method="post">
		<input id="userId" name="user_id" type="hidden" value="${user_id.value}" /> 
		<input id="userEmail" name="user_email" type="hidden" value="${user_email.value}" /> 
		<input id="userPassword" name="user_password" type="hidden" value="${user_password.value}" /> 
		<input id="userNickname" name="user_nickname" type="hidden" value="${user_nickname.value}" />
	</form>

	<script src="/resources/include/include.js"></script>
