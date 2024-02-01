<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="../include/top.jsp" />
<div class="include-top">
	<div class="w-1120px">
		<div class="grid-read mainWhite">
			<span>${read.user_id}</span> <span>${date}</span> <span>조회 :
				${read.view_count}</span> <span>추천 : ${read.board_good_count}</span> <br />
				<span>${read.board_category}</span> <a  class="board-content" href="board/index">목록으로</a> |<span>댓글개수(??)</span>
			<p>글번호 : ${read.board_id}</p>
			<p>글제목 : ${read.board_title}</p>
			글내용 : ${read.board_content}
		</div>

		<div style="text-align: right;">
			<button id="modifyBtn" class="btn-two green rounded font-16 bald">수정하기</button>
			<button id="deleteBtn" class="btn-two green rounded font-16 bald">삭제하기</button>
		</div>
		
		<div>
		
		</div>
		<script>
			const board_id = ${read.board_id};
			console.log('board_id = ' + board_id);
		</script>
	</div>
</div>
<script src="/resources/board/read.js"></script>
<jsp:include page="../include/bot.jsp" />