<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/css/detail.css" />
<c:url value="/resources/character/js/detail.js" var="detailJS"></c:url>







<div id="backBoard">

	<!-- 1200px 가로 고정 왼쪽 400px 오른쪽 800px -->
	<div id="inBoard" class="jc-sb">
		<!-- 400px -->
		<div id="rs" class="pd-10">
			<div id="chImage" class="radius b-1p">
				<img src="" alt="캐릭터이미지" title="캐릭터이미지"/>
			</div>
			<div id="rank" class="radius b-1p color-back"></div>
			<div id="eta" class="radius b-1p color-back"></div>
		</div>

		<!-- 800px -->
		<div id="ls" class="pd-10">
			<!-- 장비창 총 14개  -->
			<div id="equi" class="radius b-1p color-back">
			
				<div id="l1" class=" list-def">
					<div id="l1Image" class="eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="l1Tooltip" class="p15-m0"></div>
				</div>
				
				<div id="r1" class=" list-def">
					<div id="r1Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r1Tooltip" class="p15-m0"></div>
				</div>
				
				<div id="l2" class=" list-def">
					<div id="l2Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l2Tooltip" class="p15-m0"></div>
				</div>
				
				<div id="r2" class=" list-def">
					<div id="r2Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r2Tooltip" class="p15-m0"></div>
				</div>
				<div id="l3" class="list-def">
					<div id="l3Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l3Tooltip" class="p15-m0"></div>
				</div>
				<div id="r3" class=" list-def">
					<div id="r3Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r3Tooltip" class="p15-m0"></div>
				</div>
				<div id="l4" class="list-def">
					<div id="l4Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l4Tooltip" class="p15-m0"></div>
				</div>
				<div id="r4" class=" list-def">
					<div id="r4Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r4Tooltip" class="p15-m0"></div>
				</div>
				<div id="l5" class="list-def">
					<div id="l5Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l5Tooltip" class="p15-m0"></div>
				</div>
				<div id="r5" class="list-def">
					<div id="r5Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r5Tooltip" class="p15-m0"></div>
				</div>
				<div id="l6" class="list-def">
					<div id="l6Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l6Tooltip" class="p15-m0"></div>
				</div>
				<div id="r6" class="list-def">
					<div id="r6Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="r6Tooltip" class="p15-m0"></div>
				</div>
				
				<!-- 각인 -->
				<div id="l7" class="list-def">
					<div id="l7-1" class="flex-dir-c ">
						<img src="" alt="" title="" class="w-h50 radius100" />
						<div id="l7-1Tooltip" class="p15-m0"></div>
					</div>
					<div id="l7-2" class="flex-dir-c">
						<img src="" alt="" title="" class="w-h50 radius100 " />
						<div id="l7-2Tooltip" class="p15-m0"></div>
					</div>
				</div>
				
				<div id="r7" class="list-def">
					<div id="r7Image" class=" eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l  " />
					</div>
					<div id="r7Tooltip" class="p15-m0"></div>
				</div>
			</div>
			<!-- 보석 11개 -->
			<div id="gem" class="radius b-1p color-back">
				<div id="gem-list">
					<div id="g1" class="gem-radius chid-al-center">
						<div id="g1Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g2" class="gem-radius">
						<div id="g2Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g3" class="gem-radius">
						<div id="g3Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g4" class="gem-radius">
						<div id="g4Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g5" class="gem-radius">
						<div id="g5Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g6" class="gem-radius">
						<div id="g6Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g7" class="gem-radius">
						<div id="g7Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g8" class="gem-radius">
						<div id="g8Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g9" class="gem-radius">
						<div id="g9Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g10" class="gem-radius">
						<div id="g10Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
					<div id="g11" class="gem-radius">
						<div id="g11Image" class="">
							<img src="" alt="" title="" class="" />
						</div>
					</div>
				</div>
				<div id="gem-effects">
				
				</div>
			</div>
			<div id="property" class="radius jc-sb ">
				<div id="engrave" class="radius b-1p color-back pd-15 dis-block">
					<div class="state-title">장착 각인</div>
				</div>
				<div id="characteristic" class="radius b-1p color-back pd-15 dis-block">
					<div class="state-title">전투 특성</div>
					<div id="states"></div>
					<div class="state-title">기본 특성</div>
					<div id="states-etc"></div>
					<div class="state-title">성향</div>
					<div id="tendencies"></div>
				</div>
			</div>
			<div id='cards-states' class="radius b-1p color-back pd-15">
				<div id="cards" class=""></div>
			</div>
		</div>
	</div>
</div>

<button id="exbtn">불러오기</button>
<button id="btn">222</button>



<script src="${detailJS}"></script>
<jsp:include page="../include/bot.jsp" />
