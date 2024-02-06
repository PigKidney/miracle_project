<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/index.css" />
<c:url value="/resources/character/index.js" var="indexJS" />
<script src="https://kit.fontawesome.com/068a9e1e3f.js" crossorigin="anonymous"></script>


<div class="flex-container">
<div>
	<div class="toprank">
		<a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
			<div class="character-card">
				<div class="image-container">
					<img src="https://example.com/image1.jpg" alt="Character 1">
				</div>
				<div class="overlay"></div>
				<div class="rank-badge">
					
				</div>
				<div class="text-content">
					<p class="class-name">Class 1</p>
					<p class="character-name">Character Name 1</p>
				</div>
			</div>
		</a> <a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
			<div class="character-card">
				<div class="image-container">
					<img src="https://example.com/image2.jpg" alt="Character 2">
				</div>
				<div class="overlay"></div>
				<div class="rank-badge">
					<svg>
                    	<path></path>
                	</svg>
				</div>
				<div class="text-content">
					<p class="class-name">Class 2</p>
					<p class="character-name">Character Name 2</p>
				</div>
			</div>
		</a> <a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
			<div class="character-card">
				<div class="image-container">
					<img src="https://example.com/image3.jpg" alt="Character 3">
				</div>
				<div class="overlay"></div>
				<div class="rank-badge">
					<svg>
                    <path></path>
                </svg>
				</div>
				<div class="text-content">
					<p class="class-name">Class 3</p>
					<p class="character-name">Character Name 3</p>
				</div>
			</div>
		</a>
	</div>
	<div>
		<br />
		<button id="btn1"> 1번 이미</button>
		<br />
	</div>



	<div class="flex-header">
		<div class="choice">
			<div id="server">
				<select name="" id="serverSelect">
					<option value="">전서버</option>
					<option value="루페온">루페온</option>
					<option value="실리안">실리안</option>
					<option value="아만">아만</option>
					<option value="아브렐슈">아브렐슈</option>
				</select>
			</div>
			<div id="jobclass" id="jobClassSelect">
				<select name="" id="">
					<option value="">전체클래스</option>
					<option value="디스트로이어">디스트로이어</option>
					<option value="워로드">워로드</option>
				</select>
			</div>
			<div id="engraving">
				<select name="" id="invisible"></select>
			</div>
		</div>
		<div class="choice"></div>
	</div>
	<div class="border-container">
		<p class="rank">순위</p>
		<p class="character-name">캐릭터 명</p>
		<p class="item-level">아이템 레벨</p>
		<p class="class-name">클래스</p>
		<p class="server-name">서버명</p>
		<p class="guild-name">길드명</p>
		<p class="equip">장비</p>
		<p class="egrave">직업 각인</p>
	</div>
	<ul class="list-container" id="characterList">
		<li class="list-item"></li>
	</ul>
	<button id="loadMore">더보기</button>
	</div>
</div>

<script src="${indexJS}"></script>

<jsp:include page="../include/bot.jsp" />