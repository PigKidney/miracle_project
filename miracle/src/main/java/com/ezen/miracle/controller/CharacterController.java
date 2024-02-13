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
		// final String crawlingEnterUrl =
		// "https://lostark.game.onstove.com/Profile/Character/소윤선";
		// Connection conn = Jsoup.connect(crawlingEnterUrl);

		// try {
		// Document document = conn.get();
		// Elements enterUrlElements = document.getElementsByClass("ItemPartBox");
		// Elements titleUrlElements = document.getElementsByClass("IndentStringGroup");
		// Elements titleElements2 = document.select("div.IndentStringGroup >
		// div.span");
		// Elements titleElements3 = document.select("a.thumb_area > img");

		// for (int i=0; i<10; i++) {
		// final String enterTitle = titleElements2.get(i).text();
		// final String enterImgLink = titleElements3.get(i).absUrl("src");
		// final String enterTag = titleElements2.get(i).absUrl("href");

		// System.out.println("enterTitle:" +enterTitle);
		// System.out.println("enterImgLink:" +enterImgLink);
		// System.out.println("enterTag:" +enterTag);

		// }

		// } catch (IOException e) {
		// e.printStackTrace();
		// }

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
