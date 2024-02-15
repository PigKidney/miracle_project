<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/notice/detail.css" />
<c:url value="/resources/notice/write.js" var="noticeJS"></c:url>
<div class="include-top">
	<div class="w-1120px">

		<form action="/notice/index" method="POST" id="asd">
			<div class=asd>
				<h2>공지사항</h2>
				<div>공지카테고리 :</div>
				<div>
					<select name="board_category" id="category">
						<option >이벤트</option>
						<option >점검</option>
						<option >공지</option>
					</select>	
				</div>
				<div>제목 :</div>
				<div>
					<textarea id="boardTitle" name="board_title" rows="3" cols="105" ></textarea>
				</div>
				<div>내용 :</div>
				<div>
					<textarea id="boardContent" class="summernote" name="board_content" ></textarea>
				</div>
			</div>

			<div>
				<button id="writeConfirmBtn" type="submit" class=" round font-16 bald">글쓰기</button>
			</div>
		</form>

	</div>
</div>


<script src="${noticeJS}"></script>
<script src="/resources/button/button.js"></script>




<jsp:include page="../include/bot.jsp" />