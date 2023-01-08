package bitcamp.myapp;

import java.sql.Date;

public class MemberHandler {

  //모든 인스턴스가 공유하는 데이터를 스태틱 필드로 만든다.
  //특히 데이터를 조회하는 용으로 사용하는 final 변수는 스태틱 필드로 만들어야 한다.
  static final int SIZE = 100;

  int count;
  Member[] members = new Member[SIZE];
  String title;

  // 인스턴스를 만들때 프롬프트 제목을 반드시 입력하도록 강제한다.
  MemberHandler(String title) {
    this.title = title;
  }

  void inputMember() {
    Member m = new Member();
    m.no = Prompt.inputInt("번호? ");
    m.heading = Prompt.inputString("제목? ");
    m.content = Prompt.inputString("내용? ");
    m.password = Prompt.inputInt("암호? ");
    m.createdDate = new Date(System.currentTimeMillis()).toString();
    this.members[count++] = m;
  }


  void printMembers() {
    System.out.println("번호\t제목\t작성일\t\t조회수");
    for (int i = 0; i < this.count; i++) {
      Member m = this.members[i];
      System.out.printf("%d\t%s\t%s\t%s\t\n",
          m.no, m.heading, m.createdDate, m.viewcnt);
    }
  }


  void printMember() {
    int memberNo = Prompt.inputInt("게시글 번호? ");
    Member m = this.findByNo(memberNo);
    if (m == null) {
      System.out.println("해당 번호의 게시글이 없습니다.");
      return;
    }
    System.out.printf("제목: %s\n", m.heading);
    System.out.printf("내용: %s\n", m.content);
    System.out.printf("작성일: %s\n", m.createdDate);
    System.out.printf("조회수: %s\n", m.viewcnt);
    m.viewcnt++;
  }


  void modifyMember() {
    int memberNo = Prompt.inputInt("변경할 게시글 번호는? ");

    Member old = this.findByNo(memberNo);

    if (old == null) {
      System.out.println("해당 번호의 게시글이 없습니다.");
      return;
    }

    int passwordNo = Prompt.inputInt("변경할 게시글 비밀번호는? ");

    if (passwordNo != old.password) {
      System.out.println("비밀번호 틀림!");
      return;
    }


    // 변경할 데이터를 저장할 인스턴스 준비
    Member m = new Member();
    m.no = old.no;
    m.createdDate = old.createdDate;
    m.heading = Prompt.inputString(String.format("제목(%s)? ", old.heading));
    m.content = Prompt.inputString(String.format("내용(%s)? ", old.content));

    String str = Prompt.inputString("정말 변경하시겠습니까?(y/N) ");
    if (str.equalsIgnoreCase("Y")) {
      this.members[this.indexOf(old)] = m;
      System.out.println("변경했습니다.");
    } else {
      System.out.println("변경 취소했습니다.");
    }
  }


  void deleteMember() {
    int memberNo = Prompt.inputInt("삭제할 게시글 번호는? ");

    Member m = this.findByNo(memberNo);

    if (m == null) {
      System.out.println("해당 번호의 게시글이 없습니다.");
      return;
    }

    String str = Prompt.inputString("정말 삭제하시겠습니까?(y/N) ");
    if (!str.equalsIgnoreCase("Y")) {
      System.out.println("삭제 취소했습니다.");
      return;
    }

    for (int i = this.indexOf(m) + 1; i < this.count; i++) {
      this.members[i - 1] = this.members[i];
    }
    this.members[--this.count] = null; // 레퍼런스 카운트를 줄인다.

    System.out.println("삭제했습니다.");
  }


  Member findByNo(int no) {
    for (int i = 0; i < this.count; i++) {
      if (this.members[i].no == no) {
        return this.members[i];
      }
    }
    return null;
  }


  //  Member findByPassword(int no) {
  //    for (int i = 0; i < this.count; i++) {
  //      if (this.members[i].password == no) {
  //        return this.members[i];
  //      }
  //    }
  //    return null;
  //  }


  int indexOf(Member m) {
    for (int i = 0; i < this.count; i++) {
      if (this.members[i].no == m.no) {
        return i;
      }
    }
    return -1;
  }




  void service() {
    while (true) {
      System.out.printf("-----------------------\n[%s]\n", this.title);
      System.out.println("1. 입력");
      System.out.println("2. 목록");
      System.out.println("3. 조회");
      System.out.println("4. 변경");
      System.out.println("5. 삭제");
      int menuNo = Prompt.inputInt(String.format("%s> ", this.title));

      switch (menuNo) {
        case 0: return;
        case 1: this.inputMember(); break;
        case 2: this.printMembers(); break;
        case 3: this.printMember(); break;
        case 4: this.modifyMember(); break;
        case 5: this.deleteMember(); break;
        default:
          System.out.println("잘못된 메뉴 번호 입니다.");
      }
    }
  }
}
