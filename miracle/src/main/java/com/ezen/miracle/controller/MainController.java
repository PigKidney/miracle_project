package com.ezen.miracle.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

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
	public String main(Long user_id) {
		log.info("USER ID :" + user_id);
		log.info("GET : /main/index OK");
		return "main/index";
	}

	@PostMapping("/index")
	public String mainLogin(Model model, Long user_id, LogoUserDTO dto, HttpSession session) {
		// user_id가 DB에 저장되어 있으면 데이터를 가져오고 1을 리턴함
		int result = userService.get(model, user_id);
		if (result == 1) {
			log.info("signed DATA");
		}
		// DB에 저장되어 있지 않으면 DB에 추가하고 데이터를 가져옴
		else {
			log.info("new DATA");
			userService.write(dto);
			userService.get(model, user_id);
		}
		LogoUserDTO info = (LogoUserDTO)model.getAttribute("info");
		
		session.setAttribute("login_id", dto.getUser_id());
		session.setAttribute("login_password", dto.getUser_password());
		session.setAttribute("login_nickname", dto.getUser_nickname());
		session.setAttribute("login_email", info.getUser_email());
		session.setAttribute("login_admin", info.getIsAdmin());
		
		// dto >> DB에 INSERT 할 때 직접 입력하는 값만 가져올 수 있음
		// 즉, default로 정해진 값은 실려있지 않으므로 null값이 나옴
		
		// model >> dto를 통해 INSERT 하면서 default 값도 모두 채워짐,
		// DB에서 SELECT 해서 모든 값을 가져옴
		
		// dto로 값 DB에 값 입력, model로 DB에 입력한 모든 값을 가져옴
		log.info(model.getAttribute("info"));
		log.info("admin : " + info.getIsAdmin());
		log.info("email : " + info.getUser_email());
		log.info("time : " + info.getCreated_at());

		log.info("USER ID : " + user_id);
		log.info("POST : /main/index OK");
		return "main/index";
	}

}
