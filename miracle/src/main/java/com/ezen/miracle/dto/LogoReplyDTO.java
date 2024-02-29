package com.ezen.miracle.dto;

import java.util.Date;

import lombok.Data;

@Data
public class LogoReplyDTO {
	private Integer reply_id;
	private Integer board_id;
	private String reply_content;
	private Long user_id;
	private String user_nickname;
	private Date created_at;
	private Date modified_at; 
	private Integer reply_show;
}
