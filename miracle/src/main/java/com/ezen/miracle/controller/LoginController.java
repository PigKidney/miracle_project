package com.ezen.miracle.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.ezen.miracle.service.BoardService;
import com.ezen.miracle.service.ReplyService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/login")
public class LoginController {

	@Autowired
	BoardService boardService;

	@Autowired
	ReplyService replyService;

	@GetMapping("/index")
	public String login(Model model, Long user_id, HttpSession session) {
		user_id = (Long) session.getAttribute("login_id");
		boardService.membersList(model, user_id);
		replyService.membersList(model, user_id);
		log.info("/login/index OK");
		return "login/index";
	}

}
