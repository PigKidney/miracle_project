package com.ezen.miracle.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
			@Param("char_class") String char_class, @Param("levelBar") Double levelBar) {
		log.info("서버 : " + char_server + " 클라스 : " + char_class + " 레벨 : " + levelBar);

		if ((char_server == null || char_server == "") && (char_class == null || char_class == "")
				&& levelBar == null) {
			log.info("널널널");
			charService.charAll(model);

		} else if ((char_server == null || char_server == "") && levelBar == null) {
			log.info("서버레벨널");
			charService.charSelectedClass(model, char_class);

		} else if ((char_class == null || char_class == "") && levelBar == null) {
			log.info("직업레벨널");
			charService.charSelectedServer(model, char_server);

		} else if ((char_class == null || char_class == "") && (char_server == null || char_server == "")) {
			log.info("직업서버널");
			charService.levelCut(model, levelBar);

		} else if (char_server == null || char_server == "") {
			log.info("서버널");
			charService.charSelectedClassNlevelCut(model, char_class, levelBar);
		} else if (char_class == null || char_class == "") {
			log.info("직업널");
			charService.charSelectedServerNlevelCut(model, char_server, levelBar);
		} else if (levelBar == null) {
			log.info("레벨널");
			charService.charSelectedClassNServer(model, char_class, char_server);
		} else {
			charService.allSearch(model, char_class, char_server, levelBar);
		}

		model.addAttribute("levelBar", levelBar);
		log.info(levelBar);
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
	
//	@RequestMapping(value = "add", method = RequestMethod.POST)
//	public @ResponseBody int addlist(Model model , @RequestBody String char_class, String char_server, Double levelBar) {
////		log.info("POST: " + dto);
////		charService.charSearchInsert(dto);
//		charService.allSearch(model, char_class, char_server, levelBar);
//		return 1;
//	}

}
