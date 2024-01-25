package com.ezen.miracle.dto;

import lombok.Data;

@Data
public class LogoReportDTO {
	 private Integer report_id;
	 private Integer reply_id;
	 private Integer board_id;
	 private Integer user_id;
	 private String report_content;
	 private Integer isprocess;

}
