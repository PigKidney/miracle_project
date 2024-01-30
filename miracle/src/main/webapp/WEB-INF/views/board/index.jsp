<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<div class="include-top">
	<div class="w-1120px">
		<div class="mainWhite bold font-24">게시판</div>
		<div class="mainWhite grid-board">
			<c:forEach items="${list}" begin="0" end="9" var="list">
				<div>${list.board_id}</div>
				<div>${list.board_category}</div>
				<div>${list.board_content}</div>
				<div>${list.user_id}</div>
				<div>${list.created_at}</div>
				<div>${list.view_count}</div>
				<div>${list.board_good_count}</div>
			</c:forEach>
		</div>
		<div style="text-align: right;">
			<button id="beginningToWriteBtn" class="btn-two green rounded font-16 bald">글쓰기</button>
		</div>

		<a class="mainWhite" href="/board/write">글쓰기</a>


		<div class="slider">
			<div class="slide"></div>
			<div class="slide"></div>
			<div class="slide"></div>
		</div>



	</div>
</div>
<script src="/resources/board/index.js"></script>
<script src="/resources/board/write.js"></script>
<jsp:include page="../include/bot.jsp" />
