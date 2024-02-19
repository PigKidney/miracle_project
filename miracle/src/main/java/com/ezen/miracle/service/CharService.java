package com.ezen.miracle.service;

import org.springframework.ui.Model;

public interface CharService {

	void charAll(Model model);

	void charSelectedServer(Model model, String char_server);

	void charSelectedClass(Model model, String char_class);

	void charSelectedClassNServer(Model model, String char_class, String char_server);

}
