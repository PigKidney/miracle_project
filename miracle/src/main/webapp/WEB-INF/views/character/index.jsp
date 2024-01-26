<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../include/top.jsp" />
<link rel="stylesheet" href="/resources/character/index.css" />


<div class="flex-container">
    <div class="flex-header">
    	<div class="top3"></div>
    	<div class="choice">
		    <select name="" id="">
		    	<option value="">전서버</option>
		    	<option value="">루페온</option>
		    	<option value="">실리안</option>
		    	<option value="">아만</option>
		    	<option value="">아브렐슈</option>
		    
		    </select>
		   <select name="" id="">
		   		<option value="">전체클래스</option>
		   		<option value="">디스트로이어</option>
		   		<option value="">워로드</option>
		   </select>
    	
    	</div>
    </div>
    <div class="border-container">
        <p class="font-semibold">순위</p>
        <p class="font-semibold">캐릭터 명</p>
        <p class="font-semibold">아이템 레벨</p>
        <p class="font-semibold">클래스</p>
        <p class="font-semibold">서버명</p>
        <p class="font-semibold">길드명</p>
        <p class="font-semibold">장비</p>
        <p class="font-semibold">직업 각인</p>
    </div>
    <ul class="list-container">
        <li class="list-item">
           <div>
              <p>1</p>
              <a href="https://kloa.gg/characters/%ED%8E%B8%EC%A7%80">편지</a>
              <p>1655.00</p>
              <p>창술사</p>
              <p>루페온</p>
              <p>단합안되는쓰레기길드</p>
              <div>
                 <p>+8 에스더</p>
                 <p>6 사멸</p>
              </div>
              <div>
                 <p>3 절정</p>
              </div>
           </div>
        </li>
        <li class="list-item">
           <div>
              <p>2</p>
              <a href="https://kloa.gg/characters/%ED%95%AD%EC%83%81%EA%B7%B8%EB%86%88">항상그놈</a>
              <p>1655.00</p>
              <p>스트라이커</p>
              <p>실리안</p>
              <p>단합안되는쓰레기길드</p>
              <div>
                 <p>+8 에스더</p>
                 <p>2갈 4환</p>
              </div>
              <div>
                 <p>3 일격필살</p>
              </div>
           </div>
        </li>
    </ul>
</div>


<jsp:include page="../include/bot.jsp" />