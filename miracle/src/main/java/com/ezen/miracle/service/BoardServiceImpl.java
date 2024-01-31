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
		if(read.getModified_at()==null) {
			date = sdf.format(read.getCreated_at());			
		} else {
			date = sdf.format(read.getModified_at()) + "(수정)";
		}
		model.addAttribute("read", read);
		model.addAttribute("date", date);
		log.info("read : " + read);
	}
}
