<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/board/modify.css" />
<title>게시글 수정 - 로고</title>
<div class="include-top">
	<div class="w-1120px font-regular">

		<p style="color: white;" class="p-t10">작성글 수정</p>
		<select id="categorySelect" name="board_category"  form="modifyForm">
			<option id="sel1">잡담</option>
			<option id="sel2">구매</option>
			<option id="sel3">판매</option>
			<option id="selectedCategory" selected="selected">${read.board_category}</option>
		</select> 
		<input id="noteTitle" type="text" name="board_title" value="${read.board_title}" form="modifyForm"/>
		<textarea id="noteContent" class="summernote" name="board_content" form="modifyForm">${read.board_content}</textarea>
			
		<div style="text-align: right;">
			<button id="rewriteBtn" class="btn-two green rounded font-16 bald">작성완료</button>
		</div>
		<input type="hidden" name="board_id" value="${read.board_id}" form="modifyForm"/>
		<input type="hidden" name="view_count" value="${read.view_count}" form="modifyForm"/>
		<input type="hidden" name="user_id" value="${read.user_id}" form="modifyForm"/>
		<input type="hidden" name="board_good_count" value="${read.board_good_count}" form="modifyForm"/>
		<form action="/board/read" method="post" id="modifyForm"></form>
	</div>
</div>
<script src="/resources/board/modify.js"></script>
<jsp:include page="../include/bot.jsp" />
