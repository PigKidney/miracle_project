<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<link rel="stylesheet" href="/resources/include/include.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<body>
	<div id="topfix" class="flex-test">
		<div id="top-tab1" class="item-center">
			<div>
				<a href="/main/index">LOGO</a>
			</div>
		</div>
		<!-- 올리면 글자색깔바뀌면서 밑줄생기는 이벤트리스너 추가 -->
		<div id="top-tab2" class="item-center">
			<div class="item-center tab2">
			<div>
				<a href="/notice/index">공지사항</a> 
			</div>
			<div>
				<a href="/character/index">전투정보실</a>
			</div>
			<div>
				<a href="/board/index">게시판</a>
			</div>

			</div>
			<div class="top-text">
				<span class="material-symbols-outlined search"> search </span>
				 <input class="top-box" type="text" maxlength="12" spellcheck="false"
					placeholder="캐릭터명을 입력해주세요" />
			</div>
		</div>

		<div id="top-tab3" class="item-center login">
		
		<!-- dark, light 클래스 활용해서 일단 뭐 만들어야함 -->
		<div class="dark light">
			<span class="material-symbols-outlined cursor"> dark_mode </span> 
		</div>
		<div class="dark">
			<span class="material-symbols-outlined cursor"> light_mode </span> 
		</div>
		
			<span class="material-symbols-outlined cursor login-ok"> sms </span>
			<a href="/login/index">로그인</a>
			<span class="cursor login-ok">로그인하면 id보여줄거임</span>
			<span class="material-symbols-outlined cursor login-ok">expand_more</span>
		</div>
	</div>
	
	<script src="/resources/include/include.js"></script>