package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoReplyDTO;

public interface ReplyService {
	
	void list(Model model, int board_id);
	int write(LogoReplyDTO dto);
	int delete(int reply_id);

}
