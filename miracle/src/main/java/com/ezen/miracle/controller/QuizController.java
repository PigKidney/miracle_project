package com.ezen.miracle.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ezen.miracle.dto.Quiz1DTO;
import com.ezen.miracle.service.QuizService;
import com.ezen.miracle.util.PageVO;

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
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,
			PageVO vo, Integer nowPage, Integer cntPerPage, HttpServletRequest request, @Param("rn") Integer rn) {

		country_name = request.getParameter("country_name");
		quizService.selectCountry(model);
		quizService.selectCity(model);
	//	quizService.pageAll(model, vo, nowPage, cntPerPage, y_id, y_name, sex, country_name, city_name, firstDate, lastDate);

		log.info("now0 : " + nowPage + " , cPP0 : " + cntPerPage);
		log.info("data : "+ country_name + ", " + city_name + ", " + y_id + ", " + y_name + ", " + sex + ", " + firstDate + " ~ "
				+ lastDate);
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
		quizService.selectAll(model);
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
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate)
			throws IOException {
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

		quizService.selectAll(model);
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

	@ResponseBody
	@GetMapping(value = "/list", produces = "application/text; charset=UTF-8")
	public String readTheList(Model model, String country_name, String[] city_name, String y_id, String y_name,
			String sex, String firstDate, String lastDate) {
		
		return country_name + ", " + Arrays.toString(city_name) + ", " + y_id + ", " + y_name + ", " + sex + ", "
				+ firstDate + " ~ " + lastDate;
	}

	@ResponseBody
	@GetMapping(value = "/getCountry", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Quiz1DTO> getCountry(Model model) {
		quizService.selectCountry(model);
		List<Quiz1DTO> list = (List<Quiz1DTO>) model.getAttribute("selectCountry");
		return list;
	}

	@ResponseBody
	@GetMapping(value = "/getCity", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Quiz1DTO> getCity(Model model, String country_name, HttpServletRequest request) {
		quizService.selectCity(model);
		model.addAttribute("country_name", country_name);
		List<Quiz1DTO> list = (List<Quiz1DTO>) model.getAttribute("selectCity");
		return list;
	}

	@ResponseBody
	@GetMapping(value = "/getList", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Quiz1DTO> getList(Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,
			PageVO vo, Integer nowPage, Integer cntPerPage) {

		quizService.countAll(y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		quizService.pageAll(model, vo, nowPage, cntPerPage, y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		List<Quiz1DTO> list = (List<Quiz1DTO>) model.getAttribute("ylist");
		log.fatal(list);
		return list;
	}
	
	@ResponseBody
	@GetMapping(value = "/getPage", produces = MediaType.APPLICATION_JSON_VALUE)
	public PageVO getPage(Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,
			PageVO vo, Integer nowPage, Integer cntPerPage) {

		quizService.countAll(y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		quizService.pageAll(model, vo, nowPage, cntPerPage, y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		PageVO list = (PageVO) model.getAttribute("ypage");
		log.fatal(list);
		return list;
	}
	
	@ResponseBody
	@GetMapping(value = "/getDataObject", produces = MediaType.APPLICATION_JSON_VALUE)
	public HashMap<String, Object> getDataObject(Model model, @Param("country_name") String country_name,
			@Param("city_name") String city_name, @Param("y_id") String y_id, @Param("y_name") String y_name,
			@Param("sex") String sex, @Param("firstDate") String firstDate, @Param("lastDate") String lastDate,
			PageVO vo, Integer nowPage, Integer cntPerPage) {

		quizService.countAll(y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		quizService.pageAll(model, vo, nowPage, cntPerPage, y_id, y_name, sex, country_name, city_name, firstDate, lastDate);
		PageVO list = (PageVO) model.getAttribute("ypage");
		List<Quiz1DTO> list2 = (List<Quiz1DTO>) model.getAttribute("ylist");
		log.fatal(list);
		HashMap<String, Object> allList = new HashMap<String, Object>();
		allList.put("pageData", list);
		allList.put("listData", list2);
		return allList;
	}

	@ResponseBody
	@GetMapping(value = "/getId", produces = MediaType.APPLICATION_JSON_VALUE)
	public String getId(Model model, String y_id) {
		model.addAttribute("y_id", y_id);
		log.info(y_id);
		return y_id;
	}

	@ResponseBody
	@GetMapping(value = "/modifiedPopUp", produces = MediaType.APPLICATION_JSON_VALUE)
	public String modifiedPopUp(Quiz1DTO dto) {
		log.info(dto);
		quizService.insertInfo(dto);
		return "success";
	}

	@GetMapping("/quiz3")
	public String quiz3(Model model, String y_id) {
		quizService.selectOne(model, y_id);
		return "/ymaker/quiz3";
	}

}
