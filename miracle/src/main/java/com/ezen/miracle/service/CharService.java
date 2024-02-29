package com.ezen.miracle.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoCharDTO;

public interface CharService {

	void charAll(Model model);

	void charSelectedServer(Model model, String char_server);

	void charSelectedClass(Model model, String char_class);

	void charSelectedClassNServer(Model model, String char_class, String char_server);

	void charSearchInsert(LogoCharDTO dto);

	void levelCut(Model model, Double char_level);

	void charSelectedServerNlevelCut(Model model, String char_server, Double char_level);

	void charSelectedClassNlevelCut(Model model, String char_class, Double char_level);

	void allSearch(Model model, String char_class, String char_server, Double char_level);

}
