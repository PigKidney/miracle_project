package com.ezen.miracle.service;

import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoUserDTO;

public interface UserService {
	
	int get(Model model, Long logo_id);
	int write(LogoUserDTO dto);

}
