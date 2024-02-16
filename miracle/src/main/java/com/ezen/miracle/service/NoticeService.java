package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.util.PageVO;

public interface NoticeService {
	void list(Model model);
	void detail(int board_id, Model model);
	int insertNotice(LogoBoardDTO dto);
	int updateNotice(LogoBoardDTO dto);
	int delete(int board_id);
	int rec(int board_id);
	int viewCount(int board_id);
	int countBoard();
	void selectBoard(Model model, PageVO vo, Integer nowPage, Integer cntPerPage);
	
	
	void selectTitle(Model model);
}
