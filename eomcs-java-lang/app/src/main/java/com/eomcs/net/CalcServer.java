package com.eomcs.net;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.StringTokenizer;

public class CalcServer {
  public static String calc(String exp) {
    StringTokenizer st = new StringTokenizer(exp, " ");
    if (st.countTokens() != 3)
      return "error";
    String res = "";
    int op1 = Integer.parseInt(st.nextToken());
    String opcode = st.nextToken();
    int op2 = Integer.parseInt(st.nextToken());
    switch (opcode) {
      case "+":
        res = Integer.toString(op1 + op2);
        break;
      case "-":
        res = Integer.toString(op1 - op2);
        break;
      case "*":
        res = Integer.toString(op1 * op2);
        break;
      case "/":
        res = Integer.toString(op1 / op2);
        break;
      default:
        res = "error";
    }
    return res;
  }


  public static void main(String[] args) throws Exception {
    System.out.println("서버 실행 중...");
    ServerSocket serverSocket = new ServerSocket(8888);
    Socket socket = serverSocket.accept();

    System.out.println("클라이언트와 연결됨!");

    BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
    BufferedWriter out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));

    while (true) {
      // 클라이언트가 보낸 문자열 한 줄 읽을 때까지 리턴하지 않는다.
      String message = in.readLine();

      if (message.equals("quit")) {
        break;
      }
      System.out.println(message);
      String res = calc(message);
      out.write(res + "\n"); // 계산 결과 문자열 전송
      out.flush();
    }



    socket.close();
    serverSocket.close();

    System.out.println("서버 종료!");
  }
}
