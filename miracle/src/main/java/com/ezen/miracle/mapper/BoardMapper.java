package com.ezen.miracle.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.util.PageVO;

public interface BoardMapper {
	
	List<LogoBoardDTO> getAll();
	LogoBoardDTO get(int board_id);
	int write(LogoBoardDTO dto);
	int rewrite(LogoBoardDTO dto);
	int delete(int board_id);
	int chuchu(int board_id);
	int viewCount(int board_id);
	// 글을 지우면 댓글들도 같이 삭제되는 기능
	int deleteReply(int board_id);
	
	int countBoard();
	List<LogoBoardDTO> selectBoard(PageVO vo);
	
	List<LogoBoardDTO> membersList(Long user_id);

}
