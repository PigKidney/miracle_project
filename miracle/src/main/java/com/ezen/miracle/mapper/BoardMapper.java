package com.ezen.miracle.mapper;

import java.util.List;

import com.ezen.miracle.dto.LogoBoardDTO;

public interface BoardMapper {
	
	List<LogoBoardDTO> getAll();
	LogoBoardDTO get(int board_id);
	int write(LogoBoardDTO dto);

}
