package bitcamp.myapp;

public class App {

  public static void main(String[] args) {
    goMainMenu();
    System.out.println("안녕히 가세요!");

    // 프로그램이 사용한 자원 해제하기
    Prompt.close();
  } // main()

  private static void goMainMenu() {
    // 게시글관리 목록을 저장할 메모리를 준비한다
    MemberHandler post = new MemberHandler("게시글 관리");
    post.service();
  }
} // class App









