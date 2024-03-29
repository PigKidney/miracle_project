package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.util.PageVO;

public interface BoardService {
	
	void list(Model model);
	void one(Model model, int board_id);
	int write(LogoBoardDTO dto);
	int rewrite(LogoBoardDTO dto);
	int delete(int board_id);
	int chuchu(int board_id);
	int viewCount(int board_id);
	
	int countBoard();
	void selectBoard(Model model, PageVO vo, Integer nowPage, Integer cntPerPage);
	
	void membersList(Model model, Long user_id);
	

}
