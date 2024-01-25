package com.ezen.miracle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/character")
public class CharacterController {
	
	@GetMapping("/index")
	public String character() {
		log.info("/character/index OK");
		return "character/index";
	}

}
