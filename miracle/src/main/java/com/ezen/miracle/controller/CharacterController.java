package com.ezen.miracle.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

	@GetMapping("/detail")
	public String detail() {
		return "character/detail";
	}

	@GetMapping("/search")
	public String characterSearch(HttpServletRequest request, Model model) {
		String name = request.getParameter("characterSearch");
		model.addAttribute("search", name);
		log.info("search name : " + model.getAttribute("search"));

		return "redirect:/character/detail";
	}

}
