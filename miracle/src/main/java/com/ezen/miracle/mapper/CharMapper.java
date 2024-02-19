package com.ezen.miracle.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ezen.miracle.dto.LogoCharDTO;

public interface CharMapper {

	List<LogoCharDTO> charAll();

	List<LogoCharDTO> charSelectedServer(String char_server);

	List<LogoCharDTO> charSelectedClass(String char_class);

	List<LogoCharDTO> charSelectedClassNServer(@Param("char_class") String char_class,
			@Param("char_server") String char_server);

}
