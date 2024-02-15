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
	// 湲��쓣 吏��슦硫� �뙎湲��뱾�룄 媛숈씠 �궘�젣�릺�뒗 湲곕뒫
	int deleteReply(int board_id);
	int countBoard();
	List<LogoBoardDTO> selectBoard(PageVO vo);
	
	List<LogoBoardDTO> getNoticeAll();
	LogoBoardDTO getNotice(int board_id);
	int insertNotice(LogoBoardDTO dto);
	int updateNotice(LogoBoardDTO dto);
	int deleteNotice(int board_id);	
	int rec(int board_id);
	int viewCountNotice(int board_id);
	int countBoardNotice();
	List<LogoBoardDTO> selectBoardNotice(PageVO vo);
	


}
