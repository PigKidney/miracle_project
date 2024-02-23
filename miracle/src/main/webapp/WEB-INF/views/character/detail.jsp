<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/css/detail.css" />

<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
<c:url value="/resources/character/js/detail.js" var="detailJS"></c:url>
<c:url value="/resources/character/js/avatar.js" var="avatarJS"></c:url>

<%String characterSearch = request.getParameter("search");%>
<title><%=characterSearch%> 전투정보 - 로고</title>






<div id="backBoard">

	<!-- 1200px 가로 고정 왼쪽 400px 오른쪽 800px -->
	<div id="inBoard" class="jc-sb">
		<!-- 400px -->
		<div id="rs" class="pd-10">
			<div id="chImage" class="radius15 b-1p">
				<img src="" alt="캐릭터이미지" title="캐릭터이미지" />
			</div>
			<div id="collectionPoints"
				class="radius15 b-1p color-back pd-15 dis-block">
				<div class="collection_title">수집 포인트</div>
				<div id="collection_title" class="dis-flex jc-sb"></div>
			</div>
			<div id="etc" class="radius15 b-1p color-back p15-m0 pd-15">
				<div id="etc_btn" class="etc_title">캐릭터 기타 정보</div>
				<div id="etc_btns" class="hidden">
					<h3 id="skillTap">스 킬</h3>
					<h3 id="avatar">아바타</h3>
					<h3 id="ownedCharacters">보유캐릭터</h3>
					<h3 id="guild">길 드</h3>
					<h3 id="pvpRank">증명의 전장</h3>
				</div>
				<div id="logo">
					<img src="/resources/img/LOGO.png" alt="logo" class="logo">
				</div>
			</div>
		</div>

		<!-- 800px -->
		<div id="ls" class="pd-10">
			<!-- 수집품 팝업 -->
			<div id="collectionPopup" class="hidden popup">
				<div id="collectionBar"></div>
				<div id="collectionList"></div>
			</div>
			<!-- 스킬 -->
			<div id="skillPopup" class="hidden popup">
				<div id="skillPopupBar"></div>
			</div>
			<!-- 아바타 -->
			<div id="avatarPopup" class="hidden popup">
				<div id="avatarPopupBar" class="avtarDivBoardColor"></div>
			</div>
			<!-- 보유캐릭터 -->
			<div id="ownedCharactersPopup" class="hidden popup">
				<div id="ownedCharactersPopupBar" class="pd-b-20"></div>
			</div>
			<!-- 길드 -->
			<div id="guildPopup" class="hidden popup">
				<div id="guildPopupBar"></div>
			</div>
			<!-- 증명의 전장 -->
			<div id="pvpRankPopup" class="hidden popup">
				<div id="pvpRankPopupBar"></div>
			</div>
			<!-- 장비창 총 14개  -->
			<div id="equi" class="radius15 b-1p color-back">

				<div id="l1" class=" list-def">
					<div id="l1Image" class="eq-img item-coloer-6"></div>
					<div id="l1Tooltip" class="p15-m0"></div>
				</div>

				<div id="r1" class=" list-def">
					<div id="r1Image" class=" eq-img item-coloer-6"></div>
					<div id="r1Tooltip" class="p15-m0"></div>
				</div>

				<div id="l2" class=" list-def">
					<div id="l2Image" class=" eq-img item-coloer-6"></div>
					<div id="l2Tooltip" class="p15-m0"></div>
				</div>

				<div id="r2" class=" list-def">
					<div id="r2Image" class=" eq-img item-coloer-6"></div>
					<div id="r2Tooltip" class="p15-m0"></div>
				</div>
				<div id="l3" class="list-def">
					<div id="l3Image" class=" eq-img item-coloer-6"></div>
					<div id="l3Tooltip" class="p15-m0"></div>
				</div>
				<div id="r3" class=" list-def">
					<div id="r3Image" class=" eq-img item-coloer-6"></div>
					<div id="r3Tooltip" class="p15-m0"></div>
				</div>
				<div id="l4" class="list-def">
					<div id="l4Image" class=" eq-img item-coloer-6"></div>
					<div id="l4Tooltip" class="p15-m0"></div>
				</div>
				<div id="r4" class=" list-def">
					<div id="r4Image" class=" eq-img item-coloer-6"></div>
					<div id="r4Tooltip" class="p15-m0"></div>
				</div>
				<div id="l5" class="list-def">
					<div id="l5Image" class=" eq-img item-coloer-6"></div>
					<div id="l5Tooltip" class="p15-m0"></div>
				</div>
				<div id="r5" class="list-def">
					<div id="r5Image" class=" eq-img item-coloer-6"></div>
					<div id="r5Tooltip" class="p15-m0"></div>
				</div>
				<div id="l6" class="list-def">
					<div id="l6Image" class=" eq-img item-coloer-6"></div>
					<div id="l6Tooltip" class="p15-m0"></div>
				</div>
				<div id="r6" class="list-def">
					<div id="r6Image" class=" eq-img item-coloer-6"></div>
					<div id="r6Tooltip" class="p15-m0"></div>
				</div>

				<!-- 각인 -->
				<div id="l7" class="list-def">
					<div id="l7-1" class="flex-dir-r ">
						<div id="l7-1Tooltip" class="p15-m0 flex-dir-r"></div>
					</div>
					<div id="l7-2" class="flex-dir-r">
						<div id="l7-2Tooltip" class="p15-m0 flex-dir-r"></div>
					</div>
				</div>

				<div id="r7" class="list-def">
					<div id="r7Image" class=" eq-img  item-coloer-6"></div>
					<div id="r7Tooltip" class="p15-m0"></div>
				</div>
			</div>
			<!-- 보석 11개 -->
			<div id="gem" class="radius15 b-1p color-back">
				<div id="gem-list">
					<div id="g1" class="radius10 chid-al-center">
						<div id="g1Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g2" class="radius10">
						<div id="g2Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g3" class="radius10">
						<div id="g3Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g4" class="radius10">
						<div id="g4Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g5" class="radius10">
						<div id="g5Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g6" class="radius10">
						<div id="g6Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g7" class="radius10">
						<div id="g7Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g8" class="radius10">
						<div id="g8Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g9" class="radius10">
						<div id="g9Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g10" class="radius10">
						<div id="g10Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g11" class="radius10">
						<div id="g11Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
				</div>
				<div id="gem-effects"></div>

			</div>
			<div id="property" class="radius15 jc-sb ">
				<div id="engrave" class="radius15 b-1p color-back pd-15 dis-block">
					<div class="state-title">장착 각인</div>
				</div>
				<div id="characteristic"
					class="radius15 b-1p color-back pd-15 dis-block">
					<div class="state-title">전투 특성</div>
					<div id="states"></div>
					<div class="state-title">기본 특성</div>
					<div id="states-etc"></div>
					<div class="state-title">성향</div>
					<div id="tendencies"></div>
				</div>
			</div>
			<div id='cards-states' class="radius15 b-1p color-back pd-15">
				<div id="cards" class=""></div>
				<div id="card-effect-div"></div>
			</div>
		</div>
	</div>
</div>


<div id='clear'></div>



<script src="${detailJS}"></script>
<jsp:include page="../include/bot.jsp" />
