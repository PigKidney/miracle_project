<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="../include/top.jsp" />
<div class="include-top">
	<div class="w-1120px">
		<div class="grid-read mainWhite">
			<span>${read.user_id}</span> 
			<span>${date}</span> 
			<span>조회 : ${read.view_count}</span> 
			<span>추천 : ${read.board_good_count}</span> <br />
			<span>${read.board_category}</span> |
			<a class="board-content" href="board/index">목록으로</a>
			<p>글번호 : ${read.board_id}</p>
			<p>글제목 : ${read.board_title}</p>
			글내용 : ${read.board_content}
		</div>

		<div style="text-align: right;">
			<button id="goodBtn" class="btn-two blue rounded font-16 bald">추천</button>
			<button id="modifyBtn" class="btn-two green rounded font-16 bald">수정하기</button>
			<button id="deleteBtn" class="btn-two green rounded font-16 bald">삭제하기</button>
		</div>

		<div class="grid-row2 mainWhite">
			<c:forEach items="${replyList}" var="replyList" varStatus="status">
				<hr />
				<div class="reply-body">
					<input type="hidden" id="rightCheck" value="${replyList.user_id}" />
					<div>${replyList.user_nickname}</div>
					<div class="mainContent">${replyList.reply_content}</div>
					<div>${replyDate[status.index]}</div>
					<input type="hidden" value="${replyList.reply_id}" name="reply_id"
						form="deleteReplyForm" /> 
					<input type="hidden"
						value="${read.board_id}" name="board_id" form="deleteReplyForm" />
					<span id="deleteReplyBtn"
						class="material-symbols-outlined cursor red">close</span>

				</div>
			</c:forEach>
			<hr />
		</div>

		<div class="grid-reply">
			<div class="mainWhite"
				style="padding-top: 30px; padding-left: 30px; padding-right: 15px;">
				${login_nickname}</div>
			<div style="padding-top: 15px;">
				<textarea id="replyTextBox" form="replyForm" name="reply_content"
					style="padding-left: 15px; padding-right: 15px; padding-top: 10px;"
					rows="3" cols="100"
					placeholder="명예훼손, 개인정보 유출, 분쟁 유발, 허위사실 유포 등의 글은 이용약관에 의해 제재는 물론 법률에 의해 처벌받을 수 있습니다."></textarea>
			</div>
			<div>
				<button id="addReplyBtn" class="btn-two red rounded font-16 bald">댓글작성</button>
			</div>
		</div>
		<input type="hidden" value="${login_id}" name="user_id" form="replyForm" /> 
		<input type="hidden" value="${read.board_id}" name="board_id" form="replyForm" />

		<form action="/board/reply" method="post" id="replyForm"></form>
		<form action="/board/deleteReply" method="post" id="deleteReplyForm"></form>
		<script>
			const board_id = ${read.board_id};
			const user_id = ${read.user_id};
		</script>
	</div>
</div>
<script src="/resources/board/read.js"></script>
<jsp:include page="../include/bot.jsp" />