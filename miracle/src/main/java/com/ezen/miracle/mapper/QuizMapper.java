package com.ezen.miracle.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.util.PageVO;

public interface QuizMapper {
	List<Quiz1DTO> selectCountry();

	List<Quiz1DTO> selectCity();

	int insertInfo(Quiz1DTO dto);

	int deleteInfo(String y_id);

	List<Quiz1DTO> selectAll();
	
	Quiz1DTO selectOne(String y_id);
	
	int countAll();
	List<Quiz1DTO> pageAll(PageVO vo);
}
