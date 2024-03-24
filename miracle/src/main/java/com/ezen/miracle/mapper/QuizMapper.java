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

	int countAll(@Param("y_id") String y_id,
			@Param("y_name") String y_name, @Param("sex") String sex, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("firstDate") String firstDate,
			@Param("lastDate") String lastDate);

	List<Quiz1DTO> pageAll(@Param("start") Integer start, @Param("end") Integer end, @Param("y_id") String y_id,
			@Param("y_name") String y_name, @Param("sex") String sex, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("firstDate") String firstDate,
			@Param("lastDate") String lastDate);
}
