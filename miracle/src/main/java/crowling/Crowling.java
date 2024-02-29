package crowling;

import java.io.IOException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Crowling {
	
	
	 public static void main(String[] args) {
	        final String crawlingEnterUrl = "https://entertain.naver.com/home";
	        Connection conn = Jsoup.connect(crawlingEnterUrl);

	        try {
	            Document document = conn.get();
	            Elements enterUrlElements = document.getElementsByClass("lst_item _page_no_1");   
	            Elements titleUrlElements = document.getElementsByClass("title_area");   
	            Elements titleElements2 = document.select("div.title_area > a.title");
	            Elements titleElements3 = document.select("a.thumb_area > img");
	            	for (int i=0; i<10; i++) {
	            		final String enterTitle = titleElements2.get(i).text();
	            		final String enterImgLink = titleElements3.get(i).absUrl("src");
	            		final String enterTag = titleElements2.get(i).absUrl("href");
	            		
	            		System.out.println("enterTitle:" +enterTitle);
	    				System.out.println("enterImgLink:" +enterImgLink);
	    				System.out.println("enterTag:" +enterTag);
	    				
	            	}

	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }
}
