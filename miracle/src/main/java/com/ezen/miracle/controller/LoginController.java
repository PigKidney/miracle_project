package com.ezen.miracle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/login")
public class LoginController {
	
	@GetMapping("/index")
	public String login() {
		log.info("/login/index OK");
		return "login/index";
	}

}
