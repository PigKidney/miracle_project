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

import com.ezen.miracle.dto.LogoBoardDTO;
import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.mapper.QuizMapper;
import com.ezen.miracle.util.PageVO;

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

	@Override
	public int countAll(String y_id,
			String y_name, String sex, String country_name,
			String city_name, String firstDate,
			String lastDate) {
		return quizMapper.countAll(y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
	}

	@Override
	public void pageAll(Model model, PageVO vo, Integer nowPage, Integer cntPerPage, String y_id, String y_name, String sex, String country_name,
			String city_name, String firstDate, String lastDate) {
		int count = countAll(y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		log.info("now1 : " + nowPage + ", cPP1 : " + cntPerPage);
		log.info("firstDate : " + firstDate + " / lastDate :" + lastDate);
		log.info("id : " + y_id + " / name :" + y_name);
		
		log.warn("pageAll : "+country_name + ", " + city_name + ", " + y_id + ", " + y_name + ", " + sex + ", " + firstDate + " ~ "
				+ lastDate);
		
		// 처음 화면은 1~5페이지가 나옴
		if (nowPage == null && cntPerPage == null) {
			nowPage = 1;
			cntPerPage = 5;
		} else if (nowPage == null) {
			nowPage = 1;
		} else if (cntPerPage == null) {
			cntPerPage = 5;
		}
		log.info("now2 : " + nowPage + ", cPP2 : " + cntPerPage);
		vo = new PageVO(count, nowPage, cntPerPage);
		List<Quiz1DTO> list = quizMapper.pageAll(vo.getStart(), vo.getEnd(), y_id, y_name, sex, country_name, city_name,
				firstDate, lastDate);
		log.fatal(list);
		
		model.addAttribute("ypage", vo);
		model.addAttribute("ylist", list);
	}

	@Override
	public void selectOne(Model model, String y_id) {
		model.addAttribute("selectOne", quizMapper.selectOne(y_id));
	}
}
