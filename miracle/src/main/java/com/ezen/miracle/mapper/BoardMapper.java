package com.ezen.miracle.mapper;

import java.util.List;

import com.ezen.miracle.dto.LogoBoardDTO;

public interface BoardMapper {
	
	List<LogoBoardDTO> getAll();
	int write(LogoBoardDTO dto);

}
