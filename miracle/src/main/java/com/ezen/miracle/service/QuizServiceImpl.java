package com.ezen.miracle.service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.mapper.QuizMapper;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class QuizServiceImpl implements QuizService {

	@Autowired
	QuizMapper quizMapper;

	@Override
	public void selectCountry(Model model) {
		model.addAttribute("selectCountry", quizMapper.selectCountry());
	}

	@Override
	public void selectCity(Model model) {
		model.addAttribute("selectCity", quizMapper.selectCity());

	}

	@Override
	public void insertInfo(Quiz1DTO dto) {		
		log.info("insert : " + dto);
		quizMapper.insertInfo(dto);
	}

	@Override
	public void deleteInfo(String[] y_id) {
		log.info("삭제 전 ID 배열" + Arrays.toString(y_id));
		for (int i = 0; i < y_id.length; i++) {
			quizMapper.deleteInfo(y_id[i]);
			log.info("삭제된 ID : " + Arrays.toString(y_id));
		}
	}

	@Override
	public void selectAll(Model model) {

		model.addAttribute("selectAll", quizMapper.selectAll());
	}
}
