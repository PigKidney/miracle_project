package com.ezen.miracle.controller;



import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.service.NoticeService;
import com.ezen.miracle.util.PageVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/notice")
public class NoticeController {
	
	@Autowired
	NoticeService noticeservice;
	

	@GetMapping("/index")
	public String notice(Model model, PageVO vo, Integer nowPage, Integer cntPerPage,HttpServletRequest request) {
		
		
		
		noticeservice.countBoard();
//		log.info("countBoard 데이터 수"  + noticeservice.countBoard());
		noticeservice.selectBoard(model, vo, nowPage, cntPerPage);
//		log.info(model);
//		log.info("now0 : " + nowPage + " , cPP0 : " + cntPerPage + ", vo :" + vo);
//		log.info("index model: " + model);
		
		
		return "notice/index";
		
	}
		
		
	
	@GetMapping("/write")	
	public String write() {
//		log.info("/write OK");
		return "notice/write";
	}
	
	@PostMapping("/index")
	public String write(Model model,LogoBoardDTO dto, RedirectAttributes rattr,HttpServletRequest req) {
//		log.info(dto);
		int board_id = noticeservice.insertNotice(dto);
//		log.info("board_id : " + board_id);
		
		if (board_id > 0) {
//			log.info(rattr);
			return "redirect:/notice/index";
		}
		return null;
	}

	
	
	
	@GetMapping("/detail")
	public String detail(Model model, int board_id, HttpServletResponse response, HttpServletRequest request) {
		
		// 글 번호와 같은 이름을 지닌 쿠키가 존재하는지 여부를 체크 true시 조회수증가x
		boolean exist = false;
		// 쿠키배열로 전부 꺼내기  getCookies(); //쿠키 목록 받아오기
		Cookie[] cookies = request.getCookies();
//		log.info("쿠키 : " + cookies);
		// 쿠키있으면 그 안에 있는 쿠키를 꺼내고
		for (Cookie cookie : cookies) {
			// 쿠키이름 가져오는 메서드 getName()
			String name = cookie.getName();
//			log.info("쿠키name : 	" + name);
			// 쿠키를 만들때 board_id 값을 사용해서 만듬
			if (name.equals("" + board_id)) {
//				log.info("board_id :" + board_id);
				exist = true;
				break;
			} 
		}

		
		if(!exist) {
			Cookie viewCookie = new Cookie("" + board_id, "1");
//			log.info("viewCookie :" + viewCookie);
			//5초동안 쿠키(board_id) 있게해 조회수 안올라가게 해논거
			viewCookie.setMaxAge(5);
			//응답받은곳에 viewCookie addCookie해주기
			response.addCookie(viewCookie);
			//뷰카운트 증가시켜주는거
			noticeservice.viewCount(board_id);
//			log.info("viewCount +1");
		} else {
//			log.info("viewCount +0");			
		}
		noticeservice.detail(board_id, model);
//		log.info("notice model: " + model);
		return "/notice/detail";
	}
	
	
	@PostMapping("/detail")
	public String modify(Model model,int board_id, LogoBoardDTO dto) {
		
//		log.info("model" + model);
		noticeservice.updateNotice(dto);
//		log.info("update" + dto);
		noticeservice.detail(board_id, model);
//		log.info("board_id : " + board_id);
		return "/notice/detail";
	}

	@GetMapping("/modify")
	public String modify(Model model, int board_id) {
		noticeservice.detail(board_id, model);
//		log.info("modi PK : " + board_id);
		return "notice/modify";
	}
	
	@GetMapping("/delete")
	public String delete(int board_id) {
		noticeservice.delete(board_id);
//		log.info("delete PK : " + board_id);
		return "redirect:/notice/index";
	}
	
	
	@GetMapping("/good")
	public String good(Model model, int board_id) {
		noticeservice.rec(board_id);
//		log.info("/good >> redirect:/notice/detail");
		return "redirect:/notice/detail?board_id=" + board_id;
	}
	
	@GetMapping("/search")
	public String characterSearch(HttpServletRequest request, Model model,LogoBoardDTO dto,PageVO vo, Integer nowPage, Integer cntPerPage ) {
		
		
//		System.out.println("1");
		String name = request.getParameter("titleSearch");
//		log.info("dd : " + name);
//		System.out.println("2");
		
		noticeservice.selectNoticeAll(model, name);
		
//		log.info("검색제목나와라" + model);
	

		return "/notice/index";
	}

	
	
}