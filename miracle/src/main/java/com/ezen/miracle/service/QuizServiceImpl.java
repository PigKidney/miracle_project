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
		quizMapper.insertInfo(dto);
		log.info("insert : " + dto);
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
	public void selectAll(Model model, @Param("country_name") String country_name, @Param("city_name") String city_name,
			@Param("y_id") String y_id, @Param("y_name") String y_name, @Param("sex") String sex,
			@Param("firstDate") String firstDate, @Param("lastDate") String lastDate) {
		List<Quiz1DTO> list = quizMapper.selectAll();
		List<Quiz1DTO> selectedList = new ArrayList<Quiz1DTO>();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

		log.info("y_id : " + y_id);
		log.info("y_name : " + y_name);
		log.info("sex : " + sex);
		log.info("country_name : " + country_name);
		log.info("city_name : " + city_name);
		log.info("date : " + firstDate + " ~ " + lastDate);
		log.info("------------------------");

		for (int i = 0; i < list.size(); i++) {

			if (country_name != null && !country_name.equals("")
					&& !country_name.equals(list.get(i).getCountry_name())) {
				list.remove(i);
				i--;
			} else if (city_name != null && !city_name.equals("") && !city_name.equals(list.get(i).getCity_name())) {
				list.remove(i);
				i--;
			} else if (y_id != null && !y_id.equals("") && !y_id.equals(list.get(i).getY_id())) {
				list.remove(i);
				i--;
			} else if (sex != null && !sex.equals("") && !sex.equals(list.get(i).getSex())) {
				list.remove(i);
				i--;
			} else if (firstDate != null && lastDate != null) {
				LocalDate date1 = LocalDate.parse(firstDate);
				LocalDate date2 = LocalDate.parse(lastDate);
				LocalDateTime date = LocalDateTime.parse(list.get(i).getY_date(), dtf);
				System.out.println(date1 + " ~ " + list.get(i).getY_date());
				if (date1.compareTo(date.toLocalDate()) > 0) {
					list.remove(i);
					i--;
				} else if (date2.compareTo(date.toLocalDate()) < 0) {
					list.remove(i);
					i--;
				}
			}
		}

		model.addAttribute("selectAll", list);
	}
}
