	<%@page import="com.ezen.miracle.dto.LogoBoardDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="/resources/notice/detail.css" />


<div class="include-top">
	<div class="w-1120px">
	<div class="grid-read mainWhite">
	<form action="/notice/modify" method="get" id="modiBtnForm">
	<div class="grid-read mainWhite">
			<span>${board.board_category}</span> 
			<span>${board.board_title}</span> 
			<span>${board.board_content}</span> 
			<span>${date}</span> 
			<span>조회수:${board.view_count}</span> 
			<span>추천수:${board.board_good_count}</span> <br/>
		</div>
			
			<input type="hidden" name="board_id" value="${board.board_id}"></input>
			<button type="submit" id="modiBtn" class=" round2 white font-16 bald white">수정하기</button>
		</form>
		<form action="/notice/delete" method="get">
			<input type="hidden" name="board_id" value="${board.board_id}"/></input>
			<button type="submit" id="delBtn" class=" round2 white font-16 bald white">삭제하기</button>
		</form>
		
		<div style="text-align: right;">
			<button id="goodBtn" class=" font-16 bald"><span class="material-symbols-outlined">thumb_up</span></button>
		</div>		
		
		<div class>
			<button class="material-symbols-outlined" onclick="location.href='/notice/index'">
			    menu
			</button>
			<button id="arrowd" class="material-symbols-outlined" >
				expand_less
			</button>
			<button id="arrowu" class="material-symbols-outlined" >
				expand_more
			</button>
			
			<script>
			let board_id = ${board.board_id};
			const board_show = ${board.board_show};
			console.log('board_show = ' + board_show);
			</script>
		</div>
	</div>
</div>
<script src="/resources/notice/detail.js"></script>
<jsp:include page="../include/bot.jsp" />