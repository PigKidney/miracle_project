package com.ezen.miracle.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.service.QuizService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/ymaker")
public class QuizController {

	@Autowired
	QuizService quizService;

	LocalDate now = LocalDate.now();

	@GetMapping("/quiz1")
	public String firstQuiz(Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate) {

		quizService.selectCountry(model);
		quizService.selectCity(model);
		quizService.selectAll(model, country_name, city_name, y_id, y_name, sex, firstDate, lastDate);

		log.info("main : " + country_name);
		return "/ymaker/quiz1";
	}
	
	@GetMapping("/quiz2")
	public String firstQuiz2(Quiz1DTO dto, Model model) {
		quizService.selectCountry(model);
		quizService.selectCity(model);
		log.info("팝업");
		
		return "/ymaker/quiz2";
	}

	@PostMapping("/read")
	public String read(Quiz1DTO dto, Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate) {
		log.info("read : " + dto);
		quizService.selectCountry(model);
		quizService.selectCity(model);
		quizService.selectAll(model, country_name, city_name, y_id, y_name, sex, firstDate, lastDate);
		return "/ymaker/quiz1";
	}

	@PostMapping("/save")
	public String save(Quiz1DTO dto) {
		if (dto.getY_date() == null) {
			dto.setY_date(now.toString());
		}
		quizService.insertInfo(dto);
		log.info("추가 : " + dto);
		return "redirect:/ymaker/quiz1";
	}
	@PostMapping("/save2")
	public String save2(Quiz1DTO dto) {
		if (dto.getY_date() == null) {
			dto.setY_date(now.toString());
		}
		quizService.insertInfo(dto);
		log.info("추가 : " + dto);
		return "redirect:/ymaker/quiz2";
	}

	@PostMapping("/delete")
	public String delete(String[] y_id) {
		log.info(Arrays.toString(y_id));
		quizService.deleteInfo(y_id);
		return "redirect:/ymaker/quiz1";
	}

	@PostMapping("/excel")
	public void excel(HttpServletResponse response, Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate) throws IOException {
		Workbook wb = new XSSFWorkbook();
		Sheet sheet = wb.createSheet("excel");
		Row row = null;
		Cell cell = null;
		int rowNum = 0;

		row = sheet.createRow(rowNum++);
		cell = row.createCell(0);
		cell.setCellValue("y_id");
		cell = row.createCell(1);
		cell.setCellValue("y_name");
		cell = row.createCell(2);
		cell.setCellValue("sex");
		cell = row.createCell(3);
		cell.setCellValue("country_name");
		cell = row.createCell(4);
		cell.setCellValue("city_name");
		cell = row.createCell(5);
		cell.setCellValue("y_date");

		quizService.selectAll(model, country_name, city_name, y_id, y_name, sex, firstDate, lastDate);
		List<Quiz1DTO> list = (List) model.getAttribute("selectAll");
		for (int i = 0; i < list.size(); i++) {	
			row = sheet.createRow(rowNum++);
			cell = row.createCell(0);
			cell.setCellValue(list.get(i).getY_id());
			cell = row.createCell(1);
			cell.setCellValue(list.get(i).getY_name());
			cell = row.createCell(2);
			cell.setCellValue(list.get(i).getSex());
			cell = row.createCell(3);
			cell.setCellValue(list.get(i).getCountry_name());
			cell = row.createCell(4);
			cell.setCellValue(list.get(i).getCity_name());
			cell = row.createCell(5);
			cell.setCellValue(list.get(i).getY_date());
		}
		
		 // 컨텐츠 타입과 파일명 지정
		response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=yQuiz.xlsx");

        // Excel File Output
        wb.write(response.getOutputStream());
        wb.close();
	}

}
