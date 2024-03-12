package com.ezen.miracle.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ezen.miracle.dto.Quiz1DTO;

public interface QuizMapper {
	List<Quiz1DTO> selectCountry();

	List<Quiz1DTO> selectCity();

	int insertInfo(Quiz1DTO dto);

	int deleteInfo(String y_id);

	List<Quiz1DTO> selectAll();
}
