package com.ezen.miracle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezen.miracle.dto.LogoUserDTO;
import com.ezen.miracle.service.UserService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/main")
public class MainController {

	@Autowired
	UserService userService;

	@GetMapping("/index")
	public String main() {
		log.info("GET : /main/index OK");
		return "main/index";
	}

	@PostMapping("/index")
	public String mainLogin(Model model, Long user_id, LogoUserDTO dto) {
		// user_id가 DB에 저장되어 있으면 데이터를 가져오고 1을 리턴함
		if (userService.get(model, user_id) == 1) {
			log.info("valid DATA");
		}
		// DB에 저장되어 있지 않으면 DB에 추가하고 데이터를 가져옴
		else {
			log.info("invalid DATA");
			userService.write(dto);
			userService.get(model, user_id);
		}

		log.info("USER ID : " + user_id);
		log.info("POST : /main/index OK");
		return "main/index";
	}

}
