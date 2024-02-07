package com.ezen.miracle.controller;

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

import lombok.extern.log4j.Log4j;
import oracle.jdbc.proxy.annotation.Post;

@Log4j
@Controller
@RequestMapping("/board")
public class BoardController {

	@Autowired
	BoardService boardService;

	@Autowired
	ReplyService replyService;

	@GetMapping("/index")
	public String board(Model model, Long user_id, HttpSession session) {
		boardService.list(model);
		log.info("GET : /board/index OK");
		return "board/index";
	}

	@GetMapping("/write")
	public String write() {
		log.info("GET : /board/write OK");
		return "board/write";
	}

	@PostMapping("/index")
	public String completeToWrite(LogoBoardDTO dto) {
		int board_id = boardService.write(dto);
		log.info("PK : " + board_id);
		log.info("POST : redirect:/board/index OK");
		return "redirect:/board/index";
	}

	@GetMapping("/read")
	public String read(Model model, int board_id) {
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
	

}
