// express 라이브러리 로딩하기
const express = require('express');

//HTTP요청을 다루는 라이브러리 로딩하기
const request = require('request');

const port = 3000;  //웹서버 포트번호

//express()를 호출하여 웹서버를 준비한다.
const app = express();

//POST요청으로 들어온 payload데이터를 분석할 객체를 지정하기
// => Content-type: application/x-www-form-urlencoded 형식으로 된 payload 데이터처리
//    ex) name=hong&age=20
app.use(express.urlencoded({extended: true}));


app.get('./frontend/index', (req, res) => {     

  res.set('Access-Control-Allow-Origin', '*'); 
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?" +
  "serviceKey=HZHE69k1CDOivQmSsXPad9IzuwF5S6KOX64jjEFHYrUU4YBJS41pLeJnqb1aFPLk7En5u9ihE6mSe7%2BNwvS%2BTw%3D%3D" +
  "&pageNo=1" +
  "&numOfRows=1000" +
  "&dataType=JSON" +
  "&base_date=" + req.query.base_date +
  "&base_time=0600" +
  "&nx=" + req.query.nx +
  "&ny=" + req.query.ny;

  request.get({
    url: openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });
});

//웹서버 실행하기
app.listen(
  3000,           //포트번호지정
  () => {         //서버가 시작되었을때 호출될 함수 = 리스너 = 이벤트핸들러
     console.log(`${port}번 포트에서 서버 시작했음!`);  //${} 사용시 backtick (``)으로 묶는다!
  }
);