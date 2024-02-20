package com.ezen.miracle.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoCharDTO;
import com.ezen.miracle.mapper.CharMapper;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class CharServiceImpl implements CharService {

	@Autowired
	CharMapper charMapper;

	@Override
	public void charAll(Model model) {
		model.addAttribute("charAll", charMapper.charAll());
	}

	@Override
	public void charSelectedClass(Model model, String char_class) {
		model.addAttribute("charAll", charMapper.charSelectedClass(char_class));
		model.addAttribute("char_class", char_class);
	}

	@Override
	public void charSelectedServer(Model model, String char_server) {
		model.addAttribute("charAll", charMapper.charSelectedServer(char_server));
		model.addAttribute("char_server", char_server);

	}

	@Override
	public void charSelectedClassNServer(Model model, @Param("char_class") String char_class,
			@Param("char_server") String char_server) {
		model.addAttribute("charAll", charMapper.charSelectedClassNServer(char_class, char_server));
		model.addAttribute("char_server", char_server);
		model.addAttribute("char_class", char_class);
	}

	@Override
	public void charSearchInsert(LogoCharDTO dto) {
		log.info("impl1 : "+dto);
		charMapper.charSearchInsert(dto);
		log.info("impl2 : "+dto);
	}

}
