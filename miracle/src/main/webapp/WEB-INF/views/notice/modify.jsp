<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />

<div class="include-top">
	<div class="w-1120px">
		<form action="/notice/detail" method="post" id="modiBtnForm">
		<table border="3">
				<tr>
					<th>카테고리</th>
					<td><input type="text" name="board_category" value="${board.board_category}"></input></td>
				</tr>
				<tr>
					<th>글 제목</th>
					<td><input type="text" name="board_title" value="${board.board_title}"> </input></td>
				</tr>
				<tr>
					<th>글 내용</th>
					<td><input class="summernote" name="board_content" value="${board.board_content}"></input></textarea></td>
				</tr>

			</table>
			<input type="hidden" name="board_id" value="${board.board_id}">
		<button type="submit">수정완료</button>
	</form>
		
	</div>
</div>


<script src="/resources/notice/write.js"></script>


<jsp:include page="../include/bot.jsp" />