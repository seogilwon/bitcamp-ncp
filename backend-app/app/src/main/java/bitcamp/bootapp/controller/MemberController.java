package bitcamp.bootapp.controller;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import bitcamp.bootapp.dao.MemberDao;
import bitcamp.bootapp.vo.Member;

@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
@RestController
public class MemberController {

  MemberDao memberDao = new MemberDao();

  @CrossOrigin(origins = "http://127.0.0.1:5500")
  @PostMapping("/members")
  public Object addMember(
      @RequestParam(required = false) String name,
      @RequestParam(required = false) String tel) {

    Member b = new Member();
    b.setName(name);
    b.setTel(tel);
    b.setCreatedDate(new Date(System.currentTimeMillis()).toString());

    this.memberDao.insert(b);

    // 응답 결과를 담을 맵 객체 준비
    Map<String,Object> contentMap = new HashMap<>();
    contentMap.put("status", "success");

    return contentMap;
  }

  //GET
  @GetMapping("/members")
  public Object getMembers() {

    Member[] members = this.memberDao.findAll();

    Map<String,Object> contentMap = new HashMap<>();
    contentMap.put("status", "success");
    contentMap.put("data", members);

    return contentMap;
  }


  @GetMapping("/members/{memberNo}")
  public Object getmember(@PathVariable int memberNo) {

    Member b = this.memberDao.findByNo(memberNo);

    // 응답 결과를 담을 맵 객체 준비
    Map<String,Object> contentMap = new HashMap<>();

    if (b == null) {
      contentMap.put("status", "failure");
      contentMap.put("data", "해당 번호의 게시글이 없습니다.");
    } else {
      contentMap.put("status", "success");
      contentMap.put("data", b);
    }

    return contentMap;
  }

  //PUT
  @PutMapping("/members/{memberNo}")
  public Object updateMember(
      @PathVariable int memberNo,
      @RequestParam(required = false) String name,
      @RequestParam(required = false) String tel) {

    Map<String,Object> contentMap = new HashMap<>();

    Member old = this.memberDao.findByNo(memberNo);
    //    if (old == null || !old.getPassword().equals(password)) {
    //      contentMap.put("status", "failure");
    //      contentMap.put("data", "게시글이 없거나 암호가 맞지 않습니다.");
    //      return contentMap;
    //    }

    Member b = new Member();
    b.setNo(memberNo);
    b.setName(name);
    b.setTel(tel);
    b.setCreatedDate(old.getCreatedDate());
    //b.setViewCount(old.getViewCount());

    this.memberDao.update(b);

    contentMap.put("status", "success");

    return contentMap;
  }


  //삭제
  @DeleteMapping("/members/{memberNo}")
  public Object deletemember(
      @PathVariable int memberNo,
      @RequestParam String password) {

    Member b = this.memberDao.findByNo(memberNo);

    // 응답 결과를 담을 맵 객체 준비
    Map<String,Object> contentMap = new HashMap<>();

    if (b == null || !b.getPassword().equals(password)) {
      contentMap.put("status", "failure");
      contentMap.put("data", "게시글이 없거나 암호가 맞지 않습니다.");

    } else {
      this.memberDao.delete(b);
      contentMap.put("status", "success");
    }

    return contentMap;
  }




}
