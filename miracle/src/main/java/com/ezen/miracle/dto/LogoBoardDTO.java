package com.ezen.miracle.dto;

import java.util.Date;

import lombok.Data;

@Data
public class LogoBoardDTO {
	private Integer board_id;
	private String board_title;
	private String board_content;
	private String board_category;
	private Integer board_good_count;
	private Integer user_id;
	private Integer view_count;
	private Date created_at;
	private Date modified_at;
	private Integer board_show;

}
