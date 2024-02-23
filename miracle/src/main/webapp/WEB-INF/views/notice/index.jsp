
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


<title>공지사항 - 로고</title>
<div class="include-top">
	<div class="w-1120px w5">
	<div class="mainWhite bold font-24 w7">공지사항</div>
	<div class="mainWhite grid-board ">
	<div>
				
				<div></div>
				<div></div>
				<div></div>
				<div class="p-b10">조회</div>
				<div class="p-b10">추천</div>	
			</div>
		<c:forEach items="${list}" var="list" varStatus="status">
				<div class="item-center" style="height: 80px;">
					<div class="category">${list.board_category}&nbsp;&nbsp;&nbsp;</div>
					<div><p class="board-content "><a class="board-content " href="/notice/detail?board_id=${list.board_id}">${list.board_title}</a></p></div>
					<div><p>${date[status.index]}<p></div>
				
					<div><p><span></span>${list.view_count}<p></div>
					<div><p><span></span>${list.board_good_count}<p></div>
				
					
				</div>
			</c:forEach>
			
	
			
			
      </div>
      
      	<div style="display: block; text-align: center;" class="mainWhite underline-none p-t10">		
  
		
		
		<c:forEach begin="${page.startPage}" end="${page.endPage}" var="p">
			<c:choose>
				<c:when test="${p == page.nowPage }">
					<b class="nowSelectedPage">${p}</b>
				</c:when>
				<c:when test="${p != page.nowPage }">
					<a class="pageNumber nonSelectedPage" href="/notice/index?nowPage=${p }&cntPerPage=${page.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		
		
	</div>
	<div class="ntary">
      	<div class="top-text">
				<span class="material-symbols-outlined search"> search </span> 
				<input id="titleSearch" name="titleLists" class="top-box" type="text" placeholder="제목을 입력해주세요" />
		</div>
		<button id="search" class=" effBtn white bald">검색</button>
	</div>
		<div style="text-align: right;" >
			<button id="writebtn" class="fw5 effBtn white bald" >글쓰기</button>
		</div>

	</div>
</div>

<script src="/resources/notice/index.js"></script>
<jsp:include page="../include/bot.jsp" />