<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/index.css" />
<c:url value="/resources/character/index.js" var="indexJS" />
<script src="https://kit.fontawesome.com/068a9e1e3f.js"
	crossorigin="anonymous"></script>
<title>캐릭터 랭킹 - 로고</title>
<div class="include-top">
	<div class="w-1120px h-280px main m-div1 cursor mainWhite">
		<form id="slecteForm" action="/character/index" method="get"
			class="disply-flex space-between form-padding rank-list align-center margin-top20">
			<div class="disply-flex">
				<div>
					<c:set value="전 서버/루페온/실리안/아만/아브렐슈드/카단/카마인/카제로스/니나브" var="servers" />
					<select id="selectedServer" name="char_server">
						<c:forTokens items="${servers}" delims="/" var="server">
							<c:choose>
								<c:when test="${not empty char_server}">
									<option <c:if test="${server eq '전 서버'}">value="${null}"</c:if>
										<c:if test ="${char_server eq server}">value="${server}" selected="selected"</c:if>>${server}</option>
								</c:when>
								<c:otherwise>
									<option <c:if test="${server eq '전 서버'}">value="${null}"</c:if>
										<c:if test="${server ne '전 서버'}">value="${server}"</c:if>>${server}
									</option>
								</c:otherwise>
							</c:choose>
						</c:forTokens>
					</select>
				</div>
				<div>
					<c:set
						value="전체 클래스/디스트로이어/버서커/홀리나이트/슬레이어/스트라이커/브레이커/배틀마스터/인파이터/기공사/창술사/데빌헌터/블래스터/호크아이/스카우터/건슬링어/바드/서머너/아르카나/소서리스/블레이드/데모닉/리퍼/소울이터/도화가/기상술사"
						var="chrClasss" />
					<select id="selectedClass" name="char_class">
						<c:forTokens items="${chrClasss}" delims="/" var="chrClass">
							<c:choose>
								<c:when test="${not empty char_class}">
									<option
										<c:if test="${chrClass eq '전체 클래스'}">value="${null}"</c:if>
										<c:if test ="${char_class eq chrClass}">value="${chrClass}" selected="selected"</c:if>>${chrClass}</option>
								</c:when>
								<c:otherwise>
									<option
										<c:if test="${chrClass eq '전체 클래스'}">value="${null}"</c:if>
										<c:if test="${chrClass ne '전체 클래스'}">value="${chrClass}"</c:if>>${chrClass}</option>
								</c:otherwise>
							</c:choose>
						</c:forTokens>
					</select>
				</div>
			</div>
			<div class="choice2 disply-flex">
				<input type="range" min="1415" max="1675" name="levelBar"
					class="slider" id="mySlider"
					<c:if test="${not empty char_level}">value="${char_level}"</c:if>
					value="1675"> <font class="disply-flex slider-value">
					<span id="sliderValue"></span>
				</font>
			</div>

		</form>


		<div class="mainRankList nanum-gothic-regular font-size12 border-none">
			<div>순위</div>
			<div>아이템 레벨</div>
			<div>캐릭터명</div>
			<div>클래스</div>
			<div>서버명</div>
			<div>길드명</div>
			<div>장비</div>
			<div>직업각인</div>
		</div>
		<div id="rankListCut" class="rank-list ">
			<c:forEach items="${charAll}" var="charAll">
				<div id="level-cut"
					class="mainRankList nanum-gothic-bold rank-board disply-none">
					<div>${charAll.levelrank}</div>
					<div id="level-value">${charAll.char_level}</div>
					<a href="/character/detail?search=${charAll.char_name}"
						class="display-contents">${charAll.char_name}</a>
					<div>${charAll.char_class}</div>
					<div>${charAll.char_server}</div>
					<div>${charAll.char_guild}</div>
					<div>${charAll.char_equipSet}</div>
					<div>${charAll.char_classEng}</div>
				</div>
			</c:forEach>
		</div>
		<div class="align-center disply-grid justify-center">
			<button id="load-more"> 더보기 </button>		
		</div>
		<div id="blink">
		</div>
	
	</div>
</div>
<script>
	var levelValue =
<%=request.getAttribute("levelBar")%>
	
</script>

<script src="${indexJS}"></script>

<div id="botfix" class="flex-just-center disply-none">
	<div class="mainWhite w-1120px h-280px item-center justify-between">
		<div style="font-size: 12px; width: 860px;">© 2022 KorLARK.
			KorLARK isn’t endorsed by Smilegate RPG and doesn’t reflect the views
			or opinions of Smilegate RPG or anyone officially involved in
			producing or managing Lostark. Lostark and Smilegate RPG are
			trademarks or registered trademarks of Smilegate RPG, Inc. Lostark ©
			Smilegate RPG, Inc.</div>
		<div>
			<div style="font-size: 12px">
				<a class="mainWhite underline-none" href="">이용약관</a> | <a
					class="mainWhite underline-none" href="">개인정보처리방침</a>
			</div>
			<img class="cursor" src="/resources/img/gitcat.png" alt="gitcat"
				onclick='ourGit()' />
		</div>
	</div>
</div>

</body>
</html>