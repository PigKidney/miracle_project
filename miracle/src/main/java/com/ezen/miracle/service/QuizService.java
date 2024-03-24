package com.ezen.miracle.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.util.PageVO;

public interface QuizService {

	void selectCountry(Model model);

	void selectCity(Model model);

	void insertInfo(Quiz1DTO dto);

	void deleteInfo(String[] y_id);

	void selectAll(Model model);

	void selectOne(Model model, String y_id);

	int countAll(@Param("y_id") String y_id,
			@Param("y_name") String y_name, @Param("sex") String sex, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("firstDate") String firstDate,
			@Param("lastDate") String lastDate);

	void pageAll(Model model, PageVO vo, Integer nowPage, Integer cntPerPage, @Param("y_id") String y_id,
			@Param("y_name") String y_name, @Param("sex") String sex, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("firstDate") String firstDate,
			@Param("lastDate") String lastDate);
}
