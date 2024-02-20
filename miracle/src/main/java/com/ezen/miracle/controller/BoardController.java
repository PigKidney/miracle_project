package com.ezen.miracle.controller;

import java.net.CookieManager;
import java.net.http.HttpResponse;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.dto.LogoReplyDTO;
import com.ezen.miracle.service.BoardService;
import com.ezen.miracle.service.ReplyService;
import com.ezen.miracle.util.PageVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/board")
public class BoardController {

	@Autowired
	BoardService boardService;

	@Autowired
	ReplyService replyService;

	@GetMapping("/index")
	public String board(Model model, Long user_id, PageVO vo, Integer nowPage, Integer cntPerPage) {
		boardService.countBoard();
		boardService.selectBoard(model, vo, nowPage, cntPerPage);
		log.info("now0 : " + nowPage + " , cPP0 : " + cntPerPage);
		log.info("GET : /board/index OK");
		return "board/index";
	}

	@GetMapping("/write")
	public String write(HttpSession session) {
		log.info(session.getAttribute("login_id"));
		log.info("GET : /board/write OK");
		return "board/write";
	}

	@PostMapping("/index")
	public String completeToWrite(LogoBoardDTO dto) {
		boardService.write(dto);
		log.info(dto.getUser_id());
		log.info("PK : " + dto.getBoard_id());
		log.info("POST : redirect:/board/index OK");
		return "redirect:/board/index";
	}

	@GetMapping("/read")
	public String read(Model model, int board_id, HttpServletResponse response, HttpServletRequest request) {

		boolean exist = false;
		Cookie[] cookies = request.getCookies();
		log.info("쿠키 : " + cookies);
		for (Cookie cookie : cookies) {
			String name = cookie.getName();
			if (name.equals("" + board_id)) {
				exist = true;
				break;
			}
		}

		if (!exist) {
			Cookie viewCookie = new Cookie("" + board_id, "1");
			viewCookie.setMaxAge(5);
			response.addCookie(viewCookie);
			boardService.viewCount(board_id);
			log.info("viewCount +1");
		} else {
			log.info("viewCount +0");
		}

		replyService.list(model, board_id);
		log.info("read PK : " + board_id);
		boardService.one(model, board_id);
		log.info(model);
		log.info("GET : /board/read OK");
		return "board/read";
	}

	@PostMapping("/read")
	public String afterModi(Model model, int board_id, LogoBoardDTO dto) {
		log.info("afterModi PK : " + board_id);
		boardService.rewrite(dto);
		boardService.one(model, board_id);
		log.info("POST : /board/read OK");
		return "board/read";
	}

	@GetMapping("/modify")
	public String modify(Model model, int board_id) {
		boardService.one(model, board_id);
		log.info("modi PK : " + board_id);
		log.info("GET : /board/modify OK");
		return "board/modify";
	}

	@GetMapping("/delete")
	public String delete(int board_id) {
		boardService.delete(board_id);
		log.info("delete PK : " + board_id);
		log.info("GET : redirect:/board/index");
		return "redirect:/board/index";
	}

	@PostMapping("/reply")
	public String completeToReply(Model model, int board_id, LogoReplyDTO dto) {
		replyService.write(dto);
		log.info(dto);
		log.info("redirect:/board/read");
		return "redirect:/board/read?board_id=" + board_id;
	}

	@PostMapping("/deleteReply")
	public String completeToDeleteReply(int reply_id, int board_id) {
		replyService.delete(reply_id);
		log.info("/deleteReply >> redirect:/board/read");
		return "redirect:/board/read?board_id=" + board_id;
	}

	@GetMapping("/good")
	public String good(Model model, int board_id) {
		log.info("ㅇㅇ");
		boardService.chuchu(board_id);
		log.info("/good >> redirect:/board/read");
		return "redirect:/board/read?board_id=" + board_id;
	}

}
