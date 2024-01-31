package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;

public interface BoardService {
	
	void list(Model model);
	void one(Model model, int board_id);
	int write(LogoBoardDTO dto);
	int rewrite(LogoBoardDTO dto);

}
