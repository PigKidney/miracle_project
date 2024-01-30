package com.ezen.miracle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.service.BoardService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/board")
public class BoardController {

	@Autowired
	BoardService boardService;

	@GetMapping("/index")
	public String board(Model model) {
		boardService.list(model);
		log.info("GET : /board/index OK");
		System.out.println("dataModel : " + model);
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

}
