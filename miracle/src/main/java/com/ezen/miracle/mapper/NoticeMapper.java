package com.ezen.miracle.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.util.PageVO;

public interface NoticeMapper {

	List<LogoBoardDTO> getNoticeAll();
	LogoBoardDTO get(int board_id);
	int insertNotice(LogoBoardDTO dto);
	int updateNotice(LogoBoardDTO dto);
	int delete(int board_id);	
	int rec(int board_id);
	int viewCount(int board_id);
	int countBoard();
	int countNotice();
	List<LogoBoardDTO> selectBoard(PageVO vo);
	
	//제목찾아주는기능 selectNotice mapper를  dto에 실어주기 N
	List<LogoBoardDTO> selectNoticeAll(String board_title);
}
