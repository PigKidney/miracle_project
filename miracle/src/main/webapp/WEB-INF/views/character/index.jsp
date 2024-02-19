<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/index.css" />
<c:url value="/resources/character/index.js" var="indexJS" />
<script src="https://kit.fontawesome.com/068a9e1e3f.js" crossorigin="anonymous"></script>


<div class="flex-container">
<div id="flex2">
   <div class="toprank">
      <a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
         <div class="character-card">
            <div class="image-container">
               <img id="top2" src="" alt="">
            </div>
            <div class="overlay"></div>
            <div class="rank-badge">
               
            </div>
            <div class="text-content2">
               <p class="class-name">Class 1</p>
               <p class="character-name">Character Name 1</p>
            </div>
         </div>
      </a> <a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
         <div class="character-card wide-card">
            <div class="image-container">
               <img id="top1" src="" alt="">
            </div>
            <div class="overlay"></div>
            <div class="rank-badge">
              
            </div>
            <div class="text-content1">
               <p class="class-name">Class 2</p>
               <p class="character-name">Character Name 2</p>
            </div>
         </div>
      </a> <a href="/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">
         <div class="character-card">
            <div class="image-container">
               <img id="top3" src="" alt="">
            </div>
            <div class="overlay"></div>
            <div class="rank-badge">
            
            </div>
            <div class="text-content3">
               <p class="class-name">Class 3</p>
               <p class="character-name">Character Name 3</p>
            </div>
         </div>
      </a>
   </div>
   <div>
   </div>
   
   
   <hr />
   <hr />

   <c:forEach items="${charAll}" var="charAll">
   ${charAll.char_level} <br />
   ${charAll.char_name} <br />
   ${charAll.char_class} <br />
   ${charAll.char_server} <br />
   ${charAll.char_guild} <br />
   ${charAll.char_equipSet} <br />
   ${charAll.char_classEng} <br />
   <hr />
   </c:forEach>



<hr />
<hr />
   <div class="flex-header">
      <div class="choice1">
<form action="/character/index" method="get">

<input type="submit" />
         <div id="server">
            <select id="serverSelect" name="char_server">
               <option value="">전서버</option>
               <option value="루페온">루페온</option>
               <option value="실리안">실리안</option>
               <option value="아만">아만</option>
               <option value="아브렐슈드">아브렐슈드</option>
               <option value="카단">카단</option>
               <option value="카마인">카마인</option>
               <option value="카제로스">카제로스</option>
               <option value="니나브">니나브</option>
            </select>
         </div>
         <div id="jobclass">
            <select id="jobClassSelect" name="char_class">
               <option value="">전체클래스</option>
               <option value="디스트로이어">디스트로이어</option>
               <option value="버서커">버서커</option>
               <option value="홀리나이트">홀리나이트</option>
               <option value="슬레이어">슬레이어</option>
               <option value="스트라이커">스트라이커</option>
               <option value="브레이커">브레이커</option>
               <option value="배틀마스터">배틀마스터</option>
               <option value="인파이터">인파이터</option>
               <option value="기공사">기공사</option>
               <option value="창술사">창술사</option>
               <option value="데빌헌터">데빌헌터</option>
               <option value="블래스터">블래스터</option>
               <option value="호크아이">호크아이</option>
               <option value="스카우터">스카우터</option>
               <option value="건슬링어">건슬링어</option>
               <option value="바드">바드</option>
               <option value="서머너">서머너</option>
               <option value="아르카나">아르카나</option>
               <option value="소서리스">소서리스</option>
               <option value="블레이드">블레이드</option>
               <option value="데모닉">데모닉</option>
               <option value="리퍼">리퍼</option>
               <option value="소울이터">소울이터</option>
               <option value="도화가">도화가</option>
               <option value="기상술사">기상술사</option>
            </select>
         </div>
</form>

         <div id="engraving">
            <select name="" id="invisible"></select>
         </div>
      </div>
      <div class="choice2">
         <input type="range" min="1300" max="1675" value="1675" class="slider" id="mySlider">
       <p>값: <span id="sliderValue">1675</span></p>
      </div>
   </div>
   <div class="border-container">
      <p class="rank">순위</p>
      <p class="character-name">캐릭터 명</p>
      <p class="item-level">아이템 레벨</p>
      <p class="class-name">클래스</p>
      <p class="server-name">서버명</p>
      <p class="guild-name">길드명</p>
      <p class="equip">장비</p>
      <p class="engrave">직업 각인</p>
   </div>
   <ul class="list-container" id="characterList">
      <li class="list-item"></li>
   </ul>
   <button id="load-more">더보기</button>
   </div>
</div>

<script src="${indexJS}"></script>

<jsp:include page="../include/bot.jsp" />