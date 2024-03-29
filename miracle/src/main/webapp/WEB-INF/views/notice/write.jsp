<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/notice/write.css" />
<c:url value="/resources/notice/write.js" var="noticeJS"></c:url>
<title>공지글 작성 - 로고</title>
<div class="include-top">
	<div class="w-1120px">
		<form action="/notice/index" method="POST" >
		<p style="color: white;">작성</p>
				<div class="mgt">
					<select name="board_category" id="category">
						<option>이벤트</option>
						<option >점검</option>
						<option >공지</option>
						<option>정기상</option>
						<option >김석주</option>
						<option >서다슬</option>
						<option >양권모</option>
					</select>	
					<input id="boardTitle" placeholder="제목입력해주세요" name="board_title" />
				</div>
					
			
				
				<div class="mgt">
					<textarea id="boardContent" class="summernote" name="board_content" ></textarea>
				</div>
		

			<div class="sumit" style="text-align: right;">
				<button id="writeConfirmBtn" type="submit" class="effBtn white font-16 bald">글작성</button>
			</div>
		</form>

	</div>
</div>


<script src="${noticeJS}"></script>
<script src="/resources/button/button.js"></script>




<jsp:include page="../include/bot.jsp" />