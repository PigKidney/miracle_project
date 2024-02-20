package com.ezen.miracle.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ezen.miracle.dto.LogoCharDTO;

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
	
//	@RequestMapping(value="insert" , method= RequestMethod.POST)
//	public @ResponseBody int insertCharacter(@RequestBody LogoCharDTO dto){
//		log.info("POST: "+ dto);
//		
//		return 1;
//	}

}
