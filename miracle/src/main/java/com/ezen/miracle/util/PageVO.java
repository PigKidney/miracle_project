package com.ezen.miracle.util;

import lombok.Data;

@Data
public class PageVO {
	private Integer nowPage; // 현재 페이지
	private Integer startPage; // 탭 내 처음 페이지
	private Integer endPage; // 탭 내 마지막 페이지
	private Integer total; // 게시글의 수
	private Integer cntPerPage; // 페이지당 게시글의 수
	private Integer lastPage; // 맨 마지막 페이지
	private Integer start; // 해당 페이지에서 불러올 처음 게시글의 번호
	private Integer end; // 해당 페이지에서 불러올 마지막 게시글의 번호
	
	private Integer cntPage = 5; // 탭에 최대 5개의 페이지를 보여줌

	public PageVO() {
	}

	public PageVO(int total, Integer nowPage, Integer cntPerPage) {
		setNowPage(nowPage);
		setCntPerPage(cntPerPage);
		setTotal(total);
		calcLastPage(getTotal(), getCntPerPage());
		calcStartEndPage(getNowPage(), cntPage);
		calcStartEnd(getNowPage(), getCntPerPage());
	}

	// 제일 마지막 페이지 계산
	public void calcLastPage(int total, int cntPerPage) {
		// 전체 게시글의 수 / 페이지당 게시글의 수
		// 탭에 보여주는 페이지의 수가 5개이므로 전체 페이지의 수가 6이면 1.2를 올림해서 2
		// 즉 한 탭에 5개의 페이지를 보여주고 다음 탭에 1개의 페이지를 보여줘야함, 탭 2개 필요
		setLastPage((int) Math.ceil((double) total / (double) cntPerPage));
	}

	// 탭의 시작, 끝 페이지 계산
	public void calcStartEndPage(int nowPage, int cntPage) {
		// 현재 페이지가 22면 탭당 5페이지씩 보여주니 22/5 = 4.5고
		// 4.5를 올림한 5에 탭당 페이지 5를 곱해 25가 탭의 마지막 페이지가 됨
		// 25 - 5 + 1 은 21이므로 탭의 처음 페이지는 21
		// 이 탭에서는 21, 22, 23, 24, 25 이렇게 5개의 페이지를 보여주게 됨
		setEndPage(((int) Math.ceil((double) nowPage / (double) cntPage)) * cntPage);
		
		// 한 탭당 5페이지씩 보여주지만 3페이지밖에 없으면 탭에서 끝페이지는 5가 아니라 3임
		if (getLastPage() < getEndPage()) {
			setEndPage(getLastPage());
		}
		// +1 해줘야 페이지당 5개로 시작페이지를 계산할 수 있음
		setStartPage(getEndPage() - cntPage + 1);
		if (getStartPage() < 1) {
			setStartPage(1);
		}
	}

	// DB 쿼리에서 사용할 start, end값 계산
	public void calcStartEnd(int nowPage, int cntPerPage) {
		// 2페이지에 페이지당 글이 5개씩이면 2페이지에는 6, 7, 8, 9, 10번의 글이 나옴
		setEnd(nowPage * cntPerPage);
		setStart(getEnd() - cntPerPage + 1);
	}


}
