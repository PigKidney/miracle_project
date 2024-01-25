package com.ezen.miracle.dto;

import java.util.Date;

import lombok.Data;

@Data
public class LogoUserDTO {
	private Integer user_id;
	private String user_email;
	private String user_password;
	private String user_nickname;
	private Integer isAdmin;
	private Date created_at;
}
