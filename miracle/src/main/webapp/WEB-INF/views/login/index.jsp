<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<title>my page - 로고</title>
<div class="include-top">
	<div class="w-1120px mainWhite p-t30 member-info">
		<div class="divide-hr p-t10">
			<div>Login key : ${login_id}</div>
			<div>Nickname : ${login_nickname}</div>
			<div>ID : ${login_password}</div>
			<div>E-mail : ${login_email}</div>
			<c:if test="${login_admin eq '0'}">
			<div>Membership level : ${login_admin} (일반회원) </div>
			</c:if>
			<c:if test="${login_admin eq '1'}">
			<div>Membership level : ${login_admin} (관리자) </div>
			</c:if>
			
		</div>
		<br />


		<div class="divide-hr p-t10">${login_nickname} 님이 작성한 모든 게시글</div> <br />
		<div class="user-board">
		<div>카테고리</div>
		<div>글 제목</div>
		<div>글 내용</div>
		<div>조회수</div>
		<div>추천수</div>
			<c:forEach items="${membersList}" var="membersList">
				<div><p>${membersList.board_category}</p></div>
				<div><p>${membersList.board_title}</p></div>
				<div>${membersList.board_content}</div>
				<div><p>${membersList.view_count}</p></div>
				<div><p>${membersList.board_good_count}</p></div>
			</c:forEach>
		</div>


		<div class="divide-hr p-t10">${login_nickname} 님이 작성한 모든 댓글</div><br />
		<div class="user-reply">
		<div>글번호</div>
		<div>댓글 내용</div>
		<div>작성 시간</div>
			<c:forEach items="${membersReply}" var="membersReply">
				<div class="p-t10">${membersReply.board_id}</div>
				<div class="p-t10">${membersReply.reply_content}</div>
				<div class="p-t10">${membersReply.created_at}</div>
			</c:forEach>
		</div>
	</div>


</div>
<script src="/resources/login/index.js"></script>
<jsp:include page="../include/bot.jsp" />