package com.ezen.miracle.mapper;

import java.util.List;

import com.ezen.miracle.dto.LogoReplyDTO;

public interface ReplyMapper {
	
	List<LogoReplyDTO> getAll(int board_id);
	int write(LogoReplyDTO dto);
	int delete(int reply_id);
	
	List<LogoReplyDTO> membersList(Long user_id);

}
