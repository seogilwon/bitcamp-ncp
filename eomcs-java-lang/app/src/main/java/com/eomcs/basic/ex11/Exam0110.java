//정규표현식(Regular Expression) //계산기,크롤링,
package com.eomcs.basic.ex11;

import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Exam0110 {

  public static void main(String[] args) {
    // 1) 패턴 정의
    Pattern pattern = Pattern.compile("\\d+|[\\+\\-\\*/]", Pattern.CASE_INSENSITIVE);
    // 파라미터1: . => 1개씩추출 // .. => 2개씩 추출 // ... => 3개씩추출

    //자바는 문자열에 역슬래쉬(\) 적을수 x 그래서 두개(\\)써야함.
    // [0123456789] or [0-9] => 집합
    // [0-9]+ => 숫자만추출
    // | => or


    // 2) 패턴에 따라 콘텐트를 검사할 도구 준비
    Matcher matcher = pattern.matcher("123 +   2* 98 -24/   19");

    // 3) 패턴의 결과를 담을 컬렉션 준비
    ArrayList<String> items = new ArrayList<>();

    // 4) 패턴 검사
    while (matcher.find()) {
      // 5) 패턴과 일치하는 항목을 추출하여 컬렉션에 담기
      items.add(matcher.group());
    }

    System.out.println("--------------------------");

    for (String item : items) {
      System.out.println(item);
    }


  }
}
//lex yacc