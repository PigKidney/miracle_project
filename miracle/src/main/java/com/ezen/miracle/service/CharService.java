package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoCharDTO;

public interface CharService {

	void charAll(Model model);

	void charSelectedServer(Model model, String char_server);

	void charSelectedClass(Model model, String char_class);

	void charSelectedClassNServer(Model model, String char_class, String char_server);

	void charSearchInsert(LogoCharDTO dto);
	
	void levelCut(Model model, Double char_level);
}
