
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/notice/index.css" />
<c:url value="/resources/notice/index.js" var="indexJS"></c:url>
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
 
<%
String titleSearch = request.getParameter("titleSearch");
%>



<div class="include-top">
	<div class="w-1120px">
	<div class="mainWhite bold font-16">공지사항</div>
	<div class="mainWhite grid-board ">
		<c:forEach items="${list}" var="list" varStatus="status">
				<div class="item-center">
					<div class="category">${list.board_category}&nbsp;&nbsp;&nbsp;</div>
					<div><p class="board-content "><a class="board-content " href="/notice/detail?board_id=${list.board_id}">${list.board_title}</a></p></div>
					<div><p>${date[status.index]}<p></div>
					<div><p><span class="material-symbols-outlined">visibility</span>${list.view_count}<p></div>
					<div><p><span class="material-symbols-outlined">thumb_up</span>${list.board_good_count}<p></div>
				</div>
			</c:forEach>
			
	
			
			
      </div>
      
      	<div style="display: block; text-align: center;" class="mainWhite underline-none">		
      	<!-- 탭내 처음페이지가 1아니면 <누르면 432 로 가게하는 기능 -->
		<c:if test="${page.startPage != 1 }">
			<a href="/notice/index?nowPage=${page.startPage - 1}&cntPerPage=${page.cntPerPage}">&lt;</a>
		</c:if>
		
		
		<c:forEach begin="${page.startPage}" end="${page.endPage}" var="p">
			<c:choose>
				<c:when test="${p == page.nowPage }">
					<b>${p}</b>
				</c:when>
				<c:when test="${p != page.nowPage }">
					<a class="pageNumber" href="/notice/index?nowPage=${p }&cntPerPage=${page.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		
			<!-- 탭 내 마지막 페이지가  맨 마지막 페이지아니면 누르면이동시키기 -->
		<c:if test="${page.endPage != page.lastPage}">
			<a href="/notice/index?nowPage=${page.endPage+1 }&cntPerPage=${page.cntPerPage}">&gt;</a>
		</c:if>
	</div>
      	<div class="top-text">
				<span class="material-symbols-outlined search"> search </span> 
				<input id="titleSearch" name="titleLists" class="top-box" type="text" placeholder="제목을입력해주세요" />
		</div>
		
		<div style="text-align: right;">
			<button id="writebtn" class=" round1 white bald"" >글쓰기</button>
		</div>

	</div>
</div>

<script src="/resources/notice/index.js"></script>
<jsp:include page="../include/bot.jsp" />