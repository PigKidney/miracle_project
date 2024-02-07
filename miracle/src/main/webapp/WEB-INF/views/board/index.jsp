<%@page import="java.util.ArrayList"%>
<%@page import="com.ezen.miracle.dto.LogoBoardDTO" %>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />

<div class="include-top">
	<div class="w-1120px">
		<div class="mainWhite bold font-24">게시판</div>
		<div class="mainWhite grid-board">
			<c:forEach items="${list}" begin="0" end="9" var="list" varStatus="status">
			<div class="item-center">
				<div><p>${list.board_id}</p></div>
				<div><p>${list.board_category}  &nbsp;&nbsp;&nbsp;</p></div>
				<div><p class="board-content"><a class="board-content" href="/board/read?board_id=${list.board_id}">${list.board_title}</a></p></div>
				<div><p>|&nbsp;&nbsp;&nbsp;${list.user_id}&nbsp;&nbsp;&nbsp;|</p></div>
				<div><p>${date[status.index]}</p></div>
				<div><p>${list.view_count}</p></div>
				<div><p>${list.board_good_count}</p></div>
			</div>
			</c:forEach>
		</div>
		<div style="text-align: right;">
			<button id="beginningToWriteBtn" class="btn-two green rounded font-16 bald">글쓰기</button>
		</div>
		<div class="slider1">
			<div class="slide1"></div>
			<div class="slide1"></div>
			<div class="slide1"></div>
		</div>
	</div>
</div>
<script src="/resources/board/index.js"></script>
<script src="/resources/board/write.js"></script>
<jsp:include page="../include/bot.jsp" />
