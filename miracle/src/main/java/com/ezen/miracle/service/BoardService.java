package com.ezen.miracle.service;

import java.util.List;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;

public interface BoardService {
	
	void list(Model model);
	int write(LogoBoardDTO dto);

}
