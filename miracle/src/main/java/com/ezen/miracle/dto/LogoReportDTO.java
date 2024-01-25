package com.ezen.miracle.dto;

import lombok.Data;

@Data
public class ReportDTO {
	 private Integer report_id;
	 private Integer reply_id;
	 private Integer board_id;
	 private Integer user_id;
	 private String report_content;
	 private boolean process;

}
