package com.ezen.miracle.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.mapper.NoticeMapper;
import com.ezen.miracle.util.PageVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class NoticeServiceImpl implements NoticeService {
	@Autowired
	NoticeMapper noticeMapper;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	
	
	@Override
	public void list(Model model) {
		List<LogoBoardDTO> board = noticeMapper.getNoticeAll();
		List<String> date = new ArrayList<String>();
		
		for (int i = 0; i < board.size(); i++) {
			date.add(sdf.format(board.get(i).getCreated_at()));
		}
		model.addAttribute("date", date);
		model.addAttribute("boards", board);
//		log.info("getAll");
	}
	
	@Override
	public void detail(int board_id, Model model) {
		
		LogoBoardDTO board = noticeMapper.get(board_id);
		String date;
		if(board.getModified_at() == null) {
			date = sdf.format(board.getCreated_at());
		} else {
			date = sdf.format(board.getModified_at()) + "(수정)";
		}
		model.addAttribute("board", board);
		model.addAttribute("date", date);
//		log.info("board : " + board);
	}
	
	
	@Override
	public int insertNotice(LogoBoardDTO dto) {
		
		int result = noticeMapper.insertNotice(dto);
//		log.info("insertNotice" + result);
		
		if(result ==1) {
			return dto.getBoard_id();
		}else {
			return result;
		}
	}

	@Override
	public int updateNotice(LogoBoardDTO dto) {
		int result = noticeMapper.updateNotice(dto);
		if(result ==1) {
			return dto.getBoard_id();
		}else {
			return result;
		}
	}

	
	@Override
	public int delete(int board_id) {
		int result = noticeMapper.delete(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}
	
	
	
	@Override
	public int rec(int board_id) {
		int result = noticeMapper.rec(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public int viewCount(int board_id) {
		int result = noticeMapper.viewCount(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	
	}
	
	
	@Override
	public int countBoard() {
		return noticeMapper.countBoard();
	}
	
	@Override
	public void selectBoard(Model model, PageVO vo, Integer nowPage, Integer cntPerPage) {
		int total = countBoard();

//		log.info("now1 : " + nowPage + ", cPP1 : " + cntPerPage);
		// 처음 화면은 1~5페이지가 나옴
		if (nowPage == null && cntPerPage == null) {
			nowPage = 1;
			cntPerPage = 5;
		} else if (nowPage == null) {
			nowPage = 1;
		} else if (cntPerPage == null) {
			cntPerPage = 5;
		}
//		log.info("now2 : " + nowPage + ", cPP2 : " + cntPerPage);
		vo = new PageVO(total, nowPage, cntPerPage);
		
		List<LogoBoardDTO> list = noticeMapper.selectBoard(vo);
		
//		log.info("start" +vo.getStart());
//		log.info("last" + vo.getEnd());
		List<String> date = new ArrayList<String>();
//		log.info(vo);
//		log.info(list);

		for (int i = 0; i < list.size(); i++) {
			date.add(sdf.format(list.get(i).getCreated_at()));
		}
		model.addAttribute("page", vo);
		model.addAttribute("list", list);
		model.addAttribute("date", date);
//		log.info("page, list, date");
	}

	@Override
	public void selectNoticeAll(Model model,String board_title) {
		System.out.println("3");
		System.out.println(board_title);
		
		//여기 매퍼부분이 문제?
		List<LogoBoardDTO> titleList = noticeMapper.selectNoticeAll(board_title);
		List<String> date = new ArrayList<String>();
		
		System.out.println("타이틀리스트" + titleList);
		
		for (int i = 0; i < titleList.size(); i++) {
			date.add(sdf.format(titleList.get(i).getCreated_at()));
		}
		
		model.addAttribute("date", date);
		//titlelist 가 안나옴 model에 안실린건가
		model.addAttribute("list", titleList);
		log.info("search title : " + model.getAttribute("titleLists"));
	}





	

	
}
