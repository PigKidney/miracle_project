package com.ezen.miracle.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ezen.miracle.dto.LogoCharDTO;

import com.ezen.miracle.service.CharService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/character")
public class CharacterController {

	@Autowired
	CharService charService;

	@GetMapping("/index")
	public String character(Model model, @Param("char_server") String char_server,
			@Param("char_class") String char_class) {
		log.info("서버 : " + char_server + " 클라스 : " + char_class);
		if ((char_server == null || char_server == "") && (char_class == null || char_class == "")) {
			log.info("널널");
			charService.charAll(model);
		} else if (char_server == null || char_server == "") {
			log.info("서버널");
			charService.charSelectedClass(model, char_class);
		} else if (char_class == null || char_class == "") {
			log.info("캐릭널");
			charService.charSelectedServer(model, char_server);
		} else {
			log.info("둘다 널아님");
			charService.charSelectedClassNServer(model, char_class, char_server);
		}
		log.info("/character/index OK");
		return "character/index";
	}

	@GetMapping("/detail")
	public String detail() {
		return "character/detail";
	}

	@GetMapping("/search")
	public String characterSearch(HttpServletRequest request, Model model, LogoCharDTO dto) {
		String name = request.getParameter("characterSearch");
		model.addAttribute("search", name);
		log.info("search name : " + model.getAttribute("search"));

		return "redirect:/character/detail";
	}


	@RequestMapping(value = "insert", method = RequestMethod.POST)
	public @ResponseBody int insertCharacter(@RequestBody LogoCharDTO dto) {
		log.info("POST: " + dto);
		charService.charSearchInsert(dto);

		return 1;
	}

}
