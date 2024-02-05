package com.ezen.miracle.service;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.ezen.miracle.dto.LogoUserDTO;
import com.ezen.miracle.mapper.UserMapper;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper userMapper;

	@Override
	public int get(Model model, Long user_id) {
		LogoUserDTO dto = userMapper.get(user_id);
		
		if (dto != null) {
			model.addAttribute("info", dto);
			log.info("get : "+dto);
			return 1;
		} else {
			log.fatal("USER_ID IS NULL");
			return -1;
		}
	}

	@Override
	public int write(LogoUserDTO dto) {
		int result = userMapper.write(dto);
		if (result == 1) {
			log.info("write : "+ dto);
			return 1;
		} else {
			log.fatal("이미 가입된 회원");
			return -1;
		}
	}
}
