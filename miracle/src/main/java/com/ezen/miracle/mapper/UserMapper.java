package com.ezen.miracle.mapper;

import com.ezen.miracle.dto.LogoUserDTO;

public interface UserMapper {
	
	LogoUserDTO get(Long user_id);
	int write(LogoUserDTO dto);

}
