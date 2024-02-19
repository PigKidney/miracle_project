<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/board/write.css" />
<div class="include-top">
	<div class="w-1120px">
		<p style="color: white;" class="p-t10 p-b10">게시글 작성</p>
		<input id="userId1" type="hidden" value="${login_id}" name="user_id" form="writeForm"/>
			<select name="board_category" form="writeForm">
				<option>잡담</option>
				<option>구매</option>
				<option>판매</option>
			</select>
			<input id="noteTitle" type="text" name="board_title" form="writeForm" /> 
			<textarea id="noteContent" class="summernote" name="board_content" form="writeForm" ></textarea>
			<div style="text-align: right;">
				<button id="writeBtn" class="btn-two green rounded font-16 bald">작성완료</button>
			</div>
		<form action="/board/index" method="post" id="writeForm"></form>
	</div>
</div>
<script src="/resources/board/write.js"></script>
<script src="/resources/button/button.js"></script>
<jsp:include page="../include/bot.jsp" />