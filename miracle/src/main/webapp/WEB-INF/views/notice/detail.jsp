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
	<div class="gboard">
			<div class="category">${board.board_category}</div>
			<div class="white"><b>${board.board_title}</b></div> 
			<div>${date}</div> 
			<div>조회수:${board.view_count}</div> 
			<div>추천수:${board.board_good_count}</div> <br/>
	</div>

	
	<div class="height600">
			<div class="mgt">${board.board_content}

		</div>
	</div>
	<hr>
	
	<div  class=ico style="text-align: left;">
		<button class="material-symbols-outlined effBtn white font-16 bald" onclick="location.href='/notice/index'">
			   menu</button>
		<button id="goodBtn" class="material-symbols-outlined effBtn white font-16 bald">thumb_up</button>
	</div>		
		
			
			
			
	<div style="text-align: right;">
		<button id="modifyBtn" class="effBtn  white bald">수정</button>
		<button id="deleteBtn" class="effBtn  white bald">삭제</button>
	</div>
				
	<div>
		<script>
			const board_id = ${board.board_id};
			const board_show = ${board.board_show};
			console.log('board_show = ' + board_show);
			</script>
		</div>
	</div>
	</div>
</div>
<script src="/resources/notice/detail.js"></script>
<jsp:include page="../include/bot.jsp" />