<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/notice/write.css" />
<jsp:include page="../include/top.jsp" />

<div class="include-top">
	<div class="w-1120px">
	<p style="color: white;">수정</p>
		<select id="categorySelect" name="board_category"  form="modifyForm">
			<option id="sel1">공지</option>
			<option id="sel2">이벤트</option>
			<option id="sel3">점검</option>
			<option id="selectedCategory" selected="selected">${board.board_category}</option>
		</select> 
		<input id="noteTitle" type="text" name="board_title" value="${board.board_title}" form="modifyForm"/>
		<textarea id="noteContent" class="summernote" name="board_content" form="modifyForm">${board.board_content}</textarea>
			
		<div class="sumit" style="text-align: right;">
			<button id="rewriteBtn" class="effBtn white bald">수정완료</button>
		</div>
		<input type="hidden" name="board_id" value="${board.board_id}" form="modifyForm"/>
		<input type="hidden" name="view_count" value="${board.view_count}" form="modifyForm"/>
		<input type="hidden" name="user_id" value="${board.user_id}" form="modifyForm"/>
		<input type="hidden" name="board_good_count" value="${board.board_good_count}" form="modifyForm"/>
		<form action="/notice/detail" method="post" id="modifyForm"></form>
	</div>
</div>
<script src="/resources/notice/modify.js"></script>



<jsp:include page="../include/bot.jsp" />