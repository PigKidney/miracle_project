package com.ezen.miracle.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
	
	SimpleDateFormat sdf = new SimpleDateFormat("MM/DD HH:mm");

	@Override
	public void list(Model model) {
		List<LogoBoardDTO> list = boardMapper.getAll();
		List<String> date = new ArrayList<String>();
		
		for(int i=0; i<list.size();i++) {
			date.add(sdf.format(list.get(i).getCreated_at()));
		}
		model.addAttribute("date", date);
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

	@Override
	public void one(Model model, int board_id) {
		LogoBoardDTO read = boardMapper.get(board_id);
		model.addAttribute("read", read);
		log.info("read : " + read);
	}

}
