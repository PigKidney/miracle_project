package com.ezen.miracle.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.mapper.BoardMapper;
import com.ezen.miracle.util.PageVO;

import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;

	SimpleDateFormat sdf = new SimpleDateFormat("MM/dd HH:mm");

	@Override
	public void list(Model model) {
		List<LogoBoardDTO> list = boardMapper.getAll();
		List<String> date = new ArrayList<String>();

		for (int i = 0; i < list.size(); i++) {
			date.add(sdf.format(list.get(i).getCreated_at()));
		}
		model.addAttribute("date", date);
		model.addAttribute("list", list);
		log.info("getAll");
	}

	@Override
	public int write(LogoBoardDTO dto) {
		int result = boardMapper.write(dto);
		log.info("user_id : " + dto.getUser_id());
		if (result == 1) {
			return 1;
			// 나중에 댓글 추가할 때 사용할 예정
			// return dto.getBoard_id();
		} else {
			return -1;
		}
	}

	@Override
	public int rewrite(LogoBoardDTO dto) {
		int result = boardMapper.rewrite(dto);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public void one(Model model, int board_id) {
		LogoBoardDTO read = boardMapper.get(board_id);
		String date;
		if (read.getModified_at() == null) {
			date = sdf.format(read.getCreated_at());
		} else {
			date = sdf.format(read.getModified_at()) + "(수정)";
		}
		model.addAttribute("read", read);
		model.addAttribute("date", date);
		log.info("read : " + read);
	}

	@Override
	public int delete(int board_id) {
		int result = boardMapper.delete(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public int chuchu(int board_id) {
		int result = boardMapper.chuchu(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public int viewCount(int board_id) {
		int result = boardMapper.viewCount(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public int countBoard() {
		return boardMapper.countBoard();
	}

	@Override
	public void selectBoard(Model model, PageVO vo, Integer nowPage, Integer cntPerPage) {
		int total = countBoard();

		log.info("now1 : " + nowPage + ", cPP1 : " + cntPerPage);
		// 처음 화면은 1~5페이지가 나옴
		if (nowPage == null && cntPerPage == null) {
			nowPage = 1;
			cntPerPage = 5;
		} else if (nowPage == null) {
			nowPage = 1;
		} else if (cntPerPage == null) {
			cntPerPage = 5;
		}
		log.info("now2 : " + nowPage + ", cPP2 : " + cntPerPage);
		vo = new PageVO(total, nowPage, cntPerPage);
		List<LogoBoardDTO> list = boardMapper.selectBoard(vo);
		log.info(vo.getStart());
		log.info(vo.getEnd());
		List<String> date = new ArrayList<String>();
		log.info(vo);
		log.info(list);

		for (int i = 0; i < list.size(); i++) {
			date.add(sdf.format(list.get(i).getCreated_at()));
		}
		model.addAttribute("page", vo);
		model.addAttribute("list", list);
		model.addAttribute("date", date);
		log.info("page, list, date");
	}

	@Override
	public int insertNotice(LogoBoardDTO dto) {
		
		int result = boardMapper.insertNotice(dto);
//		log.info("insertNotice" + result);
		
		if(result ==1) {
			return dto.getBoard_id();
		}else {
			return result;
		}
	}

	@Override
	public int updateNotice(LogoBoardDTO dto) {
		int result = boardMapper.updateNotice(dto);
		if(result ==1) {
			return dto.getBoard_id();
		}else {
			return result;
		}
	}

	
//	@Override
//	public int delete(int board_id) {
//		int result = boardMapper.delete(board_id);
//		if (result == 1) {
//			return 1;
//		} else {
//			return -1;
//		}
//	}
	
	
	
	@Override
	public int rec(int board_id) {
		int result = boardMapper.rec(board_id);
		if (result == 1) {
			return 1;
		} else {
			return -1;
		}
	}

	@Override
	public void detail(int board_id, Model model) {
		
		LogoBoardDTO board = boardMapper.get(board_id);
		String date;
		if(board.getModified_at() == null) {
			date = sdf.format(board.getCreated_at());
		} else {
			date = sdf.format(board.getModified_at()) + "(수정)";
		}
		model.addAttribute("board", board);
		model.addAttribute("date", date);
		log.info("board : " + board);
	}
}
