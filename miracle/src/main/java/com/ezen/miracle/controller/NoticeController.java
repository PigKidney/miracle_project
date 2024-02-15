package com.ezen.miracle.controller;



import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.service.BoardService;
import com.ezen.miracle.util.PageVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/notice")
public class NoticeController {
	
	@Autowired
	BoardService boardservice;
	

	@GetMapping("/index")
	public String notice(Model model, PageVO vo, Integer nowPage, Integer cntPerPage) {
		boardservice.countBoardNotice();
		log.info("countBoard ������ ��"  + boardservice.countBoardNotice());
		boardservice.selectBoard(model, vo, nowPage, cntPerPage);
		log.info(model);
		log.info("now0 : " + nowPage + " , cPP0 : " + cntPerPage + ", vo :" + vo);
//		boardservice.list(model);
//		log.info("index model: " + model);
		return "notice/index";
	}
		
	
	
	@GetMapping("/write")	
	public String write() {
		log.info("/write OK");
		return "notice/write";
	}
	
	@PostMapping("/index")
	public String write(Model model,LogoBoardDTO dto, RedirectAttributes rattr,HttpServletRequest req) {
//		log.info(dto);
		int board_id = boardservice.insertNotice(dto);
		log.info("board_id : " + board_id);
		
		if (board_id > 0) {
//			log.info(rattr);
			return "redirect:/notice/index";
		}
		return null;
	}

	
	
	
	@GetMapping("/detail")
	public String detail(Model model, int board_id, HttpServletResponse response, HttpServletRequest request) {
		
		// �� ��ȣ�� ���� �̸��� ���� ��Ű�� �����ϴ��� ���θ� üũ true�� ��ȸ������x
		boolean exist = false;
		// ��Ű�迭�� ���� ������  getCookies(); //��Ű ��� �޾ƿ���
		Cookie[] cookies = request.getCookies();
		log.info("��Ű : " + cookies);
		// ��Ű������ �� �ȿ� �ִ� ��Ű�� ������
		for (Cookie cookie : cookies) {
			// ��Ű�̸� �������� �޼��� getName()
			String name = cookie.getName();
			log.info("��Űname : 	" + name);
			// ��Ű�� ���鶧 board_id ���� ����ؼ� ����
			if (name.equals("" + board_id)) {
				log.info("board_id :" + board_id);
				exist = true;
				break;
			} 
		}

		
		if(!exist) {
			Cookie viewCookie = new Cookie("" + board_id, "1");
			log.info("viewCookie :" + viewCookie);
			//5�ʵ��� ��Ű(board_id) �ְ��� ��ȸ�� �ȿö󰡰� �س��
			viewCookie.setMaxAge(5);
			//����������� viewCookie addCookie���ֱ�
			response.addCookie(viewCookie);
			//��ī��Ʈ ���������ִ°�
			boardservice.viewCountNotice(board_id);
			log.info("viewCount +1");
		} else {
			log.info("viewCount +0");			
		}
		boardservice.detail(board_id, model);
//		log.info("notice model: " + model);
		return "/notice/detail";
	}
	
	
	@PostMapping("/detail")
	public String modify(Model model,int board_id, LogoBoardDTO dto) {
		
		log.info("model" + model);
		boardservice.updateNotice(dto);
		log.info("update" + dto);
		boardservice.detail(board_id, model);
		log.info("board_id : " + board_id);
		return "/notice/detail";
	}

	@GetMapping("/modify")
	public String modify(Model model, int board_id) {
		boardservice.detail(board_id, model);
		log.info("modi PK : " + board_id);
		return "notice/modify";
	}
	
	@GetMapping("/delete")
	public String delete(int board_id) {
		boardservice.deleteNotice(board_id);
//		log.info("delete PK : " + board_id);
		return "redirect:/notice/index";
	}
	
	
	@GetMapping("/good")
	public String good(Model model, int board_id) {
		boardservice.rec(board_id);
//		log.info("/good >> redirect:/notice/detail");
		return "redirect:/notice/detail?board_id=" + board_id;
	}
	
	
	
}