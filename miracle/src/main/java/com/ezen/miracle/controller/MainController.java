package com.ezen.miracle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/main")
public class MainController {
	
	@GetMapping("/index")
	public String main() {
		log.info("/main/index OK");
		return "main/index";
	}

}
