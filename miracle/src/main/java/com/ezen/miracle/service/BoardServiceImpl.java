package com.ezen.miracle.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.mapper.BoardMapper;

import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;

	@Override
	public void list(Model model) {
		List<LogoBoardDTO> list = boardMapper.getAll();
		model.addAttribute("list", list);
		log.info("getAll");
	}

	@Override
	public int write(LogoBoardDTO dto) {
		int result = boardMapper.write(dto);
		if (result == 1) {
			return 1;
			// 나중에 댓글 추가할 때 사용할 예정
			// return dto.getBoard_id();
		} else {
			return -1;
		}
	}

}
