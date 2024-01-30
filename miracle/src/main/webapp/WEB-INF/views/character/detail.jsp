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
			<div id="chImage" class="radius b-1p  ">
				<img src="" alt="캐릭터이미지" title="캐릭터이미지"/>
			</div>
			<div id="rank" class="radius b-1p "></div>
			<div id="eta" class="radius b-1p "></div>
		</div>

		<!-- 800px -->
		<div id="ls" class="pd-10">
			<!-- 장비창 총 14개  -->
			<div id="equi" class="radius b-1p ">
			
				<div id="l1" class="b-1p">
					<div id="l1Image" class="bc-1 eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l " />
					</div>
					<div id="l1Tooltip" class="p15-m0"></div>
				</div>
				
				<div id="r1" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				
				<div id="l2" class="b-1p ">
					<div id="l2Image" class="bc-1 eq-img">
						<img src="" alt="" title="" class="w-h50 eq-l" />
					</div>
					<div id="l2Tooltip" class="p15-m0"></div>
				</div>
				
				<div id="r2" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="l3" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="r3" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="l4" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="r4" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="l5" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="r5" class="b-1p ">
					<img src="" alt="" title="">
				</div>
				<div id="l6" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="r6" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="l7" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
				<div id="r7" class="b-1p ">
					<img src="" alt="" title=""/>
				</div>
			</div>
			<!-- 보석 11개 -->
			<div id="gem" class="radius b-1p ">
				<div id="gem-list">
					<div id="g1" class="b-1p">멸</div>
					<div id="g2" class="b-1p">멸</div>
					<div id="g3" class="b-1p">멸</div>
					<div id="g4" class="b-1p">멸</div>
					<div id="g5" class="b-1p">멸</div>
					<div id="g6" class="b-1p">멸</div>
					<div id="g7" class="b-1p">홍</div>
					<div id="g8" class="b-1p">홍</div>
					<div id="g9" class="b-1p">홍</div>
					<div id="g10" class="b-1p">홍</div>
					<div id="g11" class="b-1p">홍</div>
				</div>
				<div id="gem-sit">
					---------------------------------------------------------------------------
				</div>
			</div>
			<div id="property" class="radius jc-sb">
				<div id="characteristic" class="radius b-1p"></div>
				<div id="engrave" class="radius b-1p"></div>
			</div>
			<div id="card" class="radius b-1p"></div>
		</div>
	</div>
</div>

<button id="exbtn">불러오기</button>
<button id="btn">222</button>



<script src="${detailJS}"></script>
<jsp:include page="../include/bot.jsp" />
