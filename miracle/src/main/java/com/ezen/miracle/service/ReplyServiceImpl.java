package com.ezen.miracle.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoReplyDTO;
import com.ezen.miracle.mapper.ReplyMapper;

import lombok.extern.log4j.Log4j;

@Service
@Log4j
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	ReplyMapper replyMapper;

	SimpleDateFormat sdf = new SimpleDateFormat("MM/dd HH:mm");

	@Override
	public void list(Model model, int board_id) {
		List<LogoReplyDTO> replyList = replyMapper.getAll(board_id);
		List<String> date = new ArrayList<String>();

		for (int i = 0; i < replyList.size(); i++) {
			date.add(sdf.format(replyList.get(i).getCreated_at()));
		}
		model.addAttribute("replyDate", date);
		model.addAttribute("replyList", replyList);
	}

	@Override
	public int write(LogoReplyDTO dto) {
		replyMapper.write(dto);
		log.info("write reply");
		return 1;
	}

	@Override
	public int delete(int reply_id) {
		replyMapper.delete(reply_id);
		return 1;
	}

	@Override
	public void membersList(Model model, Long user_id) {
		List<LogoReplyDTO> membersReply = replyMapper.membersList(user_id);
		model.addAttribute("membersReply", membersReply);
	}

}
